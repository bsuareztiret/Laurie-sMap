(this["webpackJsonpts-rt"]=this["webpackJsonpts-rt"]||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var i=a(1),o=a.n(i),c=a(5),n=a.n(c),s=(a(11),a(2)),p=(a(12),a(0)),r=function(e){var t=e.image,a=e.top,i=e.left,o=e.switchButton;return Object(p.jsx)("div",{className:"z-30 icon show",style:{top:"".concat(a,"%"),left:"".concat(i,"%"),cursor:"touch",position:"relative",width:"20px",height:"20px"},children:Object(p.jsx)("img",{src:t,onPointerDown:o,onClick:o,alt:"icon-textile"})})},m=(a(4),function(e){var t=e.image,a=e.href,i=e.top,o=e.left,c=e.display,n=e.switchButton;return Object(p.jsxs)("div",{className:"z-40 ".concat(c),style:{top:"".concat(i,"%"),left:"".concat(o,"%"),position:"relative"},children:[Object(p.jsx)("button",{className:"text-black",style:{position:"absolute",top:"-10.5px",right:"1px"},onPointerDown:n,onClick:n,children:"\u2a2f"}),Object(p.jsx)("img",{src:t,alt:"preview google maps",onClick:function(){return window.open(a,"_blank")},onPointerDown:function(){return window.open(a,"_blank")}})]})}),l=function(e){var t=e.top,a=e.left,c=e.image,n=e.icon,l=e.href,g=e.type,d=e.index,f=Object(i.useState)(!1),h=Object(s.a)(f,2),b=h[0],w=h[1],u=Object(i.useState)(!1),j=Object(s.a)(u,2),y=j[0],O=j[1],x=function(){w(!b),setTimeout((function(){O(!b)}),300)};return Object(p.jsxs)(o.a.Fragment,{children:[!b&&Object(p.jsx)(r,{image:n,top:t,left:a,switchButton:x}),b&&y&&Object(p.jsx)(m,{type:g,image:c,href:l,top:t,left:a,display:y?"preview show":"preview",switchButton:x,index:d})]})},g=function(e){var t=e.link,a=e.floor,i=t.map((function(e,t){return a>=e.floor?Object(p.jsx)("div",{style:{position:"absolute",width:"100%",height:"100%"},children:Object(p.jsx)(l,{top:e.top,left:e.left,image:e.image,icon:e.icon,href:e.href,type:e.type,index:t})},"index:".concat(t,"-").concat(e.href)):null}));return Object(p.jsx)("div",{children:i})},d=a(6),f=a.p+"static/media/backgroundG.2512e50c.jpg",h=function(e){var t=Object(i.useState)({value:{scale:.5,translation:{x:213,y:70}}}),a=Object(s.a)(t,2),o=a[0],c=a[1],n=Object(i.useState)(0),r=Object(s.a)(n,2),m=r[0],l=r[1],g=Object(i.useState)(1200),h=Object(s.a)(g,2),b=h[0],w=h[1],u=Object(i.useState)(1200),j=Object(s.a)(u,2),y=j[0],O=j[1],x=Object(i.useState)(1200),v=Object(s.a)(x,2),k=v[0],T=v[1],S=Object(i.useState)(1200),B=Object(s.a)(S,2),C=B[0],M=B[1],P=function(){w(1.5*b),T(1.5*k),O(2.1*y),M(2.1*C),l(m+1)},Q=function(){w(b/1.5),T(k/1.5),O(y/2.1),M(C/2.1),l(m-1)};return Object(p.jsxs)(d.MapInteractionCSS,{value:o.value,className:"grid grid-colone-2",onChange:function(e){return function(e){(0===m&&e.scale>=1.4||1===m&&e.scale>=2)&&P(),(2===m&&e.scale<2||1===m&&e.scale<1.5)&&Q(),c({value:e})}(e)},translationBounds:{xMin:-y,xMax:b,yMin:-C,yMax:k},children:[e.links[o.value.scale>=.7&&o.value.scale<.85?0:o.value.scale>=.85&&o.value.scale<1?1:o.value.scale>=1&&o.value.scale<1.15?2:o.value.scale>=1.15?3:666],Object(p.jsx)("img",{src:f,alt:"test"})]})},b=a.p+"static/media/chixelles.6ac2b027.png",w=a.p+"static/media/liegeorban.19b38508.png",u=a.p+"static/media/gandstdenis.f1c9b207.png",j=a.p+"static/media/miden52.236d755a.png",y=a.p+"static/media/raven16.6e54cbb5.png",O=a.p+"static/media/gand98.2d0e57d4.png",x=a.p+"static/media/leopold3.cecbe697.png",v=a.p+"static/media/montagne.e6edaa58.png",k=a.p+"static/media/detrooz.0bc45be1.png",T=a.p+"static/media/beliard.0ddaa931.png",S=a.p+"static/media/gand431.3c03a1ad.png",B=a.p+"static/media/parc.894dc2e4.png",C=a.p+"static/media/minusone.1bfb048b.png",M=a.p+"static/media/loire.91057d33.png",P=a.p+"static/media/carre1.083769d9.png",Q=a.p+"static/media/carre01.84d6034c.png",E=a.p+"static/media/carre01b.3826428e.png",F=a.p+"static/media/carre02.69d37824.png",N=a.p+"static/media/carre4.94badcf4.png",U=a.p+"static/media/carre04.1653c15b.png",z=a.p+"static/media/carre07.a6bb877d.png",I=a.p+"static/media/carre09.016213ef.png",J=a.p+"static/media/carre10.451a038a.png",_=a.p+"static/media/carre11.e5a16efb.png",X=[{top:23,left:65.5,href:"https://www.google.com/maps/@50.8636166,4.4021146,3a,81.2y,84.22h,128.12t/data=!3m7!1e1!3m5!1sQCUYasxg5I2cUidkFX_Flw!2e0!5s20200901T000000!7i13312!8i6656",image:x,icon:E,floor:0,type:"image"},{top:82,left:14,href:"https://www.google.com/maps/@51.0271212,3.7020128,3a,75y,249.27h,100.85t/data=!3m7!1e1!3m5!1sFJSOtCrBh9yO28tYh-Romg!2e0!5s20190601T000000!7i13312!8i6656",image:u,icon:a.p+"static/media/carre11b.97e9f5a0.png",floor:0,type:"image"},{top:74,left:74,href:"https://www.google.com/maps/@51.064782,3.7183506,3a,45.4y,351.93h,111.24t/data=!3m7!1e1!3m5!1sbbaVKM3qVqQQ5Zy0_IOSvg!2e0!5s20170601T000000!7i13312!8i6656",image:C,icon:a.p+"static/media/carre12.d1544a84.png",floor:0,type:"image"},{top:42,left:19,href:"https://www.google.com/maps/@47.1943441,-1.5626691,3a,30.4y,232.76h,96.8t/data=!3m7!1e1!3m5!1sprw77hRikeHBtUDhy25lrA!2e0!5s20170801T000000!7i13312!8i6656",image:M,icon:a.p+"static/media/carre15b.308575c9.png",floor:0,type:"image"},{top:70,left:16.5,href:"https://www.google.com/maps/@52.3652986,4.9148961,3a,75y,194.64h,122.37t/data=!3m7!1e1!3m5!1sPW47XEiywmaZMU6llRaOlg!2e0!5s20201201T000000!7i13312!8i6656",image:j,icon:P,floor:1,type:"image"},{top:32,left:46,href:"https://www.google.com/maps/@50.6278783,5.57245,3a,40.9y,190.09h,106.81t/data=!3m7!1e1!3m5!1s2Xn8qvpgfSXJBUKciOlwMQ!2e0!5s20190601T000000!7i13312!8i6656",image:w,icon:z,floor:1,type:"image"},{top:57,left:17.25,href:"https://www.google.com/maps/@50.8347551,4.363633,3a,75y,183.88h,106.97t/data=!3m7!1e1!3m5!1sGbep5MJDJN648E5P44soaw!2e0!5s20200601T000000!7i13312!8i6656",image:b,icon:N,floor:1,type:"image"},{top:56,left:54,href:"https://www.google.com/maps/@50.8443481,4.3592964,3a,64y,52.87h,125.24t/data=!3m7!1e1!3m5!1sFsr-EHP1Ci9RBQhartT8Ig!2e0!5s20200701T000000!7i13312!8i6656",image:y,icon:a.p+"static/media/carre16.3ef6b3b4.png",floor:1,type:"image"},{top:34,left:60,href:"https://www.google.com/maps/@50.8411568,4.3750556,3a,75y,324.15h,115.38t/data=!3m7!1e1!3m5!1scnyER_xgaTszjw7BB9A3hw!2e0!5s20201001T000000!7i13312!8i6656",image:T,icon:J,floor:1,type:"image"},{top:41.5,left:36,href:"https://www.google.com/maps/@51.0359812,3.6952585,3a,37.1y,150.21h,97.24t/data=!3m7!1e1!3m5!1skNoKWYXg8ehEPbiSfuZk9w!2e0!5s20200901T000000!7i13312!8i6656",image:S,icon:Q,floor:2,type:"image"},{top:80,left:31,href:"https://www.google.com/maps/@50.8320425,4.367354,3a,50.3y,343.36h,102.36t/data=!3m7!1e1!3m5!1sx9mlLCGmmcOoKnfPFzW44Q!2e0!5s20200601T000000!7i13312!8i6656",image:B,icon:_,floor:2,type:"image"},{top:73,left:60,href:"https://www.google.com/maps/@50.8349352,4.4289181,3a,75y,10.2h,112.14t/data=!3m7!1e1!3m5!1staNL5zOKCUQgJMBXSFs6cg!2e0!5s20190401T000000!7i13312!8i6656",image:k,icon:I,floor:2,type:"image"},{top:66,left:38,href:"https://www.google.com/maps/@51.0407493,3.7175388,3a,56.6y,80.21h,110.33t/data=!3m7!1e1!3m5!1stQbIBFzeYl9imwQ_97CiNA!2e0!5s20200801T000000!7i13312!8i6656",image:O,icon:U,floor:3,type:"image"},{top:44,left:48.5,href:"https://www.google.be/maps/@50.8490558,4.3619494,3a,39.4y,357.3h,114.06t/data=!3m7!1e1!3m5!1sU7yiZoIf-rfUVPs_EZ5vCw!2e0!5s20190501T000000!7i13312!8i6656",image:v,icon:F,floor:3,type:"image"}],D=function(){var e=[];return Object(i.useEffect)((function(){for(var t=0;t<=3;t++)e.push(Object(p.jsx)(g,{link:X,floor:t}))})),Object(p.jsx)(h,{links:e})},K=function(){return Object(p.jsx)("div",{style:{backgroundColor:"#f3f3f3",width:2048,height:1448},children:Object(p.jsx)(D,{})})};n.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(K,{})}),document.getElementById("root"))},4:function(e,t,a){}},[[17,1,2]]]);
//# sourceMappingURL=main.5f7fec62.chunk.js.map