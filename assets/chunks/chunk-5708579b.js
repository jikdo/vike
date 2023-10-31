function $e(){return!(typeof process>"u"||!process.cwd||!process.versions||typeof process.versions.node>"u"||!process.release||process.release.name!=="node")}function G(e,t){let n;{var r=Error.stackTraceLimit;Error.stackTraceLimit=1/0,n=new Error(e),Error.stackTraceLimit=r}return $e()&&(n.stack=be(n.stack,t)),n}function be(e,t){if(!e)return e;const n=Pe(e);let r=0;return n.filter(s=>s.includes(" (internal/")||s.includes(" (node:internal")?!1:r<t&&Re(s)?(r++,!1):!0).join(`
`)}function Re(e){return e.startsWith("    at ")}function Pe(e){return e.split(/\r?\n/)}function k(e,t){const n=globalThis.__vike=globalThis.__vike||{};return n[e]=n[e]||t}function S(e){return typeof e=="object"&&e!==null}function H(e){return Array.from(new Set(e))}const v=k("assertPackageInstances.ts",{instances:[],alreadyLogged:new Set}),le="The client runtime of Server Routing as well as the client runtime of Client Routing are both being loaded. Make sure they aren't loaded both at the same time for a given page. See https://vike.dev/client-runtimes-conflict",M="Two vike client runtime instances are being loaded. Make sure your client-side bundles don't include vike twice. (In order to reduce the size of your client-side JavaScript bundles.)";function J(){{const e=H(v.instances);ke(e.length<=1,`Both vike@${e[0]} and vike@${e[1]} loaded. Only one version should be loaded.`)}v.checkSingleInstance&&v.instances.length>1&&C(!1,M,{onlyOnce:!0,showStackTrace:!0})}function Kt(e){C(v.isClientRouting!==!0,le,{onlyOnce:!0,showStackTrace:!0}),C(v.isClientRouting===void 0,M,{onlyOnce:!0,showStackTrace:!0}),v.isClientRouting=!1,e&&(v.checkSingleInstance=!0),J()}function Qt(e){C(v.isClientRouting!==!1,le,{onlyOnce:!0,showStackTrace:!0}),C(v.isClientRouting===void 0,M,{onlyOnce:!0,showStackTrace:!0}),v.isClientRouting=!0,e&&(v.checkSingleInstance=!0),J()}function Te(e){v.instances.push(e),J()}function ke(e,t){if(e)return;const n=`[vike][Wrong Usage] ${t}`;throw new Error(n)}function C(e,t,{onlyOnce:n,showStackTrace:r}){if(e)return;const i=`[vike][Warning] ${t}`;if(n){const{alreadyLogged:s}=v,a=n===!0?i:n;if(s.has(a))return;s.add(a)}console.warn(r?new Error(i):i)}const Ce="0.4.144",P={projectName:"Vike",projectVersion:Ce,npmPackageName:"vike",githubRepository:"https://github.com/vikejs/vike"};Te(P.projectVersion);const ce=new Proxy(e=>e,{get:()=>ce}),m=ce,y=k("utils/assert.ts",{alreadyLogged:new Set,logger(e,t){t==="info"?console.log(e):console.warn(e)},showStackTraceList:new WeakSet}),Ie=`[${P.npmPackageName}]`,Le=`[${P.npmPackageName}@${P.projectVersion}]`,Y=2;function o(e,t){var a;if(e)return;const n=(()=>{if(!t)return null;const l=typeof t=="string"?t:JSON.stringify(t);return m.dim(`Debug info (for ${P.projectName} maintainers; you can ignore this): ${l}`)})(),r=`${P.githubRepository}/issues/new`;let i=[`You stumbled upon a bug in ${P.projectName}'s source code.`,`Go to ${m.blue(r)} and copy-paste this error; a maintainer will fix the bug (usually under 24 hours).`,n].filter(Boolean).join(" ");i=L(i),i=W(i,"Bug"),i=_(i,!0);const s=G(i,Y);throw(a=y.onBeforeLog)==null||a.call(y),s}function h(e,t,{showStackTrace:n}={}){var i;if(e)return;t=L(t),t=W(t,"Wrong Usage"),t=_(t);const r=G(t,Y);throw n&&y.showStackTraceList.add(r),(i=y.onBeforeLog)==null||i.call(y),r}function _e(e){return e=L(e),e=W(e,"Error"),e=_(e),G(e,Y)}function I(e,t,{onlyOnce:n,showStackTrace:r}){var i;if(!e){if(t=L(t),t=W(t,"Warning"),t=_(t),n){const{alreadyLogged:s}=y,a=n===!0?t:n;if(s.has(a))return;s.add(a)}if((i=y.onBeforeLog)==null||i.call(y),r){const s=new Error(t);y.showStackTraceList.add(s),y.logger(s,"warn")}else y.logger(t,"warn")}}function Zt(e,t,{onlyOnce:n}){var r;if(!e){if(t=L(t),t=_(t),n){const{alreadyLogged:i}=y,s=t;if(i.has(s))return;i.add(s)}(r=y.onBeforeLog)==null||r.call(y),y.logger(t,"info")}}function W(e,t){let n=`[${t}]`;const r=t==="Warning"?"yellow":"red";return n=m.bold(m[r](n)),`${n}${e}`}function L(e){return e.startsWith("[")?e:` ${e}`}function _(e,t=!1){return`${t?Le:Ie}${e}`}function q(){return typeof window<"u"&&typeof window.scrollY=="number"}const O=k("utils/assertRouterType.ts",{});function en(){ue(xe()),O.isClientRouting=!0}function xe(){return O.isClientRouting!==!1}function tn(){ue(O.isClientRouting!==!0),O.isClientRouting=!1}function ue(e){h(q(),`${m.cyan("import { something } from 'vike/client/router'")} is forbidden on the server-side`,{showStackTrace:!0}),I(e,"You shouldn't `import { something } from 'vike/client/router'` when using Server Routing. The 'vike/client/router' utilities work only with Client Routing. In particular, don't `import { navigate }` nor `import { prefetch }` as they unnecessarily bloat your client-side bundle sizes.",{showStackTrace:!0,onlyOnce:!0})}const Oe=["js","ts","cjs","cts","mjs","mts","jsx","tsx","cjsx","ctsx","mjsx","mtsx"],fe=["vue","svelte","marko","md","mdx"],je=[...Oe,...fe];function de(e){const t=je.some(n=>e.endsWith("."+n));return o(!Fe(e)||t),t}function Fe(e){return/\.(c|m)?(j|t)sx?$/.test(e)}function We(e){return fe.some(t=>e.endsWith("."+t))}function j(e,t,n){return typeof e=="string"?ee(e.split(""),t,n).join(""):ee(e,t,n)}function ee(e,t,n){const r=[];let i=t>=0?t:e.length+t;o(i>=0&&i<=e.length);let s=n>=0?n:e.length+n;for(o(s>=0&&s<=e.length);!(i===s||(i===e.length&&(i=0),i===s));){const a=e[i];o(a!==void 0),r.push(a),i++}return r}const ge=["http://","https://","tauri://"];function he(e){return ge.some(t=>e.startsWith(t))||e.startsWith("/")||e.startsWith(".")||e.startsWith("?")||e.startsWith("#")||e===""}function nn(e,t){o(t.includes(" but ")),h(typeof e=="string",`${t} should be a string`),!he(e)&&(!e.startsWith("/")&&!e.includes(":")?h(!1,`${t} is ${m.cyan(e)} and it should be /${m.cyan(e)} instead (URL pathnames should start with a leading slash)`):h(!1,`${t} isn't a valid URL`))}function Ae(e,t){o(he(e)),o(t.startsWith("/"));const[n,...r]=e.split("#");o(n!==void 0);const i=["",...r].join("#")||null;o(i===null||i.startsWith("#"));const s=i===null?"":z(i.slice(1)),[a,...l]=n.split("?");o(a!==void 0);const c=["",...l].join("?")||null;o(c===null||c.startsWith("?"));const u={},f={};Array.from(new URLSearchParams(c||"")).forEach(([$,Z])=>{u[$]=Z,f[$]=[...f.hasOwnProperty($)?f[$]:[],Z]});const{origin:d,pathname:w}=De(a,t);o(d===null||d===z(d)),o(w.startsWith("/")),o(d===null||e.startsWith(d));const g=a.slice((d||"").length);Ge(e,d,g,c,i);let{pathname:E,hasBaseServer:b}=Ue(w,t);return E=Ve(E),o(E.startsWith("/")),{origin:d,pathname:E,pathnameOriginal:g,hasBaseServer:b,search:u,searchAll:f,searchOriginal:c,hash:s,hashOriginal:i}}function z(e){try{return decodeURIComponent(e)}catch{}try{return decodeURI(e)}catch{}return e}function Ve(e){return e=e.split("/").map(t=>z(t).split("/").join("%2F")).join("/"),e=e.replace(/\s/g,""),e}function De(e,t){var n;{const{origin:r,pathname:i}=D(e);if(r)return{origin:r,pathname:i};o(i===e)}if(e.startsWith("/"))return{origin:null,pathname:e};{let r=typeof window<"u"&&((n=window==null?void 0:window.document)==null?void 0:n.baseURI);r&&(r=D(r).pathname);const s=ze(e,r||t);return D(s)}}function D(e){if(ge.some(t=>e.startsWith(t))){const[t,n,r,...i]=e.split("/"),s=[t,n,r].join("/"),a=["",...i].join("/")||"/";return{origin:s,pathname:a}}else return{pathname:e,origin:null}}function ze(e,t){const n=t.split("/"),r=e.split("/");let i=t.endsWith("/");e.startsWith(".")&&n.pop();for(const a in r){const l=r[a];l==""&&a==="0"||l!="."&&(l==".."?n.pop():(i=!1,n.push(l)))}let s=n.join("/");return i&&!s.endsWith("/")&&(s+="/"),s.startsWith("/")||(s="/"+s),s}function Ne(e){o(e.startsWith("/")),o(!e.includes("?")),o(!e.includes("#"))}function Ue(e,t){Ne(e),o(Be(t));let n=e;if(o(n.startsWith("/")),o(t.startsWith("/")),t==="/")return{pathname:e,hasBaseServer:!0};let r=t;return t.endsWith("/")&&n===j(t,0,-1)&&(r=j(t,0,-1),o(n===r)),n.startsWith(r)?(o(n.startsWith("/")||n.startsWith("http")),o(n.startsWith(r)),n=n.slice(r.length),n.startsWith("/")||(n="/"+n),o(n.startsWith("/")),{pathname:n,hasBaseServer:!0}):{pathname:e,hasBaseServer:!1}}function Be(e){return e.startsWith("/")}function Ge(e,t,n,r,i){const s=He(t,n,r,i);o(e===s)}function He(e,t,n,r){return`${e||""}${t}${n||""}${r||""}`}function X(e,t){t&&Object.defineProperties(e,Object.getOwnPropertyDescriptors(t))}function A(e){return e instanceof Function||typeof e=="function"}function rn(e){return(t,n)=>{const r=e(t),i=e(n);return r===i?0:r>i?-1:1}}function sn(e){return(t,n)=>{const r=e(t),i=e(n);return r===i?0:r<i?-1:1}}function Me(e){return(t,n)=>{const r=e(t),i=e(n);if(o([!0,!1,null].includes(r)),o([!0,!1,null].includes(i)),r===i)return 0;if(r===!0||i===!1)return-1;if(i===!0||r===!1)return 1;o(!1)}}function Je(e){return Me(t=>{const n=e(t);return n===null?null:!n})}function p(e,t,n="unknown"){if(!S(e))return!1;if(!(t in e))return n==="undefined";if(n==="unknown")return!0;const r=e[t];return n==="array"?Array.isArray(r):n==="object"?S(r):n==="string[]"?Array.isArray(r)&&r.every(i=>typeof i=="string"):n==="function"?A(r):Array.isArray(n)?typeof r=="string"&&n.includes(r):n==="null"?r===null:n==="undefined"?r===void 0:n==="true"?r===!0:n==="false"?r===!1:typeof r===n}function Ye(e,t){return e.toLowerCase()<t.toLowerCase()?-1:e.toLowerCase()>t.toLowerCase()?1:0}const qe=e=>e!=null;function pe(e){const t=n=>`Not a posix path: ${n}`;o(e!==null,t("null")),o(typeof e=="string",t(`typeof path === ${JSON.stringify(typeof e)}`)),o(e!=="",t("(empty string)")),o(e),o(!e.includes("\\"),t(e))}function Xe(e){return[null,void 0].includes(e)?String(e):["boolean","number","string"].includes(typeof e)?JSON.stringify(e):null}const Ke=["clientRouting"];function Qe(e){Ke.forEach(t=>{if(o(e.fileExports),!(t in e.fileExports))return;const n=`The value of \`${t}\` is only allowed to be \`true\`.`;h(e.fileExports[t]!==!1,`${e.filePath} has \`export { ${t} }\` with the value \`false\` which is prohibited: remove \`export { ${t} }\` instead. (${n})`),h(e.fileExports[t]===!0,`${e.filePath} has \`export { ${t} }\` with a forbidden value. ${n}`)})}const me=["render","clientRouting","prerender","doNotPrerender"];function Ze(e,t){h(!me.includes(e),`${t} has \`export default { ${e} }\` which is prohibited, use \`export { ${e} }\` instead.`)}function et(e,t){if(!e)return null;let[n,...r]=e;if(!n||r.length===0&&["*","default",t].includes(n))return null;o(n!=="*");let i="",s="";return n==="default"?i="export default":(i="export",r=[n,...r]),r.forEach(l=>{i=`${i} { ${l}`,s=` }${s}`}),i+s}function on(e,t,n){const r=nt(e,t);if(r===null)return null;const{value:i,definedAt:s}=r;return n&&tt(i,n,t,s),r}function tt(e,t,n,r){o(e!==null);const i=typeof e;if(i===t)return;const s=Xe(e),a=s!==null?`value ${m.cyan(s)}`:`type ${m.cyan(i)}`,c=`${K("Config",n,{definedAt:r})} has an invalid ${a}: it should be a ${m.cyan(t)} instead`;h(!1,c)}function nt(e,t){const n=e.configValues[t];return!n||n.value===null?null:n}function an(e,t){const n=t.find(r=>r.pageId===e);return o(t.length>0),o(n),n}function K(e,t,{definedAt:n}){const r=rt(n,t),i=r==="internally"?r:`at ${r}`;let s=`${t}${e==="Hook"?"()":""}`;return`${e} ${m.cyan(s)} defined ${i}`}function rt(e,t){if("isComputed"in e)return"internally";let n;return"files"in e?n=e.files:n=[e],o(n.length>=1),n.map(i=>{const{filePathToShowToUser:s,fileExportPathToShowToUser:a}=i;let l=s;const c=et(a,t);return c&&(l=`${l} > ${m.cyan(c)}`),l}).join(" / ")}function ye({definedAt:e}){if("isComputed"in e||"files"in e)return null;const{filePathToShowToUser:t}=e;return o(t),t}function ln({definedAt:e}){const t=ye({definedAt:e});return o(t),t}function it(e,t){const n={},r={},i={};e.forEach(l=>{st(l).forEach(({exportName:u,exportValue:f,isFromDefaultExport:d})=>{o(u!=="default"),i[u]=i[u]??[],i[u].push({exportValue:f,exportSource:`${l.filePath} > ${d?`\`export default { ${u} }\``:`\`export { ${u} }\``}`,filePath:l.filePath,_filePath:l.filePath,_fileType:l.fileType,_isFromDefaultExport:d})})}),t&&Object.entries(t.configValues).forEach(([l,c])=>{const{value:u}=c,f=ye(c),d=K("Config",l,c);r[l]=r[l]??u,n[l]=n[l]??[],o(n[l].length===0),n[l].push({configValue:u,configDefinedAt:d,configDefinedByFile:f});const w=l;i[w]=i[w]??[],i[w].push({exportValue:u,exportSource:d,filePath:f,_filePath:f,_fileType:null,_isFromDefaultExport:null})});const s=ot(),a={};return Object.entries(i).forEach(([l,c])=>{c.forEach(({exportValue:u,_fileType:f,_isFromDefaultExport:d})=>{a[l]=a[l]??u,f===".page"&&!d&&(l in s||(s[l]=u))})}),o(!("default"in a)),o(!("default"in i)),{config:r,configEntries:n,exports:a,exportsAll:i,pageExports:s}}function st(e){const{filePath:t,fileExports:n}=e;o(n),o(de(t));const r=[];return Object.entries(n).sort(Je(([i])=>i==="default")).forEach(([i,s])=>{let a=i==="default";if(a)if(We(t))i="Page";else{h(S(s),`The ${m.cyan("export default")} of ${t} should be an object.`),Object.entries(s).forEach(([l,c])=>{Ze(l,t),r.push({exportName:l,exportValue:c,isFromDefaultExport:a})});return}r.push({exportName:i,exportValue:s,isFromDefaultExport:a})}),r.forEach(({exportName:i,isFromDefaultExport:s})=>{o(!(s&&me.includes(i)))}),r}function ot(){return new Proxy({},{get(...e){return q()||I(!1,"`pageContext.pageExports` is outdated. Use `pageContext.exports` instead, see https://vike.dev/exports",{onlyOnce:!0,showStackTrace:!0}),Reflect.get(...e)}})}function at(e){const t=".page.",n=j(e.split(t),0,-1).join(t);return o(!n.includes("\\")),n}function T(e){pe(e)}function cn(e,t){if(t.length>0){const r=t.filter(i=>i.isErrorPage);return r.length===0?null:(h(r.length===1,"Only one error page can be defined"),r[0].pageId)}const n=H(e.map(({pageId:r})=>r).filter(r=>V(r)));if(h(n.length<=1,`Only one _error.page.js is allowed, but found several: ${n.join(" ")}`),n.length>0){const r=n[0];return o(r),r}return null}function V(e,t){return o(!e.includes("\\")),e.includes("/_error")}function lt(e,t){if(t.length>0){const n=t.find(r=>r.pageId===e);return o(n),!!n.isErrorPage}else return V(e)}const ct=[".page",".page.server",".page.route",".page.client",".css"];function ut(e){if(pe(e),e.endsWith(".css"))return".css";o(de(e),e);const n=e.split("/").slice(-1)[0].split("."),r=n.slice(-3)[0],i=n.slice(-2)[0];if(i==="page")return".page";if(o(r==="page",e),i==="server")return".page.server";if(i==="client")return".page.client";if(i==="route")return".page.route";o(!1,e)}function Ee(e){const t=s=>i.pageId===s||i.isDefaultPageFile&&(te(i.filePath)||ft(s,i.filePath)),n=ut(e),i={filePath:e,fileType:n,isEnv:s=>{if(o(n!==".page.route"),s==="CLIENT_ONLY")return n===".page.client"||n===".css";if(s==="SERVER_ONLY")return n===".page.server";if(s==="CLIENT_AND_SERVER")return n===".page";o(!1)},isRelevant:t,isDefaultPageFile:N(e),isRendererPageFile:n!==".css"&&N(e)&&te(e),isErrorPageFile:V(e),pageId:at(e)};return i}function N(e){return T(e),V(e)?!1:e.includes("/_default")}function te(e){return T(e),e.includes("/renderer/")}function ft(e,t){T(e),T(t),o(!e.endsWith("/")),o(!t.endsWith("/")),o(N(t));const n=j(t.split("/"),0,-1).filter(r=>r!=="_default").join("/");return e.startsWith(n)}function dt(e){o(Array.isArray(e)),e.forEach(t=>{o(S(t)),o(p(t,"pageId","string")),o(p(t,"routeFilesystem")),o(p(t,"configValuesSerialized")),o(p(t,"configValuesImported"))})}function gt(e){o(p(e,"configValuesImported"))}const ht=[{is:e=>e===void 0,match:e=>e==="!undefined",serialize:()=>"!undefined",deserialize:()=>{}},{is:e=>e===1/0,match:e=>e==="!Infinity",serialize:()=>"!Infinity",deserialize:()=>1/0},{is:e=>e===-1/0,match:e=>e==="!-Infinity",serialize:()=>"!-Infinity",deserialize:()=>-1/0},{is:e=>typeof e=="number"&&isNaN(e),match:e=>e==="!NaN",serialize:()=>"!NaN",deserialize:()=>NaN},{is:e=>e instanceof Date,match:e=>e.startsWith("!Date:"),serialize:e=>"!Date:"+e.toISOString(),deserialize:e=>new Date(e.slice(6))},{is:e=>typeof e=="bigint",match:e=>e.startsWith("!BigInt:"),serialize:e=>"!BigInt:"+e.toString(),deserialize:e=>{if(typeof BigInt>"u")throw new Error("Your JavaScript environement does not support BigInt. Consider adding a polyfill.");return BigInt(e.slice(8))}},{is:e=>e instanceof RegExp,match:e=>e.startsWith("!RegExp:"),serialize:e=>"!RegExp:"+e.toString(),deserialize:e=>{e=e.slice(8);const t=e.match(/\/(.*)\/(.*)?/),n=t[1],r=t[2];return new RegExp(n,r)}},{is:e=>e instanceof Map,match:e=>e.startsWith("!Map:"),serialize:(e,t)=>"!Map:"+t(Array.from(e.entries())),deserialize:(e,t)=>new Map(t(e.slice(5)))},{is:e=>e instanceof Set,match:e=>e.startsWith("!Set:"),serialize:(e,t)=>"!Set:"+t(Array.from(e.values())),deserialize:(e,t)=>new Set(t(e.slice(5)))},{is:e=>typeof e=="string"&&e.startsWith("!"),match:e=>e.startsWith("!"),serialize:e=>"!"+e,deserialize:e=>e.slice(1)}];function Q(e){const t=JSON.parse(e);return ve(t)}function ve(e){return typeof e=="string"?pt(e):(typeof e=="object"&&e!==null&&Object.entries(e).forEach(([t,n])=>{e[t]=ve(n)}),e)}function pt(e){for(const{match:t,deserialize:n}of ht)if(t(e))return n(e,Q);return e}const mt=["$$registrations","_rerender_only"],yt=[".md",".mdx"];function Et(e,t,n){vt(e,t,n)}function vt(e,t,n){const i=Object.keys(e).filter(a=>!mt.includes(a)),s=i.filter(a=>a!=="default"&&a!==n);if(s.length===0){if(i.length===1)return;{o(i.length===0);let a=`${t} doesn't export any value, but it should have a ${m.cyan("export default")}`;n&&(a+=` or ${m.cyan(`export { ${n} }`)}`),h(!1,a)}}else if(n){if(yt.some(a=>t.endsWith(a)))return;s.forEach(a=>{I(!1,`${t} should have only a single export: move ${m.cyan(`export { ${a} }`)} to +config.h.js or its own +${s}.js`,{onlyOnce:!0})})}else{const a=s.join(", ");h(!1,`${t} replace ${m.cyan(`export { ${a} }`)} with ${m.cyan(`export default { ${a} }`)}`)}}function U(e){const t={},n=(r,i,s,a)=>{t[r]={value:i,definedAt:{filePathToShowToUser:s,fileExportPathToShowToUser:[r,"default"].includes(a)?[]:[a]}},wt(i,r,s)};return e.forEach(r=>{if(r.isValueFile){const{exportValues:i,importPath:s,configName:a}=r;a!=="client"&&Et(i,s,a),Object.entries(i).forEach(([l,c])=>{const u=l!=="default",f=u?l:r.configName;u&&f in t||n(f,c,s,l)})}else{const{configName:i,importPath:s,exportValue:a,exportName:l}=r;n(i,a,s,l)}}),t}function wt(e,t,n){o(!n.includes("+config.")),h(e!==null,`Set ${m.cyan(t)} to ${m.cyan("null")} in a +config.h.js file instead of ${n}`)}function St(e,t){const n=e.map(i=>{const s={};{const{configValuesSerialized:f}=i;Object.entries(f).forEach(([d,w])=>{{const{valueSerialized:g,definedAt:E}=w;o(g),o(!s[d]),s[d]={value:Q(g),definedAt:E}}})}{const{configValuesImported:f}=i,d=U(f);Object.assign(s,d)}const{pageId:a,isErrorPage:l,routeFilesystem:c,loadConfigValuesAll:u}=i;return $t(s),{pageId:a,isErrorPage:l,routeFilesystem:c,configValues:s,loadConfigValuesAll:u}}),r={configValues:{}};{const i=U(t.configValuesImported);Object.assign(r.configValues,i)}return{pageConfigs:n,pageConfigGlobal:r}}function $t(e){const t="route",n=e[t];if(!n)return;const{value:r}=n,i=typeof r,s=K("Config",t,n);h(i==="string"||A(r),`${s} has an invalid type '${i}': it should be a string or a function instead, see https://vike.dev/route`)}function bt(e){o(p(e,"isGeneratedFile")),o(e.isGeneratedFile!==!1,"vike was re-installed(/re-built). Restart your app."),o(e.isGeneratedFile===!0,`\`isGeneratedFile === ${e.isGeneratedFile}\``),o(p(e,"pageFilesLazy","object")),o(p(e,"pageFilesEager","object")),o(p(e,"pageFilesExportNamesLazy","object")),o(p(e,"pageFilesExportNamesEager","object")),o(p(e.pageFilesLazy,".page")),o(p(e.pageFilesLazy,".page.client")||p(e.pageFilesLazy,".page.server")),o(p(e,"pageFilesList","string[]")),o(p(e,"pageConfigsSerialized")),o(p(e,"pageConfigGlobalSerialized"));const{pageConfigsSerialized:t,pageConfigGlobalSerialized:n}=e;dt(t),gt(n);const{pageConfigs:r,pageConfigGlobal:i}=St(t,n),s={};x(e.pageFilesLazy).forEach(({filePath:l,pageFile:c,globValue:u})=>{c=s[l]=s[l]??c;const f=u;ne(f),c.loadFile=async()=>{"fileExports"in c||(c.fileExports=await f(),Qe(c))}}),x(e.pageFilesExportNamesLazy).forEach(({filePath:l,pageFile:c,globValue:u})=>{c=s[l]=s[l]??c;const f=u;ne(f),c.loadExportNames=async()=>{if(!("exportNames"in c)){const d=await f();h("exportNames"in d,"You seem to be using Vite 2 but the latest vike versions only work with Vite 3"),o(p(d,"exportNames","string[]"),c.filePath),c.exportNames=d.exportNames}}}),x(e.pageFilesEager).forEach(({filePath:l,pageFile:c,globValue:u})=>{c=s[l]=s[l]??c;const f=u;o(S(f)),c.fileExports=f}),x(e.pageFilesExportNamesEager).forEach(({filePath:l,pageFile:c,globValue:u})=>{c=s[l]=s[l]??c;const f=u;o(S(f)),o(p(f,"exportNames","string[]"),c.filePath),c.exportNames=f.exportNames}),e.pageFilesList.forEach(l=>{s[l]=s[l]??Ee(l)});const a=Object.values(s);return a.forEach(({filePath:l})=>{o(!l.includes("\\"))}),{pageFiles:a,pageConfigs:r,pageConfigGlobal:i}}function x(e){const t=[];return Object.entries(e).forEach(([n,r])=>{o(ct.includes(n)),o(S(r)),Object.entries(r).forEach(([i,s])=>{const a=Ee(i);o(a.fileType===n),t.push({filePath:i,pageFile:a,globValue:s})})}),t}function ne(e){o(A(e))}const R=k("setPageFiles.ts",{});function un(e){const{pageFiles:t,pageConfigs:n,pageConfigGlobal:r}=bt(e);R.pageFilesAll=t,R.pageConfigs=n,R.pageConfigGlobal=r}async function fn(e,t){e?(o(!R.pageFilesGetter),o(t===void 0)):(o(R.pageFilesGetter),o(typeof t=="boolean"),(!R.pageFilesAll||!t)&&await R.pageFilesGetter());const{pageFilesAll:n,pageConfigs:r,pageConfigGlobal:i}=R;o(n&&r&&i);const s=Rt(n,r);return{pageFilesAll:n,allPageIds:s,pageConfigs:r,pageConfigGlobal:i}}function Rt(e,t){const n=e.filter(({isDefaultPageFile:s})=>!s).map(({pageId:s})=>s),r=H(n),i=t.map(s=>s.pageId);return[...r,...i]}function Pt(e,t){return we(e,t,!0)}function dn(e,t){return we(e,t,!1)}function we(e,t,n){const r=n?"CLIENT_ONLY":"SERVER_ONLY",i=e.filter(g=>g.isRelevant(t)&&g.fileType!==".page.route").sort(Tt(n,t)),s=g=>{const E=i.filter($=>$.pageId===t&&$.isEnv(g?"CLIENT_AND_SERVER":r));h(E.length<=1,`Merge the following files into a single file: ${E.map($=>$.filePath).join(" ")}`);const b=E[0];return o(b===void 0||!b.isDefaultPageFile),b},a=s(!1),l=s(!0),c=g=>i.filter(E=>E.isRendererPageFile&&E.isEnv(g?"CLIENT_AND_SERVER":r))[0],u=c(!1),f=c(!0),d=i.filter(g=>g.isDefaultPageFile&&!g.isRendererPageFile&&(g.isEnv(r)||g.isEnv("CLIENT_AND_SERVER")));return[a,l,...d,u,f].filter(qe)}function Tt(e,t){const n=e?"CLIENT_ONLY":"SERVER_ONLY",r=-1,i=1,s=0;return(a,l)=>{if(!a.isDefaultPageFile&&l.isDefaultPageFile)return r;if(!l.isDefaultPageFile&&a.isDefaultPageFile)return i;{const c=a.isRendererPageFile,u=l.isRendererPageFile;if(!c&&u)return r;if(!u&&c)return i;o(c===u)}{const c=re(t,a.filePath),u=re(t,l.filePath);if(c<u)return r;if(u<c)return i;o(c===u)}{if(a.isEnv(n)&&l.isEnv("CLIENT_AND_SERVER"))return r;if(l.isEnv(n)&&a.isEnv("CLIENT_AND_SERVER"))return i}return s}}function re(e,t){T(e),T(t);let n=0;for(;n<e.length&&n<t.length&&e[n]===t[n];n++);const r=e.slice(n),i=t.slice(n),s=r.split("/").length,a=i.split("/").length;return s+a}const kt="modulepreload",Ct=function(e){return"/"+e},ie={},gn=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=Ct(s),s in ie)return;ie[s]=!0;const a=s.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!r)for(let f=i.length-1;f>=0;f--){const d=i[f];if(d.href===s&&(!a||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${l}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":kt,a||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),a)return new Promise((f,d)=>{u.addEventListener("load",f),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t()).catch(s=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s})};function It(){o(q())}function Lt(){It()}function se(e){const t=e/1e3;if(t<120){const n=oe(t);return`${n} second${ae(n)}`}{const n=t/60,r=oe(n);return`${r} minute${ae(r)}`}}function oe(e){let t=e.toFixed(1);return t.endsWith(".0")&&(t=t.slice(0,-2)),t}function ae(e){return e==="1"?"":"s"}const _t=k("utils/executeHook.ts",{userHookErrors:new Map});function xt(e,t,n){const{timeoutErr:r,timeoutWarn:i}=Ot(t);let s,a;const l=new Promise((d,w)=>{s=g=>{c(),d(g)},a=g=>{c(),w(g)}}),c=()=>{clearTimeout(u),clearTimeout(f)},u=setTimeout(()=>{I(!1,`The ${t}() hook defined by ${n} is taking more than ${se(i)}`,{onlyOnce:!1})},i),f=setTimeout(()=>{const d=_e(`Hook timeout: the ${t}() hook defined by ${n} didn't finish after ${se(r)}`);a(d)},r);return(async()=>{try{const d=await e();s(d)}catch(d){S(d)&&_t.userHookErrors.set(d,{hookName:t,hookFilePath:n}),a(d)}})(),l}function Ot(e){return e==="onBeforeRoute"?{timeoutErr:5*1e3,timeoutWarn:1*1e3}:e==="onBeforePrerender"?{timeoutErr:10*60*1e3,timeoutWarn:30*1e3}:{timeoutErr:40*1e3,timeoutWarn:4*1e3}}function hn(e){const t=window.location.href,{searchOriginal:n,hashOriginal:r,pathname:i}=Ae(t,"/");let s;return e!=null&&e.withoutHash?s=`${i}${n||""}`:s=`${i}${n||""}${r||""}`,o(s.startsWith("/")),s}Lt();function pn(){const e="vike_pageContext",t=document.getElementById(e);h(t,`The element #${e} (which vike automatically injects into the HTML) is missing from the DOM. This may happen if your HTML is malformed. Make sure your HTML isn't malformed, and make sure you don't remove #${e} from the HTML nor from the DOM.`);const n=t.textContent;o(n);const r=Q(n);return o(p(r,"_pageId","string")),X(r,{_hasPageContextFromServer:!0}),r}function B(e,t){if(!(t in e.exports))return null;const n=e.exports[t],r=e.exportsAll[t][0];if(o(r.exportValue===n),n===null)return null;const i=r.filePath;return o(i),o(!i.endsWith(" ")),jt(n,{hookName:t,hookFilePath:i}),{hookFn:n,hookName:t,hookFilePath:i}}function mn(e,t){B(e,t)}function jt(e,{hookName:t,hookFilePath:n}){o(t&&n),o(!t.endsWith(")")),h(A(e),`Hook ${t}() defined by ${n} should be a function`)}function Ft(e){const t=Object.entries(e);for(const n in e)delete e[n];t.sort(([n],[r])=>Ye(n,r)).forEach(([n,r])=>{e[n]=r})}function Wt(e){At(e),Vt(e)}function At(e){lt(e._pageId,e._pageConfigs)&&o(p(e,"is404","boolean"))}function Vt(e){if(e.is404===void 0||e.is404===null)return;const t=e.pageProps||{};if(!S(t)){I(!1,"pageContext.pageProps should be an object",{showStackTrace:!0,onlyOnce:!0});return}t.is404=t.is404||e.is404,e.pageProps=t}const Dt="not-serializable",F=k("getPageContextProxyForUser.ts",{});function zt(e){return o([!0,!1].includes(e._hasPageContextFromServer)),o([!0,!1].includes(e._hasPageContextFromClient)),new Proxy(e,{get(t,n){const r=e[n],i=JSON.stringify(n);return h(r!==Dt,`pageContext[${i}] couldn't be serialized and, therefore, is missing on the client-side. Check the server logs for more information.`),Nt(e,n,`pageContext[${i}] isn't available on the client-side because ${i} is missing in passToClient, see https://vike.dev/passToClient`),r}})}function Nt(e,t,n){F.prev===t||F.prev==="__v_raw"||(Gt(t),!(t in e)&&(Bt(t)||e._hasPageContextFromServer&&!e._hasPageContextFromClient&&h(!1,n)))}const Ut=["then","toJSON"];function Bt(e){return!!(Ut.includes(e)||typeof e=="symbol"||typeof e!="string"||e.startsWith("__v_"))}function Gt(e){F.prev=e,window.setTimeout(()=>{F.prev=void 0},0)}function Ht(e,t){if(t){const i=e;o([!0,!1].includes(i.isHydration)),o([!0,!1,null].includes(i.isBackwardNavigation))}else{const i=e;o(i.isHydration===!0),o(i.isBackwardNavigation===null)}o("config"in e),o("configEntries"in e),o("exports"in e),o("exportsAll"in e),o("pageExports"in e),o(S(e.pageExports));const n=e.exports.Page;X(e,{Page:n}),Mt(e),Ft(e);const r=zt(e);return Wt(e),r}function Mt(e){Object.entries(e).forEach(([t,n])=>{delete e[t],e[t]=n})}function Jt(e,t){const n=e.filter(i=>i.pageId===t);return o(n.length<=1),n[0]??null}async function Yt(e,t){if("isAllLoaded"in e&&!t)return e;const n=await e.loadConfigValuesAll(),r=U(n);return Object.assign(e.configValues,r),X(e,{isAllLoaded:!0}),e}const Se="__whileFetchingAssets";async function yn(e,t,n){const r=Pt(e,n),i=Jt(t,n);let s;const a=!1;try{s=(await Promise.all([i&&Yt(i,a),...r.map(E=>{var b;return(b=E.loadFile)==null?void 0:b.call(E)})]))[0]}catch(g){throw qt(g)&&Object.assign(g,{[Se]:!0}),g}const{config:l,configEntries:c,exports:u,exportsAll:f,pageExports:d}=it(r,s);return{config:l,configEntries:c,exports:u,exportsAll:f,pageExports:d,_pageFilesLoaded:r}}function En(e){return e?e[Se]===!0:!1}function qt(e){return e instanceof Error?["Failed to fetch dynamically imported module","error loading dynamically imported module","Importing a module script failed","error resolving module specifier","failed to resolve module"].some(n=>e.message.toLowerCase().includes(n.toLowerCase())):!1}async function vn(e,t){const n=Ht(e,t);let r=null,i;r=B(e,"render"),i="render";{const l=B(e,"onRenderClient");l&&(r=l,i="onRenderClient")}if(!r){const l=Xt(e);if(e._pageConfigs.length>0)h(!1,`No onRenderClient() hook defined for URL '${l}', but it's needed, see https://vike.dev/onRenderClient`);else{const c=e._pageFilesLoaded.filter(f=>f.fileType===".page.client");let u;c.length===0?u="No file `*.page.client.*` found for URL "+l:u="One of the following files should export a `render()` hook: "+c.map(f=>f.filePath).join(" "),h(!1,u)}}o(r);const s=r.hookFn;o(i);const a=await xt(()=>s(n),i,r.hookFilePath);h(a===void 0,`The ${i}() hook defined by ${r.hookFilePath} isn't allowed to return a value`)}function Xt(e){let t;try{t=e.urlPathname??e.urlOriginal}catch{}return t=t??window.location.href,t}export{nn as A,j as B,B as C,xt as D,Zt as E,cn as F,Ht as G,an as H,on as I,Q as J,_e as K,rt as L,V as M,ln as N,K as O,Be as P,Pt as Q,Jt as R,he as S,xe as T,En as U,Qt as V,gn as _,pn as a,h as b,fn as c,I as d,tn as e,Kt as f,hn as g,vn as h,mn as i,A as j,It as k,yn as l,en as m,S as n,X as o,k as p,dn as q,o as r,un as s,q as t,Ae as u,m as v,Me as w,rn as x,sn as y,p as z};
