import{B as i,s as d}from"./index-CLh2xS5L.js";import{B as M,M as E,p as n}from"./modal-GpycqBL_.js";import{I as f,s as l,u as g}from"./input-BWR_Zp4G.js";import{L as C}from"./link-DMEPmQNB.js";class L extends i{statusMsg;textMsg;currentTextMsg;currentSender;currentStatus;statusEdit="";container=new i({tag:"div",className:"msg-container card"});constructor({id:e,text:s,from:t,datetime:a,status:r,onContext:o,onClick:c}){const u=d.getUser("user")?.login===t?"name-from":"name-to";super({tag:"div",className:`msg-wrapper ${u}`}),this.setAttribute("id",`${e}`),this.currentTextMsg=s,this.currentSender=t,this.currentStatus={isDelivered:r.isDelivered,isReaded:r.isReaded,isEdited:r.isEdited};const b=new i({tag:"div",className:"msg-container-header"});this.textMsg=new i({tag:"div",className:"msg-text",textContent:`${this.currentTextMsg}`});const x=new i({tag:"div",className:"msg-date",textContent:`${this.setDate(a)}`}),U=d.getUser("user")?.login===t?this.getStatus(r):"";this.statusMsg=new i({tag:"div",className:"msg-status",textContent:`${U}`});const v=d.getUser("user")?.login===t?"You":t,S=new i({tag:"div",className:`msg-name ${u}`,textContent:`${v}`});b.appendChildren([S,x]),this.container.appendChildren([b,this.textMsg,this.statusMsg]),this.appendChildren([this.container]),o&&this.container.addListener("contextmenu",N=>{N.preventDefault(),o(this,e,t)}),c&&this.container.addListener("click",()=>{c()})}setDate=e=>{const s=Intl.DateTimeFormat().resolvedOptions().timeZone,t=new Date(e);return new Intl.DateTimeFormat("ru-RU",{day:"2-digit",month:"2-digit",year:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZone:s}).format(t)};get text(){return this.currentTextMsg}get sender(){return this.currentSender}updateText=e=>{this.textMsg.destroy(),this.textMsg=new i({tag:"div",className:"msg-text",textContent:`${e}`}),this.currentTextMsg=e,this.container.appendChildren([this.textMsg]),this.appendChildren([this.container])};updateStatus=e=>{this.statusMsg.destroy(),this.statusMsg=new i({tag:"div",className:"msg-status",textContent:`${this.getStatus(e)}`}),this.container.appendChildren([this.statusMsg]),this.appendChildren([this.container])};getStatus=({isDelivered:e,isEdited:s,isReaded:t})=>{let a="";return t&&d.getUser("user")?.login===this.currentSender?(a="Readed",this.currentStatus.isReaded=!0):e&&d.getUser("user")?.login===this.currentSender&&(a="Delivered",this.currentStatus.isDelivered=!0),s&&(this.statusEdit=" (Edited)"),`${a}${this.statusEdit}`}}class y extends i{constructor(e){super({tag:"form",className:"message-form"}),this.onSubmit=e,this.node.action="",this.inputMessage=new f({type:"text",className:"form-control message-form-input",placeholder:"Input yor message...",disabled:!0,onInput:this.changeStatusBtn}),this.btnMessage=new M({type:"submit",className:"btn btn-success disabled",textContent:"Enter"}),this.appendChildren([this.inputMessage,this.btnMessage]),this.addListener("submit",s=>{s.preventDefault();const t=this.inputMessage.getValue();t&&this.onSubmit?.(this.idMsg,t,this.isEdit)})}inputMessage;isEdit=!1;idMsg="";btnMessage;set editForm(e){this.isEdit=e}set IdMsg(e){this.idMsg=e}changeInputStatus=()=>{this.inputMessage.removeAttribute("disabled")};resetInputMessage=()=>{this.inputMessage.setValue("")};changeStatusBtn=e=>{this.btnMessage.toggleClass("disabled",!e.trim())};setValueTextMsg=e=>{this.inputMessage.setValue(e)};setInputColor=()=>{this.inputMessage.addClass("edit")};removeInputColor=()=>{this.inputMessage.removeClass("edit")}}class I extends M{constructor(){super({type:"button",className:"btn btn-sm btn-outline-danger",textContent:"LOGOUT",onClick:()=>{d.deleteData("user"),window.location.href="",window.history.pushState({},"","")}})}}class k extends i{user;nameApp=new i({tag:"span",className:"app-title",textContent:"Fun Chat"});btnLogout=new I;about=new M({type:"button",className:"btn btn-success about-btn",textContent:"About",onClick:()=>{window.location.href="#about"}});constructor(){super({tag:"header",className:"header card"}),this.user=new i({tag:"span",className:"user-title",textContent:`You: ${d.getUser("user")?.login}`}),this.appendChildren([this.nameApp,this.user,this.about,this.btnLogout])}}class A extends i{constructor(){const e=new C({className:"author-link",textContent:"YuliyaVoronovich",href:"https://github.com/yuliyavoronovich",target:"_blank"}),s=new C({className:"author",href:"https://rs.school/courses/javascript-mentoring-program",target:"_blank"});s.setHTML("<img class='logo-img' src='./img/rs_school_js.svg'>");const t=new i({tag:"div",textContent:"2024"});super({tag:"footer",className:"header card"}),this.appendChildren([e,t,s])}}class F extends i{label;countMsg;currentUser;constructor(e,s,t,a){super({tag:"li",className:"user-item"}),this.currentUser={login:e,isLogined:s};const r=t||"",o=s?"-active":"-no-active";this.countMsg=new i({tag:"span",className:"badge text-bg-danger",textContent:`${r}`}),this.label=new i({tag:"div",className:`user-label status status${o}`,textContent:`${e}`}),this.label.appendChildren([this.countMsg]),a&&this.addListener("click",()=>{a(this.currentUser)}),this.appendChildren([this.label])}get user(){return this.currentUser}set countUnReadMsg(e){this.countMsg.setTextContent(e)}}const m="222";class T{sendMsg(e,s){l.sendMsg(m,e,s).catch(t=>{throw new Error(t.message)})}editMsg(e,s){l.editMsg(m,e,s).catch(t=>{throw new Error(t.message)})}getHistoryMsg(e){l.getHistoryMsg(m,e).catch(s=>{throw new Error(s.message)})}deleteMsg(e){l.deleteMsg(m,e).catch(s=>{throw new Error(s.message)})}readMsg(e){l.readMsg(m,e).catch(s=>{throw new Error(s.message)})}}const p=new T;class w extends i{constructor(e,s,t,a){super({tag:"div",className:"context-menu card"});const r=new M({type:"button",className:"context-menu-link",textContent:"Edit",onClick:()=>{t(e,s)}}),o=new M({type:"button",className:"context-menu-link",textContent:"Delete",onClick:()=>{a(e)}});this.appendChildren([r,o])}}const H=40;class O extends i{currentUser=d.getUser("user")?.login;isSelectedUser=!1;selectedUser="";userItems=[];header=new k;footer=new A;main=new i({tag:"main",className:"main"});search;aside=new i({tag:"aside",className:"aside card"});usersWrapper=new i({tag:"ul",className:"users-link"});chat=new i({tag:"div",className:"chat card"});chatHeader=new i({tag:"div",className:"chat-header"});chatHeaderStatus=new i({tag:"span",className:"status-in-chat"});chatFooter=new i({tag:"div",className:"chat-footer"});messageForm;userMessages=[];chatMainPlaceholder=new i({tag:"div",className:"chat-main-placeholder",textContent:"Select a user to send a message..."});chatMain=new i({tag:"div",className:"chat-main custom-scrolbar"});isStartChat=!1;usersActive=[];usersInActive=[];modal=new E;newContext;breakLine;isBreakLine=!1;unreadMesObj={};constructor(){super({tag:"div",className:"chat-wrapper"}),this.search=new f({type:"text",className:"form-control",placeholder:"Search...",onInput:this.searchUser}),this.messageForm=new y(this.sendMessage),this.breakLine=new i({tag:"div",className:"break-line hide",textContent:"unread messages"}),this.chatFooter.appendChildren([this.messageForm]),this.chatHeader.appendChildren([this.chatHeaderStatus]),this.chatMain.appendChildren([this.chatMainPlaceholder]),this.chatMain.addListener("click",this.clickChatMain),this.chatMain.addListener("wheel",this.clickChatMain),this.chat.appendChildren([this.chatHeader,this.chatMain,this.chatFooter]),this.aside.appendChildren([this.search,this.usersWrapper]),this.main.appendChildren([this.aside,this.chat]),this.appendChildren([this.header,this.main,this.footer,this.modal]),this.newContext=new w("0","",this.editMsg,this.deleteMsg),g.reLogin(),g.allActiveUsers(),g.allInActiveUsers(),this.subscribesUsers(),this.subscribesMessages(),n.subscribe("error",e=>{this.modal.alertMess(e.error,"danger")}),n.subscribe("connection",()=>{this.modal.closeModal()})}subscribesUsers=()=>{n.subscribe("usersActive",e=>{this.usersActive=[],e.users.forEach(s=>{s.login!==this.currentUser&&(this.usersActive.push(s),this.getHistoryFromUser(s.login))}),this.showUsers(this.usersActive)}),n.subscribe("usersInActive",e=>{this.usersInActive=[],e.users.forEach(s=>{this.usersInActive.push(s),this.getHistoryFromUser(s.login)}),this.showUsers(this.usersInActive)}),n.subscribe("userExternalLogin",e=>{this.updateUsersAfterExternalLogin(e)}),n.subscribe("userExternalLogout",e=>{this.updateUsersAfterExternalLogin(e)})};subscribesMessages=()=>{n.subscribe("messageReceived",e=>{const{to:s,from:t}=e;if(this.currentUser===t&&this.selectedUser===s||this.currentUser===s&&this.selectedUser===t){const a=this.addNewMessage(e);this.isStartChat||(this.chatMainPlaceholder.destroy(),this.isStartChat=!0),a&&(this.userMessages.push(a),this.chatMain.appendChildren([a])),this.isBreakLine?this.breakLine.getNode().scrollIntoView():this.chatMain.setScrollTop()}else this.getHistoryFromUser(t)}),n.subscribe("messageHistory",e=>{this.isSelectedUser&&(this.chatMain.destroyChildren(),e.messages.length>0?(e.messages.forEach(s=>{const t=this.addNewMessage(s);t&&this.userMessages.push(t)}),this.chatMain.appendChildren([...this.userMessages]),this.isBreakLine?this.breakLine.getNode().scrollIntoView():this.chatMain.setScrollTop()):(this.chatMainPlaceholder.removeClass("hide"),this.chatMainPlaceholder.setTextContent("Start dialog..."),this.chatMain.appendChildren([this.chatMainPlaceholder]))),e.messages.forEach(s=>{console.log(e.messages),this.unreadMesObj[s.from]=e.messages.filter(t=>t.to===this.currentUser).filter(t=>!t.status.isReaded).length}),console.log(this.unreadMesObj),this.usersWrapper.destroyChildren(),this.showUsers([...this.usersActive,...this.usersInActive])}),n.subscribe("messageDeliver",e=>{this.userMessages.forEach(s=>{s.getAttribute("id")===e.message.id&&s.updateStatus({isDelivered:e.message.isDelivered,isEdited:s.currentStatus.isEdited,isReaded:s.currentStatus.isReaded})})}),n.subscribe("messageRead",e=>{this.userMessages.forEach(s=>{s&&s.getAttribute("id")===e.message.id&&s.updateStatus({isDelivered:s.currentStatus.isDelivered,isEdited:s.currentStatus.isEdited,isReaded:e.message.isReaded})})}),n.subscribe("messageEdit",e=>{this.userMessages.forEach(s=>{s.getAttribute("id")===e.message.id&&(s.updateText(e.message.text),s.updateStatus({isDelivered:s.currentStatus.isDelivered,isEdited:e.message.isEdited,isReaded:s.currentStatus.isReaded}))})}),n.subscribe("messageDelete",e=>{this.userMessages.forEach(s=>{s.getAttribute("id")===e.message.id&&(s.destroy(),delete this.userMessages[this.userMessages.indexOf(s)],this.newContext.destroy())})})};updateUsersAfterExternalLogin=e=>{this.usersWrapper.destroyChildren(),g.allActiveUsers(),g.allInActiveUsers(),this.changeStatusOfSelectedUser(e)};showUsers=e=>{this.userItems=e.map(s=>new F(s.login,s.isLogined,this.unreadMesObj[s.login],this.getUser)),this.usersWrapper.appendChildren([...this.userItems])};searchUser=e=>{const s=[...this.usersActive,...this.usersInActive].filter(t=>t.login.toLowerCase().includes(e.toLowerCase()));this.usersWrapper.destroyChildren(),this.showUsers(s)};getUser=e=>{this.isSelectedUser=!0,this.selectedUser=e.login;const s=e.isLogined?"online":"offline";this.chatHeaderStatus.toggleClass("active",e.isLogined),this.chatHeaderStatus.setTextContent(`${s}`),this.chatHeader.setTextContent(`${e.login}`),this.chatMainPlaceholder.setTextContent("Write your first message..."),this.chatHeader.appendChildren([this.chatHeaderStatus]),this.messageForm.changeInputStatus(),this.isBreakLine=!1,this.userMessages=[],this.getHistoryFromUser(e.login)};changeStatusOfSelectedUser=e=>{if(this.isSelectedUser){const s=e.isLogined?"online":"offline";this.chatHeaderStatus.toggleClass("active",e.isLogined),this.chatHeaderStatus.setTextContent(`${s}`)}};addNewMessage=e=>{const{id:s,text:t,to:a,from:r,datetime:o,status:c}=e;let u;return(this.currentUser===r&&this.selectedUser===a||this.currentUser===a&&this.selectedUser===r)&&(u=new L({id:s,text:t,from:r,to:a,datetime:o,status:{isDelivered:c.isDelivered,isEdited:c.isEdited,isReaded:c.isReaded},onContext:this.contextMenuMsg,onClick:this.destroyMenuMsg}),!e.status.isReaded&&!this.isBreakLine&&this.currentUser===a&&(this.breakLine.addClass("show"),u.prepend(this.breakLine),this.breakLine.getNode().scrollIntoView(),this.isBreakLine=!0)),u};sendMessage=(e,s,t)=>{this.isStartChat||(this.chatMainPlaceholder.destroy(),this.isStartChat=!0),t?(p.editMsg(e,s),this.messageForm.removeInputColor(),this.messageForm.editForm=!1):(p.sendMsg(s,this.selectedUser),this.sendReadMessage()),this.getHistoryFromUser(this.selectedUser),this.messageForm.resetInputMessage(),this.messageForm.changeStatusBtn("")};getHistoryFromUser=e=>{p.getHistoryMsg(e)};contextMenuMsg=(e,s,t)=>{if(t===this.currentUser){this.newContext.destroy();const a=new w(s,e.text,this.editMsg,this.deleteMsg);this.newContext=a,this.chatMain.appendChildren([this.newContext]);const r=Number(e.getNodeProperty("offsetTop"));this.newContext.setStyle("top",`${r+H}px`)}};sendReadMessage=()=>{this.userMessages.forEach(e=>{const s=e.getAttribute("id");s&&e.sender===this.selectedUser&&p.readMsg(s)}),this.userItems.forEach(e=>{if(e.user.login===this.selectedUser){const s=e;s.countUnReadMsg=""}}),this.breakLine.destroy(),this.isBreakLine=!1};clickChatMain=()=>{this.destroyMenuMsg(),this.sendReadMessage()};destroyMenuMsg=()=>{this.newContext.destroy()};editMsg=(e,s)=>{this.messageForm.editForm=!0,this.messageForm.IdMsg=e,this.messageForm.setValueTextMsg(s),this.messageForm.setInputColor(),this.messageForm.changeStatusBtn("true")};deleteMsg=e=>{p.deleteMsg(e)}}export{O as ChatPage};
