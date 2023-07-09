import { SyntheticEvent, useRef, useState } from "react"


interface IResult {
    [key: string]: string,
}

interface IViewResultProps {
    data: IResult[]
}

function TableViewResult({ data } : IViewResultProps) {
    return (<>
        <div className="w-full overflow-y-auto">
            <table className="table-fixed w-full"> 
                <thead className="bg-orange-600 text-white rounded">
                   <tr className="py-4 w-full text-left">
                        <th className="max-w-[100px] w-1/4">Key</th>
                        <th>Value</th>
                   </tr>
                </thead>
                <tbody>
                    {data.map((datum, id) => {
                        const key = Object.keys(datum)[0]
                        const value = datum[key]
                        return (
                            <tr key={id} className="border-2 hover:bg-orange-50">
                                <td className="whitespace-normal p-2 break-all min-w-fit border-r-2 border-gray-300">{key}</td>
                                <td className="whitespace-normal p-2 break-all">{value}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </>)
}

function JsonViewResult({ data }: IViewResultProps) {
    return (<>
        <div className="w-full overflow-y-auto break-all bg-gray-50 p-2">
            {JSON.stringify(data, null, 1)}
        </div>
    </>)
}


const baseClassMenuItem = "p-2 rounded block w-full hover:text-white hover:bg-orange-400 "
const active = baseClassMenuItem + "text-white bg-orange-400"
const inActive = baseClassMenuItem + "text-black bg-gray-50"

export default function ParseQueryString() {

    const inputElementRef = useRef<HTMLInputElement>(null)
    const [warningText, setWarningText] = useState("")
    const [result, setResult] = useState<IResult[]>([])
    const [viewerType, setViewerType] = useState<"json" | "table">("json")

    function onParse() {
        const inputEl = inputElementRef.current
        if (!inputEl?.value || !inputEl.checkValidity()) {
            setWarningText("Url is not valid")
            setResult([])
            return
        }

        setWarningText("")
        const urlObject = new URL(inputEl.value)
        const tempResult = []
        for(const [key, value] of urlObject.searchParams.entries()) {
            tempResult.push({ [key]: value })
        }
        setResult(tempResult)
    }

    function onCopy(e: SyntheticEvent) {
        navigator.clipboard.writeText(JSON.stringify(result, null, 4))
            .then(() => {
                const button = e.target as HTMLButtonElement
                const initialText = button.innerText
                button.innerText = "Copied !"

                setTimeout(() => { button.innerText = initialText } , 3000)
            })
            .catch((error) => {
                console.error('Error copying text to clipboard:', error);
            });
    }

    return (<>
        <div className="w-full flex justify-center">
            <div className="w-full">
                <input
                    type="url"
                    ref={inputElementRef} placeholder="put your url here"
                    className="w-full mb-3 h-12 rounded-sm border-2 border-orange-400 p-3 block"/>
                <p className="text-red-500"><small>{warningText}</small></p>
                <button className="bg-orange-500 rounded-md text-white w-full block p-2" onClick={onParse}>Parse</button>
            </div>
        </div>
        <div className="mt-3">
            <div className={`${result.length === 0 && "hidden"} w-full`}>
                <h3> Result: </h3>
                <div className="flex my-2 justify-between p-0">
                    <button type="button" onClick={() => setViewerType("json")} className={viewerType === "json" ? active: inActive}>JSON</button>
                    <button type="button" onClick={() => setViewerType("table")} className={viewerType === "table" ? active: inActive}>Table</button>
                </div>
                <div className="bg-gray-100 flex justify-end p-0">
                    <button onClick={onCopy} className="bg-gray-400 text-white p-1 rounded-md">Copy JSON</button>
                </div>
                { viewerType === "json" && <JsonViewResult data={result}   /> }
                { viewerType === "table" && <TableViewResult data={result}  /> }
            </div>
        </div>
    </>)
}