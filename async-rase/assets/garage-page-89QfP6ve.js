import{b,O as f,g as k,a as A,c as d,r as x,u as B,m as P,P as y,S as m,w as p}from"./moto1-6ervAdsX.js";import{B as s,a as i}from"./index-Coa3sTl9.js";const N=`${b}/engine`;async function C(o,t){return(await fetch(`${N}?id=${o}&status=${t}`,{method:"PATCH"})).json()}async function T(o){try{return await(await fetch(`${N}?id=${o}&status=drive`,{method:"PATCH"})).json()}catch{return{success:!1}}}const S=16,I=2,V=8,g=["Suzuki","BMW","Honda","Yamaha","Harley-Davidson","Stels","Ducati","Can-Am","Moto Guzzi","Derbi"],w=["Limited","Special","Senda","Sport","Cross","Super","Classic","Ultra","King","Deluxe"];function v(o){return Math.floor(Math.random()*o)}function E(){return`${g[v(g.length)]}  ${w[v(w.length)]}`}function U(){return`#${`${Math.random().toString(S)}000000`.substring(I,V)}`}class D{saveValues={currentPage:1,values:{name:"",color:""}};carCountStart=0;countIncrement=1;countCarsForRandom=100;carsCount=new f(this.carCountStart);async getCars(t){const e=await k(t);return this.carsCount.notify(Number(e.headers.get("X-Total-Count"))),e.body}async getCar(t){return await A(t)}getCarsCount(){return this.carsCount.getValue()}async createCar(t,e){return d({name:t,color:e}).then(()=>{this.carsCount.notify(a=>a+this.countIncrement)}).catch(a=>{throw new Error(a.message)})}async createCars(){const t=Array.from({length:this.countCarsForRandom},()=>d({name:E(),color:U()}));return Promise.all(t).then(()=>{this.carsCount.notify(e=>e+this.countCarsForRandom)})}async removeCar(t){return x(t).then(()=>{this.carsCount.notify(e=>e-this.countIncrement)}).catch(e=>{throw new Error(e.message)})}async updateCar(t,e,a){return B(t,{name:e,color:a}).then(()=>{}).catch(r=>{throw new Error(r.message)})}}const n=new D;class u extends s{constructor({type:t,classNameInput:e,name:a,placeholder:r,value:c,onInput:l}){super({tag:"input",className:e,type:t,name:a,placeholder:r,value:c}),l&&this.addListener("input",()=>l(this.getValue()))}getValue(){return this.node.value}setValue(t){this.node.value=t}}class F extends s{constructor(t,e,a){super({tag:"form",className:"create-form"}),this.onSubmit=t,this.onUpdate=e,this.onRandome=a,this.setAttribute("action",""),this.carName=new u({type:"text",classNameInput:"form-input-name",name:"Name",placeholder:"Input car's name",value:n.saveValues.values.name,onInput:this.inputValueName}),this.color=new u({type:"color",classNameInput:"form-input-color",value:n.saveValues.values.color,onInput:this.inputValueColor}),this.resetForm();const r=new s({tag:"div",className:"form-input-wrapper"}),c=new s({tag:"div",className:"form-input-wrapper"});r.appendChildren([this.carName,this.color,this.submit]),c.appendChildren([this.carNameUpdate,this.colorUpdate,this.update]),this.appendChildren([r,c,this.randomGenerate]),this.submitForm(),this.updateForm(),this.randomGenerate.addListener("click",l=>{l.preventDefault(),this.onRandome?.()})}color;carName;submit=new u({type:"submit",classNameInput:"form-input-button",value:"Create"});colorUpdate=new u({type:"color",classNameInput:"form-input-color"});carNameUpdate=new u({type:"text",classNameInput:"form-input-name",name:"Name"});update=new i({className:"form-input-button",textContent:"Update"});randomGenerate=new i({className:"form-input-button random-button",textContent:"Generate random car"});idCar=0;submitForm=()=>{this.submit.addListener("click",t=>{t.preventDefault();const e=this.carName.getValue(),a=this.color.getValue();this.onSubmit?.(e,a),this.carName.setValue(""),this.color.setValue("")})};updateForm=()=>{this.update.addListener("click",t=>{t.preventDefault();const e=this.carNameUpdate.getValue(),a=this.colorUpdate.getValue();this.onUpdate?.(this.idCar,e,a),this.resetForm()})};fullDataOfCar(t){this.carNameUpdate.setValue(t.name),this.carNameUpdate.removeAttribute("disabled"),this.colorUpdate.setValue(t.color),this.idCar=t.id}resetForm(){this.carNameUpdate.setAttribute("disabled","disabled"),this.carNameUpdate.setValue(""),this.colorUpdate.setValue("")}inputValueName=t=>{n.saveValues.values.name=t};inputValueColor=t=>{n.saveValues.values.color=t}}class M extends s{carName;id;name;carImage;constructor(t){super({tag:"div",className:"car-wrapper-container"}),this.id=t.id,this.name=t.name;const e=new s({tag:"div",className:"car-wrapper"});this.carName=new s({tag:"span",className:"car-name",textContent:t.name}),this.carImage=new s({tag:"div",className:"car-image"}),this.carImage.setHTML(P),this.carImage.setStyle("fill",t.color),e.appendChildren([this.carName,this.carImage]),this.appendChildren([e])}get idCar(){return this.id}get nameCar(){return this.name}startAnimation(t){this.carImage.setStyle("animation","move"),this.carImage.setStyle("animation-duration",t),this.carImage.setStyle("animation-play-state","running"),this.carImage.setStyle("animation-fill-mode","both")}stopAnimation(){this.carImage.deleteStyle("animation")}pauseAnimation(){this.carImage.setStyle("animation-play-state","paused")}}class G extends s{car;id;updateButton;deleteButton;startButton;stopButton;constructor({currentCar:t,removeCar:e,updateCar:a,startAnimateCar:r,stopAnimateCar:c}){super({tag:"div",className:"car-track"}),this.id=t.id,this.car=new M(t),this.updateButton=new i({className:"track-button edit-button",textContent:"E",onClick:()=>a(t)}),this.deleteButton=new i({className:"track-button delete-button",textContent:"D",onClick:()=>e(this.id,this)});const l=new s({tag:"span",className:"controls"});this.startButton=new i({className:"track-button start-button",textContent:"Start",onClick:()=>{r(this.car,this.startButton,this.stopButton).catch(h=>{throw new Error(h.message)})}}),this.stopButton=new i({className:"track-button stop-button",textContent:"Stop",onClick:()=>{c(this.car,this.startButton,this.stopButton).catch(h=>{throw new Error(h.message)})}}),this.stopButton.addClass("disabled"),l.appendChildren([this.startButton,this.stopButton]),this.appendChildren([this.updateButton,this.deleteButton,l,this.car])}get carTrack(){return this.car}}class L extends s{modalWrapper=new s({tag:"div",className:"modal-wrapper"});modalContent=new s({tag:"div",className:"modal-content"});modalText=new s({tag:"div",className:"modal-text"});closeButton=new i({className:"modal-button",textContent:"OK"});constructor(){super({tag:"div",className:"modal"}),this.modalContent.appendChildren([this.modalText,this.closeButton]),this.modalWrapper.appendChildren([this.modalContent]),this.appendChildren([this.modalWrapper]),this.closeButton.addListener("click",()=>{this.modalWrapper.toggleClass("open")})}set content(t){this.modalText.setHTML(t)}toggleModal(){this.modalWrapper.toggleClass("open")}}const W=2;class H extends s{currentPage=n.saveValues.currentPage;countPages=1;header=new s({tag:"h2",className:"title",textContent:"Garage ()"});pageNumber=new s({tag:"h3",className:"page-number",textContent:"Page #"});form;tracksContainer=new s({tag:"div",className:"garage-tracks"});carTracks=[];prevButton=new i({className:"control-button prev-button",textContent:"PREV"});nextButton=new i({className:"control-button next-button",textContent:"NEXT"});raceAll=new i({className:"control-button start-button",textContent:"Start All"});resetAll=new i({className:"control-button stop-button",textContent:"Reset All"});onCarsCountChange;isStop=!1;modal=new L;countMsInSeconds=1e3;constructor(){super({tag:"div",className:"garage-wrapper"}),this.prevButton.addClass("disabled"),this.resetAll.addClass("disabled"),this.nextButton.addClass("disabled");const t=new s({tag:"div",className:"control-button-wrapper"});t.appendChildren([this.pageNumber,this.prevButton,this.nextButton]),this.form=new F(this.getFormData,this.getFormDataUpdate,this.randomGenerateCars);const e=new s({tag:"div",className:"wrapper"}),a=new s({tag:"div",className:"control-race-wrapper"});a.appendChildren([this.raceAll,this.resetAll]),e.appendChildren([this.form,a]),this.onCarsCountChange=r=>{this.header.setTextContent(`Garage (${r})`),this.countPages=Math.ceil(r/y),this.updatePageTitle(),this.checkPrevButton()},this.createTracks().then(()=>{}).catch(r=>{throw new Error(r.message)}),n.carsCount.subscribe(this.onCarsCountChange),this.appendChildren([this.header,t,e,this.tracksContainer,this.modal]),this.nextPage(),this.prevPage(),this.startAllCars(),this.stopAllCars()}nextPage=()=>{this.nextButton.addListener("click",t=>{t.preventDefault(),this.checkNextButton(),this.prevButton.removeClass("disabled"),this.currentPage+=1,n.saveValues.currentPage=this.currentPage,this.updatePageTitle(),this.updateTracks()})};prevPage=()=>{this.prevButton.addListener("click",t=>{t.preventDefault(),this.currentPage===m+1&&this.prevButton.addClass("disabled"),this.nextButton.removeClass("disabled"),this.currentPage-=1,n.saveValues.currentPage=this.currentPage,this.updatePageTitle(),this.updateTracks()})};startAllCars=()=>{this.raceAll.addListener("click",t=>{t.preventDefault(),Promise.any(this.carTracks.map(e=>this.startAnimateCar(e.carTrack,this.raceAll))).then(e=>{this.resetAll.removeClass("disabled"),this.setWinner(e).catch(()=>{})}).catch(()=>{this.resetAll.removeClass("disabled")})})};stopAllCars=()=>{this.resetAll.addListener("click",t=>{t.preventDefault(),Promise.all(this.carTracks.map(e=>this.stopAnimateCar(e.carTrack,this.raceAll,this.resetAll))).then(()=>{}).catch(e=>{throw new Error(e.message)})})};checkPrevButton=()=>{this.prevButton.toggleClass("disabled",this.currentPage===m)};checkNextButton=()=>{this.nextButton.toggleClass("disabled",this.currentPage===this.countPages)};async createTracks(){const t=await n.getCars(this.currentPage);this.carTracks=t.map(e=>new G({currentCar:e,removeCar:this.removeCar,updateCar:this.updateCar,startAnimateCar:this.startAnimateCar,stopAnimateCar:this.stopAnimateCar})),this.tracksContainer.appendChildren([...this.carTracks])}updatePageTitle=()=>{this.pageNumber.setTextContent(`Page #${this.currentPage}`)};updateTracks(){this.tracksContainer.destroyChildren(),this.createTracks().then(()=>{}).catch(t=>{throw new Error(t.message)}),this.checkNextButton()}getFormData=(t,e)=>{n.createCar(t,e).then(()=>{this.updateTracks()}).catch(a=>{throw new Error(a.message)})};getFormDataUpdate=(t,e,a)=>{n.updateCar(t,e,a).then(()=>{this.updateTracks()}).catch(r=>{throw new Error(r.message)})};randomGenerateCars=()=>{n.createCars().then(()=>{this.updateTracks()}).catch(t=>{throw new Error(t.message)})};removeCar=(t,e)=>{n.removeCar(t).then(()=>{this.updateTracks(),e.destroy(),p.removeWinner(t).then(()=>{}).catch(()=>{})}).catch(a=>{throw new Error(a.message)})};updateCar=t=>{this.form.fullDataOfCar(t)};startAnimateCar=async(t,e,a)=>{e?.addClass("disabled"),a?.removeClass("disabled");const{distance:r,velocity:c}=await C(t.idCar,"started");return t.startAnimation(`${r/c}ms`),new Promise(l=>{T(t.idCar).then(h=>{h.success?l({id:t.idCar,name:t.nameCar,time:r/c}):t.pauseAnimation()}).catch(h=>{throw new Error(h.message)})})};stopAnimateCar=async(t,e,a)=>{e?.removeClass("disabled"),a?.addClass("disabled"),await C(t.idCar,"stopped"),t.stopAnimation()};setWinner(t){const e=(t.time/this.countMsInSeconds).toFixed(W);return this.modal.content=`Первым пришёл водитель ${t.name}. Время ${e} s`,this.modal.toggleModal(),p.createWinner(t.id,Number(e))}}export{H as GaragePage};
