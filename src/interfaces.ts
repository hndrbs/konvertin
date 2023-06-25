
export interface IMenuSetting {
    name: string,
    link: string,
}

export interface IGroupedMenuSetting {
    name: string,
    children: IMenuSetting[]
}