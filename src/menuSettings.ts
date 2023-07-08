import type { IGroupedMenuSetting, IMenuSetting } from "./interfaces";

const queryStringMenu =  { 
    name: "Query String", parentLink: "/query-string",  children: [
        { name: "Parse", "link": "/parse" },
        { name: "Generate", "link": "/generate" },
]}

export const menuSettings: (IGroupedMenuSetting | IMenuSetting)[]  = [
    { name: "Home", link: "" },
    { name: "Base64", "link": "/base64" },
    queryStringMenu

]