import{u as o,j as s}from"./index-BWW4n2de.js";import{c as g,b as c}from"./common-CvXlsPjI.js";import{L as x}from"./layout-tuCn-pQa.js";import{c as i}from"./community.module-CLuNQbeN.js";function N(){const l=o(),m=[{image:"/images/avatar/1.png",name:"Matt",dot:!0},{image:"/images/avatar/2.png",name:"Family"},{image:"/images/avatar/3.png",name:"Max"}],n=[{image:"/images/pics/1.png",title:"Distance running"},{image:"/images/pics/2.png",title:"Clean meals"}],r=[{image:"/images/pics/3.png",title:"Basketball"},{image:"/images/pics/4.png",title:"Jump rope"},{image:"/images/pics/5.png",title:"Snowboarding"},{image:"/images/pics/6.png",title:"Soccer"},{image:"/images/pics/7.png",title:"Ping pang"},{image:"/images/pics/8.png",title:"Skateboarding"}],t=()=>l("/community-list"),d=()=>l("/friend");return s.jsx(x,{active:"community",children:s.jsxs("div",{className:i.page,children:[s.jsxs("div",{className:i.search,children:[s.jsx("input",{}),s.jsx("div",{className:i.suffix,children:s.jsx("i",{className:"icon-search"})})]}),s.jsxs("div",{className:i.part,children:[s.jsxs("div",{className:i.head,children:[s.jsx("div",{className:i.title,children:"Friends"}),s.jsx("div",{className:i.right,children:"See all"})]}),s.jsxs("div",{className:i.arrows,children:[s.jsx("div",{className:i.scroll,children:s.jsx("div",{className:i.friends,children:m.map((a,e)=>s.jsxs("div",{className:g({[i.friend]:!0,[i.dot]:a.dot}),onClick:d,children:[s.jsx("img",{src:c(a.image)}),s.jsx("span",{children:a.name})]},e))})}),s.jsx("div",{className:i.arrow,children:s.jsx("i",{className:"icon-arrow-left"})}),s.jsx("div",{className:i.arrow,children:s.jsx("i",{className:"icon-arrow-right"})})]})]}),s.jsxs("div",{className:i.part,children:[s.jsx("div",{className:i.head,children:s.jsx("div",{className:i.title,children:"My communities"})}),s.jsx("div",{className:i.scroll,children:s.jsx("div",{className:i.communities,children:n.map((a,e)=>s.jsxs("div",{className:i.community,onClick:t,children:[s.jsx("img",{src:c(a.image)}),s.jsx("span",{children:a.title})]},e))})})]}),s.jsxs("div",{className:i.part,children:[s.jsxs("div",{className:i.head,children:[s.jsx("div",{className:i.title,children:"Discover"}),s.jsx("div",{className:i.right,children:"See all"})]}),s.jsx("div",{className:i.discover,children:r.map((a,e)=>s.jsxs("div",{className:i.discoverItem,children:[s.jsx("img",{src:c(a.image)}),s.jsx("span",{children:a.title})]},e))})]})]})})}export{N as default};
