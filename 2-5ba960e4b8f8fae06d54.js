(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{154:function(M,e,N){"use strict";N.r(e),N.d(e,"graphql",function(){return A}),N.d(e,"StaticQueryContext",function(){return g}),N.d(e,"StaticQuery",function(){return L});var t=N(0),j=N.n(t),c=N(4),a=N.n(c),I=N(153),u=N.n(I);N.d(e,"Link",function(){return u.a}),N.d(e,"withPrefix",function(){return I.withPrefix}),N.d(e,"navigate",function(){return I.navigate}),N.d(e,"push",function(){return I.push}),N.d(e,"replace",function(){return I.replace}),N.d(e,"navigateTo",function(){return I.navigateTo});var T=N(155),D=N.n(T);N.d(e,"PageRenderer",function(){return D.a});var z=N(34);N.d(e,"parsePath",function(){return z.a});var g=j.a.createContext({}),L=function(M){return j.a.createElement(g.Consumer,null,function(e){return M.data||e[M.query]&&e[M.query].data?(M.render||M.children)(M.data?M.data.data:e[M.query].data):j.a.createElement("div",null,"Loading (StaticQuery)")})};function A(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}L.propTypes={data:a.a.object,query:a.a.string.isRequired,render:a.a.func,children:a.a.func}},155:function(M,e,N){var t;M.exports=(t=N(160))&&t.default||t},156:function(M,e,N){"use strict";var t=N(159),j=N(0),c=N.n(j),a=N(4),I=N.n(a),u=N(169),T=N.n(u),D=N(154),z=(N(170),N(49),N(161)),g=N(162),L=N.n(g),A=N(163),n=N.n(A),i=function(){return c.a.createElement(D.StaticQuery,{query:"3117877092",render:function(M){var e=M.site.siteMetadata;return c.a.createElement("nav",{className:L.a.nav},c.a.createElement(D.Link,{className:L.a.homeLink,to:"/"},c.a.createElement("img",{className:L.a.siteLogo,src:n.a,alt:"DiscoverDev logo"})),c.a.createElement("ul",{className:L.a.navMenu},e.navItems.map(function(M,e){return c.a.createElement("li",{key:e,className:L.a.navItem},c.a.createElement(D.Link,{to:M.url},M.name))})))},data:z})},y=N(164),r=N.n(y),s=function(){return c.a.createElement("header",{className:r.a.header},c.a.createElement(i,null))},E=N(157),l=N(166),o=N.n(l),S=N(158),w=N(168),m=N.n(w),x=(c.a.createElement(E.a,null),c.a.createElement(S.a,{className:o.a.newsletter}),function(M){var e=M.children,N=M.sidebar,j=void 0===N||N,a=M.wide,I=void 0!==a&&a;return c.a.createElement(D.StaticQuery,{query:"755544856",render:function(M){return c.a.createElement(c.a.Fragment,null,c.a.createElement(T.a,{title:M.site.siteMetadata.title,meta:[{name:"description",content:"Portfolio"},{name:"keywords",content:"developer, web, frontend, javascript"}]},c.a.createElement("link",{rel:"icon",type:"image/x-icon",href:m.a}),c.a.createElement("link",{rel:"shortcut icon",type:"img/ico",href:m.a}),c.a.createElement("meta",{property:"og:title",content:"DiscoverDev | Daily digest of engineering blog posts for software developers"}),c.a.createElement("meta",{property:"og:image",content:"https://i.lensdump.com/i/uYTND.png"}),c.a.createElement("meta",{property:"og:type",content:"website"}),c.a.createElement("meta",{property:"og:url",content:"https://discoverdev.io"}),c.a.createElement("meta",{property:"og:description",content:"Checkout awesome engineering blog posts from across the internet, covering systems, data science, hardware, web and more! Curated and delivered every weekday!"}),c.a.createElement("html",{lang:"en"})),c.a.createElement(s,{siteTitle:M.site.siteMetadata.title}),c.a.createElement("div",{className:o.a.bodyWrapper},c.a.createElement("div",{className:o.a.contentWrapper,style:I?{maxWidth:"unset"}:null},e),j?c.a.createElement(E.a,null):null),c.a.createElement("footer",{className:o.a.footer},c.a.createElement("p",{className:o.a.footerMsg},"Made with ♥ by a group of nerds on Earth!"),c.a.createElement("p",{className:o.a.copyright},"© Copyright 2018 Discoverdev.io")),c.a.createElement("div",{className:o.a.ghostFooter}))},data:t})});x.propTypes={children:I.a.node.isRequired};e.a=x},157:function(M,e,N){"use strict";var t=N(0),j=N.n(t),c=N(165),a=N.n(c);e.a=function(){return j.a.createElement("div",{className:a.a.signupBox},j.a.createElement("h2",{className:a.a.title},"STAY UPDATED"),j.a.createElement("p",{className:a.a.message},"Join 5000+ fellow software engineers (from Google, Facebook, Microsoft, Quora, and more) who receive our curated weekly digest! ",j.a.createElement("br",null)),j.a.createElement("form",{className:a.a.form,action:"https://discoverdev.us16.list-manage.com/subscribe/post",method:"POST"},j.a.createElement("input",{type:"hidden",name:"u",value:"c32352dc58bef5cdd7821a012"}),j.a.createElement("input",{type:"hidden",name:"id",value:"6aab40a607"}),j.a.createElement("input",{type:"email",autoCapitalize:"off",autoCorrect:"off",name:"MERGE0",id:"MERGE0",className:a.a.email,size:"25",placeholder:"Email"}),j.a.createElement("input",{type:"submit",className:a.a.submit,value:"Subscribe"})),j.a.createElement("p",{className:a.a.privacy},"No spam. Unsubscribe anytime."))}},158:function(M,e,N){"use strict";var t=N(0),j=N.n(t),c=N(167),a=N.n(c);e.a=function(M){var e=M.className;return j.a.createElement("div",{className:a.a.signupBox+" "+e},j.a.createElement("h2",{className:a.a.title},"Subscribe"),j.a.createElement("p",{className:a.a.message},"Join 5000+ fellow software engineers who receive our curated weekly digest! ",j.a.createElement("br",null)),j.a.createElement("form",{className:a.a.form,action:"https://discoverdev.us16.list-manage.com/subscribe/post",method:"POST"},j.a.createElement("input",{type:"hidden",name:"u",value:"c32352dc58bef5cdd7821a012"}),j.a.createElement("input",{type:"hidden",name:"id",value:"6aab40a607"}),j.a.createElement("input",{type:"email",autoCapitalize:"off",autoCorrect:"off",name:"MERGE0",id:"MERGE0",className:a.a.email,size:"25",placeholder:"Email"}),j.a.createElement("input",{type:"submit",className:a.a.submit,value:"Subscribe"})),j.a.createElement("p",{className:a.a.privacy},"No spam. Unsubscribe anytime."))}},159:function(M){M.exports={data:{site:{siteMetadata:{title:"DiscoverDev"}}}}},160:function(M,e,N){"use strict";N.r(e);var t=N(10),j=N.n(t),c=N(0),a=N.n(c),I=N(4),u=N.n(I),T=N(50),D=N(2),z=function(M){var e=M.location,N=D.default.getResourcesForPathnameSync(e.pathname);return a.a.createElement(T.a,j()({location:e,pageResources:N},N.json))};z.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},e.default=z},161:function(M){M.exports={data:{site:{siteMetadata:{title:"DiscoverDev",navItems:[{name:"Archive",url:"/archive"},{name:"Tags",url:"/tags"},{name:"About",url:"/about"},{name:"Blog",url:"/blog"},{name:"Subscribe",url:"/subscribe"}]}}}}},162:function(M,e,N){M.exports={nav:"nav-module--nav--2rTEJ",homeLink:"nav-module--homeLink--2vLkM",siteLogo:"nav-module--siteLogo--LSLlB",navMenu:"nav-module--navMenu--8DHUW",navItem:"nav-module--navItem--3aFQC"}},163:function(M,e){M.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJ5ZXMiPz4KCjxzdmcgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwLjAgMC4wIDQ3OC43MzIyODM0NjQ1NjY5MyAxMTguODMyMDIwOTk3Mzc1MzIiIGZpbGw9Im5vbmUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48Y2xpcFBhdGggaWQ9InAuMCI+PHBhdGggZD0ibTAgMGw0NzguNzMyMjcgMGwwIDExOC44MzIwMmwtNDc4LjczMjI3IDBsMCAtMTE4LjgzMjAyeiIgY2xpcC1ydWxlPSJub256ZXJvIj48L3BhdGg+PC9jbGlwUGF0aD48ZyBjbGlwLXBhdGg9InVybCgjcC4wKSI+PHBhdGggZmlsbD0iIzAwMDAwMCIgZmlsbC1vcGFjaXR5PSIwLjAiIGQ9Im0wIDBsNDc4LjczMjI3IDBsMCAxMTguODMyMDJsLTQ3OC43MzIyNyAweiIgZmlsbC1ydWxlPSJldmVub2RkIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwMDBmZiIgZD0ibTEzLjMzODk0NiAxMS41OTEzMTlsMCAxMDYuODk3NjQ0bDI0LjExNDU3OCAtMjQuMzg3NjI3bDAgLTYwLjg1NjE1bDYwLjE3NDc4NiAwbDIxLjQxMTQyMyAtMjEuNjUzODYyeiIgZmlsbC1ydWxlPSJldmVub2RkIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwMDAwMCIgZD0ibTAgMGwwIDExMi41MzU0M2wyMy44MzM0NCAtMjQuMTU3OTgybDAgLTY1Ljg1NjMxbDY0Ljk3MTU5IDBsMjIuMjE4NTkgLTIyLjUyMTE0MXoiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PC9wYXRoPjxwYXRoIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wIiBkPSJtMzIuMTE4MTEgMjcuOTg0MjUxbDQ1OS40NjQ1NyAwbDAgNzQuMTEwMjRsLTQ1OS40NjQ1NyAweiIgZmlsbC1ydWxlPSJldmVub2RkIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwMDAwMCIgZD0ibTQ1LjM2NjAyIDQzLjk5NTYybDEyLjg5MDYyNSAwcTYuMzc1IDAgMTAuMTQwNjI1IDEuNzAzMTI1cTMuNzY1NjI1IDEuNjg3NSA2LjQyMTg3NSA1LjI1cTUuMTI1IDYuOTUzMTI1IDUuMTI1IDE4LjMxMjVxMCAxMS43OTY4NzUgLTUuNSAxOC4xODc1cS01LjQ4NDM3NSA2LjM5MDYyNSAtMTcuMTU2MjUgNi4zOTA2MjVsLTExLjkyMTg3NSAwbDAgLTQ5Ljg0Mzc1em0xMS43NjU2MjUgNDIuODEyNXE2Ljk4NDM3NSAwIDEwLjQwNjI1IC00LjQwNjI1cTMuNDIxODc1IC00LjQyMTg3NSAzLjQyMTg3NSAtMTIuOTA2MjVxMCAtMTguMDQ2ODc1IC0xMy4wMTU2MjUgLTE4LjA0Njg3NWwtMy44NTkzNzUgMGwwIDM1LjM1OTM3NWwzLjA0Njg3NSAwem0zMS44MjgxMjUgNy4wMzEyNWwwIC03LjE4NzVsOC45ODQzNzUgMGwwIC0yMi45Njg3NWwtOC41NDY4NzUgMGwwIC03LjE4NzVsMTcuNSAwbDAgMzAuMTU2MjVsOC4xNTYyNSAwbDAgNy4xODc1bC0yNi4wOTM3NSAwem0xMi44OTA2MjUgLTQzLjgyODEyNXEtMS41MzEyNSAwIC0yLjgyODEyNSAtMC43MTg3NXEtMS4yODEyNSAtMC43MzQzNzUgLTIuMDMxMjUgLTEuOTM3NXEtMC43MzQzNzUgLTEuMjE4NzUgLTAuNzM0Mzc1IC0yLjYyNXEwIC0yLjI5Njg3NSAxLjU2MjUgLTMuNzk2ODc1cTEuNTYyNSAtMS41MTU2MjUgNC4wMzEyNSAtMS41MTU2MjVxMS40Mzc1IDAgMi43NSAwLjczNDM3NXExLjMxMjUgMC43MTg3NSAyLjA5Mzc1IDEuOTUzMTI1cTAuNzgxMjUgMS4yMTg3NSAwLjc4MTI1IDIuNjI1cTAgMS40MDYyNSAtMC43ODEyNSAyLjYyNXEtMC43ODEyNSAxLjIwMzEyNSAtMi4wOTM3NSAxLjkzNzVxLTEuMzEyNSAwLjcxODc1IC0yLjc1IDAuNzE4NzV6bTQzLjY3MTg2NyAyMS41MTU2MjVxNC42MDkzNzUgMS40MDYyNSA3LjIxODc1IDIuODQzNzVxMi42MjUgMS40MjE4NzUgMy44MjgxMjUgMy40MjE4NzVxMS4yMTg3NSAxLjk4NDM3NSAxLjIxODc1IDQuOTg0Mzc1cTAgMy4yNSAtMS45Mzc1IDYuMDc4MTI1cS0xLjkyMTg3NSAyLjgyODEyNSAtNS4yODEyNSA0LjU2MjVxLTMuMzU5Mzc1IDEuNzE4NzUgLTcuNSAxLjcxODc1cS01LjYyNSAwIC05LjgxMjUgLTEuNXEtNC4xNzE4NzUgLTEuNTE1NjI1IC03LjY1NjI0MjQgLTQuODQzNzVsMy43NDk5OTI0IC02LjU2MjVsMC4wNDY4NzUgLTAuMDc4MTI1bDAuMDc4MTI1IDAuMDc4MTI1cTIuNzM0Mzc1IDIuOTY4NzUgNS45MDYyNSA0LjMyODEyNXEzLjE4NzUgMS4zNDM3NSA3Ljc2NTYyNSAxLjM0Mzc1cTYuNDA2MjUgMCA2LjQwNjI1IC00LjIxODc1cTAgLTEuMjk2ODc1IC0wLjc4MTI1IC0yLjIzNDM3NXEtMC43ODEyNSAtMC45Mzc1IC0yLjUgLTEuNzE4NzVxLTEuNzE4NzUgLTAuNzgxMjUgLTQuNzM0Mzc1IC0xLjY0MDYyNXEtNi40Mzc1IC0xLjY3MTg3NSAtMTAuMDE1NjI1IC00LjIzNDM3NXEtMy41NzgxMTc0IC0yLjU2MjUgLTMuNTc4MTE3NCAtNy4wNDY4NzVxMCAtMy4yNSAxLjczNDM2NzQgLTUuNzY1NjI1cTEuNzUgLTIuNTE1NjI1IDUuMCAtMy45Mzc1cTMuMjY1NjI1IC0xLjQzNzUgNy42NDA2MjUgLTEuNDM3NXE0LjM3NSAwIDcuOTg0Mzc1IDEuNDM3NXEzLjYyNSAxLjQyMTg3NSA2LjY3MTg3NSA0LjM0Mzc1bC00LjUzMTI1IDYuMjk2ODc1bC0wLjA0Njg3NSAwLjA3ODEyNXEtMC4wMzEyNSAwIC0wLjAzMTI1IC0wLjAxNTYyNXEwIC0wLjAzMTI1IDAgLTAuMDMxMjVxLTEuNjQwNjI1IC0yLjM0Mzc1IC00LjI1IC0zLjYyNXEtMi41OTM3NSAtMS4yOTY4NzUgLTUuNjQwNjI1IC0xLjI5Njg3NXEtMi4zNzUgMCAtMy45ODQzNzUgMC44MjgxMjVxLTEuNTkzNzUgMC44MTI1IC0xLjU5Mzc1IDIuMjE4NzVxMCAxLjI5Njg3NSAwLjg3NSAyLjIxODc1cTAuODc1IDAuOTA2MjUgMi42NTYyNSAxLjY1NjI1cTEuNzgxMjUgMC43MzQzNzUgNS4wOTM3NSAxLjc1em01Ljc4MTI1IC0zLjc4MTI1cTAgLTAuMDc4MTI1IDAuMDc4MTI1IC0wLjA3ODEyNXEwLjEyNSAwIDAuNDA2MjUgMC4yMDMxMjVxMC4yOTY4NzUgMC4xODc1IDAuNDIxODc1IDAuMjY1NjI1bC0wLjE1NjI1IDAuMTg3NWwtMC43NSAtMC41bDAgLTAuMDc4MTI1em0xLjA5Mzc1IDAuMDc4MTI1cTAuMjgxMjUgMC40MjE4NzUgMC4yODEyNSAwLjU0Njg3NXEwIDAuMDMxMjUgLTAuMTg3NSAtMC4wNjI1cS0wLjE3MTg3NSAtMC4wOTM3NSAtMC4yODEyNSAtMC4xNzE4NzVsMC4xODc1IC0wLjMxMjV6bS0yMS44NzUgMTQuMzc1cTAgMC4wNzgxMjUgLTAuMDc4MTI1IDAuMDc4MTI1cS0wLjEwOTM3NSAwIC0wLjQwNjI1IC0wLjE1NjI1cS0wLjI5Njg3NSAtMC4xNTYyNSAtMC40ODQzNzUgLTAuMjM0Mzc1bDAuMTU2MjUgLTAuMjgxMjVsMC43ODEyNSAwLjQ2ODc1bDAuMDMxMjUgMC4xMjV6bS0xLjEyNSAtMC4wNDY4NzVxLTAuMzEyNSAtMC4zMTI1IC0wLjMxMjUgLTAuNDIxODc1cTAgMCAwIC0wLjAxNTYyNXEwIC0wLjAzMTI1IDAuMDMxMjUgLTAuMDMxMjVsMC40Mzc1IDAuMjAzMTI1bC0wLjE1NjI1IDAuMjY1NjI1em01NC4zNzUgNS4yODEyNXEyLjUzMTI1IDAgNC45Njg3NSAtMS4xNzE4NzVxMi40NTMxMjUgLTEuMTcxODc1IDQuNTYyNSAtMy43OTY4NzVsNS4xODc1IDYuMDE1NjI1cS0zLjAgMy40MDYyNSAtNi43ODEyNSA1LjAzMTI1cS0zLjc2NTYyNSAxLjYyNSAtNy45Mzc1IDEuNjI1cS01LjQ2ODc1IDAgLTkuNzY1NjI1IC0yLjU0Njg3NXEtNC4yOTY4NzUgLTIuNTQ2ODc1IC02LjcwMzEyNSAtNy4wMTU2MjVxLTIuNDA2MjUgLTQuNDY4NzUgLTIuNDA2MjUgLTEwLjA2MjVxMCAtNS41NDY4NzUgMi40MDYyNSAtMTAuMDc4MTI1cTIuNDA2MjUgLTQuNTMxMjUgNi43MTg3NSAtNy4xNDA2MjVxNC4zMTI1IC0yLjYyNSA5LjgyODEyNSAtMi42MjVxNC42MDkzNzUgMCA4LjYyNSAxLjg3NXE0LjAzMTI1IDEuODc1IDYuMzI4MTI1IDUuMzEyNWwtNS4wIDUuODU5Mzc1bC0wLjAzMTI1IDAuMDc4MTI1cS0wLjA0Njg3NSAwIC0wLjA0Njg3NSAtMC4wMTU2MjVxMCAtMC4wMTU2MjUgMCAtMC4wMTU2MjVxLTEuNjQwNjI1IC0yLjg1OTM3NSAtMy45ODQzNzUgLTQuMjM0Mzc1cS0yLjM0Mzc1IC0xLjM5MDYyNSAtNS44OTA2MjUgLTEuMzkwNjI1cS0yLjczNDM3NSAwIC00Ljk4NDM3NSAxLjU2MjVxLTIuMjUgMS41NjI1IC0zLjU2MjUgNC40MjE4NzVxLTEuMjk2ODc1IDIuODQzNzUgLTEuMjk2ODc1IDYuNTQ2ODc1cTAgMy41NjI1IDEuMjE4NzUgNi4yMTg3NXExLjIzNDM3NSAyLjY1NjI1IDMuNDUzMTI1IDQuMTA5Mzc1cTIuMjM0Mzc1IDEuNDM3NSA1LjA5Mzc1IDEuNDM3NXptOC45MDYyNSAtMTguNzk2ODc1cTAgLTAuMTA5Mzc1IDAuMDc4MTI1IC0wLjEwOTM3NXEwLjIzNDM3NSAwIDAuNzgxMjUgMC41NDY4NzVsLTAuMTU2MjUgMC4xODc1bC0wLjcwMzEyNSAtMC41NzgxMjVsMCAtMC4wNDY4NzV6bTEuMDkzNzUgMC4xNTYyNXEwLjIzNDM3NSAwLjQ2ODc1IDAuMjM0Mzc1IDAuNTQ2ODc1cTAgMC4wNDY4NzUgLTAuMDQ2ODc1IDAuMDQ2ODc1cS0wLjEwOTM3NSAwIC0wLjQyMTg3NSAtMC4zMTI1bDAuMjM0Mzc1IC0wLjI4MTI1em0yOC4xNTYyNSAyNi4zNDM3NXEtNC45NTMxMjUgMCAtOS4wMTU2MjUgLTIuNTQ2ODc1cS00LjA2MjUgLTIuNTQ2ODc1IC02LjQwNjI1IC03LjA3ODEyNXEtMi4zNDM3NSAtNC41MzEyNSAtMi4zNDM3NSAtMTAuMzEyNXEwIC01LjQyMTg3NSAyLjM3NSAtOS44OTA2MjVxMi4zOTA2MjUgLTQuNDg0Mzc1IDYuNDY4NzUgLTcuMDYyNXE0LjA3ODEyNSAtMi41NzgxMjUgOC45MjE4NzUgLTIuNTc4MTI1cTQuODQzNzUgMCA4LjkyMTg3NSAyLjU3ODEyNXE0LjA5Mzc1IDIuNTc4MTI1IDYuNDY4NzUgNy4wNjI1cTIuMzkwNjI1IDQuNDY4NzUgMi4zOTA2MjUgOS44OTA2MjVxMCA1Ljc4MTI1IC0yLjM0Mzc1IDEwLjMxMjVxLTIuMzQzNzUgNC41MzEyNSAtNi40MDYyNSA3LjA3ODEyNXEtNC4wNjI1IDIuNTQ2ODc1IC05LjAzMTI1IDIuNTQ2ODc1em0wIC03LjIzNDM3NXEyLjY1NjI1IDAgNC42MjUgLTEuNTc4MTI1cTEuOTg0Mzc1IC0xLjU5Mzc1IDMuMDMxMjUgLTQuNDUzMTI1cTEuMDYyNSAtMi44NzUgMS4wNjI1IC02LjY3MTg3NXEwIC0zLjgyODEyNSAtMS4wNjI1IC02LjU5Mzc1cS0xLjA0Njg3NSAtMi43ODEyNSAtMy4wMzEyNSAtNC4yNjU2MjVxLTEuOTY4NzUgLTEuNDg0Mzc1IC00LjYyNSAtMS40ODQzNzVxLTIuNTMxMjUgMCAtNC40Njg3NSAxLjQ4NDM3NXEtMS45Mzc1IDEuNDg0Mzc1IC0zLjAxNTYyNSA0LjI4MTI1cS0xLjA2MjUgMi43OTY4NzUgLTEuMDYyNSA2LjU3ODEyNXEwIDMuODI4MTI1IDEuMDMxMjUgNi43MDMxMjVxMS4wMzEyNSAyLjg3NSAyLjkzNzUgNC40Mzc1cTEuOTIxODc1IDEuNTYyNSA0LjU3ODEyNSAxLjU2MjV6bTU2LjU2MjUxNSAtMzEuNDA2MjVxLTAuMTg3NSAzLjI4MTI1IC0xLjIzNDM3NSA2LjU0Njg3NXEtMS4wMzEyNSAzLjI1IC0zLjAxNTYyNSA4LjMyODEyNWwtOC44NzUgMjIuNDY4NzVsLTcuMzQzNzUgMGwtMTQuMTcxODkgLTM3LjM0Mzc1bDguOTA2MjUgMGw5LjMyODE0IDI3LjM3NWw1LjM1OTM3NSAtMTMuNTQ2ODc1cTEuNTYyNSAtNC41IDIuMzQzNzUgLTcuNjI1cTAuNzgxMjUgLTMuMTI1IDAuNzgxMjUgLTYuMjAzMTI1bDcuOTIxODc1IDB6bTI0Ljk2ODc1IDM4LjY0MDYyNXEtNS4zOTA2MjUgMCAtOS42MDkzNzUgLTIuMzQzNzVxLTQuMjE4NzUgLTIuMzU5Mzc1IC02LjYyNSAtNi43NXEtMi40MDYyNSAtNC4zOTA2MjUgLTIuNDA2MjUgLTEwLjM3NXEwIC02LjA0Njg3NSAyLjI2NTYyNSAtMTAuNTc4MTI1cTIuMjY1NjI1IC00LjUzMTI1IDYuMjgxMjUgLTYuOTY4NzVxNC4wMzEyNSAtMi40NTMxMjUgOS4xMDkzNzUgLTIuNDUzMTI1cTQuNSAwIDguMTA5Mzc1IDIuMDkzNzVxMy42MDkzNzUgMi4wOTM3NSA1LjcxODc1IDYuMjE4NzVxMi4xMDkzNzUgNC4xMDkzNzUgMi4xMDkzNzUgOS45Mzc1cTAgMC45Mzc1IC0wLjE1NjI1IDIuNjU2MjVsLTAuMDc4MTI1IDEuMDkzNzVsLTI0LjQ4NDM3NSAwcTAuNTc4MTI1IDUuMTA5Mzc1IDMuMTg3NSA3LjcxODc1cTIuNjI1IDIuNTkzNzUgNi4yNjU2MjUgMi41OTM3NXEyLjU3ODEyNSAwIDUuMTg3NSAtMS4xODc1cTIuNjI1IC0xLjIwMzEyNSA0LjI5Njg3NSAtMy4zNDM3NWw0Ljk2ODc1IDQuOTUzMTI1cS01LjY3MTg3NSA2LjczNDM3NSAtMTQuMTQwNjI1IDYuNzM0Mzc1em02LjAxNTYyNSAtMjQuMDMxMjVxMCAtMi4zNDM3NSAtMC45MjE4NzUgLTQuMzI4MTI1cS0wLjkyMTg3NSAtMi4wIC0yLjYyNSAtMy4xODc1cS0xLjY4NzUgLTEuMjAzMTI1IC0zLjkyMTg3NSAtMS4yMDMxMjVxLTMuMjgxMjUgMCAtNS40Mzc1IDIuMzc1cS0yLjE0MDYyNSAyLjM1OTM3NSAtMi41NjI1IDYuMzQzNzVsMTUuNDY4NzUgMHptNDUuODkwNjI1IC0zLjI4MTI1bC0wLjAzMTI1IC0wLjA0Njg3NXEtMS40ODQzNzUgLTIuNDIxODc1IC0zLjIwMzEyNSAtMy40NTMxMjVxLTEuNzE4NzUgLTEuMDMxMjUgLTQuMDMxMjUgLTEuMDMxMjVxLTIuODQzNzUgMCAtNS4xNTYyNSAxLjM0Mzc1cS0yLjI5Njg3NSAxLjM0Mzc1IC0zLjYwOTM3NSAzLjg0Mzc1cS0xLjMxMjUgMi41IC0xLjMxMjUgNS44MjgxMjVsMCAxOS41MzEyNWwtOS4wNjI1IDBsMCAtMzcuMzQzNzVsOS4yMTg3NSAwbDAgNS4zNDM3NXExLjQ4NDM3NSAtMi44OTA2MjUgNC4zNTkzNzUgLTQuNTMxMjVxMi44NzUgLTEuNjQwNjI1IDYuNDIxODc1IC0xLjY0MDYyNXEyLjc4MTI1IDAgNS41MzEyNSAxLjA0Njg3NXEyLjc1IDEuMDMxMjUgNC45MDYyNSAzLjA2MjVsLTQuMDMxMjUgOC4wNDY4NzV6bS0xLjEyNSAwLjAzMTI1cTAgLTAuMDMxMjUgMC4wMzEyNSAtMC4wMzEyNXEwLjEyNSAwIDAuNDA2MjUgMC4xNzE4NzVxMC4yOTY4NzUgMC4xNzE4NzUgMC40NTMxMjUgMC4yNWwtMC4wMzEyNSAwLjEyNWwtMC44MjgxMjUgLTAuMzkwNjI1bC0wLjAzMTI1IC0wLjEyNXptMS4xMjUgLTAuMDMxMjVxMC4yMzQzNzUgMC4zOTA2MjUgMC4yMzQzNzUgMC41NDY4NzVxMCAwLjAzMTI1IC0wLjA3ODEyNSAwLjAzMTI1cS0wLjEwOTM3NSAwIC0wLjM5MDYyNSAtMC4xNTYyNWwwLjIzNDM3NSAtMC40MjE4NzV6IiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD48cGF0aCBmaWxsPSIjMDAwMGZmIiBkPSJtMzY1LjM2NjAzIDQzLjk5NTYybDEyLjg5MDYyNSAwcTYuMzc1IDAgMTAuMTQwNjI1IDEuNzAzMTI1cTMuNzY1NjI1IDEuNjg3NSA2LjQyMTg3NSA1LjI1cTUuMTI1IDYuOTUzMTI1IDUuMTI1IDE4LjMxMjVxMCAxMS43OTY4NzUgLTUuNSAxOC4xODc1cS01LjQ4NDM3NSA2LjM5MDYyNSAtMTcuMTU2MjUgNi4zOTA2MjVsLTExLjkyMTg3NSAwbDAgLTQ5Ljg0Mzc1em0xMS43NjU2MjUgNDIuODEyNXE2Ljk4NDM3NSAwIDEwLjQwNjI1IC00LjQwNjI1cTMuNDIxODc1IC00LjQyMTg3NSAzLjQyMTg3NSAtMTIuOTA2MjVxMCAtMTguMDQ2ODc1IC0xMy4wMTU2MjUgLTE4LjA0Njg3NWwtMy44NTkzNzUgMGwwIDM1LjM1OTM3NWwzLjA0Njg3NSAwem00Ni4zMjgxMjUgOC4zMjgxMjVxLTUuMzkwNjI1IDAgLTkuNjA5Mzc1IC0yLjM0Mzc1cS00LjIxODc1IC0yLjM1OTM3NSAtNi42MjUgLTYuNzVxLTIuNDA2MjUgLTQuMzkwNjI1IC0yLjQwNjI1IC0xMC4zNzVxMCAtNi4wNDY4NzUgMi4yNjU2MjUgLTEwLjU3ODEyNXEyLjI2NTYyNSAtNC41MzEyNSA2LjI4MTI1IC02Ljk2ODc1cTQuMDMxMjUgLTIuNDUzMTI1IDkuMTA5Mzc1IC0yLjQ1MzEyNXE0LjUgMCA4LjEwOTM3NSAyLjA5Mzc1cTMuNjA5Mzc1IDIuMDkzNzUgNS43MTg3NSA2LjIxODc1cTIuMTA5Mzc1IDQuMTA5Mzc1IDIuMTA5Mzc1IDkuOTM3NXEwIDAuOTM3NSAtMC4xNTYyNSAyLjY1NjI1bC0wLjA3ODEyNSAxLjA5Mzc1bC0yNC40ODQzNzUgMHEwLjU3ODEyNSA1LjEwOTM3NSAzLjE4NzUgNy43MTg3NXEyLjYyNSAyLjU5Mzc1IDYuMjY1NjI1IDIuNTkzNzVxMi41NzgxMjUgMCA1LjE4NzUgLTEuMTg3NXEyLjYyNSAtMS4yMDMxMjUgNC4yOTY4NzUgLTMuMzQzNzVsNC45Njg3NSA0Ljk1MzEyNXEtNS42NzE4NzUgNi43MzQzNzUgLTE0LjE0MDYyNSA2LjczNDM3NXptNi4wMTU2MjUgLTI0LjAzMTI1cTAgLTIuMzQzNzUgLTAuOTIxODc1IC00LjMyODEyNXEtMC45MjE4NzUgLTIuMCAtMi42MjUgLTMuMTg3NXEtMS42ODc1IC0xLjIwMzEyNSAtMy45MjE4NzUgLTEuMjAzMTI1cS0zLjI4MTI1IDAgLTUuNDM3NSAyLjM3NXEtMi4xNDA2MjUgMi4zNTkzNzUgLTIuNTYyNSA2LjM0Mzc1bDE1LjQ2ODc1IDB6bTQ5LjAxNTYyNSAtMTQuNjA5Mzc1cS0wLjE4NzUgMy4yODEyNSAtMS4yMzQzNzUgNi41NDY4NzVxLTEuMDMxMjUgMy4yNSAtMy4wMTU2MjUgOC4zMjgxMjVsLTguODc1IDIyLjQ2ODc1bC03LjM0Mzc1IDBsLTE0LjE3MTg3NSAtMzcuMzQzNzVsOC45MDYyNSAwbDkuMzI4MTI1IDI3LjM3NWw1LjM1OTM3NSAtMTMuNTQ2ODc1cTEuNTYyNSAtNC41IDIuMzQzNzUgLTcuNjI1cTAuNzgxMjUgLTMuMTI1IDAuNzgxMjUgLTYuMjAzMTI1bDcuOTIxODc1IDB6IiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD48L2c+PC9zdmc+Cgo="},164:function(M,e,N){M.exports={header:"header-module--header--L1ZnK"}},165:function(M,e,N){M.exports={signupBox:"newsletter-module--signupBox--2JI21",title:"newsletter-module--title--oScg_",message:"newsletter-module--message--2Cydm",form:"newsletter-module--form--3R9O-",email:"newsletter-module--email--eBiUt",submit:"newsletter-module--submit--2wgD8",privacy:"newsletter-module--privacy--34YYD"}},166:function(M,e,N){M.exports={bodyWrapper:"layout-module--bodyWrapper--3ntRT",contentWrapper:"layout-module--contentWrapper--1fdfp",footer:"layout-module--footer--Qriki",footerMsg:"layout-module--footerMsg--wGLeW",copyright:"layout-module--copyright--gQoxl",ghostFooter:"layout-module--ghostFooter--1VEOD",newsletter:"layout-module--newsletter--19tUQ"}},167:function(M,e,N){M.exports={signupBox:"mini-newsletter-module--signupBox--3s5lR",title:"mini-newsletter-module--title--1pqjE",message:"mini-newsletter-module--message--2aaUq",form:"mini-newsletter-module--form--2tzgB",email:"mini-newsletter-module--email--2Cwgv",submit:"mini-newsletter-module--submit--92hRg",privacy:"mini-newsletter-module--privacy--3uVan"}},168:function(M,e,N){M.exports=N.p+"static/dd-logo-2fbfdd6aeb5e9bc35c395fdc599f9df8.ico"},185:function(M,e,N){"use strict";N(49);var t=N(0),j=N.n(t),c=N(226),a=N.n(c),I=N(154);e.a=function(M){var e=M.links;return j.a.createElement("ul",{className:a.a.links},e.map(function(M,e){return j.a.createElement("li",{key:e,className:a.a.linkItem},j.a.createElement("h3",{className:a.a.postLink},j.a.createElement("a",{href:M.url,target:"_blank",rel:"noopener noreferrer"},M.title)),j.a.createElement("span",{className:a.a.domain}," (",M.domain,") "),j.a.createElement("p",{className:a.a.description},M.description||""),j.a.createElement("p",{className:a.a.tags},M.tags.map(function(M,e){return j.a.createElement(I.Link,{key:e,className:a.a.tag,to:"/tags/"+M},"#",M)})))}))}},226:function(M,e,N){M.exports={links:"link-list-module--links--2uIg2",linkItem:"link-list-module--linkItem--3AVpy",postLink:"link-list-module--postLink--3Da6G",domain:"link-list-module--domain--M1OmE",description:"link-list-module--description--1tAzl",tags:"link-list-module--tags--3OTVD",tag:"link-list-module--tag--37l7S"}}}]);
//# sourceMappingURL=2-5ba960e4b8f8fae06d54.js.map