(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(235)}])},235:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return p}});var n=t(797),a=t(5893),r=t(9008),l=t.n(r),s=t(7294),c=t(5820),o=t(3136),u=Object.assign(function(e){var i=e.handleClose,t=e.text;return(0,a.jsx)(u.Backdrop,{onClick:i,children:(0,a.jsxs)(o.E.div,{onClick:function(e){return e.stopPropagation()},className:"modal orange-gradient z-10",variants:{hidden:{y:"-100vh",opacity:0},visible:{y:"0",opacity:1,transition:{duration:.1,type:"spring",damping:25,stiffness:500}},exit:{y:"100vh",opacity:0}},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[(0,a.jsx)(u.Text,{text:t}),(0,a.jsx)(u.Button,{onClick:i,label:"닫기"})]},"modal")})},{Backdrop:function(e){var i=e.children,t=e.onClick;return(0,a.jsx)(o.E.div,{onClick:t,className:"absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center overflow-y-hidden",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:i})},Button:function(e){var i=e.label,t=e.onClick;return(0,a.jsx)(o.E.button,{className:"relative bottom-[1.5rem] p-[0.3rem] min-h-[3rem] m-auto mb-0 bg-[#101315] text-[#eee]",type:"button",whileHover:{scale:1.1},whileTap:{scale:.95},onClick:t,children:i})},Text:function(e){var i=e.text;return(0,a.jsxs)("div",{className:"modal-text",children:[(0,a.jsx)("h3",{children:i}),(0,a.jsx)("h5",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laboriosam labore, totam expedita voluptates tempore asperiores sequi, alias cum veritatis, minima dolor iste similique eos id. Porro, culpa? Officiis, placeat?"})]})}}),d=[{questions:"사용자에게 편리한 인터페이스 환경을 제공하고 컴퓨터 시스템의 자원을 효율적으로 관리하는 소프트웨어를 OOOO이라고 합니다.",answer:"운영체제",multipleChoice:["운","절","상","연","체","한","제","원","본","영","술","미","정","추",]},],h={hidden:{opacity:1,scale:0},visible:{opacity:1,scale:1,transition:{delayChildren:.3,staggerChildren:.07}}},m={hidden:{y:30,opacity:0},visible:{y:0,opacity:1}},x=Object.assign(function(e){var i=e.children;return(0,a.jsx)("div",{className:"min-h-screen flex flex-col justify-center items-center",children:(0,a.jsx)("div",{className:"max-w-xl flex flex-col gap-4 justify-center items-center",children:i})})},{MultipleChoice:function(e){var i=e.multipleChoice,t=e.handleClickedInputChange;return(0,a.jsx)(o.E.ul,{className:"w-full h-full grid overflow-hidden m-0 grid-cols-7 grid-rows-2 gap-[16px] drop-shadow-2xl p-4",variants:h,initial:"hidden",animate:"visible",children:i.map(function(e,i){return(0,a.jsx)(o.E.li,{className:"h-[50px] bg-amber-700/20 rounded-md flex items-center justify-center hover:cursor-pointer",variants:m,whileHover:{scale:1.2},onClick:t,children:e},i)})})},Answer:function(e){var i=e.clickedInput,t=e.answerLength,n="w-[".concat(50*t,"px]"),r="".concat(t?n:""," h-[38px] grid overflow-hidden m-0 grid-cols-4 grid-rows-1 gap-[16px]");return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.E.ul,{className:"".concat(r," relative top-[54px] mt-[-54px]"),variants:h,initial:"hidden",animate:"visible",children:Array.from({length:t}).map(function(e,i){return(0,a.jsx)(o.E.li,{className:"bg-black/20 rounded-[12px]",variants:m},i)})}),(0,a.jsx)(o.E.ul,{className:r,variants:h,initial:"hidden",animate:"visible",children:i.map(function(e,i){return(0,a.jsx)(o.E.li,{className:"flex items-center justify-center",variants:m,children:e},i)})})]})},Questions:function(e){var i=e.questions;return(0,a.jsx)("h2",{children:i})},Title:function(e){var i=e.title;return(0,a.jsx)("h1",{className:"text-4xl font-bold text-center mb-4",children:i})}}),p=function(){var e=d[0],i=e.answer,t=e.questions,r=e.multipleChoice,o=(0,s.useState)([]),h=o[0],m=o[1],p=function(e){var i=e.target.innerText;m(function(e){return(0,n.Z)(e).concat([i])})};(0,s.useEffect)(function(){h.length===i.length&&setTimeout(function(){h.join("")===i?y("정답"):y("실패"),C(),m([])},500)},[h,i]);var f=(0,s.useState)(!1),v=f[0],j=f[1],g=(0,s.useState)(""),b=g[0],y=g[1],w=function(){return j(!1)},C=function(){return j(!0)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(l(),{children:[(0,a.jsx)("title",{children:"퀴즈"}),(0,a.jsx)("meta",{name:"description",content:"퀴즈 !!"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsx)(c.M,{initial:!1,onExitComplete:function(){return null},mode:"wait",children:v&&(0,a.jsx)(u,{text:b,handleClose:w})}),(0,a.jsxs)(x,{children:[(0,a.jsx)(x.Title,{title:"단어 퀴즈"}),(0,a.jsx)(x.Questions,{questions:t}),(0,a.jsx)(x.Answer,{clickedInput:h,answerLength:i.length}),(0,a.jsx)(x.MultipleChoice,{multipleChoice:r,handleClickedInputChange:p})]})]})}}},function(e){e.O(0,[914,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);