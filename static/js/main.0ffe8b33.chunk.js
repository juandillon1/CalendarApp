(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{114:function(e,t,a){},116:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(7),r=a.n(s),o=a(60),l=a(9),i=(a(67),a(3)),j=function(){return Object(i.jsx)("div",{className:"container login-container",children:Object(i.jsxs)("div",{className:"row",children:[Object(i.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(i.jsx)("h3",{children:"Ingreso"}),Object(i.jsxs)("form",{children:[Object(i.jsx)("div",{className:"form-group",children:Object(i.jsx)("input",{type:"text",className:"form-control",placeholder:"Correo"})}),Object(i.jsx)("div",{className:"form-group",children:Object(i.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a"})}),Object(i.jsx)("div",{className:"form-group",children:Object(i.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(i.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(i.jsx)("h3",{children:"Registro"}),Object(i.jsxs)("form",{children:[Object(i.jsx)("div",{className:"form-group",children:Object(i.jsx)("input",{type:"text",className:"form-control",placeholder:"Nombre"})}),Object(i.jsx)("div",{className:"form-group",children:Object(i.jsx)("input",{type:"email",className:"form-control",placeholder:"Correo"})}),Object(i.jsx)("div",{className:"form-group",children:Object(i.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a"})}),Object(i.jsx)("div",{className:"form-group",children:Object(i.jsx)("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a"})}),Object(i.jsx)("div",{className:"form-group",children:Object(i.jsx)("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"})})]})]})]})})},d=a(20),b=function(){return Object(i.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4",children:[Object(i.jsx)("span",{className:"navbar-brand",children:"Jose"}),Object(i.jsxs)("button",{className:"btn btn-outline-danger",children:[Object(i.jsx)("i",{className:"fas fa-sign-out-alt p-1"}),Object(i.jsx)("span",{children:"Salir"})]})]})},u={allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}},m=a(47),O=(a(71),function(e){var t=e.event,a=t.title,n=t.user;return Object(i.jsxs)("div",{children:[Object(i.jsxs)("span",{children:[a," - "]}),Object(i.jsx)("strong",{children:n.name})]})}),p=a(14),v=a.n(p),f=(a(73),a(32)),h=a(8),x=a(42),g=a.n(x),N=a(43),y=a.n(N),E=a(59),w=a.n(E),S=a(12),C="[ui] Open Modal",D="[ui] Close Modal",k="[event] Set Active",_="[event] Add new",I="[event] Clear active event",T="[event] Event updated",A="[event] Event deleted",M=function(){return{type:C}},R=function(){return{type:I}},F={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};g.a.setAppElement("#root");var J=v()().minutes(0).seconds(0).add(1,"hours"),V=v()().clone(J).add(1,"hours"),H={title:"",notes:"",start:J.toDate(),end:V.toDate()},L=function(){var e=Object(n.useState)(J.toDate()),t=Object(d.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(V.toDate()),r=Object(d.a)(s,2),o=r[0],l=r[1],j=Object(n.useState)(!0),b=Object(d.a)(j,2),u=b[0],m=b[1],O=Object(S.b)(),p=Object(S.c)((function(e){return e.ui})).modalOpen,x=Object(S.c)((function(e){return e.calendar})).activeEvent,N=Object(n.useState)(H),E=Object(d.a)(N,2),C=E[0],k=E[1],I=C.notes,A=C.title,M=C.start,L=C.end;Object(n.useEffect)((function(){k(x||H)}),[x,k]);var B=function(e){var t=e.target;k(Object(h.a)(Object(h.a)({},C),{},Object(f.a)({},t.name,t.value)))},G=function(){O({type:D}),O(R())};return Object(i.jsxs)(g.a,{isOpen:p,onRequestClose:G,style:F,className:"modal",overlayClassName:"modal-fondo",closeTimeoutMS:200,children:[Object(i.jsxs)("h1",{children:[" ",x?"Editar Evento":"Nuevo Evento"," "]}),Object(i.jsx)("hr",{}),Object(i.jsxs)("form",{className:"container",onSubmit:function(e){e.preventDefault();var t=v()(M),a=v()(L);return t.isSameOrAfter(a)?w.a.fire("Error","La fecha FIN debe ser mayor a la fecha de inicio","error"):A.trim().length<2?m(!1):(O(x?{type:T,payload:C}:function(e){return{type:_,payload:e}}(Object(h.a)(Object(h.a)({},C),{},{id:(new Date).getTime(),user:{_id:"123",name:"Juan"}}))),m(!0),void G())},children:[Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{children:"Fecha y hora inicio"}),Object(i.jsx)(y.a,{onChange:function(e){c(e),k(Object(h.a)(Object(h.a)({},C),{},{start:e}))},value:a,className:"form-control"})]}),Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{children:"Fecha y hora fin"}),Object(i.jsx)(y.a,{onChange:function(e){l(e),k(Object(h.a)(Object(h.a)({},C),{},{end:e}))},value:o,className:"form-control",minDate:a})]}),Object(i.jsx)("hr",{}),Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{children:"Titulo y notas"}),Object(i.jsx)("input",{type:"text",className:"form-control ".concat(!u&&"is-invalid"),placeholder:"T\xedtulo del evento",name:"title",autoComplete:"off",value:A,onChange:B}),Object(i.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Una descripci\xf3n corta"})]}),Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:I,onChange:B}),Object(i.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Informaci\xf3n adicional"})]}),Object(i.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(i.jsx)("i",{className:"far fa-save"}),Object(i.jsx)("span",{children:" Guardar"})]})]})]})},B=function(){var e=Object(S.b)();return Object(i.jsx)("button",{className:"btn btn-primary fab",onClick:function(){e(M())},children:Object(i.jsx)("i",{className:"fas fa-plus"})})},G=function(){var e=Object(S.b)();return Object(i.jsxs)("button",{className:"btn btn-danger fab-danger",onClick:function(){e({type:A})},children:[Object(i.jsx)("i",{className:"fas fa-trash"}),Object(i.jsx)("span",{children:" Borrar Evento"})]})};v.a.locale("es");var P=Object(m.b)(v.a),U=function(){var e=Object(S.b)(),t=Object(S.c)((function(e){return e.calendar})),a=t.events,c=t.activeEvent,s=Object(n.useState)(localStorage.getItem("lastView")||"month"),r=Object(d.a)(s,2),o=r[0],l=r[1];return Object(i.jsxs)("div",{className:"calendar-screen",children:[Object(i.jsx)(b,{}),Object(i.jsx)(m.a,{localizer:P,events:a,startAccesor:"start",endAccesor:"end",messages:u,eventPropGetter:function(e,t,a,n){return{style:{backgroundColor:"#367CF7",borderRadius:"0px",opacity:.8,display:"block",color:"white"}}},components:{event:O},onDoubleClickEvent:function(t){e(M())},onSelectEvent:function(t){e({type:k,payload:t})},onView:function(e){l(e),localStorage.setItem("lastView",e)},view:o,onSelectSlot:function(t){e(R())},selectable:!0}),Object(i.jsx)(B,{}),c&&Object(i.jsx)(G,{}),Object(i.jsx)(L,{})]})},X=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(o.a,{children:Object(i.jsx)("div",{children:Object(i.jsxs)(l.d,{children:[Object(i.jsx)(l.b,{exact:!0,path:"/login",component:j}),Object(i.jsx)(l.b,{exact:!0,path:"/",component:U}),Object(i.jsx)(l.a,{to:"/"})]})})})})},q=a(21),z=a(61),K=a(62),Q={events:[{id:(new Date).getTime(),title:"Cumplea\xf1os",start:v()().toDate(),end:v()().add(2,"hour").toDate(),bgcolor:"#fafafa",notes:"Soplar la vela",user:{_id:"123",name:"Juan"}}],activeEvent:null},W={modalOpen:!1},Y=Object(q.b)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(h.a)(Object(h.a)({},e),{},{modalOpen:!0});case D:return Object(h.a)(Object(h.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(h.a)(Object(h.a)({},e),{},{activeEvent:t.payload});case _:return Object(h.a)(Object(h.a)({},e),{},{events:[].concat(Object(K.a)(e.events),[t.payload])});case I:return Object(h.a)(Object(h.a)({},e),{},{activeEvent:null});case T:return Object(h.a)(Object(h.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case A:return Object(h.a)(Object(h.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});default:return e}}}),Z="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||q.c,$=Object(q.d)(Y,Z(Object(q.a)(z.a))),ee=function(){return Object(i.jsx)(S.a,{store:$,children:Object(i.jsx)(X,{})})};a(114);r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(ee,{})}),document.getElementById("root"))},67:function(e,t,a){}},[[116,1,2]]]);
//# sourceMappingURL=main.0ffe8b33.chunk.js.map