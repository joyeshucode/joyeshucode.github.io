import{init as v,load as I}from"/1/bundle/esm/l/en-US/bi/0/module/mi/lwr%2FesmLoader%2Fv%2F0_13_3/s/50948fe5ab7e2b59d8d3aeb5084c1842d1b27b19/bundle_lwr_esmLoader.js";import"/1/bundle/esm/l/en-US/bi/0/module/mi/%40lwc%2Fsynthetic-shadow%2Fv%2F7_2_1/s/5db69d1beb54e796f32ddd1162b1f4cf91deda07/bundle_@lwc_synthetic-shadow.js";import{logOperationStart as s,logOperationEnd as p}from"/1/bundle/esm/l/en-US/bi/0/module/mi/lwr%2Fprofiler%2Fv%2F0_13_3/s/7703530059b96bbb36e0af4ec8493f5f8e61615b/bundle_lwr_profiler.js";import{hydrateComponent as E,createElement as A}from"/1/bundle/esm/l/en-US/bi/0/module/mi/lwc%2Fv%2F7_2_1/s/ac60a3b42adfcc9011d358c8a9b40a7f4874199b/bundle_lwc.js";const l=globalThis.LWR;l.define||l.env?globalThis.LWR=Object.freeze({define:l.define,env:l.env}):delete globalThis.LWR;function S(){return l}const T="lwr.bootstrap.",w=`${T}end`,h="lwr.bootstrap.init",a="lwr.bootstrap.init.module";function x(e,n,o){E(e,n,o)}function C(e,n){return A(e,{is:n})}function g(e){return e.replace(/\/v\/[a-zA-Z0-9-_.]+$/,"").replace("/","-").replace(/([A-Z])/g,n=>`-${n.toLowerCase()}`)}const L=/-([a-z])/g;function O(e){return e.replace(L,n=>n[1].toUpperCase())}function N(e,n={}){if(typeof customElements=="undefined"||typeof document=="undefined"){s({id:w});return}s({id:h});let o=0;for(const[i,m]of e){const c=g(i);if(!document.body.querySelector(c)){s({id:a,specifier:i,specifierIndex:++o});const t=C(c,m),r=document.querySelector("[lwr-root]");r?r.appendChild(t):document.body.appendChild(t),p({id:a,specifier:i,specifierIndex:o,metadata:{renderMode:"spa"}});continue}const F=document.querySelectorAll(c);for(const t of F){s({id:a,specifier:i,specifierIndex:++o});const r=t.dataset.lwrPropsId;if(r){x(t,m,n[r]||{}),p({id:a,specifier:i,specifierIndex:o,metadata:{renderMode:"ssr"}});continue}const d=C(c,m);for(const{name:b,value:u}of t.attributes){d.setAttribute(b,u);const _=O(b);_ in d&&(d[_]=u)}for(;t.childNodes.length>0;)d.appendChild(t.childNodes[0]);const f=t.parentElement;f&&f.replaceChild(d,t),p({id:a,specifier:i,specifierIndex:o,metadata:{renderMode:"csr"}})}}p({id:h}),s({id:w})}const y=S(),{serverData:P,rootComponents:R}=y,{imports:j,index:M,importMappings:U,endpoints:z}=y;v({imports:j,index:M,importMappings:U,endpoints:z}),Promise.all(R.map(async e=>{const n=g(e);return I(e,"@lwrjs/app-service/About/module/esm/v/0_13_3").then(({default:o})=>{N([[n,o]],P)})}));
