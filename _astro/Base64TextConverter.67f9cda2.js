import{r as o}from"./index.ed373d49.js";import{j as t}from"./jsx-runtime.391947bd.js";const x="p-2 rounded m-2 block w-full hover:bg-orange-100 hover:text-black ",i=x+"text-white bg-orange-400",d=x+"text-black bg-gray-50";function h(){const[c,f]=o.useState("encrypt"),a=o.useRef(null),r=o.useRef(null);function s(){const n=a.current?.value;if(!n&&r.current){r.current.value="";return}switch(c){case"encrypt":if(n&&r.current){const e=btoa(n);r.current.value=e}break;case"decrypt":if(n&&r.current){const e=atob(n);r.current.value=e}break;default:console.log("salah cok");break}}function u(n){f(n),a.current&&r.current&&(a.current.value="",r.current.value="")}function p(n){a.current&&(a.current.value="",s());const e=n.target,l=e.innerText;e.innerText="Cleared !",setTimeout(()=>{e.innerText=l},3e3)}function b(n){r.current?.value&&navigator.clipboard.writeText(r.current.value).then(()=>{const e=n.target,l=e.innerText;e.innerText="Copied !",setTimeout(()=>{e.innerText=l},3e3)}).catch(e=>{console.error("Error copying text to clipboard:",e)})}return t.jsxs("form",{className:"flex flex-col gap-3 w-full",children:[t.jsxs("div",{className:"flex gap-3 mb-2 justify-center",children:[t.jsx("button",{type:"button",onClick:()=>u("encrypt"),className:c==="encrypt"?i:d,children:"Encode"}),t.jsx("button",{type:"button",onClick:()=>u("decrypt"),className:c==="decrypt"?i:d,children:"Decode"})]}),t.jsxs("div",{className:"flex flex-col justify-center md:flex-row gap-3 w-full",children:[t.jsxs("div",{className:"w-full md:w-1/2",children:[t.jsx("div",{className:"w-full flex justify-end gap-2 bg-gray-200 rounded-md",children:t.jsx("button",{onClick:p,type:"button",className:"bg-gray-500 text-white py-1 px-2 rounded-md",children:"Clear"})}),t.jsx("textarea",{ref:a,placeholder:"your plain text here",className:"w-full h-32 p-3 border-2 border-orange-400 mt-1",onChange:s})]}),t.jsxs("div",{className:"w-full md:w-1/2",children:[t.jsx("div",{className:"w-full flex justify-end gap-2 bg-gray-200 rounded-md",children:t.jsx("button",{onClick:b,type:"button",className:"bg-gray-500 text-white py-1 px-2 rounded-md",children:"Copy"})}),t.jsx("textarea",{ref:r,className:"w-full h-32 p-3",disabled:!0})]})]})]})}export{h as default};
