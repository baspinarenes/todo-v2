(this["webpackJsonphw14--todo-react"]=this["webpackJsonphw14--todo-react"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},21:function(e,t,c){"use strict";c.r(t);var o=c(1),n=c.n(o),s=c(8),a=c.n(s),i=(c(14),c(2)),r=(c(15),c(7)),l=c(0);var d=function(e){var t=e.todo,c=e.todos,n=e.setTodos,s=e.isMobile,a=Object(o.useState)(!1),d=Object(i.a)(a,2),u=d[0],j=d[1];return console.log(s),Object(l.jsxs)("li",{onMouseOver:function(e){e.stopPropagation(),j(!0)},onMouseLeave:function(e){e.stopPropagation(),j(!1)},onClick:function(e){n(c.map((function(e){return e.id===t.id?Object(r.a)(Object(r.a)({},e),{},{isCompleted:!e.isCompleted}):e})))},className:"todo-item ".concat(t.isCompleted?"todo-item-completed":""),children:[Object(l.jsx)("span",{className:"text",children:t.text}),!1===s&&u?Object(l.jsx)("button",{onClick:function(e){e.stopPropagation(),n(c.filter((function(e){return e.id!==t.id})))},className:"remove-btn",children:Object(l.jsx)("i",{className:"fas fa-times"})}):null]})},u=c(9);var j=function(){var e=Object(o.useState)(new Date),t=Object(i.a)(e,2),c=t[0],n=t[1];Object(o.useEffect)((function(){var e=setInterval((function(){n(new Date)}),1e3);return function(){clearInterval(e)}}),[]);var s={year:"numeric",month:"numeric",day:"numeric"},a=c.toLocaleTimeString("tr-TR",s).slice(0,-9),r=c.toLocaleTimeString("tr-TR",s).slice(-8);return Object(l.jsx)("div",{className:"date",children:"".concat(a," ").concat(r)})};var b=function(e){var t=e.inputText,c=e.setInputText,o=e.todos,n=e.setTodos;return Object(l.jsxs)("div",{className:"todo-header",children:[Object(l.jsxs)("div",{className:"todo-header-top",children:[Object(l.jsx)(j,{}),Object(l.jsx)("button",{onClick:function(){n([]),localStorage.clear()},className:"clear-button",children:Object(l.jsx)("i",{className:"fas fa-sync-alt"})})]}),Object(l.jsx)("input",{autoFocus:!0,className:"input",type:"text",value:t,onChange:function(e){c(e.target.value)},onKeyDown:function(e){if("Enter"===e.key){if(""===t)alert("To-do i\xe7in a\xe7\u0131klama girilmedi.");else{var s={id:o.length+1,text:t,isCompleted:!1};n([].concat(Object(u.a)(o),[s]))}c("")}},placeholder:"Bug\xfcn neler yapmak istiyorsun?"})]})};var m=function(e){var t=e.setFilter,c=Object(o.useState)(!1),n=Object(i.a)(c,2),s=n[0],a=n[1],r=Object(o.useState)(!1),d=Object(i.a)(r,2),u=d[0],j=d[1],b=function(e){"show-completed"===e.target.className?e.target.checked?(a(!0),j(!1),t("completed")):(a(!1),t("all")):e.target.checked?(a(!1),j(!0),t("nompleted")):(j(!1),t("all"))};return Object(l.jsxs)("div",{className:"todo-footer",children:[Object(l.jsxs)("div",{className:"item",children:[Object(l.jsx)("input",{checked:s,onChange:b,type:"checkbox",className:"show-completed"}),Object(l.jsx)("label",{htmlFor:"show-completed",children:"Tamamlananlar"})]}),Object(l.jsxs)("div",{className:"item",children:[Object(l.jsx)("input",{checked:u,onChange:b,type:"checkbox",className:"show-nompleted"}),Object(l.jsx)("label",{htmlFor:"show-nompleted",children:"Yap\u0131lacaklar"})]})]})},O=c(6);c(20);var f=function(){var e=Object(o.useState)(""),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(o.useState)([]),a=Object(i.a)(s,2),r=a[0],u=a[1],j=Object(o.useState)(""),f=Object(i.a)(j,2),p=f[0],h=f[1],x=Object(o.useState)([]),v=Object(i.a)(x,2),w=v[0],g=v[1],S=Object(o.useState)(!1),N=Object(i.a)(S,2),T=N[0],k=N[1];return Object(o.useEffect)((function(){k(window.innerWidth<=380)}),[T]),Object(o.useEffect)((function(){localStorage.getItem("todos")&&u(JSON.parse(localStorage.getItem("todos")))}),[]),Object(o.useEffect)((function(){switch(p){case"completed":g(r.filter((function(e){return!0===e.isCompleted})));break;case"nompleted":g(r.filter((function(e){return!1===e.isCompleted})));break;default:g(r)}localStorage.setItem("todos",JSON.stringify(r))}),[r,p]),function(){var e=Object(o.useState)(0),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(o.useLayoutEffect)((function(){function e(){n(window.innerWidth)}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),c}()>450?Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(b,{inputText:c,setInputText:n,todos:r,setTodos:u}),Object(l.jsx)("div",{className:"todo-body",children:Object(l.jsx)("ul",{className:"todo-list",children:w.map((function(e){return Object(l.jsx)(d,{todo:e,todos:r,setTodos:u,isMobile:!1})}))})}),Object(l.jsx)(m,{setFilter:h})]}):Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(b,{inputText:c,setInputText:n,todos:r,setTodos:u}),Object(l.jsx)("div",{className:"todo-body-mobile",children:Object(l.jsx)("ul",{className:"todo-list",children:Object(l.jsx)(O.SwipeableList,{threshold:.9,children:w.map((function(e){return Object(l.jsx)(O.SwipeableListItem,{scrollStartThreshold:"2",swipeStartThreshold:"2",swipeLeft:{content:Object(l.jsx)("div",{className:"swipe-left",children:"Sil"}),action:function(){return u(r.filter((function(t){return t.id!==e.id})))}},onSwipeProgress:function(e){return console.info("Swipe progress: ".concat(e,"%"))},children:Object(l.jsx)(d,{todo:e,todos:r,setTodos:u,isMobile:!0})})}))})})}),Object(l.jsx)(m,{setFilter:h})]})};a.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.48b479a2.chunk.js.map