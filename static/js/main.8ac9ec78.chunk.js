(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var i=n(3),a=n.n(i),s=n(4),c=n(5),o=n(6),r=n(9),l=n(7),m=n(1),h=n.n(m),u=n(8),j=(n(14),n(0)),p=function(e){var t=e.images,n=e.step,i=void 0===n?3:n,a=e.frameSize,s=void 0===a?3:a,c=e.itemWidth,o=void 0===c?130:c,r=e.animationDuration,l=void 0===r?1e3:r,h=e.infinite,p=void 0!==h&&h,d=Object(m.useState)(0),b=Object(u.a)(d,2),f=b[0],g=b[1];return Object(j.jsxs)("div",{className:"Carousel",children:[Object(j.jsx)("ul",{className:"Carousel__list",children:t.map((function(e){return Object(j.jsx)("li",{style:{transform:"translateX(".concat(-f*o,"px)"),transition:"".concat(l,"ms all ease")},children:Object(j.jsx)("img",{src:e,alt:e,style:{width:"".concat(o,"px")}})},e)}))}),Object(j.jsxs)("div",{className:"Carousel__wrapper",children:[Object(j.jsx)("button",{onClick:function(){return g((function(e){return p&&0===e?t.length-s:Math.max(e-i,0)}))},type:"button",className:"Carousel__btn",children:"Prev"}),Object(j.jsx)("button",{onClick:function(){return g((function(e){return p&&e+i>=t.length?0:Math.min(e+i,t.length-s)}))},type:"button",className:"Carousel__btn",children:"Next"})]})]})},d=(n(16),function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],step:3,frameSize:3,itemWidth:130,animationDuration:1e3,infinite:!1},e.handleChange=function(t){var n=t.target,i=n.name,a=n.value,c=n.type,o=n.checked;e.setState(Object(s.a)({},i,"checkbox"===c?o:Number(a)))},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.images,n=e.step,i=e.frameSize,a=e.itemWidth,s=e.animationDuration,c=e.infinite;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("h1",{className:"App__title title",children:["Carousel with",t.length,"images"]}),Object(j.jsx)("div",{className:"carusel-wrapper",style:{width:"".concat(a*i,"px")},children:Object(j.jsx)(p,{images:t,step:n,frameSize:i,itemWidth:a,animationDuration:s,infinite:c})}),Object(j.jsxs)("div",{className:"footer",children:[Object(j.jsxs)("section",{className:"footer__option",children:[Object(j.jsx)("h3",{className:"footer__title title",children:"Step"}),Object(j.jsx)("input",{className:"footer__input",name:"step",type:"number",min:"1",max:"5",value:this.state.step,onChange:this.handleChange})]}),Object(j.jsxs)("section",{className:"footer__option",children:[Object(j.jsx)("h3",{className:"footer__title title",children:"Frame Size"}),Object(j.jsx)("input",{className:"footer__input",name:"frameSize",type:"number",min:"2",max:"9",value:this.state.frameSize,onChange:this.handleChange})]}),Object(j.jsxs)("section",{className:"footer__option",children:[Object(j.jsx)("h3",{className:"footer__title title",children:"item width"}),Object(j.jsx)("input",{className:"footer__input",name:"itemWidth",type:"number",min:"100",max:"500",step:10,value:this.state.itemWidth,onChange:this.handleChange})]}),Object(j.jsxs)("section",{className:"footer__option",children:[Object(j.jsx)("h3",{className:"footer__title title",children:"animation duration"}),Object(j.jsx)("input",{className:"footer__input",name:"animationDuration",type:"number",min:"1000",max:"5000",step:500,value:this.state.animationDuration,onChange:this.handleChange})]}),Object(j.jsxs)("section",{className:"footer__option",children:[Object(j.jsx)("label",{htmlFor:"infinite",children:Object(j.jsx)("h3",{className:"footer__title title",children:"infinite"})}),Object(j.jsx)("input",{className:"footer__input",name:"infinite",id:"infinite",type:"checkbox",checked:this.state.infinite,onChange:this.handleChange})]})]})]})}}]),n}(h.a.Component)),b=d;a.a.render(Object(j.jsx)(b,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.8ac9ec78.chunk.js.map