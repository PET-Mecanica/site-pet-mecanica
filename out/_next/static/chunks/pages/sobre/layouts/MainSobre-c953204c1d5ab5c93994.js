_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[35],{Uglb:function(e,a,o){"use strict";o.r(a),o.d(a,"default",(function(){return f}));var t=o("H+61"),r=o("UlJF"),i=o("7LId"),n=o("VIvw"),s=o("iHvq"),c=o("q1tI"),d=o.n(c),l=o("Z3vd"),p=o("viY9"),u=o("H2TA"),m=d.a.createElement;function b(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,t=Object(s.a)(e);if(a){var r=Object(s.a)(this).constructor;o=Reflect.construct(t,arguments,r)}else o=t.apply(this,arguments);return Object(n.a)(this,o)}}var h=Object(p.a)({}),f=function(e){Object(i.a)(o,e);var a=b(o);function o(){return Object(t.a)(this,o),a.apply(this,arguments)}return Object(r.a)(o,[{key:"render",value:function(){return m(d.a.Fragment,null,m(l.a,{href:"/pet".concat(this.props.href,".html"),className:"button-section",size:"large",variant:"outlined",style:{fontFamily:"Poppins",LetterSpacing:"0.15rem !important",backgroundColor:"rgb(0,0,0,0)",borderRadius:"0",border:"2px solid ".concat(this.props.color),color:"".concat(this.props.color),margin:h.spacing(1),padding:"10px 22px"}},this.props.value))}}]),o}(c.Component);f=Object(u.a)({})(f)},Z3vd:function(e,a,o){"use strict";var t=o("Ff2n"),r=o("wx14"),i=o("q1tI"),n=(o("17x9"),o("iuhU")),s=o("H2TA"),c=o("ye/S"),d=o("VD++"),l=o("NqtD"),p=i.forwardRef((function(e,a){var o=e.children,s=e.classes,c=e.className,p=e.color,u=void 0===p?"default":p,m=e.component,b=void 0===m?"button":m,h=e.disabled,f=void 0!==h&&h,g=e.disableElevation,v=void 0!==g&&g,y=e.disableFocusRipple,x=void 0!==y&&y,S=e.endIcon,E=e.focusVisibleClassName,O=e.fullWidth,j=void 0!==O&&O,C=e.size,w=void 0===C?"medium":C,P=e.startIcon,z=e.type,N=void 0===z?"button":z,k=e.variant,R=void 0===k?"text":k,T=Object(t.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),I=P&&i.createElement("span",{className:Object(n.a)(s.startIcon,s["iconSize".concat(Object(l.a)(w))])},P),q=S&&i.createElement("span",{className:Object(n.a)(s.endIcon,s["iconSize".concat(Object(l.a)(w))])},S);return i.createElement(d.a,Object(r.a)({className:Object(n.a)(s.root,s[R],c,"inherit"===u?s.colorInherit:"default"!==u&&s["".concat(R).concat(Object(l.a)(u))],"medium"!==w&&[s["".concat(R,"Size").concat(Object(l.a)(w))],s["size".concat(Object(l.a)(w))]],v&&s.disableElevation,f&&s.disabled,j&&s.fullWidth),component:b,disabled:f,focusRipple:!x,focusVisibleClassName:Object(n.a)(s.focusVisible,E),ref:a,type:N},T),i.createElement("span",{className:s.label},I,o,q))}));a.a=Object(s.a)((function(e){return{root:Object(r.a)(Object(r.a)({},e.typography.button),{},{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(c.b)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(c.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(c.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(c.b)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(c.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(c.b)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(c.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(p)},bpld:function(e,a,o){"use strict";o.r(a),o.d(a,"default",(function(){return v}));var t=o("H+61"),r=o("UlJF"),i=o("7LId"),n=o("VIvw"),s=o("iHvq"),c=o("q1tI"),d=o.n(c),l=o("Ji2X"),p=o("tRbT"),u=o("ofer"),m=o("Uglb"),b=o("viY9"),h=o("H2TA"),f=d.a.createElement;function g(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,t=Object(s.a)(e);if(a){var r=Object(s.a)(this).constructor;o=Reflect.construct(t,arguments,r)}else o=t.apply(this,arguments);return Object(n.a)(this,o)}}Object(b.a)({});var v=function(e){Object(i.a)(o,e);var a=g(o);function o(){return Object(t.a)(this,o),a.apply(this,arguments)}return Object(r.a)(o,[{key:"render",value:function(){return f("div",{style:{backgroundColor:"#252525"}},f(l.a,{className:"reverse container row justify-content-between"},f(p.a,{item:!0,lg:6,md:12},f("img",{src:"interno.jpg",className:"float-left",style:{width:"100%",height:"100%",maxWidth:"500px",maxHeight:"600px"}})),f(p.a,{item:!0,lg:6,md:12},f("h2",{className:"h1-center"},"O PET-MEC\xc2NICA DA ESCOLA POLIT\xc9CNICA DA USP"),f("p",{className:"p-center"},"O PET-Mec\xe2nica foi criado em 1991, ao mesmo tempo que o PET-Mecatr\xf4nica e o extinto PET-Minas, sendo estes os tr\xeas primeiros grupos PET da Escola Polit\xe9cnica da USP. J\xe1 passaram pelo PET-Mec\xe2nica mais de 100 alunos - entre bolsistas e colaboradores - e tr\xeas professores tutores."),f("p",{className:"p-center"},"A inten\xe7\xe3o do grupo \xe9 desenvolver projetos de Pesquisa, Ensino e Extens\xe3o no \xe2mbito do curso de Engenharia Mec\xe2nica da Poli-USP, de forma a contribuir para uma forma\xe7\xe3o diferenciada n\xe3o apenas de seus integrantes, mas tamb\xe9m dos demais alunos do curso, tanto profissional quanto cidad\xe3, incentivando o desenvolvimento da consci\xeancia social e das habilidades acad\xeamicas e pessoais - a curiosidade, o entusiasmo e a satisfa\xe7\xe3o de ser parte ativa da hist\xf3ria da Escola Polit\xe9cnica da USP. Dessa forma, o PET-Mec\xe2nica busca ser reconhecido como um catalisador na melhoria da gradua\xe7\xe3o na qual est\xe1 inserido, sempre alinhado aos valores da Responsabilidade, Proatividade, Compromisso, Criatividade, Inova\xe7\xe3o e \xc9tica."),f("p",{className:"p-center"},"O perfil de egresso que o PET-Mec\xe2nica busca \xe9 o profissional de engenharia com o perfil definido pela Escola Polit\xe9cnica da USP e que, adicionalmente, seja capaz de liderar as pessoas ao seu redor e de incentiv\xe1-las a participar de mudan\xe7as positivas para a sociedade."))),f(l.a,{className:"container row justify-content-between"},f(p.a,{item:!0,lg:6,md:12},f("h2",{className:"h1-center"},"O PET NO BRASIL"),f("p",{className:"p-center"},"O Programa de Educa\xe7\xe3o Tutorial n\xe3o se restringe ao curso de Engenharia Mec\xe2nica nem \xe0 USP. Atualmente existem 842 grupos PET distribu\xeddos entre 121 Institui\xe7\xf5es de Ensino Superior por todo o Brasil. Criado em 1979 como Programa Especial de Treinamento, em 2004 passou a ser identificado pela denomina\xe7\xe3o atual. Atualmente \xe9 mantido pela Secretaria de Educa\xe7\xe3o Superior do Minist\xe9rio da Educa\xe7\xe3o, SESu/MEC."),f("p",{className:"p-center"},"O Programa de Educa\xe7\xe3o Tutorial \xe9 composto por grupos tutoriais de aprendizagem e busca propiciar aos alunos, sob a orienta\xe7\xe3o de um professor tutor, condi\xe7\xf5es para a realiza\xe7\xe3o de atividades extracurriculares, que complementem a sua forma\xe7\xe3o acad\xeamica, procurando atender mais plenamente \xe0s necessidades do pr\xf3prio curso de gradua\xe7\xe3o e/ou ampliar e aprofundar os objetivos e os conte\xfados program\xe1ticos que integram sua grade curricular. Espera-se, assim, proporcionar a melhoria da qualidade acad\xeamica dos cursos de gradua\xe7\xe3o apoiados pelo PET."),f("p",{className:"p-center"},"As atividades extracurriculares que comp\xf5em o Programa t\xeam como objetivo garantir aos alunos do curso oportunidades de vivenciar experi\xeancias n\xe3o presentes em estruturas curriculares convencionais, visando a sua forma\xe7\xe3o global e favorecendo a forma\xe7\xe3o acad\xeamica."),f("p",{className:"p-center"},"A m\xe9dio e longo prazo, a SESu/MEC espera fomentar a forma\xe7\xe3o de profissionais de n\xedvel superior, nas diversas \xe1reas do conhecimento, dotados de elevados padr\xf5es cient\xedficos, t\xe9cnicos, \xe9ticos e com responsabilidade social, nas diversas \xe1reas do conhecimento, que sejam capazes de uma atua\xe7\xe3o no sentido da transforma\xe7\xe3o da realidade nacional, em especial como docentes e pesquisadores p\xf3s-graduados em \xe1reas profissionais.")),f(p.a,{item:!0,lg:6,md:12},f("img",{src:"brasil.png",className:"float-right",style:{width:"100%",height:"100%",maxWidth:"500px",maxHeight:"600px"}}))),f(l.a,{className:"row justify-content-between",style:{padding:"40px 0"}},f("div",{style:{textAlign:"center"}},f(u.a,{className:"text",variant:"h6",style:{paddingBottom:"15px"}},"DOCUMENTOS PARA SABER MAIS SOBRE O PET"),f(m.default,{href:"/pdpp.pdf",value:"Clique aqui",color:"#EEEEEF"}))))}}]),o}(c.Component);v=Object(h.a)({})(v)},"t+KH":function(e,a,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sobre/layouts/MainSobre",function(){return o("bpld")}])}},[["t+KH",0,1,2,3,4]]]);