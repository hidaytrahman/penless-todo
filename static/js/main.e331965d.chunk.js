(this["webpackJsonppenless-todo"]=this["webpackJsonppenless-todo"]||[]).push([[0],{100:function(e,t,o){"use strict";o.r(t);var c=o(0),n=o.n(c),s=o(11),i=o.n(s),a=(o(83),o(4)),r=function(){return Object(a.jsx)("footer",{className:"main-footer",children:Object(a.jsxs)("div",{className:"container text-center",children:["Created by ",Object(a.jsx)("a",{href:"https://github.com/hidaytrahman",children:"Hidayt Rahman"})]})})},l=o(15),d=o(127),j=o(130),h=o(131),u=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),o=t[0],n=t[1];Object(c.useEffect)((function(){"dark"===localStorage.getItem("theme")?(document.body.classList.add("dark-theme"),n(!0)):(n(!1),document.body.classList.remove("dark-theme"))}),[o]);return Object(a.jsx)("header",{className:"main-header",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-sm-10",children:[Object(a.jsx)("h1",{children:"\ud83d\udd8a\ufe0fLess - To Do "}),Object(a.jsx)("h3",{children:"PenLess To Do gives you focus, from work to play. \ud83d\ude0e"})]}),Object(a.jsx)("div",{className:"col-sm-2",children:Object(a.jsx)(d.a,{className:"d-flex align-items-end",children:Object(a.jsx)(j.a,{control:Object(a.jsx)(h.a,{checked:o,onChange:function(){n(!o),document.body.classList.toggle("dark-theme");var e=document.body.classList.contains("dark-theme")?"dark":"light";localStorage.setItem("theme",e)}}),label:"Dark Mode"})})})]})})})},b=o(144),m=o(55),O=function(e,t){var o=Object(c.useState)(0),n=Object(l.a)(o,2),s=n[0],i=n[1];return Object(c.useEffect)((function(){var o=Math.ceil(e/t*100);i(o)}),[e,t]),s},x=o(21),f=o(13),v=function e(t){Object(x.a)(this,e),this.rootStore=t,Object(f.d)(this)},p=o(41),g=function(){function e(t){Object(x.a)(this,e),this.todos=localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[],this.rootStore=t,Object(f.d)(this,{},{autoBind:!0})}return Object(p.a)(e,[{key:"addTodo",value:function(e){this.todos.push(e),localStorage.setItem("todos",JSON.stringify(this.todos))}},{key:"deleteTodo",value:function(e){this.todos=this.todos.filter((function(t,o){return o!==e})),localStorage.setItem("todos",JSON.stringify(this.todos))}},{key:"editTodo",value:function(e,t){this.todos.splice(e,1,t),localStorage.setItem("todos",JSON.stringify(this.todos))}},{key:"markCompleted",value:function(e){this.todos.splice(e,1,{completed:!0,title:this.todos[e].title}),localStorage.setItem("todos",JSON.stringify(this.todos))}}]),e}(),y=Object(c.createContext)(new function e(){Object(x.a)(this,e),this.noteStore=new v(this),this.todoStore=new g(this)}),N=function(){return Object(c.useContext)(y)},S=o(45),k=o(140),T=o(133),w=o(68),I=function(e){var t,o,n,s,i=e.addTodoItem,r=Object(c.useRef)(null),l=Object(w.a)(),d=l.register,j=l.handleSubmit,h=l.formState.errors;return Object(a.jsx)("form",{onSubmit:j((function(e){i(e.todoTitle),r.current.value="",r.current.focus()})),children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-sm-8 mb-2",children:Object(a.jsx)(k.a,Object(S.a)({error:"required"===(null===(t=h.todoTitle)||void 0===t?void 0:t.type)||"maxLength"===(null===(o=h.todoTitle)||void 0===o?void 0:o.type),label:"Whats needs to be done? \ud83e\udd14",helperText:"required"===(null===(n=h.todoTitle)||void 0===n?void 0:n.type)?"Its required \ud83d\ude1f":"maxLength"===(null===(s=h.todoTitle)||void 0===s?void 0:s.type)&&"You've exceeds the max limits. Should not be more then 50 letter \ud83d\ude44",variant:"filled",fullWidth:!0,inputRef:r},d("todoTitle",{required:{value:!0,message:"Please write what is in your mind? \ud83e\udd14"},maxLength:50})))}),Object(a.jsx)("div",{className:"col-sm-4 mb-2",children:Object(a.jsx)(T.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,children:"Add"})})]})})},C=o(132),L=o(134),D=o(135),J=o(143),W=o(136),A=o(137),F=o(103),P=o(67),R=o.n(P),q=Object(m.a)((function(){var e=N().todoStore,t=e.todos,o=e.editTodo,n=e.markCompleted,s=e.deleteTodo,i=Object(c.useState)(!1),r=Object(l.a)(i,2),d=r[0],j=r[1],h=Object(c.useState)(0),u=Object(l.a)(h,2),b=u[0],m=u[1],O=Object(c.useRef)(null),x=function(){return Object(a.jsx)("div",{className:"editFormWrapper",children:Object(a.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),o(b,{title:O.current.value,completed:!1}),m(0),j(!1)}(e)},children:[Object(a.jsx)("input",{type:"text",defaultValue:t[b].title,className:"custom-input",ref:O}),Object(a.jsx)(T.a,{type:"submit",variant:"contained",color:"primary",children:"Update"})]})})};return Object(a.jsxs)("div",{children:[Object(a.jsx)(C.a,{className:"todo-list-wrapper",children:t&&t.map((function(e,t){return Object(a.jsxs)(L.a,{role:void 0,dense:!0,button:!0,onDoubleClick:function(){j(!0),m(t)},className:e.completed&&"todo-completed",children:[d&&t===b&&x(),Object(a.jsx)(D.a,{children:Object(a.jsx)(J.a,{color:"primary",checked:e.completed,disabled:e.completed,onChange:function(){return n(t)},value:!0,variant:"secondary",name:"radio-button-demo",inputProps:{"aria-label":"A"}})}),Object(a.jsx)(W.a,{style:{textDecoration:e.completed&&"line-through"},children:e.title}),Object(a.jsx)(A.a,{children:Object(a.jsx)(F.a,{edge:"end","aria-label":"comments",onClick:function(){return s(t)},children:Object(a.jsx)(R.a,{})})})]},t)}))}),Object(a.jsx)("small",{children:"Double click to edit"})]})})),B=(o(96),o(97),o(142)),M=o(138),E=o(46),H=o(139);function U(e){return Object(a.jsxs)(B.a,{position:"relative",display:"inline-flex",children:[Object(a.jsx)(M.a,Object(S.a)({variant:"determinate"},e)),Object(a.jsx)(B.a,{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",children:Object(a.jsx)(E.a,{variant:"caption",component:"div",color:"textSecondary",children:"".concat(Math.round(e.value),"%")})})]})}function V(e){return Object(a.jsx)(B.a,{display:"flex",alignItems:"center",children:Object(a.jsx)(B.a,{width:"100%",mr:1,children:Object(a.jsx)(H.a,Object(S.a)({variant:"determinate"},e))})})}var Y=Object(m.a)((function(){var e=N(),t=e.todoStore,o=e.todoStore.todos,c=o&&o.length>0?o.filter((function(e){return!0===e.completed})):[],n=O(c.length,o.length);return Object(a.jsxs)("section",{className:"container todo-wrapper",children:[Object(a.jsx)("div",{className:"custom-progressbar",children:Object(a.jsx)(V,{value:n,color:"secondary"})}),Object(a.jsx)(I,{addTodoItem:function(e){t.addTodo({title:e,completed:!1})}}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-lg-8",children:o&&o.length>0?Object(a.jsx)(q,{}):Object(a.jsx)("div",{className:"alert alert-info",children:"What are you thinking, Add your first todo? \ud83d\ude09"})}),o&&o.length>0&&Object(a.jsx)("div",{className:"col-lg-4",children:Object(a.jsxs)("section",{className:"todo-board",children:[Object(a.jsxs)("h3",{className:"d-flex",children:[" \ud83d\udcdd ",Object(a.jsx)("div",{style:{marginRight:"5px"},children:"Todo Board"}),"  ",Object(a.jsx)(U,{color:"secondary",value:n})]}),Object(a.jsx)("hr",{}),Object(a.jsxs)("small",{children:["( ",Object(a.jsx)("span",{children:"List"})," ",Object(a.jsxs)("span",{children:[" ",c.length," / ",o.length]})," )"]}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-6",children:[Object(a.jsx)("strong",{children:"All : "})," ",Object(a.jsx)(b.a,{color:"primary",label:o.length})]}),Object(a.jsxs)("div",{className:"col-6",children:[Object(a.jsx)("strong",{children:"Done : "})," ",Object(a.jsx)(b.a,{color:"secondary",label:c.length})]})]}),Object(a.jsx)("hr",{}),Object(a.jsx)("div",{children:Object(a.jsx)("p",{children:"We don't store data on server. \ud83d\ude42"})})]})})]})]})}));o(98),o(99);var z=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(u,{}),Object(a.jsx)(Y,{}),Object(a.jsx)(r,{})]})},G=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,146)).then((function(t){var o=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;o(e),c(e),n(e),s(e),i(e)}))};i.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(z,{})}),document.getElementById("root")),G()},83:function(e,t,o){},96:function(e,t,o){},97:function(e,t,o){},98:function(e,t,o){},99:function(e,t,o){}},[[100,1,2]]]);
//# sourceMappingURL=main.e331965d.chunk.js.map