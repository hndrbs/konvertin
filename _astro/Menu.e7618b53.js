import{r as x}from"./index.ed373d49.js";import{j as e}from"./jsx-runtime.391947bd.js";const g={name:"Base64",children:[{name:"base64 - text",link:"/base64/text"},{name:"base64 - file",link:"/coming-soon"}]},u=[{name:"JWT",link:"/coming-soon"}],b=[{name:"Home",link:"/"},g,...u];function j({text:l,children:t,classNames:i}){const[n,r]=x.useState(!1);return e.jsxs("div",{className:"relative",children:[e.jsx("button",{className:i.text,onClick:()=>r(!n),children:l}),e.jsx("div",{className:n?i.children:"hidden",children:t})]})}function k({currentPath:l}){const[t,i]=x.useState(!1);function n(s){return l===d+s.link}function r(s){return s.some(a=>n(a))}const m="p-2 rounded m-2 block w-full ",c=m+"text-white bg-orange-400",o=m+"text-black bg-gray-50",d="/BasicTools";return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex justify-end w-full py-2",children:e.jsx("button",{className:"md:hidden",onClick:()=>i(!t),children:t?e.jsx("img",{className:"h-8 w-8",src:"/close.svg"}):e.jsx("img",{className:"h-8 w-8",src:"/bars-4.svg"})})}),e.jsx("div",{className:`w-full bg-white h-screen ${!t&&"hidden"} md:inline fixed md:static`,children:b.map((s,a)=>"children"in s?e.jsx(j,{classNames:{text:(r(s.children)?c:o)+" text-left",children:"absolute w-48 flex flex-col gap-1 bg-gray-50 left-10"},text:s.name,children:s.children.map((h,f)=>e.jsx("a",{href:d+h.link,className:"hover:text-white hover:bg-orange-400 "+(n(h)?c:o),children:h.name},f))},a):e.jsx("a",{className:n(s)?c:o,href:d+s.link,children:s.name},a))})]})}export{k as default};
