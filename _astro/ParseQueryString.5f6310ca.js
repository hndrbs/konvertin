import{r as c}from"./index.ed373d49.js";import{j as e}from"./jsx-runtime.391947bd.js";function p({data:s}){return e.jsx(e.Fragment,{children:e.jsx("div",{className:"w-full overflow-y-auto",children:e.jsxs("table",{className:"table-fixed",children:[e.jsx("thead",{className:"bg-orange-600 text-white py-2 rounded",children:e.jsxs("tr",{children:[e.jsx("th",{className:"w-1/4",children:"Key"}),e.jsx("th",{children:"Value"})]})}),e.jsx("tbody",{children:s.map((l,n)=>{const t=Object.keys(l)[0],r=l[t];return e.jsxs("tr",{className:"border-2 hover:bg-orange-50",children:[e.jsx("td",{className:"whitespace-normal p-2 break-all min-w-fit",children:t}),e.jsx("td",{className:"whitespace-normal p-2 break-all",children:r})]},n)})})]})})})}function w({data:s}){return e.jsx(e.Fragment,{children:e.jsx("div",{className:"w-full overflow-y-auto break-all bg-gray-50 p-2",children:JSON.stringify(s,null,1)})})}const x="p-2 rounded block w-full hover:text-white hover:bg-orange-400 ",d=x+"text-white bg-orange-400",h=x+"text-black bg-gray-50";function v(){const s=c.useRef(null),[l,n]=c.useState(""),[t,r]=c.useState([]),[a,o]=c.useState("json");function m(){const i=s.current;if(!i?.value||!i.checkValidity()){n("Url is not valid"),r([]);return}n("");const j=new URL(i.value),u=[];for(const[b,f]of j.searchParams.entries())u.push({[b]:f});r(u)}return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-full flex justify-center",children:e.jsxs("div",{className:"w-full",children:[e.jsx("input",{type:"url",ref:s,placeholder:"put your url here",className:"w-full mb-3 h-12 rounded-sm border-2 border-orange-400 p-3 block"}),e.jsx("p",{className:"text-red-500",children:e.jsx("small",{children:l})}),e.jsx("button",{className:"bg-orange-500 rounded-md text-white w-full block p-2",onClick:m,children:"Parse"})]})}),e.jsx("div",{className:"mt-3",children:e.jsxs("div",{className:`${t.length===0&&"hidden"} w-full`,children:[e.jsx("h3",{children:" Result: "}),e.jsxs("div",{className:"flex my-2 justify-between p-0",children:[e.jsx("button",{type:"button",onClick:()=>o("json"),className:a==="json"?d:h,children:"JSON"}),e.jsx("button",{type:"button",onClick:()=>o("table"),className:a==="table"?d:h,children:"Table"})]}),a==="json"&&e.jsx(w,{data:t}),a==="table"&&e.jsx(p,{data:t})]})})]})}export{v as default};
