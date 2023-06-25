import type { IGroupedMenuSetting, IMenuSetting } from "./interfaces";



const base64Menu: IGroupedMenuSetting = {
    name: "Base64",
    children: [
        // { name: "base64 - text", "link": "/base64/text" },
        { name: "base64 - text", "link": "/base64/text" },
        { name: "base64 - file", "link": "/coming-soon" }
    ]
}


const regularMenu: IMenuSetting[] = [
    { name: "Basic Auth" , link: "/coming-soon" },
    { name: "JWT", link: "/coming-soon" },
]


export const menuSettings: (IGroupedMenuSetting | IMenuSetting)[]  = [
    { name: "Home", link: "/" },
    base64Menu, 
    ...regularMenu
]