(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{141:function(e,t,a){"use strict";a.r(t),a.d(t,"seriesListQuery",function(){return s});a(49);var n=a(0),r=a.n(n),i=a(156),o=a(173),l=a(175);t.default=function(e){var t=e.data,a=e.pageContext,n=a.limit,s=a.skip,c=a.totalPages,u=a.seriesName,m=t.allMarkdownRemark.edges.map(function(e){return e.node}),p=Math.floor(s/n)+1,f=t.markdownRemark;return r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement("h1",null,f.frontmatter.title),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:f.html}}),r.a.createElement(o.a,{posts:m}),r.a.createElement(l.a,{totalPages:c,currentPage:p,baseUrl:"/blog/series/"+u})))};var s="3444197959"},173:function(e,t,a){"use strict";a(49);var n=a(0),r=a.n(n),i=a(174),o=a.n(i),l=a(172);t.a=function(e){var t=e.posts;return r.a.createElement("div",{className:o.a.postList},t.map(function(e,t){return r.a.createElement(l.a,{key:t,post:e,className:o.a.postListItem})}))}},174:function(e,t,a){e.exports={postList:"post-list-module--postList--3a_A5",postListItem:"post-list-module--postListItem--c86c8"}},175:function(e,t,a){"use strict";a(79),a(176),a(49),a(178);var n=a(0),r=a.n(n),i=a(180),o=a.n(i),l=a(154);t.a=function(e){var t=e.totalPages,a=e.currentPage,n=e.baseUrl,i=a-1,s=a+1,c=n+"/"+(i>1?i:""),u=n+"/"+(s>t?1===a?"":a:s);return r.a.createElement("ul",{className:o.a.pagination},r.a.createElement("li",{className:o.a.page},r.a.createElement(l.Link,{className:o.a.link,to:c},"«")),Array.from({length:t}).map(function(e,t){var i=t+1,s=""+o.a.page;return i===a&&(s=o.a.page+" "+o.a.highlight),r.a.createElement("li",{className:s,key:i},r.a.createElement(l.Link,{className:o.a.link,to:n+"/"+(1===i?"":i)},i))}),r.a.createElement("li",{className:o.a.page},r.a.createElement(l.Link,{className:o.a.link,to:u},"»")))}},176:function(e,t,a){"use strict";var n=a(18),r=a(6),i=a(29),o=a(75),l=a(76),s=a(28),c=a(177),u=a(77);r(r.S+r.F*!a(78)(function(e){Array.from(e)}),"Array",{from:function(e){var t,a,r,m,p=i(e),f="function"==typeof this?this:Array,g=arguments.length,h=g>1?arguments[1]:void 0,d=void 0!==h,v=0,k=u(p);if(d&&(h=n(h,g>2?arguments[2]:void 0,2)),null==k||f==Array&&l(k))for(a=new f(t=s(p.length));t>v;v++)c(a,v,d?h(p[v],v):p[v]);else for(m=k.call(p),a=new f;!(r=m.next()).done;v++)c(a,v,d?o(m,h,[r.value,v],!0):r.value);return a.length=v,a}})},177:function(e,t,a){"use strict";var n=a(26),r=a(51);e.exports=function(e,t,a){t in e?n.f(e,t,r(0,a)):e[t]=a}},178:function(e,t,a){"use strict";a(179)("link",function(e){return function(t){return e(this,"a","href",t)}})},179:function(e,t,a){var n=a(6),r=a(17),i=a(27),o=/"/g,l=function(e,t,a,n){var r=String(i(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(n).replace(o,"&quot;")+'"'),l+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},180:function(e,t,a){e.exports={pagination:"pagination-module--pagination--2i_Br",page:"pagination-module--page--2oOGS",highlight:"pagination-module--highlight--1-yEh",link:"pagination-module--link--3-AmP"}}}]);
//# sourceMappingURL=component---src-templates-series-posts-index-js-5ab3f4f274a1fe342da3.js.map