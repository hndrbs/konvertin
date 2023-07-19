import { SyntheticEvent, useRef, useState } from "react"


const baseClassMenuItem = "p-2 rounded m-2 block w-full "
const active = baseClassMenuItem + "text-white bg-orange-400"
const inActive = baseClassMenuItem + "text-black bg-gray-50"

export default function Base64TextConverter() {
    const [task, setTask] = useState<"encrypt" | "decrypt"> ("encrypt")
   
    const inputRef = useRef<HTMLTextAreaElement>(null)
    const outputRef = useRef<HTMLTextAreaElement>(null)

    function onConvert() {
        const input = inputRef.current?.value

        if (!input && outputRef.current) {
            outputRef.current.value = ""
            return
        }

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
        
        if(inputRef.current && outputRef.current) {
            inputRef.current.value = ""
            outputRef.current.value = ""
        }
    }

    function onClear(e: SyntheticEvent) {
        if (inputRef.current) {
            inputRef.current.value = ""
            onConvert()
        }

        const button = e.target as HTMLButtonElement
        const initialText = button.innerText

        button.innerText = "Cleared !"

        setTimeout(() => { button.innerText = initialText }, 3000)
    }

    function onCopy(e: SyntheticEvent) {
        if (outputRef.current?.value) {
            navigator.clipboard.writeText(outputRef.current.value)
                .then(() => {
                    const button = e.target as HTMLButtonElement
                    const initialText = button.innerText

                    button.innerText = "Copied !"

                    setTimeout(() => { button.innerText = initialText }, 3000)
                })
                .catch((error) => {
                    console.error('Error copying text to clipboard:', error);
                });
        }
    }

    return (
        <form className="flex flex-col gap-3 w-full">
            <div className="flex gap-3 mb-2 justify-center">
                <button type="button" onClick={() => onTaskChange("encrypt")} className={task === "encrypt" ? active: inActive}>Encode</button>
                <button type="button" onClick={() => onTaskChange("decrypt")} className={task === "decrypt" ? active: inActive}>Decode</button>
            </div>
            <div className="flex flex-col justify-center sm:flex-row gap-3 w-full">
                <div className="w-full md:w-1/2">
                    <div className="w-full flex justify-end gap-2 bg-gray-200 rounded-md">
                        <button 
                            onClick={onClear} type="button" 
                            className="bg-gray-500 text-white py-1 px-2 rounded-md">
                            Clear
                        </button>
                    </div>
                    <textarea ref={inputRef} placeholder="your plain text here" 
                        className="w-full h-32 p-3 border-2 border-orange-400 mt-1"
                        onChange={onConvert}></textarea>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="w-full flex justify-end gap-2 bg-gray-200 rounded-md">
                        <button 
                            onClick={onCopy} type="button" 
                            className="bg-gray-500 text-white py-1 px-2 rounded-md">
                            Copy
                        </button>
                    </div>
                    <textarea ref={outputRef} className="w-full h-32 p-3" disabled></textarea>
                </div>
            </div>
        </form>
    )
}