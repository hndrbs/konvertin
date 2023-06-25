import type { MenuSettingNameEnum } from "./menuSettings"

export interface IMenuSetting {
    name: string,
    link: string,
}

export interface IGroupedMenuSetting {
    name: MenuSettingNameEnum,
    children: IMenuSetting[]
}