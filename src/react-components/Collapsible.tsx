import { useState, type ReactNode } from "react";
// import { basePath } from "../../astro.config.mjs";

const basePath = import.meta.env.BASE_URL


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
            <button className={"flex justify-between " + classNames.text} onClick={() => setShowChildren(!showChildren)} type="button">
                {text} <img alt="chevron up" className={`${showChildren && "rotate-180"} h-4 w-4 mr-3`} src={basePath + "/chevron-up.svg"} />
            </button>
            <div className={showChildren ? classNames.children: "hidden"}>
                {children}
            </div>
        </div>
    )
}