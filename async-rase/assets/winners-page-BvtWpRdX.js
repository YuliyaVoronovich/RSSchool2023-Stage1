import{m as N,w as a,d as c,S as l}from"./moto1-Ew5X_Se1.js";import{B as e,a as d}from"./index-Br552QUP.js";class w extends e{body=new e({tagName:"tbody"});win;time;constructor(t){super({tagName:"table",className:"table"});const s=new e({tagName:"thead"}),n=new e({tagName:"tr"}),r=[new e({tagName:"th",className:"thead",textContent:"Number"}),new e({tagName:"th",className:"thead",textContent:"Car"}),new e({tagName:"th",className:"thead",textContent:"Name"}),this.win=new e({tagName:"th",className:"thead",textContent:"Wins"}),this.time=new e({tagName:"th",className:"thead",textContent:"Best time"})];n.appendChildren(r),s.append(n),this.append(s),this.append(this.body),this.win.addListener("click",i=>{i.preventDefault(),t("wins")}),this.time.addListener("click",i=>{i.preventDefault(),t("time")})}get bodyNode(){return this.body}}class b extends e{constructor(t,s,n,r,i){super({tagName:"tr",className:"table-row"});const u=new e({tagName:"td",className:"table-cell",textContent:`${t}`}),o=new e({tagName:"td",className:"table-cell"});o.setHTML(N),o.setStyle("fill",n);const m=new e({tagName:"td",className:"table-cell",textContent:`${s}`}),g=new e({tagName:"td",className:"table-cell",textContent:`${r}`}),p=new e({tagName:"td",className:"table-cell",textContent:`${i}`});this.appendChildren([u,o,m,g,p])}}class v extends e{currentPage=a.saveValues.currentPage;countPages=1;header=new e({tagName:"h2",className:"title",textContent:"Winners ()"});pageNumber=new e({tagName:"h3",className:"page-number",textContent:"Page #"});prevButton=new d({className:"control-button prev-button",textContent:"PREV"});nextButton=new d({className:"control-button next-button",textContent:"NEXT"});winnersTable;onWinnersCountChange;winnersRows=[];sortOrder="ASC";constructor(){super({tagName:"div",className:"winners-wrapper"}),this.prevButton.addClass("disabled");const t=new e({tagName:"div",className:"control-button-wrapper"});t.appendChildren([this.pageNumber,this.prevButton,this.nextButton]),this.winnersTable=new w(this.sortWinner),this.appendChildren([this.header,t,this.winnersTable]),this.onWinnersCountChange=s=>{this.header.setTextContent(`Winners (${s})`),this.countPages=Math.ceil(s/c),this.updatePageTitle(),this.checkPrevButton(),this.checkNextButton()},a.winnersCount.subscribe(this.onWinnersCountChange),this.createWinners(a.saveValues.sort.field,a.saveValues.sort.order).then(()=>{}).catch(s=>{throw new Error(s.message)}),this.nextPage(),this.prevPage()}async createWinners(t,s){const n=await a.getWinners(this.currentPage,t,s);this.winnersRows=n.map((r,i)=>new b((this.currentPage-1)*c+i+1,r.name,r.color,r.wins,r.time)),this.winnersTable.bodyNode.appendChildren([...this.winnersRows])}updatePageTitle=()=>{this.pageNumber.setTextContent(`Page #${this.currentPage}`)};checkPrevButton=()=>{this.prevButton.toggleClass("disabled",this.currentPage===l)};checkNextButton=()=>{this.nextButton.toggleClass("disabled",this.currentPage===this.countPages)};updateTracks(t,s){this.winnersTable.bodyNode.destroyChildren(),this.createWinners(t,s).then(()=>{}).catch(n=>{throw new Error(n.message)}),this.checkPrevButton(),this.checkNextButton()}nextPage=()=>{this.nextButton.addListener("click",t=>{t.preventDefault(),this.checkNextButton(),this.prevButton.removeClass("disabled"),this.currentPage+=1,a.saveValues.currentPage=this.currentPage,this.updatePageTitle(),this.updateTracks(a.saveValues.sort.field,a.saveValues.sort.order)})};prevPage=()=>{this.prevButton.addListener("click",t=>{t.preventDefault(),this.currentPage===l+1&&this.prevButton.addClass("disabled"),this.nextButton.removeClass("disabled"),this.currentPage-=1,a.saveValues.currentPage=this.currentPage,this.updatePageTitle(),this.updateTracks(a.saveValues.sort.field,a.saveValues.sort.order)})};sortWinner=t=>{this.sortOrder=this.sortOrder==="ASC"?"DESC":"ASC",a.saveValues.sort.field=t,a.saveValues.sort.order=this.sortOrder,this.updateTracks(t,this.sortOrder)}}export{v as WinnersPage};
