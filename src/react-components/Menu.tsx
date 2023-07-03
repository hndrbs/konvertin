import { menuSettings } from '../menuSettings';
import type { IMenuSetting } from "../interfaces"
import Collapsible from '../react-components/Collapsible';
import { useState } from 'react';

const baseClassMenuItem = "p-2 rounded m-2 block w-full hover:text-white hover:bg-orange-400 "
const active = baseClassMenuItem + "text-white bg-orange-400"
const inActive = baseClassMenuItem + "text-black bg-gray-50"


const basePath = import.meta.env.BASE_URL

export default function Menu({ currentPath }: { currentPath: string } ) {

    const [isOpen, setIsOpen] = useState(false)

    
    function isCurrentPage(menu: IMenuSetting) {
        const current =  currentPath.replaceAll("/", "").toLowerCase()
        const menuLink = (basePath + menu.link).replaceAll("/", "").toLowerCase()
        return current === menuLink
    }
    
    function isAnyOfMyChildrenActive(menus: IMenuSetting[]) {
        return menus.some(menu => isCurrentPage(menu))
    }
    
    return (
        <>
            <div className="flex justify-end w-full py-2">
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} type='button'>
                    <img className={`h-8 w-8 ${!isOpen && "hidden"} `} src={basePath + "/close.svg"} alt='close' />
                    <img className={`h-8 w-8 ${isOpen && "hidden"}`} src={basePath + "/bars-4.svg"} alt='open' />
                </button>
            </div>
            <div className={`w-full h-screen ${!isOpen && "hidden"} md:inline fixed md:static backdrop-blur-lg md:backdrop-blur-none`}>
                { menuSettings.map((menu, id) => {
                    if ("children" in menu) {
                        return (
                            <Collapsible key={id}
                                classNames={{
                                    text: (isAnyOfMyChildrenActive(menu.children) ? active + " text-left": inActive + " text-left"),
                                    children: "absolute w-48 flex flex-col gap-1 bg-gray-50 left-10"
                                }}
                                text={menu.name}>
                                {
                                    menu.children.map((subMenu, subId) => (
                                        <a key={subId} href={basePath + subMenu.link} 
                                            className={isCurrentPage(subMenu) ? active: inActive}>
                                            {subMenu.name}
                                        </a>))
                                }
                            </Collapsible>
                        ) 
                    }

                    return <a key={id} className={isCurrentPage(menu) ? active: inActive} href={basePath + menu.link}>{menu.name}</a>
                })}
            </div>
        </>
    )
}