!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";n(8),n(9),n(10)},,,,,,,,function(e,t){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,t,r){function i(e,t){return(void 0===e?"undefined":n(e))===t}function s(e,t){return!!~(""+e).indexOf(t)}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):C?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function o(){var e=t.body;return e||((e=a(C?"svg":"body")).fake=!0),e}function c(e,n,r,i){var s,c,l,u,f="modernizr",d=a("div"),p=o();if(parseInt(r,10))for(;r--;)(l=a("div")).id=i?i[r]:f+(r+1),d.appendChild(l);return s=a("style"),s.type="text/css",s.id="s"+f,(p.fake?p:d).appendChild(s),p.appendChild(d),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(t.createTextNode(e)),d.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",u=w.style.overflow,w.style.overflow="hidden",w.appendChild(p)),c=n(d,e),p.fake?(p.parentNode.removeChild(p),w.style.overflow=u,w.offsetHeight):d.parentNode.removeChild(d),!!c}function l(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function u(t,n,r){var i;if("getComputedStyle"in e){i=getComputedStyle.call(e,t,n);var s=e.console;null!==i?r&&(i=i.getPropertyValue(r)):s&&s[s.error?"error":"log"].call(s,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}else i=!n&&t.currentStyle&&t.currentStyle[r];return i}function f(t,n){var i=t.length;if("CSS"in e&&"supports"in e.CSS){for(;i--;)if(e.CSS.supports(l(t[i]),n))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];i--;)s.push("("+l(t[i])+":"+n+")");return s=s.join(" or "),c("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==u(e,null,"position")})}return r}function d(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function p(e,t,n,o){function c(){u&&(delete x.style,delete x.modElem)}if(o=!i(o,"undefined")&&o,!i(n,"undefined")){var l=f(e,n);if(!i(l,"undefined"))return l}for(var u,p,m,h,g,v=["modernizr","tspan","samp"];!x.style&&v.length;)u=!0,x.modElem=a(v.shift()),x.style=x.modElem.style;for(m=e.length,p=0;p<m;p++)if(h=e[p],g=x.style[h],s(h,"-")&&(h=d(h)),x.style[h]!==r){if(o||i(n,"undefined"))return c(),"pfx"!=t||h;try{x.style[h]=n}catch(e){}if(x.style[h]!=g)return c(),"pfx"!=t||h}return c(),!1}function m(e,t){return function(){return e.apply(t,arguments)}}function h(e,t,n){var r;for(var s in e)if(e[s]in t)return!1===n?e[s]:(r=t[e[s]],i(r,"function")?m(r,n||t):r);return!1}function g(e,t,n,r,s){var a=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+S.join(a+" ")+a).split(" ");return i(t,"string")||i(t,"undefined")?p(o,t,r,s):(o=(e+" "+T.join(a+" ")+a).split(" "),h(o,t,n))}function v(e,t,n){return g(e,r,r,t,n)}var A=[],y={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){A.push({name:e,fn:t,options:n})},addAsyncTest:function(e){A.push({name:null,fn:e})}},z=function(){};z.prototype=y,z=new z;var b=[],w=t.documentElement,C="svg"===w.nodeName.toLowerCase(),S=y._config.usePrefixes?"Moz O ms Webkit".split(" "):[];y._cssomPrefixes=S;var E={elem:a("modernizr")};z._q.push(function(){delete E.elem});var x={style:E.elem.style};z._q.unshift(function(){delete x.style});var T=y._config.usePrefixes?"Moz O ms Webkit".toLowerCase().split(" "):[];y._domPrefixes=T,y.testAllProps=g,y.testAllProps=v,z.addTest("flexbox",v("flexBasis","1px",!0)),z.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),function(){var e,t,n,r,s,a;for(var o in A)if(A.hasOwnProperty(o)){if(e=[],(t=A[o]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=i(t.fn,"function")?t.fn():t.fn,s=0;s<e.length;s++)1===(a=e[s].split(".")).length?z[a[0]]=r:(!z[a[0]]||z[a[0]]instanceof Boolean||(z[a[0]]=new Boolean(z[a[0]])),z[a[0]][a[1]]=r),b.push((r?"":"no-")+a.join("-"))}}(),function(e){var t=w.className,n=z._config.classPrefix||"";if(C&&(t=t.baseVal),z._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}z._config.enableClasses&&(t+=" "+n+e.join(" "+n),C?w.className.baseVal=t:w.className=t)}(b),delete y.addTest,delete y.addAsyncTest;for(var M=0;M<z._q.length;M++)z._q[M]();e.Modernizr=z}(window,document)},function(e,t,n){var r;!function(e){var t=navigator.userAgent;e.HTMLPictureElement&&/ecko/.test(t)&&t.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",function(){var t,n=document.createElement("source"),r=function(e){var t,r,i=e.parentNode;"PICTURE"===i.nodeName.toUpperCase()?(t=n.cloneNode(),i.insertBefore(t,i.firstElementChild),setTimeout(function(){i.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,r=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=r}))},i=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)r(t[e])},s=function(){clearTimeout(t),t=setTimeout(i,99)},a=e.matchMedia&&matchMedia("(orientation: landscape)"),o=function(){s(),a&&a.addListener&&a.addListener(s)};return n.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?o():document.addEventListener("DOMContentLoaded",o),s}())}(window),function(i,s,a){"use strict";function o(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}function c(){$=!1,U=i.devicePixelRatio,D={},I={},z.DPR=U||1,F.width=Math.max(i.innerWidth||0,T.clientWidth),F.height=Math.max(i.innerHeight||0,T.clientHeight),F.vw=F.width/100,F.vh=F.height/100,y=[F.height,F.width,U].join("-"),F.em=z.getEmValue(),F.rem=F.em}function l(e,t,n,r){var i,s,a;return"saveData"===L.algorithm?e>2.7?a=n+1:(s=(t-n)*(i=Math.pow(e-.6,1.5)),r&&(s+=.1*i),a=e+s):a=n>1?Math.sqrt(e*t):e,a>n}function u(e){var t,n=z.getSet(e),r=!1;"pending"!==n&&(r=y,n&&(t=z.setRes(n),z.applySetCandidate(t,e))),e[z.ns].evaled=r}function f(e,t){return e.res-t.res}function d(e,t,n){var r;return!n&&t&&(n=(n=e[z.ns].sets)&&n[n.length-1]),(r=p(t,n))&&(t=z.makeUrl(t),e[z.ns].curSrc=t,e[z.ns].curCan=r,r.res||Y(r,r.set.sizes)),r}function p(e,t){var n,r,i;if(e&&t)for(i=z.parseSet(t),e=z.makeUrl(e),n=0;n<i.length;n++)if(e===z.makeUrl(i[n].url)){r=i[n];break}return r}function m(e,t){var n,r,i,s,a=e.getElementsByTagName("source");for(n=0,r=a.length;n<r;n++)(i=a[n])[z.ns]=!0,(s=i.getAttribute("srcset"))&&t.push({srcset:s,media:i.getAttribute("media"),type:i.getAttribute("type"),sizes:i.getAttribute("sizes")})}function h(e,t){function n(t){var n,r=t.exec(e.substring(f));if(r)return n=r[0],f+=n.length,n}function r(){var e,n,r,a,o,c,l,u,f,p=!1,m={};for(a=0;a<s.length;a++)c=(o=s[a])[o.length-1],l=o.substring(0,o.length-1),u=parseInt(l,10),f=parseFloat(l),V.test(l)&&"w"===c?((e||n)&&(p=!0),0===u?p=!0:e=u):J.test(l)&&"x"===c?((e||n||r)&&(p=!0),f<0?p=!0:n=f):V.test(l)&&"h"===c?((r||n)&&(p=!0),0===u?p=!0:r=u):p=!0;p||(m.url=i,e&&(m.w=e),n&&(m.d=n),r&&(m.h=r),r||n||e||(m.d=1),1===m.d&&(t.has1x=!0),m.set=t,d.push(m))}for(var i,s,a,c,l,u=e.length,f=0,d=[];;){if(n(q),f>=u)return d;i=n(Q),s=[],","===i.slice(-1)?(i=i.replace(G,""),r()):function(){for(n(j),a="",c="in descriptor";;){if(l=e.charAt(f),"in descriptor"===c)if(o(l))a&&(s.push(a),a="",c="after descriptor");else{if(","===l)return f+=1,a&&s.push(a),void r();if("("===l)a+=l,c="in parens";else{if(""===l)return a&&s.push(a),void r();a+=l}}else if("in parens"===c)if(")"===l)a+=l,c="in descriptor";else{if(""===l)return s.push(a),void r();a+=l}else if("after descriptor"===c)if(o(l));else{if(""===l)return void r();c="in descriptor",f-=1}f+=1}}()}}function g(e){var t,n,r,i,s,a,c=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,l=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(r=(n=function(e){function t(){i&&(s.push(i),i="")}function n(){s[0]&&(a.push(s),s=[])}for(var r,i="",s=[],a=[],c=0,l=0,u=!1;;){if(""===(r=e.charAt(l)))return t(),n(),a;if(u){if("*"===r&&"/"===e[l+1]){u=!1,l+=2,t();continue}l+=1}else{if(o(r)){if(e.charAt(l-1)&&o(e.charAt(l-1))||!i){l+=1;continue}if(0===c){t(),l+=1;continue}r=" "}else if("("===r)c+=1;else if(")"===r)c-=1;else{if(","===r){t(),n(),l+=1;continue}if("/"===r&&"*"===e.charAt(l+1)){u=!0,l+=2;continue}}i+=r,l+=1}}}(e)).length,t=0;t<r;t++)if(i=n[t],s=i[i.length-1],function(e){return!!(c.test(e)&&parseFloat(e)>=0)||!!l.test(e)||"0"===e||"-0"===e||"+0"===e}(s)){if(a=s,i.pop(),0===i.length)return a;if(i=i.join(" "),z.matchesMedia(i))return a}return"100vw"}s.createElement("picture");var v,A,y,z={},b=!1,w=function(){},C=s.createElement("img"),S=C.getAttribute,E=C.setAttribute,x=C.removeAttribute,T=s.documentElement,M={},L={algorithm:""},P=navigator.userAgent,R=/rident/.test(P)||/ecko/.test(P)&&P.match(/rv\:(\d+)/)&&RegExp.$1>35,_="currentSrc",N=/\s+\+?\d+(e\d+)?w/,k=/(\([^)]+\))?\s*(.+)/,B=i.picturefillCFG,W="font-size:100%!important;",$=!0,D={},I={},U=i.devicePixelRatio,F={px:1,in:96},H=s.createElement("a"),O=!1,j=/^[ \t\n\r\u000c]+/,q=/^[, \t\n\r\u000c]+/,Q=/^[^ \t\n\r\u000c]+/,G=/[,]+$/,V=/^\d+$/,J=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,K=function(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n)},X=function(e){var t={};return function(n){return n in t||(t[n]=e(n)),t[n]}},Z=function(){var e=/^([\d\.]+)(em|vw|px)$/,t=function(){for(var e=arguments,t=0,n=e[0];++t in e;)n=n.replace(e[t],e[++t]);return n},n=X(function(e){return"return "+t((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"});return function(t,r){var i;if(!(t in D))if(D[t]=!1,r&&(i=t.match(e)))D[t]=i[1]*F[i[2]];else try{D[t]=new Function("e",n(t))(F)}catch(e){}return D[t]}}(),Y=function(e,t){return e.w?(e.cWidth=z.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},ee=function(e){if(b){var t,n,r,i=e||{};if(i.elements&&1===i.elements.nodeType&&("IMG"===i.elements.nodeName.toUpperCase()?i.elements=[i.elements]:(i.context=i.elements,i.elements=null)),t=i.elements||z.qsa(i.context||s,i.reevaluate||i.reselect?z.sel:z.selShort),r=t.length){for(z.setupRun(i),O=!0,n=0;n<r;n++)z.fillImg(t[n],i);z.teardownRun(i)}}};i.console&&console.warn,_ in C||(_="src"),M["image/jpeg"]=!0,M["image/gif"]=!0,M["image/png"]=!0,M["image/svg+xml"]=s.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),z.ns=("pf"+(new Date).getTime()).substr(0,9),z.supSrcset="srcset"in C,z.supSizes="sizes"in C,z.supPicture=!!i.HTMLPictureElement,z.supSrcset&&z.supPicture&&!z.supSizes&&function(e){C.srcset="data:,a",e.src="data:,a",z.supSrcset=C.complete===e.complete,z.supPicture=z.supSrcset&&z.supPicture}(s.createElement("img")),z.supSrcset&&!z.supSizes?function(){var e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",t=s.createElement("img"),n=function(){2===t.width&&(z.supSizes=!0),A=z.supSrcset&&!z.supSizes,b=!0,setTimeout(ee)};t.onload=n,t.onerror=n,t.setAttribute("sizes","9px"),t.srcset=e+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",t.src=e}():b=!0,z.selShort="picture>img,img[srcset]",z.sel=z.selShort,z.cfg=L,z.DPR=U||1,z.u=F,z.types=M,z.setSize=w,z.makeUrl=X(function(e){return H.href=e,H.href}),z.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},z.matchesMedia=function(){return i.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?z.matchesMedia=function(e){return!e||matchMedia(e).matches}:z.matchesMedia=z.mMQ,z.matchesMedia.apply(this,arguments)},z.mMQ=function(e){return!e||Z(e)},z.calcLength=function(e){var t=Z(e,!0)||!1;return t<0&&(t=!1),t},z.supportsType=function(e){return!e||M[e]},z.parseSize=X(function(e){var t=(e||"").match(k);return{media:t&&t[1],length:t&&t[2]}}),z.parseSet=function(e){return e.cands||(e.cands=h(e.srcset,e)),e.cands},z.getEmValue=function(){var e;if(!v&&(e=s.body)){var t=s.createElement("div"),n=T.style.cssText,r=e.style.cssText;t.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",T.style.cssText=W,e.style.cssText=W,e.appendChild(t),v=t.offsetWidth,e.removeChild(t),v=parseFloat(v,10),T.style.cssText=n,e.style.cssText=r}return v||16},z.calcListLength=function(e){if(!(e in I)||L.uT){var t=z.calcLength(g(e));I[e]=t||F.width}return I[e]},z.setRes=function(e){var t;if(e)for(var n=0,r=(t=z.parseSet(e)).length;n<r;n++)Y(t[n],e.sizes);return t},z.setRes.res=Y,z.applySetCandidate=function(e,t){if(e.length){var n,r,i,s,a,o,c,u,p,m=t[z.ns],h=z.DPR;if(o=m.curSrc||t[_],(c=m.curCan||d(t,o,e[0].set))&&c.set===e[0].set&&((p=R&&!t.complete&&c.res-.1>h)||(c.cached=!0,c.res>=h&&(a=c))),!a)for(e.sort(f),a=e[(s=e.length)-1],r=0;r<s;r++)if((n=e[r]).res>=h){a=e[i=r-1]&&(p||o!==z.makeUrl(n.url))&&l(e[i].res,n.res,h,e[i].cached)?e[i]:n;break}a&&(u=z.makeUrl(a.url),m.curSrc=u,m.curCan=a,u!==o&&z.setSrc(t,a),z.setSize(t))}},z.setSrc=function(e,t){var n;e.src=t.url,"image/svg+xml"===t.set.type&&(n=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=n))},z.getSet=function(e){var t,n,r,i=!1,s=e[z.ns].sets;for(t=0;t<s.length&&!i;t++)if((n=s[t]).srcset&&z.matchesMedia(n.media)&&(r=z.supportsType(n.type))){"pending"===r&&(n=r),i=n;break}return i},z.parseSets=function(e,t,n){var r,i,s,a,o=t&&"PICTURE"===t.nodeName.toUpperCase(),c=e[z.ns];(void 0===c.src||n.src)&&(c.src=S.call(e,"src"),c.src?E.call(e,"data-pfsrc",c.src):x.call(e,"data-pfsrc")),(void 0===c.srcset||n.srcset||!z.supSrcset||e.srcset)&&(r=S.call(e,"srcset"),c.srcset=r,a=!0),c.sets=[],o&&(c.pic=!0,m(t,c.sets)),c.srcset?(i={srcset:c.srcset,sizes:S.call(e,"sizes")},c.sets.push(i),(s=(A||c.src)&&N.test(c.srcset||""))||!c.src||p(c.src,i)||i.has1x||(i.srcset+=", "+c.src,i.cands.push({url:c.src,d:1,set:i}))):c.src&&c.sets.push({srcset:c.src,sizes:null}),c.curCan=null,c.curSrc=void 0,c.supported=!(o||i&&!z.supSrcset||s&&!z.supSizes),a&&z.supSrcset&&!c.supported&&(r?(E.call(e,"data-pfsrcset",r),e.srcset=""):x.call(e,"data-pfsrcset")),c.supported&&!c.srcset&&(!c.src&&e.src||e.src!==z.makeUrl(c.src))&&(null===c.src?e.removeAttribute("src"):e.src=c.src),c.parsed=!0},z.fillImg=function(e,t){var n,r=t.reselect||t.reevaluate;e[z.ns]||(e[z.ns]={}),n=e[z.ns],(r||n.evaled!==y)&&(n.parsed&&!t.reevaluate||z.parseSets(e,e.parentNode,t),n.supported?n.evaled=y:u(e))},z.setupRun=function(){O&&!$&&U===i.devicePixelRatio||c()},z.supPicture?(ee=w,z.fillImg=w):function(){var e,t=i.attachEvent?/d$|^c/:/d$|^c|^i/,n=function(){var i=s.readyState||"";r=setTimeout(n,"loading"===i?200:999),s.body&&(z.fillImgs(),(e=e||t.test(i))&&clearTimeout(r))},r=setTimeout(n,s.body?9:99),a=T.clientHeight;K(i,"resize",function(e,t){var n,r,i=function(){var s=new Date-r;s<t?n=setTimeout(i,t-s):(n=null,e())};return function(){r=new Date,n||(n=setTimeout(i,t))}}(function(){$=Math.max(i.innerWidth||0,T.clientWidth)!==F.width||T.clientHeight!==a,a=T.clientHeight,$&&z.fillImgs()},99)),K(s,"readystatechange",n)}(),z.picturefill=ee,z.fillImgs=ee,z.teardownRun=w,ee._=z,i.picturefillCFG={pf:z,push:function(e){var t=e.shift();"function"==typeof z[t]?z[t].apply(z,e):(L[t]=e[0],O&&z.fillImgs({reselect:!0}))}};for(;B&&B.length;)i.picturefillCFG.push(B.shift());i.picturefill=ee,"object"==typeof e&&"object"==typeof e.exports?e.exports=ee:void 0!==(r=function(){return ee}.call(t,n,t,e))&&(e.exports=r),z.supPicture||(M["image/webp"]=function(e,t){var n=new i.Image;return n.onerror=function(){M[e]=!1,ee()},n.onload=function(){M[e]=1===n.width,ee()},n.src=t,"pending"}("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document)},function(e,t){!function(t,n){var r=n(t,t.document);t.lazySizes=r,"object"==typeof e&&e.exports&&(e.exports=r)}(window,function(e,t){"use strict";if(t.getElementsByClassName){var n,r,i=t.documentElement,s=e.Date,a=e.HTMLPictureElement,o=e.addEventListener,c=e.setTimeout,l=e.requestAnimationFrame||c,u=e.requestIdleCallback,f=/^picture$/i,d=["load","error","lazyincluded","_lazyloaded"],p={},m=Array.prototype.forEach,h=function(e,t){return p[t]||(p[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),p[t].test(e.getAttribute("class")||"")&&p[t]},g=function(e,t){h(e,t)||e.setAttribute("class",(e.getAttribute("class")||"").trim()+" "+t)},v=function(e,t){var n;(n=h(e,t))&&e.setAttribute("class",(e.getAttribute("class")||"").replace(n," "))},A=function(e,t,n){var r=n?"addEventListener":"removeEventListener";n&&A(e,t),d.forEach(function(n){e[r](n,t)})},y=function(e,r,i,s,a){var o=t.createEvent("CustomEvent");return i||(i={}),i.instance=n,o.initCustomEvent(r,!s,!a,i),e.dispatchEvent(o),o},z=function(t,n){var i;!a&&(i=e.picturefill||r.pf)?i({reevaluate:!0,elements:[t]}):n&&n.src&&(t.src=n.src)},b=function(e,t){return(getComputedStyle(e,null)||{})[t]},w=function(e,t,n){for(n=n||e.offsetWidth;n<r.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},C=function(){var e,n,r=[],i=[],s=r,a=function(){var t=s;for(s=r.length?i:r,e=!0,n=!1;t.length;)t.shift()();e=!1},o=function(r,i){e&&!i?r.apply(this,arguments):(s.push(r),n||(n=!0,(t.hidden?c:l)(a)))};return o._lsFlush=a,o}(),S=function(e,t){return t?function(){C(e)}:function(){var t=this,n=arguments;C(function(){e.apply(t,n)})}},E=function(e){var t,n=0,i=r.ricTimeout,a=function(){t=!1,n=s.now(),e()},o=u&&r.ricTimeout?function(){u(a,{timeout:i}),i!==r.ricTimeout&&(i=r.ricTimeout)}:S(function(){c(a)},!0);return function(e){var r;(e=!0===e)&&(i=33),t||(t=!0,(r=125-(s.now()-n))<0&&(r=0),e||r<9&&u?o():c(o,r))}},x=function(e){var t,n,r=function(){t=null,e()},i=function(){var e=s.now()-n;e<99?c(i,99-e):(u||r)(r)};return function(){n=s.now(),t||(t=c(i,99))}};!function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:300};r=e.lazySizesConfig||e.lazysizesConfig||{};for(t in n)t in r||(r[t]=n[t]);e.lazySizesConfig=r,c(function(){r.init&&L()})}();var T=function(){var a,l,u,d,p,w,T,L,P,R,_,N,k,B,W=/^img$/i,$=/^iframe$/i,D="onscroll"in e&&!/glebot/.test(navigator.userAgent),I=0,U=0,F=-1,H=function(e){U--,e&&e.target&&A(e.target,H),(!e||U<0||!e.target)&&(U=0)},O=function(e,n){var r,s=e,a="hidden"==b(t.body,"visibility")||"hidden"!=b(e,"visibility");for(L-=n,_+=n,P-=n,R+=n;a&&(s=s.offsetParent)&&s!=t.body&&s!=i;)(a=(b(s,"opacity")||1)>0)&&"visible"!=b(s,"overflow")&&(r=s.getBoundingClientRect(),a=R>r.left&&P<r.right&&_>r.top-1&&L<r.bottom+1);return a},j=function(){var e,s,o,c,u,f,p,m,h,g=n.elements;if((d=r.loadMode)&&U<8&&(e=g.length)){s=0,F++,null==k&&("expand"in r||(r.expand=i.clientHeight>500&&i.clientWidth>500?500:370),N=r.expand,k=N*r.expFactor),I<k&&U<1&&F>2&&d>2&&!t.hidden?(I=k,F=0):I=d>1&&F>1&&U<6?N:0;for(;s<e;s++)if(g[s]&&!g[s]._lazyRace)if(D)if((m=g[s].getAttribute("data-expand"))&&(f=1*m)||(f=I),h!==f&&(w=innerWidth+f*B,T=innerHeight+f,p=-1*f,h=f),o=g[s].getBoundingClientRect(),(_=o.bottom)>=p&&(L=o.top)<=T&&(R=o.right)>=p*B&&(P=o.left)<=w&&(_||R||P||L)&&(r.loadHidden||"hidden"!=b(g[s],"visibility"))&&(l&&U<3&&!m&&(d<3||F<4)||O(g[s],f))){if(Z(g[s]),u=!0,U>9)break}else!u&&l&&!c&&U<4&&F<4&&d>2&&(a[0]||r.preloadAfterLoad)&&(a[0]||!m&&(_||R||P||L||"auto"!=g[s].getAttribute(r.sizesAttr)))&&(c=a[0]||g[s]);else Z(g[s]);c&&!u&&Z(c)}},q=E(j),Q=function(e){g(e.target,r.loadedClass),v(e.target,r.loadingClass),A(e.target,V),y(e.target,"lazyloaded")},G=S(Q),V=function(e){G({target:e.target})},J=function(e,t){try{e.contentWindow.location.replace(t)}catch(n){e.src=t}},K=function(e){var t,n=e.getAttribute(r.srcsetAttr);(t=r.customMedia[e.getAttribute("data-media")||e.getAttribute("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},X=S(function(e,t,n,i,s){var a,o,l,d,p,h;(p=y(e,"lazybeforeunveil",t)).defaultPrevented||(i&&(n?g(e,r.autosizesClass):e.setAttribute("sizes",i)),o=e.getAttribute(r.srcsetAttr),a=e.getAttribute(r.srcAttr),s&&(d=(l=e.parentNode)&&f.test(l.nodeName||"")),h=t.firesLoad||"src"in e&&(o||a||d),p={target:e},h&&(A(e,H,!0),clearTimeout(u),u=c(H,2500),g(e,r.loadingClass),A(e,V,!0)),d&&m.call(l.getElementsByTagName("source"),K),o?e.setAttribute("srcset",o):a&&!d&&($.test(e.nodeName)?J(e,a):e.src=a),s&&(o||d)&&z(e,{src:a})),e._lazyRace&&delete e._lazyRace,v(e,r.lazyClass),C(function(){(!h||e.complete&&e.naturalWidth>1)&&(h?H(p):U--,Q(p))},!0)}),Z=function(e){var t,n=W.test(e.nodeName),i=n&&(e.getAttribute(r.sizesAttr)||e.getAttribute("sizes")),s="auto"==i;(!s&&l||!n||!e.getAttribute("src")&&!e.srcset||e.complete||h(e,r.errorClass)||!h(e,r.lazyClass))&&(t=y(e,"lazyunveilread").detail,s&&M.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,U++,X(e,t,s,i,n))},Y=function(){if(!l)if(s.now()-p<999)c(Y,999);else{var e=x(function(){r.loadMode=3,q()});l=!0,r.loadMode=3,q(),o("scroll",function(){3==r.loadMode&&(r.loadMode=2),e()},!0)}};return{_:function(){p=s.now(),n.elements=t.getElementsByClassName(r.lazyClass),a=t.getElementsByClassName(r.lazyClass+" "+r.preloadClass),B=r.hFac,o("scroll",q,!0),o("resize",q,!0),e.MutationObserver?new MutationObserver(q).observe(i,{childList:!0,subtree:!0,attributes:!0}):(i.addEventListener("DOMNodeInserted",q,!0),i.addEventListener("DOMAttrModified",q,!0),setInterval(q,999)),o("hashchange",q,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){t.addEventListener(e,q,!0)}),/d$|^c/.test(t.readyState)?Y():(o("load",Y),t.addEventListener("DOMContentLoaded",q),c(Y,2e4)),n.elements.length?(j(),C._lsFlush()):q()},checkElems:q,unveil:Z}}(),M=function(){var e,n=S(function(e,t,n,r){var i,s,a;if(e._lazysizesWidth=r,r+="px",e.setAttribute("sizes",r),f.test(t.nodeName||""))for(s=0,a=(i=t.getElementsByTagName("source")).length;s<a;s++)i[s].setAttribute("sizes",r);n.detail.dataAttr||z(e,n.detail)}),i=function(e,t,r){var i,s=e.parentNode;s&&(r=w(e,s,r),(i=y(e,"lazybeforesizes",{width:r,dataAttr:!!t})).defaultPrevented||(r=i.detail.width)&&r!==e._lazysizesWidth&&n(e,s,i,r))},s=x(function(){var t,n=e.length;if(n)for(t=0;t<n;t++)i(e[t])});return{_:function(){e=t.getElementsByClassName(r.autosizesClass),o("resize",s)},checkElems:s,updateElem:i}}(),L=function(){L.i||(L.i=!0,M._(),T._())};return n={cfg:r,autoSizer:M,loader:T,init:L,uP:z,aC:g,rC:v,hC:h,fire:y,gW:w,rAF:C}}})}]);