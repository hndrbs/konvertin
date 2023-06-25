import type { IGroupedMenuSetting, IMenuSetting } from "./interfaces";


export enum MenuSettingNameEnum {
    base64 = "Base64",
    jwt = "JWT",
    basicAuth = "Basic Auth",
    home = "Home"
}


const base64Menu: IGroupedMenuSetting = {
    name: MenuSettingNameEnum.base64,
    children: [
        { name: "base64 - text", "link": "/base64/text" },
        { name: "base64 - file", "link": "/base64/file" }
    ]
}

const regularMenu: IMenuSetting[] = [
    { name: MenuSettingNameEnum.basicAuth , link: "basic-auth" },
    { name: MenuSettingNameEnum.jwt, link: "jwt" },
]


export const menuSettings: (IGroupedMenuSetting | IMenuSetting)[]  = [base64Menu, ...regularMenu]