import{r as x}from"./index.ed373d49.js";import{j as e}from"./jsx-runtime.391947bd.js";const g={name:"Base64",children:[{name:"base64 - text",link:"/base64/text"},{name:"base64 - file",link:"/coming-soon"}]},u=[{name:"JWT",link:"/coming-soon"}],b=[{name:"Home",link:"/"},g,...u];function j({text:r,children:t,classNames:a}){const[n,c]=x.useState(!1);return e.jsxs("div",{className:"relative",children:[e.jsx("button",{className:a.text,onClick:()=>c(!n),children:r}),e.jsx("div",{className:n?a.children:"hidden",children:t})]})}function k({currentPath:r}){const[t,a]=x.useState(!1);function n(s){return r===i+s.link}function c(s){return s.some(l=>n(l))}const m="p-2 rounded m-2 block w-full ",o=m+"text-white bg-orange-400",d=m+"text-black bg-gray-50",i="/BasicTools";return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex justify-end w-full py-2",children:e.jsx("button",{className:"md:hidden",onClick:()=>a(!t),children:t?e.jsx("img",{className:"h-8 w-8",src:i+"/close.svg"}):e.jsx("img",{className:"h-8 w-8",src:i+"/bars-4.svg"})})}),e.jsx("div",{className:`w-full bg-white h-screen ${!t&&"hidden"} md:inline fixed md:static`,children:b.map((s,l)=>"children"in s?e.jsx(j,{classNames:{text:(c(s.children)?o:d)+" text-left",children:"absolute w-48 flex flex-col gap-1 bg-gray-50 left-10"},text:s.name,children:s.children.map((h,f)=>e.jsx("a",{href:i+h.link,className:"hover:text-white hover:bg-orange-400 "+(n(h)?o:d),children:h.name},f))},l):e.jsx("a",{className:n(s)?o:d,href:i+s.link,children:s.name},l))})]})}export{k as default};
