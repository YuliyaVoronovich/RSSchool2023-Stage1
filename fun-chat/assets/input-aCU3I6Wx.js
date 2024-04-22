import{s as c,B as E}from"./index-D9VmNkH7.js";import{p as n}from"./modal-C5NOLg88.js";const m="127.0.0.1:4000",M="ws";var r=(o=>(o.ERROR="ERROR",o.UserLogin="USER_LOGIN",o.UserLogout="USER_LOGOUT",o.UserExternalLogin="USER_EXTERNAL_LOGIN",o.UserExternalLogout="USER_EXTERNAL_LOGOUT",o.AllAuthenticatedUsers="USER_ACTIVE",o.AllInAuthenticatedUsers="USER_INACTIVE",o.MessageReceived="MSG_SEND",o.MessageHistory="MSG_FROM_USER",o.MessageDeliver="MSG_DELIVER",o.MessageDelete="MSG_DELETE",o))(r||{});function l(o,s,e){try{return JSON.stringify({id:o,type:s,payload:e})}catch(t){return console.error("Error serializing message:",t),""}}class v{socket;roomName;constructor(){this.socket=this.joinBuildWSClient()}sendSocketMessage(s){return new Promise((e,t)=>{if(this.socket&&this.socket.readyState===WebSocket.OPEN)try{this.socket.send(s),e(!0)}catch(i){console.error(i),t(new Error("Error sending message to server"))}else t(new Error("Socket is not open"))})}joinBuildWSClient(){const s=new WebSocket(`${M}://${m}`);return s.onopen=()=>{if(n.publish("connection",{connection:!0}),c.checkUser("user")){const e=c.getUser("user")?.login,t=c.getUser("user")?.password;e&&t&&this.login("id",e,t).catch(()=>{})}},s.onmessage=e=>{this.stateUpdater(e)},s.onclose=()=>{n.publish("error",{error:"Socket is closed. Reconnect will be attempted..."}),setTimeout(()=>{this.socket=this.joinBuildWSClient()},1e3)},s.onerror=e=>{console.error("ws connection error",e),s.close()},s}stateUpdater(s){try{const e=JSON.parse(s.data),{type:t}=e;if(t===r.UserLogin){const{isLogined:i,login:a}=e.payload.user;n.publish("userLoggedIn",{isLogined:i,login:a})}if(t===r.ERROR&&n.publish("error",{error:e.payload.error}),t===r.AllAuthenticatedUsers&&n.publish("usersActive",{users:e.payload.users}),t===r.AllInAuthenticatedUsers&&n.publish("usersInActive",{users:e.payload.users}),t===r.UserExternalLogin){const{isLogined:i,login:a}=e.payload.user;n.publish("userExternalLogin",{isLogined:i,login:a})}if(t===r.UserExternalLogout){const{isLogined:i,login:a}=e.payload.user;n.publish("userExternalLogout",{isLogined:i,login:a})}if(t===r.MessageReceived){const{id:i,text:a,to:h,from:g,datetime:U,status:p}=e.payload.message;n.publish("messageReceived",{id:i,text:a,from:g,to:h,datetime:U,status:p})}t===r.MessageHistory&&n.publish("messageHistory",{messages:e.payload.messages}),t===r.MessageDeliver&&n.publish("messageDeliver",{message:{id:e.payload.message.id,isDelivered:e.payload.message.status.isDelivered}}),t===r.MessageDelete&&n.publish("messageDelete",{message:{id:e.payload.message.id,isDeleted:e.payload.message.status.isDeleted}})}catch(e){console.error(e)}}login(s,e,t){const i=l(s,r.UserLogin,{user:{login:e,password:t}});return this.sendSocketMessage(i)}logout(s,e,t){const i=l(s,r.UserLogout,{user:{login:e,password:t}});return this.sendSocketMessage(i)}allActiveUsers(s){const e=l(s,r.AllAuthenticatedUsers,null);return this.sendSocketMessage(e)}allInActiveUsers(s){const e=l(s,r.AllInAuthenticatedUsers,null);return this.sendSocketMessage(e)}sendMsg(s,e,t){const i=l(s,r.MessageReceived,{message:{text:e,to:t}});return this.sendSocketMessage(i)}getHistoryMsg(s,e){const t=l(s,r.MessageHistory,{user:{login:e}});return this.sendSocketMessage(t)}deleteMsg(s,e){const t=l(s,r.MessageDelete,{message:{id:e}});return this.sendSocketMessage(t)}}const u=new v,d="222";class S{login(s,e){u.login(d,s,e).catch(()=>{})}logout(s,e){u.logout(d,s,e).catch(()=>{})}allActiveUsers(){u.allActiveUsers(d).catch(()=>{})}allInActiveUsers(){u.allInActiveUsers(d).catch(()=>{})}reLogin=()=>{if(c.checkUser("user")){const s=c.getUser("user")?.login,e=c.getUser("user")?.password;s&&e&&(u.socket.onopen=()=>{this.login(s,e),this.allActiveUsers(),this.allInActiveUsers()})}}}const R=new S;class f extends E{constructor({type:s,className:e,name:t,placeholder:i,value:a,disabled:h,onInput:g}){super({tag:"input",className:e,type:s,placeholder:i,disabled:h}),t&&(this.node.name=t),a&&(this.node.value=a),g&&this.addListener("input",()=>g(this.getValue()))}getValue(){return this.node.value}setValue(s){this.node.value=s}}export{f as I,u as s,R as u};
