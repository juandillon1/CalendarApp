(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{118:function(e,t,n){},120:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(8),o=n.n(r),s=n(9),i=n(34),u=n(10),l=n(12),j=n.n(l),d=n(21),b=n(18),m=n.n(b),O="https://calendarappbackendjd.herokuapp.com/api",f=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(O,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})},p=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(O,"/").concat(e),c=localStorage.getItem("token")||"";return"GET"===n?fetch(a,{method:n,headers:{"x-token":c}}):fetch(a,{method:n,headers:{"Content-Type":"application/json","x-token":c},body:JSON.stringify(t)})},v="[ui] Open Modal",h="[ui] Close Modal",x="[event] Set Active",g="[event] Event LogOut",y="[event] Add new",N="[event] Clear active event",w="[event] Event updated",E="[event] Event deleted",k="[event] Events loaded",S="[auth] Finish Checking login state",C="[auth] Login",T="[auth] LogOut",D=function(){return{type:S}},I=function(e){return{type:C,payload:e}},P=function(){return{type:T}},A=n(16),_=n(24),L=n(5),F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(A.a)(t,2),c=n[0],r=n[1],o=function(){r(e)},s=function(e){var t=e.target;r(Object(L.a)(Object(L.a)({},c),{},Object(_.a)({},t.name,t.value)))};return[c,s,o]},M=(n(84),n(2)),R=function(){var e=Object(s.b)(),t=F({lEmail:"juanc@gmail.com",lPassword:"123456"}),n=Object(A.a)(t,2),a=n[0],c=n[1],r=F({rName:"Juan",rEmail:"juancruzdillon@gmail.com",rPassword:"123456",rPassword2:"123456"}),o=Object(A.a)(r,2),i=o[0],u=o[1],l=a.lEmail,b=a.lPassword,O=i.rName,p=i.rEmail,v=i.rPassword,h=i.rPassword2;return Object(M.jsx)("div",{className:"container login-container",children:Object(M.jsxs)("div",{className:"row",children:[Object(M.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(M.jsx)("h3",{children:"Ingreso"}),Object(M.jsxs)("form",{onSubmit:function(t){var n,a;t.preventDefault(),e((n=l,a=b,function(){var e=Object(d.a)(j.a.mark((function e(t){var c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("auth",{email:n,password:a},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(r=e.sent).ok?(localStorage.setItem("token",r.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(I({uid:r.uid,name:r.name}))):m.a.fire("Error",r.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(M.jsx)("div",{className:"form-group",children:Object(M.jsx)("input",{type:"text",className:"form-control",placeholder:"Correo",name:"lEmail",value:l,onChange:c})}),Object(M.jsx)("div",{className:"form-group",children:Object(M.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"lPassword",value:b,onChange:c})}),Object(M.jsx)("div",{className:"form-group",children:Object(M.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(M.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(M.jsx)("h3",{children:"Registro"}),Object(M.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),v!==h)return m.a.fire("Error","Las contrase\xf1as no coinciden","error");var n,a,c;e((n=p,a=v,c=O,function(){var e=Object(d.a)(j.a.mark((function e(t){var r,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("auth/new",{name:c,email:n,password:a},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(I({uid:o.uid,name:o.name}))):m.a.fire("Error",o.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(M.jsx)("div",{className:"form-group",children:Object(M.jsx)("input",{type:"text",className:"form-control",placeholder:"Nombre",name:"rName",value:O,onChange:u})}),Object(M.jsx)("div",{className:"form-group",children:Object(M.jsx)("input",{type:"email",className:"form-control",placeholder:"Correo",name:"rEmail",value:p,onChange:u})}),Object(M.jsx)("div",{className:"form-group",children:Object(M.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"rPassword",value:v,onChange:u})}),Object(M.jsx)("div",{className:"form-group",children:Object(M.jsx)("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",name:"rPassword2",value:h,onChange:u})}),Object(M.jsx)("div",{className:"form-group",children:Object(M.jsx)("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"})})]})]})]})})},G=n(15),J=n.n(G),V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(L.a)(Object(L.a)({},e),{},{end:J()(e.end).toDate(),start:J()(e.start).toDate()})}))},H=function(e){return{type:y,payload:e}},U=function(){return{type:N}},z=function(e){return{type:w,payload:e}},B=function(){return{type:E}},X=function(e){return{type:k,payload:e}},q=function(){var e=Object(s.c)((function(e){return e.auth})).name,t=Object(s.b)();return Object(M.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4",children:[Object(M.jsx)("span",{className:"navbar-brand",children:e.charAt(0).toUpperCase()+e.slice(1)}),Object(M.jsxs)("button",{className:"btn btn-outline-danger",onClick:function(){t({type:g}),t((function(e){localStorage.clear(),e(P())}))},children:[Object(M.jsx)("i",{className:"fas fa-sign-out-alt p-1"}),Object(M.jsx)("span",{children:"Salir"})]})]})},K={allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}},Q=n(52),W=(n(87),function(e){var t=e.event,n=t.title,a=t.user;return Object(M.jsxs)("div",{children:[Object(M.jsxs)("span",{children:[n," - "]}),Object(M.jsx)("strong",{children:a.name})]})}),Y=(n(88),n(47)),Z=n.n(Y),$=n(48),ee=n.n($),te=function(){return{type:v}},ne={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};Z.a.setAppElement("#root");var ae=J()().minutes(0).seconds(0).add(1,"hours"),ce=J()().clone(ae).add(1,"hours"),re={title:"",notes:"",start:ae.toDate(),end:ce.toDate()},oe=function(){var e=Object(a.useState)(ae.toDate()),t=Object(A.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(ce.toDate()),o=Object(A.a)(r,2),i=o[0],u=o[1],l=Object(a.useState)(!0),b=Object(A.a)(l,2),O=b[0],f=b[1],v=Object(s.b)(),x=Object(s.c)((function(e){return e.ui})).modalOpen,g=Object(s.c)((function(e){return e.calendar})).activeEvent,y=Object(a.useState)(re),N=Object(A.a)(y,2),w=N[0],E=N[1],k=w.notes,S=w.title,C=w.start,T=w.end;Object(a.useEffect)((function(){E(g||re)}),[g,E]);var D=function(e){var t=e.target;E(Object(L.a)(Object(L.a)({},w),{},Object(_.a)({},t.name,t.value)))},I=function(){v({type:h}),v(U())};return Object(M.jsxs)(Z.a,{isOpen:x,onRequestClose:I,style:ne,className:"modal",overlayClassName:"modal-fondo",closeTimeoutMS:200,children:[Object(M.jsxs)("h1",{children:[" ",g?"Editar Evento":"Nuevo Evento"," "]}),Object(M.jsx)("hr",{}),Object(M.jsxs)("form",{className:"container",onSubmit:function(e){e.preventDefault();var t,n=J()(C),a=J()(T);return n.isSameOrAfter(a)?m.a.fire("Error","La fecha FIN debe ser mayor a la fecha de inicio","error"):S.trim().length<2?f(!1):(v(g?(t=w,function(){var e=Object(d.a)(j.a.mark((function e(n){var a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p("events/".concat(t.id),t,"PUT");case 3:return a=e.sent,e.next=6,a.json();case 6:(c=e.sent).ok?n(z(t)):m.a.fire("Error",c.msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(d.a)(j.a.mark((function t(n,a){var c,r,o,s,i;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p("events",e,"POST");case 2:return c=t.sent,t.next=5,c.json();case 5:r=t.sent,o=a().auth,s=o.uid,i=o.name;try{r.ok&&(e.id=r.evento.id,e.user={_id:s,name:i},n(H(e)))}catch(u){console.log(u)}case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(w)),f(!0),void I())},children:[Object(M.jsxs)("div",{className:"form-group",children:[Object(M.jsx)("label",{children:"Fecha y hora inicio"}),Object(M.jsx)(ee.a,{onChange:function(e){c(e),E(Object(L.a)(Object(L.a)({},w),{},{start:e}))},value:n,className:"form-control"})]}),Object(M.jsxs)("div",{className:"form-group",children:[Object(M.jsx)("label",{children:"Fecha y hora fin"}),Object(M.jsx)(ee.a,{onChange:function(e){u(e),E(Object(L.a)(Object(L.a)({},w),{},{end:e}))},value:i,className:"form-control",minDate:n})]}),Object(M.jsx)("hr",{}),Object(M.jsxs)("div",{className:"form-group",children:[Object(M.jsx)("label",{children:"Titulo y notas"}),Object(M.jsx)("input",{type:"text",className:"form-control ".concat(!O&&"is-invalid"),placeholder:"T\xedtulo del evento",name:"title",autoComplete:"off",value:S,onChange:D}),Object(M.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Una descripci\xf3n corta"})]}),Object(M.jsxs)("div",{className:"form-group",children:[Object(M.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:k,onChange:D}),Object(M.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Informaci\xf3n adicional"})]}),Object(M.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(M.jsx)("i",{className:"far fa-save"}),Object(M.jsx)("span",{children:" Guardar"})]})]})]})},se=function(){var e=Object(s.b)();return Object(M.jsx)("button",{className:"btn btn-primary fab",onClick:function(){e(te())},children:Object(M.jsx)("i",{className:"fas fa-plus"})})},ie=function(){var e=Object(s.b)();return Object(M.jsxs)("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(d.a)(j.a.mark((function e(t,n){var a,c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().calendar.activeEvent.id,e.prev=1,e.next=4,p("events/".concat(a),{},"DELETE");case 4:return c=e.sent,e.next=7,c.json();case 7:(r=e.sent).ok?t(B()):m.a.fire("Error",r.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(M.jsx)("i",{className:"fas fa-trash"}),Object(M.jsx)("span",{children:" Borrar Evento"})]})};J.a.locale("es");var ue=Object(Q.b)(J.a),le=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.calendar})),n=t.events,c=t.activeEvent,r=Object(s.c)((function(e){return e.auth})).uid,o=Object(a.useState)(localStorage.getItem("lastView")||"month"),i=Object(A.a)(o,2),u=i[0],l=i[1];Object(a.useEffect)((function(){e(function(){var e=Object(d.a)(j.a.mark((function e(t){var n,a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("events",{});case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent).ok&&(c=V(a.eventos),t(X(c)));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]);return Object(M.jsxs)("div",{className:"calendar-screen",children:[Object(M.jsx)(q,{}),Object(M.jsx)(Q.a,{localizer:ue,events:n,startAccesor:"start",endAccesor:"end",messages:K,eventPropGetter:function(e,t,n,a){return{style:{backgroundColor:r===e.user._id?"#367CF7":"#465660",borderRadius:"0px",opacity:.8,display:"block",color:"white"}}},components:{event:W},onDoubleClickEvent:function(t){e(te())},onSelectEvent:function(t){e({type:x,payload:t})},onView:function(e){l(e),localStorage.setItem("lastView",e)},view:u,onSelectSlot:function(t){e(U())},selectable:!0}),Object(M.jsx)(se,{}),c&&Object(M.jsx)(ie,{}),Object(M.jsx)(oe,{})]})},je=n(37),de=["isAuthenticated","component"],be=function(e){var t=e.isAuthenticated,n=e.component,a=Object(je.a)(e,de);return Object(M.jsx)(u.b,Object(L.a)(Object(L.a)({},a),{},{component:function(e){return t?Object(M.jsx)(n,Object(L.a)({},e)):Object(M.jsx)(u.a,{to:"/login"})}}))},me=["isAuthenticated","component"],Oe=function(e){var t=e.isAuthenticated,n=e.component,a=Object(je.a)(e,me);return Object(M.jsx)(u.b,Object(L.a)(Object(L.a)({},a),{},{component:function(e){return t?Object(M.jsx)(u.a,{to:"/"}):Object(M.jsx)(n,Object(L.a)({},e))}}))},fe=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.auth})),n=t.checking,c=t.uid;return Object(a.useEffect)((function(){e(function(){var e=Object(d.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("auth/renew",{});case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent).ok?(localStorage.setItem("token",a.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(I({uid:a.uid,name:a.name}))):(m.a.fire("Error",a.msg,"error"),t(D()));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),n?Object(M.jsx)("i",{className:"fas fa-sync fa-spin fa-5x",style:{position:"absolute",left:"50%"}}):Object(M.jsx)(M.Fragment,{children:Object(M.jsx)(i.a,{children:Object(M.jsx)("div",{children:Object(M.jsxs)(u.d,{children:[Object(M.jsx)(Oe,{exact:!0,path:"/login",component:R,isAuthenticated:!!c}),Object(M.jsx)(be,{exact:!0,path:"/",component:le,isAuthenticated:!!c}),Object(M.jsx)(u.a,{to:"/"})]})})})})},pe=n(25),ve=n(65),he={checking:!0},xe=n(53),ge={events:[],activeEvent:null},ye={modalOpen:!1},Ne=Object(pe.b)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(L.a)(Object(L.a)({},e),{},{modalOpen:!0});case h:return Object(L.a)(Object(L.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(L.a)(Object(L.a)({},e),{},{activeEvent:t.payload});case y:return Object(L.a)(Object(L.a)({},e),{},{events:[].concat(Object(xe.a)(e.events),[t.payload])});case N:return Object(L.a)(Object(L.a)({},e),{},{activeEvent:null});case w:return Object(L.a)(Object(L.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case E:return Object(L.a)(Object(L.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case k:return Object(L.a)(Object(L.a)({},e),{},{events:Object(xe.a)(t.payload)});case g:return Object(L.a)(Object(L.a)({},e),{},{activeEvent:null});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(L.a)(Object(L.a)(Object(L.a)({},e),t.payload),{},{checking:!1});case S:return Object(L.a)(Object(L.a)({},e),{},{checking:!1});case T:return{checking:!1};default:return e}}}),we="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||pe.c,Ee=Object(pe.d)(Ne,we(Object(pe.a)(ve.a))),ke=function(){return Object(M.jsx)(s.a,{store:Ee,children:Object(M.jsx)(fe,{})})};n(118);o.a.render(Object(M.jsx)(c.a.StrictMode,{children:Object(M.jsx)(ke,{})}),document.getElementById("root"))},84:function(e,t,n){}},[[120,1,2]]]);
//# sourceMappingURL=main.5f4ce711.chunk.js.map