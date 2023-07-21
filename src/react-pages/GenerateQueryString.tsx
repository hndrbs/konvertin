import { useState } from "react"


const baseClassMenuItem = "p-2 rounded block w-full border border-orange-400 "
const active = baseClassMenuItem + "text-white bg-orange-400"
const inActive = baseClassMenuItem + "text-black bg-gray-50"


interface IInputDataProps {
    setData: (data: Object) => void
}

function JSONInput({ setData }: IInputDataProps) {
    const [inputData, setInputData] = useState<string>("")
    return (
        <textarea></textarea>
    )
}

function FormInput({ setData }: IInputDataProps) {
    return (
        <>input</>
    )
}

export default function GenerateQuerySting() {
    const [generateFrom, setGenerateFrom] = useState<"form" | "json">("json")
    const [data, setData] = useState<Object>()
    return (<>
        <div className="flex my-2 justify-between p-0 gap-2 w-full sm:w-1/2 sm:ml-auto mt-4">
            <button type="button" onClick={() => setGenerateFrom("json")} className={generateFrom === "json" ? active: inActive}>JSON</button>
            <button type="button" onClick={() => setGenerateFrom("form")} className={generateFrom === "form" ? active: inActive}>Form</button>
        </div>
        <div>
            {generateFrom === "json" && <JSONInput setData={setData}/>}
            {generateFrom === "form" && <FormInput setData={setData}/>}
        </div>
    </>)
}