import{d as e,r as t,c as a,o as l,a as n,b as o,e as u,f as r,g as i,F as c,w as d,h as s}from"./vendor.c1b75754.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const l=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,o)=>{const u=new URL(e,l);if(self[t].moduleMap[u])return a(self[t].moduleMap[u]);const r=new Blob([`import * as m from '${u}';`,`${t}.moduleMap['${u}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(r),onerror(){o(new Error(`Failed to import: ${e}`)),n(i)},onload(){a(self[t].moduleMap[u]),n(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("/vue-canvas-sign/assets/");var v=e({name:"CanvasSign",props:{width:{type:Number,default:document.documentElement.clientWidth||document.body.clientWidth},height:{type:Number,default:200},lineWidth:{type:Number,default:2},color:{type:String,default:"#000"},background:{type:String,default:"rgba(255, 255, 255, 0)"},borderWidth:{type:Number,default:1},borderColor:{type:String,default:"#333"},imageType:{type:String,default:"image/png",validator:e=>["image/png","image/jpeg","image/webp"].includes(e)},imageQual:{type:Number,default:.92,validator:e=>e<=1&&e>=0}},setup(e){const n=t(),o=t(),u=t(!1),r=a((()=>e.borderWidth>0&&e.width>2*e.borderWidth?`border: ${e.borderWidth}px solid ${e.borderColor}`:""));return l((()=>{var t;const a=null==(t=n.value)?void 0:t.getContext("2d");if(a){const{background:t,width:l,height:n,color:u,lineWidth:r}=e;a.fillStyle=t,a.fillRect(0,0,l,n),a.strokeStyle=u,a.lineWidth=r,a.lineCap="round",a.lineJoin="round",a.shadowBlur=1,a.shadowColor=u,o.value=a}})),{canvas:n,borderStyle:r,save:t=>{if(!n.value)return void t();let a;a="image/jpeg"===e.imageType?n.value.toDataURL("image/jpeg",e.imageQual):n.value.toDataURL(e.imageType),t(a)},clear:()=>{var e;const{width:t,height:a}=n.value||{};null==(e=o.value)||e.clearRect(0,0,t||0,a||0)},touchstart:e=>{var t,a,l;const{clientX:u,clientY:r,target:i}=e.changedTouches[0];if("CANVAS"===i.tagName){const{left:e,top:i}=(null==(t=n.value)?void 0:t.getBoundingClientRect())||{left:0,top:0};null==(a=o.value)||a.beginPath(),null==(l=o.value)||l.moveTo(u-e,r-i)}},mousedown:e=>{var t,a,l;if("CANVAS"===e.target.tagName){const{left:r,top:i}=(null==(t=n.value)?void 0:t.getBoundingClientRect())||{left:0,top:0};u.value=!0,null==(a=o.value)||a.beginPath(),null==(l=o.value)||l.moveTo(e.clientX-r,e.clientY-i)}},touchmove:e=>{var t;if(e.stopPropagation(),e.preventDefault(),!o.value)return;const{clientX:a,clientY:l,target:u}=e.changedTouches[0];if("CANVAS"===u.tagName){const{left:e,top:u}=(null==(t=n.value)?void 0:t.getBoundingClientRect())||{left:0,top:0};o.value.lineTo(a-e,l-u),o.value.stroke()}},mousemove:t=>{if(t.stopPropagation(),t.preventDefault(),u.value&&n.value&&o.value&&"CANVAS"===t.target.tagName){const{width:a,height:l}=n.value,{left:r,top:i}=n.value.getBoundingClientRect()||{left:0,top:0};o.value.lineTo(t.clientX-r,t.clientY-i),o.value.stroke(),(t.clientX-r<=e.borderWidth||t.clientX-r>=(a||0)-2*e.borderWidth||t.clientY-i<=e.borderWidth||t.clientY-i>=(l||0)-2*e.borderWidth)&&(u.value=!1)}},touchend:()=>{var e;null==(e=o.value)||e.closePath()},mouseup:()=>{var e;u.value=!1,null==(e=o.value)||e.closePath()}}}});v.render=function(e,t,a,l,i,c){return r(),n("div",null,[o("canvas",{ref:"canvas",width:e.width>2*e.borderWidth?e.width-2*e.borderWidth:e.width,height:e.height,style:e.borderStyle,onTouchstart:t[1]||(t[1]=(...t)=>e.touchstart&&e.touchstart(...t)),onMousedown:t[2]||(t[2]=(...t)=>e.mousedown&&e.mousedown(...t)),onTouchmove:t[3]||(t[3]=(...t)=>e.touchmove&&e.touchmove(...t)),onMousemove:t[4]||(t[4]=(...t)=>e.mousemove&&e.mousemove(...t)),onTouchend:t[5]||(t[5]=(...t)=>e.touchend&&e.touchend(...t)),onMouseup:t[6]||(t[6]=(...t)=>e.mouseup&&e.mouseup(...t))},null,44,["width","height"]),u(e.$slots,"default",{save:e.save,clear:e.clear})])},v.install=e=>{e.component(v.name,v)};const g="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII=";var m=e({components:{CanvasSign:v},setup(){const e=t(g),a=t();return{canvasSign:a,imgSrc:e,saveCallback:t=>{e.value=t||g},saveHandle:()=>{var t;null==(t=a.value)||t.save((t=>{e.value=t||g}))},clearHandle:()=>{var t;null==(t=a.value)||t.clear(),e.value=g},clearWithSlotHandle:t=>{t&&t(),e.value=g}}}});const h=o("hr",null,null,-1),p=o("hr",null,null,-1);m.render=function(e,t,a,l,u,s){const v=i("CanvasSign");return r(),n(c,null,[o(v,{ref:"canvasSign",imageType:"image/png",imageQual:.01,background:"#FFF"},null,8,["imageQual"]),o("div",null,[o("button",{onClick:t[1]||(t[1]=(...t)=>e.saveHandle&&e.saveHandle(...t))},"save"),o("button",{onClick:t[2]||(t[2]=(...t)=>e.clearHandle&&e.clearHandle(...t))},"clear")]),h,o(v,{height:400},{default:d((({save:t,clear:a})=>[o("button",{onClick:()=>t(e.saveCallback)},"save",8,["onClick"]),o("button",{onClick:()=>e.clearWithSlotHandle(a)},"clear",8,["onClick"])])),_:1}),p,o("img",{src:e.imgSrc,alt:"生成的图片"},null,8,["src"])],64)};const f=s(m);f.component("CanvasSign",v),f.mount("#app");
