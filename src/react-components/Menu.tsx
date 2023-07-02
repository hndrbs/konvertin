import { menuSettings } from '../menuSettings';
import type { IMenuSetting } from "../interfaces"
import Collapsible from '../react-components/Collapsible';
import { useState } from 'react';


export default function Menu({ currentPath }: { currentPath: string } ) {

    const [isOpen, setIsOpen] = useState(false)
    
    function isCurrentPage(menu: IMenuSetting) {
        return currentPath === base + menu.link
    }
    
    function isAnyOfMyChildrenActive(menus: IMenuSetting[]) {
        return menus.some(menu => isCurrentPage(menu))
    }
    
    const baseClassMenuItem = "p-2 rounded m-2 block w-full "
    const active = baseClassMenuItem + "text-white bg-orange-400"
    const inActive = baseClassMenuItem + "text-black bg-gray-50"

    const base = "/BasicTools"
    return (
        <>
            <div className="flex justify-end w-full py-2">
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen
                        ? <img className="h-8 w-8" src={base + "/close.svg"} />
                        : <img className="h-8 w-8" src={base + "/bars-4.svg"} />
                    }
                </button>
            </div>
            <div className={`w-full bg-white h-screen ${!isOpen && "hidden"} md:inline fixed md:static`}>
                { menuSettings.map((menu, id) => {
                    if ("children" in menu) {
                        return (
                            <Collapsible key={id}
                                classNames={{
                                    text: (isAnyOfMyChildrenActive(menu.children) ? active: inActive) + " text-left",
                                    children: "absolute w-48 flex flex-col gap-1 bg-gray-50 left-10"
                                }}
                                text={menu.name}>
                                {
                                    menu.children.map((subMenu, subId) => (
                                        <a key={subId} href={base + subMenu.link} className={"hover:text-white hover:bg-orange-400 " + (isCurrentPage(subMenu) ? active: inActive)}>
                                            {subMenu.name}
                                        </a>))
                                }
                            </Collapsible>
                        ) 
                    }

                    return <a key={id} className={isCurrentPage(menu) ? active: inActive} href={base + menu.link}>{menu.name}</a>
                })}
            </div>
        </>
    )
}