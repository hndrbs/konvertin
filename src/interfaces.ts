
export interface IMenuSetting {
    name: string,
    link: string,
}

export interface IGroupedMenuSetting {
    name: string,
    parentLink: string,
    children: IMenuSetting[]
}