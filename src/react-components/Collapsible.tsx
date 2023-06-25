import { useState, type ReactNode } from "react";


interface ICollapsibleProps {
    text: string,
    children: ReactNode,
    classNames: {
        text: string,
        children: string
    }
}



export default function Collapsible({ text, children, classNames  }: ICollapsibleProps) {

    const [showChildren, setShowChildren] = useState(false)
    
    return (
        <div className="relative">
            <button className={classNames.text} onClick={() => setShowChildren(!showChildren)}>
                {text}
            </button>
            <div className={showChildren ? classNames.children: "hidden"}>
                {children}
            </div>
        </div>
    )
}