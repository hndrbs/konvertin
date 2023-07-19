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
            <table className="w-full border-spacing-1"> 
                <thead className="bg-orange-600 text-white rounded">
                   <tr className="py-4 w-full text-left">
                        <th className="max-w-[100px] w-1/4 px-1 py-2">Key</th>
                        <th className="px-1 py-2">Value</th>
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
    const result = convertToSimpleObject(data)
    return (<>
        <div className="w-full overflow-auto bg-gray-50 p-2 max-w-full">
            <pre className="whitespace-wrap">
                {JSON.stringify(result, null, 4)}
            </pre>
        </div>
    </>)
}


function convertToSimpleObject(data: IResult[]) {
   let simpleObject = {}
   for(let obj of  data) {
        simpleObject = { ...simpleObject ,...obj}
   }

   return simpleObject
}


const baseClassMenuItem = "p-2 rounded block w-full border border-orange-400 "
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
        
        if(!tempResult.length) {
            setWarningText("Query strings not found")
        }
    }

    function onCopy(e: SyntheticEvent) {
        navigator.clipboard.writeText(JSON.stringify(convertToSimpleObject(result), null, 4))
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

    function onClear() {
        if (!inputElementRef.current) return
        inputElementRef.current.value = ""
    }

    return (<>
        <div className="w-full flex justify-center">
            <div className="w-full">
                <div className="flex justify-end">
                    <button
                        onClick={onClear} 
                        className="bg-gray-100 rounded-md p-2">Clear</button>
                </div>
                <input
                    type="url"
                    ref={inputElementRef} placeholder="put your url here"
                    className="w-full h-12 rounded-sm border-2 border-orange-400 p-3 block"/>
                <p className="text-red-500 mt-1 mb-3"><small>{warningText}</small></p>
                <button className="bg-orange-500 rounded-md text-white w-full sm:w-32 block p-2 sm:ml-auto" onClick={onParse}>Parse</button>
            </div>
        </div>
        <div className="mt-3">
            <div className={`${result.length === 0 && "hidden"} w-full`}>
                <h3> Result: </h3>
                <div className="flex my-2 justify-between p-0 gap-2 w-full sm:w-1/2 sm:ml-auto">
                    <button type="button" onClick={() => setViewerType("json")} className={viewerType === "json" ? active: inActive}>JSON</button>
                    <button type="button" onClick={() => setViewerType("table")} className={viewerType === "table" ? active: inActive}>Table</button>
                </div>
                <div className="bg-gray-100 flex justify-end p-0 my-2">
                    <button onClick={onCopy} className="bg-gray-400 text-white p-1 rounded-md">Copy JSON</button>
                </div>
                { viewerType === "json" && <JsonViewResult data={result}   /> }
                { viewerType === "table" && <TableViewResult data={result}  /> }
            </div>
        </div>
    </>)
}