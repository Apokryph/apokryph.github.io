(()=>{"use strict";var e,v={},h={};function r(e){var o=h[e];if(void 0!==o)return o.exports;var t=h[e]={id:e,loaded:!1,exports:{}};return v[e](t,t.exports,r),t.loaded=!0,t.exports}r.m=v,e=[],r.O=(o,t,i,l)=>{if(!t){var a=1/0;for(n=0;n<e.length;n++){for(var[t,i,l]=e[n],d=!0,f=0;f<t.length;f++)(!1&l||a>=l)&&Object.keys(r.O).every(b=>r.O[b](t[f]))?t.splice(f--,1):(d=!1,l<a&&(a=l));if(d){e.splice(n--,1);var s=i();void 0!==s&&(o=s)}}return o}l=l||0;for(var n=e.length;n>0&&e[n-1][2]>l;n--)e[n]=e[n-1];e[n]=[t,i,l]},r.d=(e,o)=>{for(var t in o)r.o(o,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((o,t)=>(r.f[t](e,o),o),[])),r.u=e=>e+".1a7651ba172cb197.js",r.miniCssF=e=>{},r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e={},o="shell:";r.l=(t,i,l,n)=>{if(e[t])e[t].push(i);else{var a,d;if(void 0!==l)for(var f=document.getElementsByTagName("script"),s=0;s<f.length;s++){var u=f[s];if(u.getAttribute("src")==t||u.getAttribute("data-webpack")==o+l){a=u;break}}a||(d=!0,(a=document.createElement("script")).type="module",a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",o+l),a.src=r.tu(t)),e[t]=[i];var c=(m,b)=>{a.onerror=a.onload=null,clearTimeout(p);var g=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),g&&g.forEach(y=>y(b)),m)return m(b)},p=setTimeout(c.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=c.bind(null,a.onerror),a.onload=c.bind(null,a.onload),d&&document.head.appendChild(a)}}})(),r.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:o=>o},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="",(()=>{var e={666:0};r.f.j=(i,l)=>{var n=r.o(e,i)?e[i]:void 0;if(0!==n)if(n)l.push(n[2]);else if(666!=i){var a=new Promise((u,c)=>n=e[i]=[u,c]);l.push(n[2]=a);var d=r.p+r.u(i),f=new Error;r.l(d,u=>{if(r.o(e,i)&&(0!==(n=e[i])&&(e[i]=void 0),n)){var c=u&&("load"===u.type?"missing":u.type),p=u&&u.target&&u.target.src;f.message="Loading chunk "+i+" failed.\n("+c+": "+p+")",f.name="ChunkLoadError",f.type=c,f.request=p,n[1](f)}},"chunk-"+i,i)}else e[i]=0},r.O.j=i=>0===e[i];var o=(i,l)=>{var f,s,[n,a,d]=l,u=0;if(n.some(p=>0!==e[p])){for(f in a)r.o(a,f)&&(r.m[f]=a[f]);if(d)var c=d(r)}for(i&&i(l);u<n.length;u++)r.o(e,s=n[u])&&e[s]&&e[s][0](),e[s]=0;return r.O(c)},t=self.webpackChunkshell=self.webpackChunkshell||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))})()})();