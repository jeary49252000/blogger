/*! For license information please see component---src-pages-blog-js-240e251f18eda350db4e.js.LICENSE.txt */
(self.webpackChunkchun_hao_lai=self.webpackChunkchun_hao_lai||[]).push([[7],{4184:function(e,t){var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var l=n.apply(null,r);l&&e.push(l)}}else if("object"===o){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var s in r)a.call(r,s)&&r[s]&&e.push(s)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},5632:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var a=r(7294),n=r(4160),o=r(6301),l=r(609),s=r(4184),i=r.n(s);const c=(0,l.QM)({postCard:{"&:hover":{cursor:"pointer","& .title":{textDecoration:"underline"}},"& .title":{fontSize:"2rem",fontWeight:"bold",marginBottom:"1rem"},"& .excerpt":{fontSize:"1rem",lineHeight:"1.5rem"},"& .author-info":{"& .separator":{margin:"0 0.5rem"},"& .author":{fontWeight:"bold"},"& .separator:first-child":{marginLeft:"0"}}}}),u=e=>{let{title:t,date:r,author:o,slug:l,excerpt:s}=e;const u=c();return a.createElement("div",{className:i()("post-card",u.postCard),onClick:()=>{(0,n.c4)("/blog/"+l)}},a.createElement("p",{className:"title"},t),a.createElement("p",{className:"excerpt"},s),a.createElement("div",{className:"author-info"},a.createElement("span",{className:"separator"},"By"),a.createElement("span",{className:"author"},o),a.createElement("span",{className:"separator"},"|"),a.createElement("span",{className:"date"},r)))},p=(0,l.QM)({blogPage:{width:"40%"}}),m=(0,o.X)((()=>{const e=p();return a.createElement(n.i1,{query:f,render:t=>a.createElement("div",{className:e.blogPage},t.allMdx.edges.map((e=>{let{node:t}=e;return a.createElement(u,{title:t.frontmatter.title,date:t.frontmatter.date,author:t.frontmatter.author,slug:t.frontmatter.slug,excerpt:t.excerpt})})))})})),f="2776613640";var h=m}}]);
//# sourceMappingURL=component---src-pages-blog-js-240e251f18eda350db4e.js.map