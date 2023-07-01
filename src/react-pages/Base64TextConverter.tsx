import { useRef, useState } from "react"
import ButtonGroupUtils from "../react-components/ButtonGroupUtils"


export default function Base64TextConverter() {
    const inputRef = useRef<HTMLTextAreaElement>(null)
    const outputRef = useRef<HTMLTextAreaElement>(null)
    const [task, setTask] = useState<"encrypt" | "decrypt"> ("encrypt")
    
    function onConvert() {
        const input = inputRef.current?.value

        switch (task) {
            case "encrypt":                
                if (input && outputRef.current) {
                    const output = btoa(input)
                    outputRef.current.value = output
                }
                break
            case "decrypt":
                if (input && outputRef.current) {
                    const output = atob(input)
                    outputRef.current.value = output
                }
                break
            default:
                console.log("salah cok")
                break
        }
    }

    function onTaskChange(nextTask: typeof task) {
        setTask(nextTask)
        if (inputRef.current?.value) {
            inputRef.current.value = ""
        }

        if (outputRef.current?.value) {
            outputRef.current.value = ""
        }
    }    

    return (
        <form className="flex flex-col gap-3 w-full">
            <div className="flex gap-3 mb-2 justify-center">
                <span>
                    <label htmlFor="radio-encrypt" className="mr-2">Encrypt</label>
                    <input id="radio-encrypt" type="radio" name="task" onChange={() => onTaskChange("encrypt")} defaultChecked />
                </span>
                <span>
                    <label htmlFor="radio-decrypt" className="mr-2">Decrypt</label>
                    <input id="radio-decrypt" type="radio" name="task" onChange={() => onTaskChange("decrypt")} />
                </span>
            </div>
            <div className="flex flex-col justify-center md:flex-row gap-3 w-full">
                <div className="w-full md:w-1/2">
                    <ButtonGroupUtils refTarget={inputRef} buttonMembers={["clear"]} />
                    <textarea ref={inputRef} placeholder="your plain text here" 
                        className="w-full h-32 p-3"
                        onChange={onConvert}></textarea>
                </div>
                <div className="w-full md:w-1/2">
                    <ButtonGroupUtils refTarget={outputRef} buttonMembers={["copy"]}/>
                    <textarea ref={outputRef} className="w-full h-32 p-3" disabled></textarea>
                </div>
            </div>
        </form>
    )
}