import { useRef, useState } from "react"


export default function Base64TextConverter() {
    const [task, setTask] = useState<"encrypt" | "decrypt"> ("encrypt")
    const [textButtonClear, setTextButtonClear] = useState<"Clear" | "Cleared !!">("Clear")
    const [textButtonCopy, setTextButtonCopy] = useState<"Copy" | "Copied">("Copy")

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
        onClear()
    }

    function onClear() {
        if (inputRef.current) {
            inputRef.current.value = ""
            onConvert()
        }

        setTextButtonClear("Cleared !!")
        setTimeout(() => setTextButtonClear("Clear"), 2000)
    }

    function onCopy() {
        if (outputRef.current?.value) {
            navigator.clipboard.writeText(outputRef.current.value)
                .then(() => {
                    setTextButtonCopy("Copied")
                    setTimeout(() => setTextButtonCopy("Copy"), 3000)
                })
                .catch((error) => {
                    console.error('Error copying text to clipboard:', error);
                });
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
                    <div className="w-full flex justify-end gap-2 bg-gray-200 rounded-md">
                        <button 
                            onClick={onClear} type="button" 
                            className="bg-gray-500 text-white py-1 px-2 rounded-md">
                            {textButtonClear}
                        </button>
                    </div>
                    <textarea ref={inputRef} placeholder="your plain text here" 
                        className="w-full h-32 p-3"
                        onChange={onConvert}></textarea>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="w-full flex justify-end gap-2 bg-gray-200 rounded-md">
                        <button 
                            onClick={onCopy} type="button" 
                            className="bg-gray-500 text-white py-1 px-2 rounded-md">
                            {textButtonCopy}
                        </button>
                    </div>
                    <textarea ref={outputRef} className="w-full h-32 p-3" disabled></textarea>
                </div>
            </div>
        </form>
    )
}