(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,t){},117:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(48),o=a.n(r),c=a(7),i=a.n(c),u=a(13),l=a(14),m=a(15),p=a(19),g=a(16),d=a(20),h=(a(63),a(49)),f=new(a.n(h).a),v=function(){return f.first()},b=a(18),w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(s)))).state={key:0},a.height=0,a.hasScrolled=!0,a.getKey=function(){return a.setState({key:a.state.key+1}),a.state.key},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidUpdate",value:function(){window.scrollY===this.height-window.innerHeight&&window.scrollTo(0,document.body.scrollHeight),this.height=document.body.scrollHeight}},{key:"render",value:function(){var e=0;return s.a.createElement("ul",{id:"messages"},this.props.messages.map(function(t){return s.a.createElement("li",{key:e++},t)}))}}]),t}(n.Component),y=function(e){var t=e.users,a=e.user,n=0;return s.a.createElement("ul",{id:"users"},s.a.createElement("li",null,"Online users:"),t.map(function(e){return e===a?s.a.createElement("li",{key:n++},e," ",s.a.createElement("span",{id:"me"},"(you)")):s.a.createElement("li",{key:n++},e)}))},E=a(52),O=a.n(E),k=function(){var e=Object(u.a)(i.a.mark(function e(t){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.post("/api/login",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),j=function(e){var t=e.app,a=t.props,n=a.logged,r=a.username,o=a.password;return n?s.a.createElement("button",{id:"users",onClick:t.logout},"Log out"):s.a.createElement("div",null,s.a.createElement("form",{onSubmit:t.login},"Username:",s.a.createElement("input",{type:"text",value:r,onChange:t.handleNameChange}),"Password:",s.a.createElement("input",{type:"password",value:o,onChange:t.handlePwChange}),s.a.createElement("button",null,"Log in")),s.a.createElement("a",{href:"/api/signup"},s.a.createElement("button",null,"Register")))},N=a(53),S=a.n(N),I=a(54),C=a.n(I),U=function(e){var t=e.onEmojiClick,a={display:e.visible?"":"none"};return s.a.createElement("div",{id:"emojiBox",style:a},s.a.createElement(C.a,{onEmojiClick:t,preload:!0}))},G=function(e){var t=e.app;return s.a.createElement("div",null,s.a.createElement(U,{onEmojiClick:function(e,a){var n=t.props;(0,n.dispatch)({type:"typing",msg:n.message+(new S.a).replace_colons(":".concat(a.name,":"))}),document.getElementById("m").focus()},visible:t.state.emoji}),s.a.createElement("form",{action:"",onSubmit:t.sendIn,className:"message"},s.a.createElement("input",{id:"m",autoComplete:"off",value:t.props.message,onChange:t.handleChange}),s.a.createElement("div",{onClick:function(){t.setState({emoji:!t.state.emoji})},id:"emoji"},s.a.createElement("i",{className:"far fa-grin fa-2x"})),s.a.createElement("button",null,"Send")))},L=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(s)))).state={emoji:!1},a.sendIn=function(e){e.preventDefault();var t=a.props;(0,t.dispatch)({type:"chat message",msg:t.user+": "+t.message})},a.handleChange=function(e){(0,a.props.dispatch)({type:"typing",msg:e.target.value})},a.handleNameChange=function(e){(0,a.props.dispatch)({type:"TYPING_USERNAME",username:e.target.value})},a.handlePwChange=function(e){(0,a.props.dispatch)({type:"TYPING_PASSWORD",password:e.target.value})},a.login=function(){var e=Object(u.a)(i.a.mark(function e(t){var n,s,r,o,c,u;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n=a.props,s=n.dispatch,r=n.username,o=n.password,e.next=5,k({username:r,password:o});case 5:c=e.sent,s({type:"LOGIN",user:c}),window.localStorage.setItem("loggedUserJSON",JSON.stringify(c)),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),u=a.props.dispatch,console.log("login failed"),u({type:"FAILED_LOGIN"});case 15:case"end":return e.stop()}},e,this,[[1,10]])}));return function(t){return e.apply(this,arguments)}}(),a.logout=function(e){(0,a.props.dispatch)({type:"LOGOUT",name:v()})},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=window.localStorage.getItem("loggedUserJSON"),t=this.props.dispatch;e?t({type:"LOGIN",user:JSON.parse(e)}):t({type:"username",name:v()})}},{key:"render",value:function(){var e=this.props,t=e.messages,a=e.persons,n=e.user;return s.a.createElement("div",{className:"App"},s.a.createElement(w,{messages:t}),s.a.createElement("div",{id:"rightBar"},s.a.createElement(j,{app:this}),s.a.createElement(y,{users:a,user:n})),s.a.createElement(G,{app:this}))}}]),t}(n.Component),x=Object(b.b)(function(e){return{persons:e.persons,messages:e.messages,message:e.message,user:e.user,logged:e.logged,username:e.username,password:e.password,loggedUser:e.user}})(L);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=a(55),P=a.n(A)()("http://localhost:3001"),D=function(e){return P.on("chat message",function(t){e({type:"socket message",msg:t})}),P.on("users",function(t){e({type:"users",users:t})}),P},J=a(17),T=a(4),_=function(e,t){var a=e.persons;return a.includes(e.user)?a[a.indexOf(e.user)]=t:a.push(t),a},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{persons:[],messages:[],message:"",user:"",logged:!1,username:"",password:"",loggedUser:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"chat message":e=Object(T.a)({},e,{message:""}),Y&&Y.emit("chat message",t.msg);break;case"username":e=Object(T.a)({},e,{user:t.name}),Y&&Y.emit("connected",e.user);break;case"typing":e=Object(T.a)({},e,{message:t.msg});break;case"socket message":e=Object(T.a)({},e,{messages:e.messages.concat(t.msg)});break;case"users":e=Object(T.a)({},e,{persons:t.users});break;case"TYPING_USERNAME":e=Object(T.a)({},e,{username:t.username});break;case"TYPING_PASSWORD":e=Object(T.a)({},e,{password:t.password});break;case"LOGIN":Y&&Y.emit("log",t.user.username),e=Object(T.a)({},e,{persons:_(e,t.user.username),user:t.user.username,username:"",password:"",loggedUser:t.user,logged:!0});break;case"LOGOUT":window.localStorage.removeItem("loggedUserJSON"),Y&&Y.emit("log",t.name),e=Object(T.a)({},e,{persons:_(e,t.name),user:t.name,loggedUser:null,logged:!1});break;case"FAILED_LOGIN":e=Object(T.a)({},e,{username:"",password:""})}return e};a.d(t,"socket",function(){return Y});var R=Object(J.b)(B),Y=D(R.dispatch);o.a.render(s.a.createElement(b.a,{store:R},s.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},56:function(e,t,a){e.exports=a(117)},63:function(e,t,a){}},[[56,2,1]]]);
//# sourceMappingURL=main.4c48dbd8.chunk.js.map