"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[186],{186:function(n,e,t){t.r(e);var r=t(439),a=t(791),c=t(689),u=t(479),i=t(184);e.default=function(){var n=(0,c.UO)().id,e=(0,a.useState)([]),t=(0,r.Z)(e,2),s=t[0],o=t[1];return(0,a.useEffect)((function(){(0,u.Xn)(n).then(o)}),[n]),(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{children:"Reviews: "}),s&&s.length?(0,i.jsx)("ul",{children:s.map((function(n){var e=n.id,t=n.author,r=n.content;return(0,i.jsxs)("li",{children:[(0,i.jsxs)("h2",{children:["Author: ",t]}),(0,i.jsx)("p",{children:r})]},e)}))}):(0,i.jsx)("div",{children:"We don't have any reviews for this movie"})]})}},479:function(n,e,t){t.d(e,{FP:function(){return f},LC:function(){return p},WE:function(){return s},Xn:function(){return v},mv:function(){return o}});var r=t(861),a=t(687),c=t.n(a),u=t(912);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="76cbb606f190fc237086ec33f1fd98a3",s=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/day?api_key=".concat(i),e);case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(c().mark((function n(e,t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"),t);case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r,a,s=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=s.length>1&&void 0!==s[1]?s[1]:"",r=s.length>2?s[2]:void 0,n.next=4,u.Z.get("movie/".concat(e).concat(t,"?api_key=").concat(i,"&language=en-US"),r);case 4:return a=n.sent,n.abrupt("return",a.data);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=186.35a8de1d.chunk.js.map