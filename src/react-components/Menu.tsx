import { menuSettings } from '../menuSettings';
import type { IMenuSetting } from "../interfaces"
import Collapsible from '../react-components/Collapsible';
import { useState } from 'react';

const baseClassMenuItem = "p-2 rounded m-2 block w-full "
const active = baseClassMenuItem + "text-white bg-orange-400"
const inActive = baseClassMenuItem + "text-black bg-gray-50"


const basePath = import.meta.env.BASE_URL

function isCurrentPage(link: string, currentPath: string) {
    const current =  currentPath.replaceAll("/", "").toLowerCase()
    const menuLink = (basePath + link).replaceAll("/", "").toLowerCase()
    return current === menuLink
}

function isAnyOfMyChildrenActive(links: string[], currentPath: string) {
    return links.some(link => isCurrentPage(link, currentPath))
}


export default function Menu({ currentPath }: { currentPath: string } ) {

    const [isOpen, setIsOpen] = useState(false)

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
                    const childrenLinks = menu.children.map(sub => menu.parentLink + sub.link)
                    const parentTextClassName = (isAnyOfMyChildrenActive(childrenLinks, currentPath) ? active : inActive ) + " text-left backdrop-blur"
                    return (
                        <Collapsible key={id} text={menu.name}
                            classNames={{
                                text: parentTextClassName,
                                children: "absolute w-48 flex flex-col gap-1 backdrop-blur-lg left-10"
                            }}
                        >
                            {
                                menu.children.map((subMenu, subId) => {
                                    const link = menu.parentLink + subMenu.link
                                    return (
                                        <a key={subId} href={basePath + menu.parentLink + subMenu.link} 
                                            className={isCurrentPage(link, currentPath) ? active: inActive}>
                                            {subMenu.name}
                                        </a>
                                    )
                                })

                            }
                        </Collapsible>
                    ) 
                }

                return <a key={id} className={isCurrentPage(menu.link, currentPath) ? active: inActive} href={basePath + menu.link}>{menu.name}</a>
            })}
        </div>
        </>
    )
}