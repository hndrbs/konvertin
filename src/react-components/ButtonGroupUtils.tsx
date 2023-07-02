import { useState, type RefObject, type SyntheticEvent } from "react"


type buttonType = "clear" | "copy"

interface IButtonUtilsProps {
    refTarget: RefObject<HTMLTextAreaElement | HTMLInputElement | null>,
    buttonMembers: buttonType[]

}


export default function ButtonGroupUtils({ refTarget, buttonMembers }: IButtonUtilsProps) {

    const [textButtonCopy, setButtonCopy] = useState("Copy")
    const [textButtonClear, setButtonClear] = useState("Clear")

    function onClear(e: SyntheticEvent) {
        if (refTarget.current) {
            refTarget.current.value = ""
        }

        setButtonClear("Cleared !!")

        setTimeout(() => setButtonClear("Clear"), 2000)
    }

    function onCopy() {
        if (refTarget.current?.value) {
            navigator.clipboard.writeText(refTarget.current.value)
                .then(() => {
                    setButtonCopy("Copied !!")
                    setTimeout(() => setButtonCopy("Copy"), 3000)
                })
                .catch((error) => {
                    console.error('Error copying text to clipboard:', error);
                });
        }
    }

    return (
        <div className="w-full flex justify-end gap-2 bg-gray-200 rounded-md">
            {
                buttonMembers.map((btnType, id) => {
                    switch (btnType) {
                        case "clear":
                            return (
                                <button key={id}
                                    onClick={onClear} type="button" 
                                    className="bg-gray-500 text-white py-1 px-2 rounded-md">
                                    {textButtonClear}
                                </button>
                            )
                        case "copy":
                            return (
                                <button key={id}
                                    onClick={onCopy} type="button" 
                                    className="bg-gray-500 text-white py-1 px-2 rounded-md">{textButtonCopy}</button>
                            )
                    }
                })
            }
            
        </div>
    )

}