(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{115:function(e,a,t){},116:function(e,a,t){},117:function(e,a,t){},118:function(e,a,t){},119:function(e,a,t){},120:function(e,a,t){},121:function(e,a,t){},122:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(55),r=t.n(l),o=t(18),i=t(56),s=(t(68),t(69),t(9)),m=t(3),d=t(2),u=t.n(d),p=(t(72),function(e){var a=e.children,t=e.title,l=e.green,r=e.subtitle,o=Object(n.useState)(!1),i=Object(s.a)(o,2),d=i[0],p=i[1];return c.a.createElement("div",{className:"accordian--container"},c.a.createElement("button",{className:u()("flex-container flex-container--no-padding flex-container--align-center accordian--header",{"accordian--header--green":l}),onClick:function(){return p(!d)},"aria-expanded":d,"aria-controls":"accordian-content",id:"accordian-header"},c.a.createElement("div",{className:"accordian--title-container flex-container flex-container--no-padding flex-container--no-space flex-container--align-center"},c.a.createElement("p",{className:"accordian--title"},t),r&&c.a.createElement("p",{className:"accordian--subtitle"},r)),c.a.createElement(m.a,{icon:"chevron-down",className:u()("accordian--icon",{"accordian--icon--open":d,"accordian--icon--green":l})})),d&&c.a.createElement("div",{className:"accordian--content",id:"accordian-content","aria-labelledby":"accordian-header"},a))}),E=(t(73),function(e){var a=e.text,t=Object(n.useState)(!1),l=Object(s.a)(t,2),r=l[0],o=l[1];return c.a.createElement("div",{className:"about-accordian"},r&&c.a.createElement("div",{className:"about-accordian--content",id:"accordian-content","aria-labelledby":"accordian-header"},a),c.a.createElement("button",{className:u()("flex-container flex-container--align-center flex-container--justify about-accordian--button",{"about-accordian--button--open":r}),onClick:function(){return o(!r)},"aria-expanded":r,"aria-controls":"accordian-content",id:"accordian-header"},c.a.createElement("p",null,r?"Hide":"Read about us"),c.a.createElement(m.a,{icon:"chevron-down",className:u()("about-accordian--icon",{"about-accordian--icon--open":r})})))}),f=(t(74),function(e){var a=e.crumbs;return c.a.createElement("div",{className:"flex-container flex-container--no-padding"},c.a.createElement("ul",{className:"breadcrumb flex-container flex-container--no-padding flex-container--no-space"},a.map((function(e,t){return c.a.createElement("div",{key:e.text,className:"breadcrumb--crumb"},e.url?c.a.createElement("a",{href:e.url},c.a.createElement("li",null,e.text)):c.a.createElement("li",{className:"breadcrumb--crumb--active"},e.text),t!==a.length-1&&c.a.createElement("p",{className:"breadcrumb--icon"},"\u203a"))}))))}),x=t(59),v=(t(114),t(58)),b=t.n(v),N=(t(115),function(e){var a=e.currentPage,t=e.totalItems,l=e.itemsPerPage;return Object(n.useEffect)((function(){var e=document.getElementsByTagName("input"),t=document.createElement("div");t.textContent="".concat(a),t.className="pagination--label--current",e[0].replaceWith(t)}),[a]),c.a.createElement(x.a,{simple:!0,className:"pagination",defaultCurrent:1,current:a,total:t,pageSize:l,locale:b.a,prevIcon:1!==a&&c.a.createElement("div",{className:"pagination--label"},c.a.createElement(m.a,{icon:"chevron-left",className:"pagination--label--icon-left"})," ",c.a.createElement("span",null,"Last page")),nextIcon:c.a.createElement("div",{className:"pagination--label"},c.a.createElement("span",null,"Next page"),c.a.createElement(m.a,{icon:"chevron-right",className:"pagination--label--icon-right"}))})}),h=(t(116),function(e){var a=e.text,t=e.type,n=void 0===t?"button":t,l=e.disabled,r=e.onClick,o=e.twoCol,i=e.small,s=e.filter;return c.a.createElement("button",{disabled:l,type:n,onClick:r,className:u()("button",{"button--two-col":o,"button--small":i,"button--filter":s})},a)}),g=(t(117),function(e){var a=e.text,t=e.type,n=e.onClick;return c.a.createElement("button",{className:"review-button",type:t,onClick:n},a)}),y=(t(118),function(e){var a=e.text,t=Object(n.useState)(!1),l=Object(s.a)(t,2),r=l[0],o=l[1],i=Object(n.useState)(!1),d=Object(s.a)(i,2),p=d[0],E=d[1];return Object(n.useEffect)((function(){E("public"!==a)}),[a]),c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){return o(!r)},className:u()("privacy-button",{"privacy-button--open":r})},c.a.createElement("span",{className:u()({"privacy-button--open--title":r})},p?"private":"public",c.a.createElement(m.a,{className:"privacy-button--icon",icon:"chevron-down"})),r&&c.a.createElement("div",{className:"privacy-button--dropdown"},c.a.createElement("span",{role:"button",onClick:function(){return E(!p)},onKeyDown:function(e){return"Enter"===e.key?E(!p):null},tabIndex:0},p?"public":"private"))))}),w=(t(119),function(e){var a=e.text,t=e.href,n=e.size,l=e.grey;return c.a.createElement("a",{href:t,className:u()("link link--".concat(n),{"link--grey":l})},a)}),k=(t(120),function(e){var a=e.text,t=e.search,n=e.story;return c.a.createElement("div",{className:u()("tag",{"tag--search":t,"tag--story":n})},c.a.createElement("span",null,a,t&&c.a.createElement(m.a,{icon:"times",className:"tag--remove"})))}),C=(t(121),function(e){var a=e.options,t=e.onChange,n=(e.className,e.placeholder),l=e.id,r=e.disabled;return c.a.createElement("div",{className:"select--wrapper"},c.a.createElement("select",{onChange:t,id:l,defaultValue:n,disabled:r},c.a.createElement("option",{value:n,disabled:!0,hidden:!0},n),a.map((function(e){var a=e.value,t=e.text;return c.a.createElement("option",{key:a,value:a},t)}))))}),S=function(){return c.a.createElement("div",{className:"flex-container flex-container--no-padding"},c.a.createElement("div",{className:"flex-col--12"},c.a.createElement("h1",{className:"heading--xl"},"Welcome"),c.a.createElement("p",{className:"description"},"XL Heading"),c.a.createElement("h1",{className:"title--alt"},"Welcome"),c.a.createElement("p",{className:"description"},"Alt title"),c.a.createElement("h2",{className:"heading--l"},"Read other peoples experiences"),c.a.createElement("p",{className:"description"},"L Heading"),c.a.createElement("h3",{className:"heading--m"},"Contact us"),c.a.createElement("p",{className:"description"},"M Heading"),c.a.createElement("h4",{className:"heading--s"},"Email us at"),c.a.createElement("p",{className:"description"},"S Heading"),c.a.createElement("h5",{className:"heading--xs"},"Read whole story"),c.a.createElement("p",{className:"description"},"XS Heading"),c.a.createElement("p",{className:"body--l"},"Collecting first-person accounts of voices, from people who hear voices. This is a place where you can explore and share\u2026"),c.a.createElement("p",{className:"description"},"L Body"),c.a.createElement("p",{className:"body--m"},"info@hearing-voices.org"),c.a.createElement("p",{className:"description"},"M Body"),c.a.createElement("p",{className:"body--m-alt"},"About this project"),c.a.createElement("p",{className:"description"},"M Body (Alt)"),c.a.createElement("p",{className:"body--s"},"Created by Hearing Voices Network England"),c.a.createElement("p",{className:"description"},"S Body"),c.a.createElement("p",{className:"body--s-alt"},"Signing up is secure and how much you share is up to you, you can always\u2026"),c.a.createElement("p",{className:"description"},"S Body (Alt)"),c.a.createElement("p",{className:"body--xs"},"Signing up is secure and how much you share is up to you, you can always\u2026"),c.a.createElement("p",{className:"description"},"XS Body"),c.a.createElement("p",{className:"story"},"I was terrorized by three male voices who talked about me, narrating my movements and\u2026"),c.a.createElement("p",{className:"description"},"Story")),c.a.createElement("div",{className:"section flex-col--12"},c.a.createElement(p,{title:"11 Jan 2019",green:!0,subtitle:"1 private, 1 in public"},c.a.createElement("p",null,"Accordian content"))),c.a.createElement("div",{className:"section flex-col--12"},c.a.createElement(p,{title:"28 Dec 2018"},c.a.createElement("p",null,"Accordian content"))),c.a.createElement("div",{className:"section flex-col--12"},c.a.createElement(E,{text:"Collecting first-person accounts of voices, from people who hear voices. This is a place where you can explore and share your experiences anonymously."})),c.a.createElement("div",{className:"section flex-col--12"},c.a.createElement(f,{crumbs:[{text:"Home",url:"/"},{text:"Experiences",url:"/"},{text:"Selected Experience",url:""}]})),c.a.createElement("div",{className:"section flex-col--12"},c.a.createElement(N,{totalItems:20,itemsPerPage:5,currentPage:1})),c.a.createElement("div",{className:"section flex-col--12"},c.a.createElement(h,{text:"Browse experiences",onClick:function(){return console.log("Click!")}})),c.a.createElement("div",{className:"section flex-col--12"},c.a.createElement(h,{text:"Browse experiences",onClick:function(){return console.log("Click!")},disabled:!0}),c.a.createElement("div",{className:"section flex-col--12"},c.a.createElement(h,{twoCol:!0,text:"Sign up and share",onClick:function(){return console.log("Click!")}})),c.a.createElement("div",{className:"section flex-col--12"},c.a.createElement(h,{text:"New story",small:!0,onClick:function(){return console.log("Click!")}})),c.a.createElement("div",{className:"section flex-col--12"},c.a.createElement(h,{text:"Filter by",filter:!0,onClick:function(){return console.log("Click!")}}))),c.a.createElement("div",{className:"section flex-col--12"},c.a.createElement(g,{text:"in review",onClick:function(){return console.log("Click!")}})),c.a.createElement("div",{className:"section flex-col--12"},c.a.createElement(y,{text:"Private"})),c.a.createElement("div",{className:"section flex-col--12"},c.a.createElement(w,{href:"/",text:"View other's stories",size:"large"}),c.a.createElement(w,{href:"/",text:"View other's stories",size:"medium"}),c.a.createElement(w,{href:"/",text:"info@hearing-voices.org",size:"small"}),c.a.createElement(w,{href:"/",text:"Privacy policy",size:"small",grey:!0})),c.a.createElement("div",{className:"section flex-col--12"},c.a.createElement(k,{text:"Talking"})),c.a.createElement("div",{className:"section flex-col--12"},c.a.createElement(k,{text:"Can't say",search:!0})),c.a.createElement("div",{className:"section flex-col--12"},c.a.createElement(k,{text:"Male",story:!0})),c.a.createElement("div",{className:"section flex-col--12"},c.a.createElement(C,{options:[{value:"1",text:"Example 1"},{value:"2",text:"Example 2"}],placeholder:"See all",id:"example"})))};o.b.add(i.a);var j=function(){return c.a.createElement("div",{className:"flex-container"},c.a.createElement("div",{className:"flex-col--12",style:{marginTop:"20px"}},c.a.createElement(S,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},60:function(e,a,t){e.exports=t(122)},68:function(e,a,t){},69:function(e,a,t){},72:function(e,a,t){},73:function(e,a,t){},74:function(e,a,t){}},[[60,1,2]]]);
//# sourceMappingURL=main.713f64f7.chunk.js.map