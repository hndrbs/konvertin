import{r as d}from"./index.ed373d49.js";import{j as e}from"./jsx-runtime.391947bd.js";function g({data:l}){return e.jsx(e.Fragment,{children:e.jsx("div",{className:"w-full overflow-y-auto",children:e.jsxs("table",{className:"table-fixed w-full",children:[e.jsx("thead",{className:"bg-orange-600 text-white rounded",children:e.jsxs("tr",{className:"py-4 w-full text-left",children:[e.jsx("th",{className:"max-w-[100px] w-1/4",children:"Key"}),e.jsx("th",{children:"Value"})]})}),e.jsx("tbody",{children:l.map((n,a)=>{const t=Object.keys(n)[0],i=n[t];return e.jsxs("tr",{className:"border-2 hover:bg-orange-50",children:[e.jsx("td",{className:"whitespace-normal p-2 break-all min-w-fit border-r-2 border-gray-300",children:t}),e.jsx("td",{className:"whitespace-normal p-2 break-all",children:i})]},a)})})]})})})}function w({data:l}){return e.jsx(e.Fragment,{children:e.jsx("div",{className:"w-full overflow-y-auto break-all bg-gray-50 p-2",children:JSON.stringify(l,null,1)})})}const m="p-2 rounded block w-full hover:text-white hover:bg-orange-400 ",x=m+"text-white bg-orange-400",h=m+"text-black bg-gray-50";function v(){const l=d.useRef(null),[n,a]=d.useState(""),[t,i]=d.useState([]),[c,u]=d.useState("json");function b(){const r=l.current;if(!r?.value||!r.checkValidity()){a("Url is not valid"),i([]);return}a("");const s=new URL(r.value),o=[];for(const[p,f]of s.searchParams.entries())o.push({[p]:f});i(o)}function j(r){navigator.clipboard.writeText(JSON.stringify(t,null,4)).then(()=>{const s=r.target,o=s.innerText;s.innerText="Copied !",setTimeout(()=>{s.innerText=o},3e3)}).catch(s=>{console.error("Error copying text to clipboard:",s)})}return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-full flex justify-center",children:e.jsxs("div",{className:"w-full",children:[e.jsx("input",{type:"url",ref:l,placeholder:"put your url here",className:"w-full mb-3 h-12 rounded-sm border-2 border-orange-400 p-3 block"}),e.jsx("p",{className:"text-red-500",children:e.jsx("small",{children:n})}),e.jsx("button",{className:"bg-orange-500 rounded-md text-white w-full block p-2",onClick:b,children:"Parse"})]})}),e.jsx("div",{className:"mt-3",children:e.jsxs("div",{className:`${t.length===0&&"hidden"} w-full`,children:[e.jsx("h3",{children:" Result: "}),e.jsxs("div",{className:"flex my-2 justify-between p-0",children:[e.jsx("button",{type:"button",onClick:()=>u("json"),className:c==="json"?x:h,children:"JSON"}),e.jsx("button",{type:"button",onClick:()=>u("table"),className:c==="table"?x:h,children:"Table"})]}),e.jsx("div",{className:"bg-gray-100 flex justify-end p-0",children:e.jsx("button",{onClick:j,className:"bg-gray-400 text-white p-1 rounded-md",children:"Copy JSON"})}),c==="json"&&e.jsx(w,{data:t}),c==="table"&&e.jsx(g,{data:t})]})})]})}export{v as default};
