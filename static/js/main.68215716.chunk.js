(this["webpackJsonpmeu-primeiro-app"]=this["webpackJsonpmeu-primeiro-app"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),a=n(5),r=n.n(a),i=(n(4),n(0));function o(){return Object(i.jsx)("div",{children:Object(i.jsx)("h1",{className:"titulo-principal",children:"Listagem de Usu\xe1rios"})})}var u=n(3),d=n.n(u),j=n(6),l=n(7),m=n(8),h=n(10),p=n(9),b=(n(17),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={dados:[]},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=Object(j.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://www.mocky.io/v2/5d531c4f2e0000620081ddce",e.next=3,fetch("https://www.mocky.io/v2/5d531c4f2e0000620081ddce");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,this.setState({dados:n});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(i.jsx)("div",{className:"dados-listagem",children:this.state.dados.map((function(e){return Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:Object(i.jsx)("img",{className:"thumbnail",src:e.img,alt:"Foto do usu\xe1rio"})},e.img),Object(i.jsxs)("li",{className:"nomedeusuario",children:["Nome do Usu\xe1rio: ",e.name]},e.name),Object(i.jsxs)("li",{className:"id-username",children:["ID: ",e.id," - Username: ",e.username]},e.id),Object(i.jsx)("li",{children:Object(i.jsx)("button",{className:"botao-pagar",children:"Pagar"})}),Object(i.jsx)("hr",{})]})}))})}}]),n}(s.Component));r.a.render(Object(i.jsxs)(c.a.StrictMode,{children:[Object(i.jsx)(o,{}),Object(i.jsx)(b,{})]}),document.getElementById("root"))},4:function(e,t,n){}},[[18,1,2]]]);
//# sourceMappingURL=main.68215716.chunk.js.map