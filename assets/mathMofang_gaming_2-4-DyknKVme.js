import{p as x,_ as c,a as w,b as v,c as _,d as k,e as B}from"./筹码-DjgIXX7o.js";import{g as V}from"./guide-BxpmnHfB.js";import{_ as A,c as n,a as d,w as h,d as e,t as u,f as p,b as m,g as z,F as R,r as b,o as r,h as j,v as C,u as N}from"./index-Vu7_G3h_.js";import{_ as q}from"./logo-Cf6h9C3-.js";/* empty css                                                              */N();const M={components:{popup:x,guide:V},data(){return{teach1:!0,teach2:!1,teach3:!1,teach4:!1,teach5:!1,balance:1e3,round:0,randomNumber:null,canBet:!1,betAmount:null,multiplier:0,balance_1:"未开奖",balance_2:"未开奖",balance_3:"未开奖",balance_4:"未开奖",balance_5:"未开奖",showPopup:!1,qujian:null,getBal:null,multi_num:null,num:null,min:null,max:null,up:!1,down:!1,showResult:!1,showFinalResult:!1,winRate:91.5,rest:!1,restTime:30,waitTime:3}},methods:{openFinalResult(){this.round==5&&this.$router.push({name:"work_2-4"})},confirmBet(){if(this.betAmount<1||this.betAmount>this.balance||this.betAmount>200){alert("最小1元，最大200元！");return}if(this.up==!0){if(this.round+=1,console.log("我进入了"+this.round+"轮"),this.round==5){this.randomNumber=Math.floor(Math.random()*(this.max-this.min+1))+this.min,console.log("抽取的数字为"+this.randomNumber),this.balance_5="赢得"+this.betAmount*this.multiplier,this.balance+=this.betAmount*this.multiplier,this.getBal=this.betAmount*this.multiplier,this.showResult=!0,this.showPopup=!1,this.up=!1;return}this.randomNumber=Math.floor(Math.random()*100)+1,console.log("抽取的数字为"+this.randomNumber),this.randomNumber>=this.min&&this.randomNumber<=this.max?(this.round==1?this.balance_1="赢得"+this.betAmount*this.multiplier:this.round==2?this.balance_2="赢得"+this.betAmount*this.multiplier:this.round==3?this.balance_3="赢得"+this.betAmount*this.multiplier:this.round==4?this.balance_4="赢得"+this.betAmount*this.multiplier:this.round==5&&(this.balance_5="赢得"+this.betAmount*this.multiplier),this.balance+=this.betAmount*this.multiplier,this.getBal=this.betAmount*this.multiplier):(this.round==1?this.balance_1="未猜中":this.round==2?this.balance_2="未猜中":this.round==3?this.balance_3="未猜中":this.round==4?this.balance_4="未猜中":this.round==5&&(this.balance_5="未猜中"),this.balance-=this.betAmount,this.getBal=-this.betAmount*this.multiplier),this.showResult=!0,this.showPopup=!1,this.up=!1}if(this.down==!0){if(this.round+=1,console.log("我进入了"+this.round+"轮"),this.round==5){const t=Math.floor(100/this.num),g=Math.floor(Math.random()*(t-1+1))+1;this.randomNumber=g*this.num,this.balance_5="赢得"+this.betAmount*this.num,this.balance+=this.betAmount*this.num,this.getBal=this.betAmount*this.num,this.showResult=!0,this.showPopup=!1,this.up=!1;return}this.randomNumber=Math.floor(Math.random()*100)+1,console.log("抽取的数字为"+this.randomNumber),this.randomNumber%this.num==0?(this.multiplier=this.num,this.round==1?this.balance_1="赢得"+this.betAmount*this.multiplier:this.round==2?this.balance_2="赢得"+this.betAmount*this.multiplier:this.round==3?this.balance_3="赢得"+this.betAmount*this.multiplier:this.round==4?this.balance_4="赢得"+this.betAmount*this.multiplier:this.round==5&&(this.balance_5="赢得"+this.betAmount*this.multiplier),this.balance+=this.betAmount*this.multiplier,this.getBal=this.betAmount*this.multiplier):(this.round==1?this.balance_1="未猜中":this.round==2?this.balance_2="未猜中":this.round==3?this.balance_3="未猜中":this.round==4?this.balance_4="未猜中":this.round==5&&(this.balance_5="未猜中"),this.balance-=this.betAmount,this.getBal=-this.betAmount),this.showResult=!0,this.showPopup=!1,this.down=!1}this.betAmount=null},close(){this.showPopup=!1},closeResult(){if(this.showResult=!1,this.round==5){this.showFinalResult=!0,setTimeout(this.openFinalResult,3e3);const o=setInterval(()=>{this.waitTime--,this.waitTime<=0&&clearInterval(o)},1e3)}},placeBet1(o,t){if(this.round+1>5){this.showResult=!0,this.showPopup=!1,this.up=!1;return}this.showPopup=!0,this.up=!0,this.min=o,this.max=t,o==1&&t==25?this.qujian="1-25":o==26&&t==50?this.qujian="26-50":o==51&&t==75?this.qujian="51-75":o==76&&t==100?this.qujian="76-100":o==1&&t==50?this.qujian="1-50":o==51&&t==100&&(this.qujian="51-100"),o==1&&t==25||o==26&&t==50||o==51&&t==75||o==76&&t==100?(this.multiplier=2,this.multi_num="2:1"):(o==1&&t==50||o==51&&t==100)&&(this.multiplier=1,this.multi_num="1:1")},placeBet2(o){if(this.round+1>5){this.showResult=!0,this.showPopup=!1,this.down=!1;return}this.showPopup=!0,this.num=o,this.down=!0,o%4==0?(this.qujian=String(o)+"的倍数",this.multi_num=String(o)+":1"):o%5==0?(this.qujian=String(o)+"的倍数",this.multi_num=String(o)+":1"):o%6==0?(this.qujian=String(o)+"的倍数",this.multi_num=String(o)+":1"):o%7==0?(this.qujian=String(o)+"的倍数",this.multi_num=String(o)+":1"):o%8==0?(this.qujian=String(o)+"的倍数",this.multi_num=String(o)+":1"):o%9==0&&(this.qujian=String(o)+"的倍数",this.multi_num=String(o)+":1")}}},S={class:"container"},P={class:"top"},T={class:"top-item"},U={key:0},F={key:1},I={key:0,style:{"font-weight":"bold","font-size":"14px"}},D={key:1,style:{"font-weight":"bold","font-size":"14px"}},L={class:"top-item",style:{"background-color":"brown"}},E={style:{"flex-direction":"column"}},G={style:{"font-size":"14px","font-weight":"bold",color:"whitesmoke","margin-top":"-15px"}},H={class:"middle"},J={style:{"flex-direction":"column",color:"yellow"}},K={key:0},O={key:1,style:{"margin-top":"38px","font-size":"50px"}},Q={style:{"flex-direction":"column",color:"yellow"}},W={style:{"text-align":"left","line-height":"12px"}},X={class:"font"},Y={class:"font"},Z={class:"font"},$={class:"font"},tt={class:"font"},et={class:"bottom"},lt={style:{color:"yellow","line-height":"5px","font-size":"16px"}},it={key:0},ot={key:1},st={key:2},nt={key:3},rt={class:"zone"},ut={class:"up"},pt={class:"big",style:{"line-height":"15px",color:"aliceblue"}},dt={ref:"one",style:{width:"max-content","font-weight":"bold"}},ht={style:{display:"grid","grid-template-columns":"2fr 2fr","row-gap":"10px","column-gap":"15px"}},mt={class:"smaller",style:{"line-height":"0px",color:"aliceblue"}},at={class:"smaller",style:{"line-height":"1px",color:"aliceblue"}},ft={class:"smaller",style:{"line-height":"1px",color:"aliceblue"}},bt={class:"smaller",style:{"line-height":"1px",color:"aliceblue"}},gt={class:"big",style:{"line-height":"15px",color:"aliceblue"}},yt={class:"down"},xt={class:"bottom-border",style:{"line-height":"3px",color:"aliceblue"}},ct={class:"bottom-border",style:{"line-height":"3px",color:"aliceblue"}},wt={class:"bottom-border",style:{"line-height":"3px",color:"aliceblue"}},vt={class:"down"},_t={class:"bottom-border",style:{"line-height":"3px",color:"aliceblue"}},kt={class:"bottom-border",style:{"line-height":"3px",color:"aliceblue"}},Bt={class:"bottom-border",style:{"line-height":"3px",color:"aliceblue"}},Vt={class:"popup-container"},At={style:{display:"flex","justify-content":"space-between","font-weight":"bold","font-size":"24px","line-height":"15px","margin-top":"-20px"}},zt={style:{flex:"1"}},Rt={style:{color:"red"}},jt={style:{flex:"1"}},Ct={style:{color:"red"}},Nt={style:{display:"flex","justify-content":"center"}},qt={style:{display:"flex","flex-direction":"column","margin-top":"20px","font-size":"14px"}},Mt={class:"popup-container"},St={style:{"font-size":"24px","margin-left":"10px",color:"black","font-weight":"bold"}},Pt={key:0,style:{color:"red","line-height":"10px"}},Tt={key:1,style:{color:"red","line-height":"10px"}},Ut={style:{color:"red","line-height":"10px"}},Ft={key:2,style:{color:"red"}},It={key:3,style:{color:"red"}},Dt={style:{display:"flex","flex-direction":"column","justify-content":"center","margin-top":"-20px","line-height":"15px","text-align":"center"}},Lt={key:0,style:{color:"black"}},Et={key:1,style:{color:"black"}},Gt={style:{color:"black"}},Ht={style:{display:"flex","flex-direction":"column","margin-top":"10px","font-size":"14px"}},Jt={class:"popup-container"},Kt={style:{display:"flex","flex-direction":"column","justify-content":"center","margin-top":"-15px","line-height":"25px"}},Ot={style:{color:"black"}},Qt={style:{"font-size":"24px","font-weight":"bold",color:"darksalmon"}},Wt={style:{color:"black"}},Xt={style:{"font-size":"32px",color:"coral","font-weight":"bold"}},Yt={style:{display:"flex","flex-direction":"column","margin-top":"20px","font-size":"14px"}},Zt={style:{color:"red"}},$t={class:"rest"},te={style:{display:"flex","justify-content":"center"}},ee={style:{"margin-top":"30px","font-size":"24px",color:"red"}},le={key:0,style:{"margin-top":"30px","font-size":"24px",color:"red"}};function ie(o,t,g,oe,l,s){const a=b("guide"),f=b("popup"),y=b("Router-Link");return r(),n(R,null,[d(a,{modelValue:l.teach1,"onUpdate:modelValue":t[1]||(t[1]=i=>l.teach1=i),style:{display:"flex","flex-direction":"column"}},{default:h(()=>[t[33]||(t[33]=e("img",{src:w,alt:"操作指引",width:"250px"},null,-1)),e("div",null,[e("button",{onClick:t[0]||(t[0]=i=>(l.teach1=!1,l.teach2=!0)),style:{color:"white","margin-top":"50px",height:"100px",width:"250px","background-color":"dodgerblue","font-size":"24px","border-radius":"50px"}}," 继续 ")])]),_:1},8,["modelValue"]),d(a,{modelValue:l.teach2,"onUpdate:modelValue":t[3]||(t[3]=i=>l.teach2=i),style:{display:"flex","flex-direction":"column"}},{default:h(()=>[t[34]||(t[34]=e("img",{src:v,alt:"操作指引",width:"200px",style:{"margin-top":"30px","margin-left":"110px"}},null,-1)),e("div",null,[e("button",{onClick:t[2]||(t[2]=i=>(l.teach2=!1,l.teach3=!0)),style:{color:"white","margin-top":"123px",height:"100px",width:"250px","background-color":"dodgerblue","font-size":"24px","border-radius":"50px"}}," 继续 ")])]),_:1},8,["modelValue"]),d(a,{modelValue:l.teach3,"onUpdate:modelValue":t[5]||(t[5]=i=>l.teach3=i),style:{display:"flex","flex-direction":"column"}},{default:h(()=>[t[35]||(t[35]=e("img",{src:_,alt:"操作指引",width:"200px",style:{"margin-top":"20px","margin-right":"120px"}},null,-1)),e("div",null,[e("button",{onClick:t[4]||(t[4]=i=>(l.teach3=!1,l.teach4=!0)),style:{color:"white","margin-top":"124px",height:"100px",width:"250px","background-color":"dodgerblue","font-size":"24px","border-radius":"50px"}}," 继续 ")])]),_:1},8,["modelValue"]),d(a,{modelValue:l.teach4,"onUpdate:modelValue":t[7]||(t[7]=i=>l.teach4=i),style:{display:"flex","flex-direction":"column"}},{default:h(()=>[t[37]||(t[37]=e("div",{style:{"margin-top":"-40px",display:"flex","flex-direction":"row","justify-content":"space-around",gap:"100px"}},null,-1)),t[38]||(t[38]=e("span",null,[e("img",{style:{"margin-right":"240px"},src:k,alt:"操作指引",width:"200px"})],-1)),e("div",null,[e("button",{onClick:t[6]||(t[6]=i=>(l.teach4=!1,l.teach5=!0)),style:{color:"white","margin-top":"124px",height:"100px",width:"250px","background-color":"dodgerblue","font-size":"1px","border-radius":"50px"}},t[36]||(t[36]=[e("p",{style:{"line-height":"10px","font-size":"24px"}},"继续",-1)]))])]),_:1},8,["modelValue"]),d(a,{modelValue:l.teach5,"onUpdate:modelValue":t[9]||(t[9]=i=>l.teach5=i),style:{display:"flex","flex-direction":"column"}},{default:h(()=>[t[40]||(t[40]=e("div",{style:{"margin-top":"-40px",display:"flex","flex-direction":"row","justify-content":"space-around",gap:"100px"}},null,-1)),t[41]||(t[41]=e("span",null,[e("img",{src:B,alt:"操作指引",width:"200px"})],-1)),e("div",null,[e("button",{onClick:t[8]||(t[8]=i=>l.teach5=!1),style:{color:"white","margin-top":"119px",height:"100px",width:"250px","background-color":"dodgerblue","font-size":"1px","border-radius":"50px"}},t[39]||(t[39]=[e("p",{style:{"line-height":"10px","font-size":"20px"}},"我已明白规则",-1),e("p",{style:{"line-height":"10px","font-size":"20px"}},"可以开始游戏",-1)]))])]),_:1},8,["modelValue"]),e("div",S,[e("div",P,[e("div",T,[l.round==0?(r(),n("div",U,t[42]||(t[42]=[e("p",{style:{"font-weight":"bold"}},"轮次",-1)]))):(r(),n("div",F,[l.round<=5?(r(),n("p",I,"当前轮次为 "+u(l.round),1)):p("",!0),l.round>5?(r(),n("p",D,"游戏结束")):p("",!0)]))]),e("div",L,[e("div",E,[t[44]||(t[44]=e("img",{src:c,alt:"无法显示",style:{width:"100px"}},null,-1)),e("p",G,[t[43]||(t[43]=m(" 当前本金 ")),e("span",null,u(l.balance),1)])])]),t[45]||(t[45]=z('<div class="top-item" style="background-color:whitesmoke;" data-v-076f04f3><div style="flex-direction:column;align-content:flex-start;line-height:15px;" data-v-076f04f3><p style="font-size:14px;font-weight:bold;color:black;" data-v-076f04f3> 下注限制: </p><p style="font-size:12px;font-weight:bold;color:black;margin-top:-10px;" data-v-076f04f3> 最小:1 </p><p style="font-size:12px;font-weight:bold;color:black;margin-top:-10px;" data-v-076f04f3> 最大:200 </p></div></div>',1))]),e("div",H,[e("div",J,[t[47]||(t[47]=e("p",{style:{"font-size":"16px"}},"本轮幸运数字",-1)),l.randomNumber==null?(r(),n("div",K,t[46]||(t[46]=[e("img",{src:q,alt:"无法显示",width:"90px",style:{"margin-top":"18px"}},null,-1)]))):(r(),n("div",O,u(l.randomNumber),1))]),e("div",Q,[t[48]||(t[48]=e("p",{style:{"font-size":"16px"}},"历史情况",-1)),e("div",W,[e("p",X,"第一轮 "+u(l.balance_1),1),e("p",Y,"第二轮 "+u(l.balance_2),1),e("p",Z,"第三轮 "+u(l.balance_3),1),e("p",$,"第四轮 "+u(l.balance_4),1),e("p",tt,"第五轮 "+u(l.balance_5),1)])])]),e("div",et,[e("div",lt,[l.round<5?(r(),n("p",it," 第 "+u(l.round+1)+" 轮开始 ",1)):p("",!0),l.round<5?(r(),n("p",ot," 请下注 ")):p("",!0),l.round>=5?(r(),n("p",st," 游戏已结束 ")):p("",!0),l.round>=5?(r(),n("p",nt," 点击下方选项后点继续 ")):p("",!0)]),e("div",rt,[e("div",ut,[e("div",pt,[e("button",{onClick:t[10]||(t[10]=i=>s.placeBet1(1,50)),class:"big",style:{"line-height":"0px","justify-content":"center","align-items":"center"}},[t[49]||(t[49]=e("p",{style:{width:"max-content"}},"小数",-1)),t[50]||(t[50]=e("p",{style:{width:"max-content"}},"1-50",-1)),e("p",dt,"1:1",512)])]),e("div",ht,[e("div",mt,[e("button",{onClick:t[11]||(t[11]=i=>s.placeBet1(1,25)),class:"smaller",style:{"line-height":"0px","justify-content":"center","align-items":"center"}},t[51]||(t[51]=[e("p",{style:{width:"max-content"}}," 1-25 ",-1),e("p",{style:{"font-weight":"bold","margin-top":"5px"}}," 2:1 ",-1)]))]),e("div",at,[e("button",{onClick:t[12]||(t[12]=i=>s.placeBet1(26,50)),class:"smaller",style:{"line-height":"0px","justify-content":"center","align-items":"center"}},t[52]||(t[52]=[e("p",{style:{width:"max-content"}}," 26-50 ",-1),e("p",{style:{"font-weight":"bold","margin-top":"5px"}}," 2:1 ",-1)]))]),e("div",ft,[e("button",{onClick:t[13]||(t[13]=i=>s.placeBet1(51,75)),class:"smaller",style:{"line-height":"0px","justify-content":"center","align-items":"center"}},t[53]||(t[53]=[e("p",{style:{width:"max-content"}}," 51-75 ",-1),e("p",{style:{"font-weight":"bold","margin-top":"5px"}}," 2:1 ",-1)]))]),e("div",bt,[e("button",{onClick:t[14]||(t[14]=i=>s.placeBet1(76,100)),class:"smaller",style:{"line-height":"0px","justify-content":"center","align-items":"center"}},t[54]||(t[54]=[e("p",{style:{width:"max-content"}}," 76-100 ",-1),e("p",{style:{"font-weight":"bold","margin-top":"5px"}}," 2:1 ",-1)]))])]),e("div",gt,[e("button",{onClick:t[15]||(t[15]=i=>s.placeBet1(51,100)),class:"big",style:{"line-height":"0px","justify-content":"center","align-items":"center"}},t[55]||(t[55]=[e("p",{style:{width:"max-content"}},"小数",-1),e("p",{style:{width:"max-content"}},"51-100",-1),e("p",{style:{width:"max-content","font-weight":"bold"}},"1:1",-1)]))])]),e("div",yt,[e("div",xt,[e("button",{onClick:t[16]||(t[16]=i=>s.placeBet2(4)),class:"bottom-border",style:{"line-height":"3px",color:"aliceblue"}},t[56]||(t[56]=[e("p",{style:{"margin-top":"7px"}},"4的倍数",-1),e("p",null,"4:1",-1)]))]),e("div",ct,[e("button",{onClick:t[17]||(t[17]=i=>s.placeBet2(5)),class:"bottom-border",style:{"line-height":"3px",color:"aliceblue"}},t[57]||(t[57]=[e("p",{style:{"margin-top":"7px"}},"5的倍数",-1),e("p",{style:{"font-weight":"bold"}},"5:1",-1)]))]),e("div",wt,[e("button",{onClick:t[18]||(t[18]=i=>s.placeBet2(6)),class:"bottom-border",style:{"line-height":"3px",color:"aliceblue"}},t[58]||(t[58]=[e("p",{style:{"margin-top":"7px"}},"6的倍数",-1),e("p",{style:{"font-weight":"bold"}},"6:1",-1)]))])]),e("div",vt,[e("div",_t,[e("button",{onClick:t[19]||(t[19]=i=>s.placeBet2(7)),class:"bottom-border",style:{"line-height":"3px",color:"aliceblue"}},t[59]||(t[59]=[e("p",{style:{"margin-top":"7px"}},"7的倍数",-1),e("p",{style:{"font-weight":"bold"}},"7:1",-1)]))]),e("div",kt,[e("button",{onClick:t[20]||(t[20]=i=>s.placeBet2(8)),class:"bottom-border",style:{"line-height":"3px",color:"aliceblue"}},t[60]||(t[60]=[e("p",{style:{"margin-top":"7px"}},"8的倍数",-1),e("p",{style:{"font-weight":"bold"}},"8:1",-1)]))]),e("div",Bt,[e("button",{onClick:t[21]||(t[21]=i=>s.placeBet2(9)),class:"bottom-border",style:{"line-height":"3px",color:"aliceblue"}},t[61]||(t[61]=[e("p",{style:{"margin-top":"7px"}},"9的倍数",-1),e("p",{style:{"font-weight":"bold"}},"9:1",-1)]))])])])])]),e("div",null,[d(f,{modelValue:l.showPopup,"onUpdate:modelValue":t[25]||(t[25]=i=>l.showPopup=i)},{default:h(()=>[e("div",Vt,[t[65]||(t[65]=e("div",{style:{"font-size":"24px","margin-left":"10px",color:"black","font-weight":"bold"}},[e("p",null,"您已选择")],-1)),e("div",At,[e("div",zt,[t[62]||(t[62]=e("p",{style:{color:"black"}},"区间:",-1)),e("p",Rt,u(l.qujian),1)]),e("div",jt,[t[63]||(t[63]=e("p",{style:{color:"black"}},"赔率:",-1)),e("p",Ct,u(l.multi_num),1)])]),e("div",Nt,[t[64]||(t[64]=e("span",{style:{color:"black"}},"请输入下注金额：",-1)),j(e("input",{"onUpdate:modelValue":t[22]||(t[22]=i=>l.betAmount=i),placeholder:"请输入下注金额",type:"number"},null,512),[[C,l.betAmount]])]),e("div",qt,[e("button",{onClick:t[23]||(t[23]=(...i)=>s.confirmBet&&s.confirmBet(...i)),style:{"margin-left":"15%","margin-right":"15%","background-color":"yellow"}}," 确认下注&抽取幸运数字 "),e("button",{onClick:t[24]||(t[24]=(...i)=>s.close&&s.close(...i)),style:{"margin-top":"10px","margin-left":"15%","margin-right":"15%","background-color":"gray",color:"whitesmoke"}}," 返回重新下注 ")])])]),_:1},8,["modelValue"]),d(f,{modelValue:l.showResult,"onUpdate:modelValue":t[29]||(t[29]=i=>l.showResult=i)},{default:h(()=>[e("div",Mt,[e("div",St,[l.round<5?(r(),n("p",Pt,"本轮幸运数字")):p("",!0),l.round==5?(r(),n("p",Tt,"最后一轮幸运数字")):p("",!0),e("p",Ut,u(l.randomNumber),1),l.getBal>0?(r(),n("p",Ft,"恭喜您！您猜中了!")):p("",!0),l.getBal<0?(r(),n("p",It,"很遗憾，您未猜中")):p("",!0)]),e("div",Dt,[l.getBal>0?(r(),n("h2",Lt,"您赢得了 "+u("  "+l.getBal+"   ")+" 元",1)):p("",!0),l.getBal<0&&l.round<5?(r(),n("h2",Et,"您损失了 "+u("  "+-l.getBal+"   ")+" 元",1)):p("",!0),e("h3",Gt,"目前本金 "+u(l.balance),1)]),e("div",Ht,[l.getBal>0&&l.round<5?(r(),n("button",{key:0,onClick:t[26]||(t[26]=(...i)=>s.closeResult&&s.closeResult(...i)),style:{"margin-top":"5px","margin-left":"15%","margin-right":"15%","background-color":"yellow"}}," 返回继续下一轮 ")):p("",!0),l.round==5?(r(),n("button",{key:1,onClick:t[27]||(t[27]=(...i)=>s.closeResult&&s.closeResult(...i)),style:{"margin-top":"5px","margin-left":"15%","margin-right":"15%","background-color":"yellow"}}," 继续 ")):p("",!0),l.getBal<0&&l.round<5?(r(),n("button",{key:2,onClick:t[28]||(t[28]=(...i)=>s.closeResult&&s.closeResult(...i)),style:{"margin-top":"10px","margin-left":"15%","margin-right":"15%","background-color":"gray",color:"whitesmoke"}}," 返回继续下一轮 ")):p("",!0)])])]),_:1},8,["modelValue"])]),e("div",null,[d(f,{modelValue:l.showFinalResult,"onUpdate:modelValue":t[30]||(t[30]=i=>l.showFinalResult=i)},{default:h(()=>[e("div",Jt,[t[72]||(t[72]=e("div",{style:{"font-size":"24px","margin-left":"10px",color:"black","font-weight":"bold"}},[e("h2",{style:{color:"red"}},"游戏结束!")],-1)),e("div",Kt,[e("h3",Ot,[t[66]||(t[66]=m("您目前的总金额为 ")),e("span",Qt,u(l.balance),1),t[67]||(t[67]=m(" 元"))]),e("h2",Wt,[t[68]||(t[68]=m("超越了 ")),e("span",Xt,u(l.winRate)+"%",1),t[69]||(t[69]=m(" 的人"))])]),e("div",Yt,[d(y,{to:"/work_2-4",style:{border:"1px solid whitesmoke",margin:"0 20%",padding:"2% 0","border-radius":"10px","background-color":"aquamarine"}},{default:h(()=>[t[70]||(t[70]=m(" 继续(")),e("span",Zt,u(l.waitTime),1),t[71]||(t[71]=m("秒后自动跳转) "))]),_:1})])])]),_:1},8,["modelValue"]),d(f,{modelValue:l.rest,"onUpdate:modelValue":t[32]||(t[32]=i=>l.rest=i)},{default:h(()=>[e("div",$t,[t[73]||(t[73]=e("p",{style:{"margin-top":"50px"}},"游戏已过半,",-1)),t[74]||(t[74]=e("p",null,"为了防止用眼疲劳,",-1)),t[75]||(t[75]=e("p",null,"请您休息一会!",-1)),e("div",te,[e("p",ee,u(l.restTime),1),l.restTime>0?(r(),n("p",le,"秒")):p("",!0)]),e("button",{onClick:t[31]||(t[31]=i=>l.rest=!1),style:{"margin-top":"10px",margin:"30px 10%","border-radius":"20px","padding-top":"5px","padding-bottom":"5px","background-color":"aqua"}}," 返回继续下一轮 ")])]),_:1},8,["modelValue"])])],64)}const de=A(M,[["render",ie],["__scopeId","data-v-076f04f3"]]);export{de as default};
