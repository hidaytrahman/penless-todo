(this["webpackJsonppenless-todo"]=this["webpackJsonppenless-todo"]||[]).push([[0],{80:function(e,t,c){},92:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){"use strict";c.r(t);var n=c(0),o=c.n(n),s=c(11),a=c.n(s),l=(c(80),c(4)),i=function(){return Object(l.jsx)("footer",{className:"main-footer",children:Object(l.jsxs)("div",{className:"container text-center",children:["Created by ",Object(l.jsx)("a",{href:"https://github.com/hidaytrahman",children:"Hidayt Rahman"})]})})},r=c(15),d=c(124),j=c(127),b=c(128),u=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),c=t[0],o=t[1];Object(n.useEffect)((function(){"dark"===localStorage.getItem("theme")?(document.body.classList.add("dark-theme"),o(!0)):(o(!1),document.body.classList.remove("dark-theme"))}),[c]);return Object(l.jsx)("header",{className:"main-header",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"col-sm-10",children:[Object(l.jsx)("h1",{children:"\ud83d\udd8a\ufe0fLess - To Do "}),Object(l.jsx)("h3",{children:"PenLess To Do gives you focus, from work to play. \ud83d\ude0e"})]}),Object(l.jsx)("div",{className:"col-sm-2",children:Object(l.jsx)(d.a,{className:"d-flex align-items-end",children:Object(l.jsx)(j.a,{control:Object(l.jsx)(b.a,{checked:c,onChange:function(){o(!c),document.body.classList.toggle("dark-theme");var e=document.body.classList.contains("dark-theme")?"dark":"light";localStorage.setItem("theme",e)}}),label:"Dark Mode"})})})]})})})},m=c(12),h=c(43),O=c(139),x=c(136),f=c(44),p=c(141),v=c(135),g=c(137),y=c(130),N=c(65),S=function(e){var t,c,o,s,a=Object(n.useRef)(null),i=Object(N.a)(),r=i.register,d=i.handleSubmit,j=i.formState.errors;return Object(l.jsx)("form",{onSubmit:d((function(t){e.addTodoItem(t.todoTitle),a.current.value="",a.current.focus()})),children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-sm-8 mb-2",children:Object(l.jsx)(g.a,Object(h.a)({error:"required"===(null===(t=j.todoTitle)||void 0===t?void 0:t.type)||"maxLength"===(null===(c=j.todoTitle)||void 0===c?void 0:c.type),label:"Whats needs to be done? \ud83e\udd14",helperText:"required"===(null===(o=j.todoTitle)||void 0===o?void 0:o.type)?"Its required \ud83d\ude1f":"maxLength"===(null===(s=j.todoTitle)||void 0===s?void 0:s.type)&&"You've exceeds the max limits. Should not be more then 50 letter \ud83d\ude44",variant:"filled",fullWidth:!0,inputRef:a},r("todoTitle",{required:{value:!0,message:"Please write what is in your mind? \ud83e\udd14"},maxLength:50})))}),Object(l.jsx)("div",{className:"col-sm-4 mb-2",children:Object(l.jsx)(y.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,children:"Add"})})]})})},I=c(129),T=c(131),k=c(132),w=c(140),L=c(133),C=c(134),D=c(99),J=c(64),A=c.n(J),W=function(e){var t=e.todos,c=e.deleteTodoItem,o=e.markTodoAsCompleted,s=e.editTodoItem,a=Object(n.useState)(!1),i=Object(r.a)(a,2),d=i[0],j=i[1],b=Object(n.useState)(0),u=Object(r.a)(b,2),m=u[0],h=u[1],O=Object(n.useRef)(null),x=function(){return Object(l.jsx)("div",{className:"editFormWrapper",children:Object(l.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),s(m,O.current.value),h(0),j(!1)}(e)},children:[Object(l.jsx)("input",{type:"text",defaultValue:t[m].title,className:"custom-input",ref:O}),Object(l.jsx)(y.a,{type:"submit",variant:"contained",color:"primary",children:"Update"})]})})};return Object(l.jsxs)("div",{children:[Object(l.jsx)(I.a,{className:"todo-list-wrapper",children:t&&t.map((function(e,t){return Object(l.jsxs)(T.a,{role:void 0,dense:!0,button:!0,onDoubleClick:function(){j(!0),h(t)},className:e.completed&&"todo-completed",children:[d&&t===m&&x(),Object(l.jsx)(k.a,{children:Object(l.jsx)(w.a,{color:"primary",checked:e.completed,disabled:e.completed,onChange:function(){return o(t,e.title)},value:!0,variant:"secondary",name:"radio-button-demo",inputProps:{"aria-label":"A"}})}),Object(l.jsx)(L.a,{style:{textDecoration:e.completed&&"line-through"},children:e.title}),Object(l.jsx)(C.a,{children:Object(l.jsx)(D.a,{edge:"end","aria-label":"comments",onClick:function(){return c(t)},children:Object(l.jsx)(A.a,{})})})]},t)}))}),Object(l.jsx)("small",{children:"Double click to edit"})]})},F=(c(92),c(93),function(e,t){var c=Object(n.useState)(0),o=Object(r.a)(c,2),s=o[0],a=o[1];return Object(n.useEffect)((function(){var c=Math.ceil(e/t*100);a(c),console.log(s)}),[e,t]),s});function P(e){return Object(l.jsx)(O.a,{display:"flex",alignItems:"center",children:Object(l.jsx)(O.a,{width:"100%",mr:1,children:Object(l.jsx)(v.a,Object(h.a)({variant:"determinate"},e))})})}function R(e){return Object(l.jsxs)(O.a,{position:"relative",display:"inline-flex",children:[Object(l.jsx)(x.a,Object(h.a)({variant:"determinate"},e)),Object(l.jsx)(O.a,{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",children:Object(l.jsx)(f.a,{variant:"caption",component:"div",color:"textSecondary",children:"".concat(Math.round(e.value),"%")})})]})}var q=function(){var e=localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[],t=Object(n.useState)(Object(m.a)(e)),c=Object(r.a)(t,2),o=c[0],s=c[1],a=o&&o.length>0?o.filter((function(e){return!0===e.completed})):[],i=F(a.length,o.length);return Object(n.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(o))}),[o]),Object(l.jsxs)("section",{className:"container todo-wrapper",children:[Object(l.jsx)("div",{className:"custom-progressbar",children:Object(l.jsx)(P,{value:i,color:"secondary"})}),Object(l.jsx)(S,{addTodoItem:function(e){s([].concat(Object(m.a)(o),[{title:e,completed:!1}])),localStorage.setItem("todos",JSON.stringify(o))}}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-lg-8",children:o&&o.length>0?Object(l.jsx)(W,{todos:o,deleteTodoItem:function(e){o.splice(e,1),s(Object(m.a)(o)),localStorage.setItem("todos",JSON.stringify(o))},markTodoAsCompleted:function(e,t){o.splice(e,1,{completed:!0,title:t}),s(Object(m.a)(o)),localStorage.setItem("todos",JSON.stringify(o))},editTodoItem:function(e,t){o.splice(e,1,{title:t,completed:!1}),s(Object(m.a)(o)),localStorage.setItem("todos",JSON.stringify(o))}}):Object(l.jsx)("div",{className:"alert alert-info",children:"What are you thinking, Add your first todo? \ud83d\ude09"})}),o&&o.length>0&&Object(l.jsx)("div",{className:"col-lg-4",children:Object(l.jsxs)("section",{className:"todo-board",children:[Object(l.jsxs)("h3",{className:"d-flex",children:[" \ud83d\udcdd ",Object(l.jsx)("div",{style:{marginRight:"5px"},children:"Todo Board"}),"  ",Object(l.jsx)(R,{color:"secondary",value:i})]}),Object(l.jsx)("hr",{}),Object(l.jsxs)("small",{children:["( ",Object(l.jsx)("span",{children:"List"})," ",Object(l.jsxs)("span",{children:[" ",a.length," / ",o.length]})," )"]}),Object(l.jsx)("hr",{}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"col-6",children:[Object(l.jsx)("strong",{children:"All : "})," ",Object(l.jsx)(p.a,{color:"primary",label:o.length})]}),Object(l.jsxs)("div",{className:"col-6",children:[Object(l.jsx)("strong",{children:"Done : "})," ",Object(l.jsx)(p.a,{color:"secondary",label:a.length})]})]}),Object(l.jsx)("hr",{}),Object(l.jsx)("div",{children:Object(l.jsx)("p",{children:"We don't store data on server. \ud83d\ude42"})})]})})]})]})};c(94),c(95);var E=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(u,{}),Object(l.jsx)(q,{}),Object(l.jsx)(i,{})]})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,143)).then((function(t){var c=t.getCLS,n=t.getFID,o=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),o(e),s(e),a(e)}))};a.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(E,{})}),document.getElementById("root")),M()}},[[96,1,2]]]);
//# sourceMappingURL=main.986fd6ec.chunk.js.map