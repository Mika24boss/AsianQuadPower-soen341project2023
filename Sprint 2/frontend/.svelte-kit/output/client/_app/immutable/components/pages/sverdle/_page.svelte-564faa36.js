import{S as Te,i as je,s as He,k as T,a as X,q as N,e as se,P as Ge,l as j,h as b,c as C,m as G,r as M,n as v,Q as P,F as y,b as S,N as ee,R as Ee,B as re,T as R,O as Ne,G as Me,U as Pe,p as K,V as Oe,u as te,W as Se,X as ne}from"../../../chunks/index-20c84258.js";import{p as Xe}from"../../../chunks/parse-b67c4dc9.js";import{j as F}from"../../../chunks/singletons-317f8e08.js";import{r as Ce}from"../../../chunks/index-295d139c.js";const Le=(a,e={})=>{de(e);let{colors:t=["#FFC700","#FF0000","#2E3191","#41BBC7"],duration:l=3500,force:n=.5,particleCount:o=150,particleShape:r="mix",particleSize:s=12,destroyAfterDone:c=!0,stageHeight:d=800,stageWidth:f=1600}=e;(function(p){const m=Z("style");m.dataset.neoconfetti="",m.textContent='@keyframes fk9XWG_y-axis{to{transform:translate3d(0,var(--stage-height),0)}}@keyframes fk9XWG_x-axis{to{transform:translate3d(var(--x-landing-point),0,0)}}@keyframes fk9XWG_rotation{50%{transform:rotate3d(var(--half-rotation),180deg)}to{transform:rotate3d(var(--rotation),360deg)}}.fk9XWG_container{width:0;height:0;z-index:1200;position:relative;overflow:visible}.fk9XWG_particle{animation:x-axis var(--duration-chaos)forwards cubic-bezier(var(--x1),var(--x2),var(--x3),var(--x4));animation-name:fk9XWG_x-axis}.fk9XWG_particle>div{animation:y-axis var(--duration-chaos)forwards cubic-bezier(var(--y1),var(--y2),var(--y3),var(--y4));width:var(--width);height:var(--height);animation-name:fk9XWG_y-axis;position:absolute;top:0;left:0}.fk9XWG_particle>div:before{height:100%;width:100%;content:"";background-color:var(--bgcolor);animation:rotation var(--rotation-duration)infinite linear;border-radius:var(--border-radius);animation-name:fk9XWG_rotation;display:block}',x(document.head,m)})(),a.classList.add("fk9XWG_container"),a.style.setProperty("--stage-height",d+"px");let g,i=ue(o,t),u=oe(a,i);function _(p,m){const k=B(D()*(Ve-1)),w=r!=="rectangles"&&(r==="circles"||qe(k)),E=(A,h)=>p.style.setProperty(A,h+"");E("--x-landing-point",Q(U(fe(m,90)-180),0,180,-f/2,f/2)+"px"),E("--duration-chaos",l-B(1e3*D())+"ms");const L=D()<ze?I(D()*Fe,2):0;E("--x1",L),E("--x2",-1*L),E("--x3",L),E("--x4",I(U(Q(U(fe(m,90)-180),0,180,-1,1)),4)),E("--y1",I(D()*ce,4)),E("--y2",I(D()*n*(Ae()?1:-1),4)),E("--y3",ce),E("--y4",I(Ie(Q(U(m-180),0,180,n,-n),0),4)),E("--width",(w?s:B(4*D())+s/2)+"px"),E("--height",(w?s:B(2*D())+s)+"px");const O=k.toString(2).padStart(3,"0").split("");E("--half-rotation",O.map(A=>+A/2+"")),E("--rotation",O),E("--rotation-duration",I(D()*(De-ie)+ie)+"ms"),E("--border-radius",w?"50%":0)}for(const[p,m]of Object.entries(u))_(m,i[+p].degree);return Promise.resolve().then(()=>g=setTimeout(()=>c&&(a.innerHTML=""),l)),{update(p){de(p);const m=p.particleCount??o,k=p.colors??t,w=p.stageHeight??d;if(i=ue(m,k),m===o&&JSON.stringify(t)!==JSON.stringify(k))for(const[E,{color:L}]of Object.entries(i))u[+E].style.setProperty("--bgcolor",L);m!==o&&(a.innerHTML="",u=oe(a,i)),c&&!p.destroyAfterDone&&clearTimeout(g),a.style.setProperty("--stage-height",w+"px"),t=k,l=p.duration??l,n=p.force??n,o=m,r=p.particleShape??r,s=p.particleSize??s,c=p.destroyAfterDone??c,d=w,f=p.stageWidth??f},destroy(){clearTimeout(g)}}};function oe(a,e=[]){const t=[];for(const{color:l}of e){const n=Z("div");n.className="fk9XWG_particle",n.style.setProperty("--bgcolor",l);const o=Z("div");x(n,o),x(a,n),t.push(n)}return t}const ie=200,De=800,ze=.1,Fe=.3,ce=.5,U=Math.abs,D=Math.random,B=Math.round,Ie=Math.max,Z=a=>document.createElement(a),x=(a,e)=>a.appendChild(e),ue=(a,e)=>Array.from({length:a},(t,l)=>({color:e[l%e.length],degree:360*l/a})),I=(a,e=2)=>B((a+Number.EPSILON)*10**e)/10**e,Q=(a,e,t,l,n)=>(a-e)*(n-l)/(t-e)+l,fe=(a,e)=>a+e>360?a+e-360:a+e,Ae=()=>D()>.5,Ve=6,qe=a=>a!==1&&Ae(),$=a=>a===void 0,V=(a,e)=>{if(!$(a)&&Number.isSafeInteger(a)&&a<0)throw new Error(e+" must be a positive integer")},de=({particleCount:a,duration:e,colors:t,particleSize:l,force:n,stageHeight:o,stageWidth:r,particleShape:s})=>{if(V(a,"particleCount"),V(e,"duration"),V(l,"particleSize"),V(n,"force"),V(o,"stageHeight"),V(r,"stageWidth"),!$(s)&&!/^(mix|circles|rectangles)$/i.test(s))throw new Error('particlesShape should be either "mix" or "circles" or "rectangle"');if(!$(t)&&!Array.isArray(t))throw new Error("colors must be an array of strings");if(n>1)throw new Error("force must be within 0 and 1")};F.disable_scroll_handling;F.goto;F.invalidate;const Be=F.invalidateAll;F.preload_data;F.preload_code;F.before_navigate;F.after_navigate;const Ue=F.apply_action;function Re(a){const e=JSON.parse(a);return e.data&&(e.data=Xe(e.data)),e}function Je(a,e=()=>{}){const t=async({action:n,result:o,reset:r})=>{o.type==="success"&&(r!==!1&&HTMLFormElement.prototype.reset.call(a),await Be()),(location.origin+location.pathname===n.origin+n.pathname||o.type==="redirect"||o.type==="error")&&Ue(o)};async function l(n){var u,_,p;n.preventDefault();const o=new URL((u=n.submitter)!=null&&u.hasAttribute("formaction")?n.submitter.formAction:HTMLFormElement.prototype.cloneNode.call(a).action),r=new FormData(a),s=(_=n.submitter)==null?void 0:_.getAttribute("name");s&&r.append(s,((p=n.submitter)==null?void 0:p.getAttribute("value"))??"");const c=new AbortController;let d=!1;const g=await e({action:o,cancel:()=>d=!0,controller:c,data:r,form:a})??t;if(d)return;let i;try{const m=await fetch(o,{method:"POST",headers:{accept:"application/json","x-sveltekit-action":"true"},cache:"no-store",body:r,signal:c.signal});i=Re(await m.text()),i.type==="error"&&(i.status=m.status)}catch(m){if((m==null?void 0:m.name)==="AbortError")return;i={type:"error",error:m}}g({action:o,data:r,form:a,update:m=>t({action:o,result:i,reset:m==null?void 0:m.reset}),result:i})}return HTMLFormElement.prototype.addEventListener.call(a,"submit",l),{destroy(){HTMLFormElement.prototype.removeEventListener.call(a,"submit",l)}}}const We="(prefers-reduced-motion: reduce)",Ke=()=>window.matchMedia(We).matches,Qe=Ce(Ke(),a=>{{const e=l=>{a(l.matches)},t=window.matchMedia(We);return t.addEventListener("change",e),()=>{t.removeEventListener("change",e)}}});const{document:Y,window:Ye}=Pe;function he(a,e,t){const l=a.slice();return l[9]=e[t],l}function _e(a,e,t){const l=a.slice();return l[12]=e[t],l}function pe(a,e,t){const l=a.slice();l[15]=e[t],l[9]=t;const n=l[9]===l[3];return l[16]=n,l}function me(a,e,t){var f,g;const l=a.slice();l[15]=e[t],l[25]=t;const n=(f=l[0].answers[l[9]])==null?void 0:f[l[25]];l[18]=n;const o=((g=l[0].guesses[l[9]])==null?void 0:g[l[25]])??"";l[19]=o;const r=l[16]&&l[25]===l[0].guesses[l[9]].length;l[20]=r;const s=l[18]==="x";l[21]=s;const c=l[18]==="c";l[22]=c;const d=l[18]==="_";return l[23]=d,l}function Ze(a){let e;return{c(){e=N("empty")},l(t){e=M(t,"empty")},m(t,l){S(t,e,l)},d(t){t&&b(e)}}}function xe(a){let e;return{c(){e=N("(absent)")},l(t){e=M(t,"(absent)")},m(t,l){S(t,e,l)},d(t){t&&b(e)}}}function $e(a){let e;return{c(){e=N("(present)")},l(t){e=M(t,"(present)")},m(t,l){S(t,e,l)},d(t){t&&b(e)}}}function et(a){let e;return{c(){e=N("(correct)")},l(t){e=M(t,"(correct)")},m(t,l){S(t,e,l)},d(t){t&&b(e)}}}function be(a){let e,t=a[19]+"",l,n,o,r,s,c,d;function f(u,_){return u[21]?et:u[22]?$e:u[23]?xe:Ze}let g=f(a),i=g(a);return{c(){e=T("div"),l=N(t),n=X(),o=T("span"),i.c(),r=X(),s=T("input"),this.h()},l(u){e=j(u,"DIV",{class:!0});var _=G(e);l=M(_,t),n=C(_),o=j(_,"SPAN",{class:!0});var p=G(o);i.l(p),p.forEach(b),r=C(_),s=j(_,"INPUT",{name:!0,type:!0}),_.forEach(b),this.h()},h(){v(o,"class","visually-hidden"),v(s,"name","guess"),s.disabled=c=!a[16],v(s,"type","hidden"),s.value=d=a[19],v(e,"class","letter svelte-1pg2j5l"),P(e,"exact",a[21]),P(e,"close",a[22]),P(e,"missing",a[23]),P(e,"selected",a[20])},m(u,_){S(u,e,_),y(e,l),y(e,n),y(e,o),i.m(o,null),y(e,r),y(e,s)},p(u,_){_&1&&t!==(t=u[19]+"")&&te(l,t),g!==(g=f(u))&&(i.d(1),i=g(u),i&&(i.c(),i.m(o,null))),_&8&&c!==(c=!u[16])&&(s.disabled=c),_&1&&d!==(d=u[19])&&(s.value=d),_&1&&P(e,"exact",u[21]),_&1&&P(e,"close",u[22]),_&1&&P(e,"missing",u[23]),_&9&&P(e,"selected",u[20])},d(u){u&&b(e),i.d()}}}function ge(a){let e,t,l=a[9]+1+"",n,o,r,s,c=Array(5),d=[];for(let f=0;f<c.length;f+=1)d[f]=be(me(a,c,f));return{c(){e=T("h2"),t=N("Row "),n=N(l),o=X(),r=T("div");for(let f=0;f<d.length;f+=1)d[f].c();s=X(),this.h()},l(f){e=j(f,"H2",{class:!0});var g=G(e);t=M(g,"Row "),n=M(g,l),g.forEach(b),o=C(f),r=j(f,"DIV",{class:!0});var i=G(r);for(let u=0;u<d.length;u+=1)d[u].l(i);s=C(i),i.forEach(b),this.h()},h(){v(e,"class","visually-hidden"),v(r,"class","row svelte-1pg2j5l"),P(r,"current",a[16])},m(f,g){S(f,e,g),y(e,t),y(e,n),S(f,o,g),S(f,r,g);for(let i=0;i<d.length;i+=1)d[i].m(r,null);y(r,s)},p(f,g){if(g&9){c=Array(5);let i;for(i=0;i<c.length;i+=1){const u=me(f,c,i);d[i]?d[i].p(u,g):(d[i]=be(u),d[i].c(),d[i].m(r,s))}for(;i<d.length;i+=1)d[i].d(1);d.length=c.length}g&8&&P(r,"current",f[16])},d(f){f&&b(e),f&&b(o),f&&b(r),R(d,f)}}}function tt(a){let e,t,l,n,o,r,s,c,d,f,g=["qwertyuiop","asdfghjkl","zxcvbnm"],i=[];for(let u=0;u<3;u+=1)i[u]=ye(he(a,g,u));return{c(){e=T("div"),t=T("button"),l=N("enter"),o=X(),r=T("button"),s=N("back"),c=X();for(let u=0;u<3;u+=1)i[u].c();this.h()},l(u){e=j(u,"DIV",{class:!0});var _=G(e);t=j(_,"BUTTON",{"data-key":!0,class:!0});var p=G(t);l=M(p,"enter"),p.forEach(b),o=C(_),r=j(_,"BUTTON",{"data-key":!0,formaction:!0,name:!0,class:!0});var m=G(r);s=M(m,"back"),m.forEach(b),c=C(_);for(let k=0;k<3;k+=1)i[k].l(_);_.forEach(b),this.h()},h(){v(t,"data-key","enter"),t.disabled=n=!a[6],v(t,"class","svelte-1pg2j5l"),P(t,"selected",a[6]),v(r,"data-key","backspace"),v(r,"formaction","?/update"),v(r,"name","key"),r.value="backspace",v(r,"class","svelte-1pg2j5l"),v(e,"class","keyboard svelte-1pg2j5l")},m(u,_){S(u,e,_),y(e,t),y(t,l),y(e,o),y(e,r),y(r,s),y(e,c);for(let p=0;p<3;p+=1)i[p].m(e,null);d||(f=ee(r,"click",Se(a[8])),d=!0)},p(u,_){if(_&64&&n!==(n=!u[6])&&(t.disabled=n),_&64&&P(t,"selected",u[6]),_&301){g=["qwertyuiop","asdfghjkl","zxcvbnm"];let p;for(p=0;p<3;p+=1){const m=he(u,g,p);i[p]?i[p].p(m,_):(i[p]=ye(m),i[p].c(),i[p].m(e,null))}for(;p<3;p+=1)i[p].d(1)}},d(u){u&&b(e),R(i,u),d=!1,f()}}}function at(a){let e,t,l=a[4]?"you won :)":"game over :(",n,o,r=!a[4]&&a[0].answer&&ke(a);return{c(){r&&r.c(),e=X(),t=T("button"),n=N(l),o=N(" play again?"),this.h()},l(s){r&&r.l(s),e=C(s),t=j(s,"BUTTON",{"data-key":!0,class:!0,formaction:!0});var c=G(t);n=M(c,l),o=M(c," play again?"),c.forEach(b),this.h()},h(){v(t,"data-key","enter"),v(t,"class","restart selected svelte-1pg2j5l"),v(t,"formaction","?/restart")},m(s,c){r&&r.m(s,c),S(s,e,c),S(s,t,c),y(t,n),y(t,o)},p(s,c){!s[4]&&s[0].answer?r?r.p(s,c):(r=ke(s),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null),c&16&&l!==(l=s[4]?"you won :)":"game over :(")&&te(n,l)},d(s){r&&r.d(s),s&&b(e),s&&b(t)}}}function ve(a){let e,t,l,n,o,r,s;return{c(){e=T("button"),t=N(a[12]),this.h()},l(c){e=j(c,"BUTTON",{"data-key":!0,class:!0,formaction:!0,name:!0,"aria-label":!0});var d=G(e);t=M(d,a[12]),d.forEach(b),this.h()},h(){v(e,"data-key",a[12]),v(e,"class",l=ne(a[2][a[12]])+" svelte-1pg2j5l"),e.disabled=n=a[0].guesses[a[3]].length===5,v(e,"formaction","?/update"),v(e,"name","key"),e.value=a[12],v(e,"aria-label",o=a[12]+" "+(a[5][a[12]]||""))},m(c,d){S(c,e,d),y(e,t),r||(s=ee(e,"click",Se(a[8])),r=!0)},p(c,d){d&4&&l!==(l=ne(c[2][c[12]])+" svelte-1pg2j5l")&&v(e,"class",l),d&9&&n!==(n=c[0].guesses[c[3]].length===5)&&(e.disabled=n),d&32&&o!==(o=c[12]+" "+(c[5][c[12]]||""))&&v(e,"aria-label",o)},d(c){c&&b(e),r=!1,s()}}}function ye(a){let e,t,l=a[9],n=[];for(let o=0;o<l.length;o+=1)n[o]=ve(_e(a,l,o));return{c(){e=T("div");for(let o=0;o<n.length;o+=1)n[o].c();t=X(),this.h()},l(o){e=j(o,"DIV",{class:!0});var r=G(e);for(let s=0;s<n.length;s+=1)n[s].l(r);t=C(r),r.forEach(b),this.h()},h(){v(e,"class","row svelte-1pg2j5l")},m(o,r){S(o,e,r);for(let s=0;s<n.length;s+=1)n[s].m(e,null);y(e,t)},p(o,r){if(r&301){l=o[9];let s;for(s=0;s<l.length;s+=1){const c=_e(o,l,s);n[s]?n[s].p(c,r):(n[s]=ve(c),n[s].c(),n[s].m(e,t))}for(;s<n.length;s+=1)n[s].d(1);n.length=l.length}},d(o){o&&b(e),R(n,o)}}}function ke(a){let e,t,l=a[0].answer+"",n,o;return{c(){e=T("p"),t=N('the answer was "'),n=N(l),o=N('"')},l(r){e=j(r,"P",{});var s=G(e);t=M(s,'the answer was "'),n=M(s,l),o=M(s,'"'),s.forEach(b)},m(r,s){S(r,e,s),y(e,t),y(e,n),y(e,o)},p(r,s){s&1&&l!==(l=r[0].answer+"")&&te(n,l)},d(r){r&&b(e)}}}function we(a){let e,t,l,n;return{c(){e=T("div"),this.h()},l(o){e=j(o,"DIV",{style:!0}),G(e).forEach(b),this.h()},h(){K(e,"position","absolute"),K(e,"left","50%"),K(e,"top","30%")},m(o,r){S(o,e,r),l||(n=Ee(t=Le.call(null,e,{particleCount:a[7]?0:void 0,force:.7,stageWidth:window.innerWidth,stageHeight:window.innerHeight,colors:["#ff3e00","#40b3ff","#676778"]})),l=!0)},p(o,r){t&&Oe(t.update)&&r&128&&t.update.call(null,{particleCount:o[7]?0:void 0,force:.7,stageWidth:window.innerWidth,stageHeight:window.innerHeight,colors:["#ff3e00","#40b3ff","#676778"]})},d(o){o&&b(e),l=!1,n()}}}function lt(a){let e,t,l,n,o,r,s,c,d,f,g,i,u,_,p,m,k=Array(6),w=[];for(let h=0;h<k.length;h+=1)w[h]=ge(pe(a,k,h));function E(h,H){return h[4]||h[0].answers.length>=6?at:tt}let L=E(a),O=L(a),A=a[4]&&we(a);return{c(){e=T("meta"),t=X(),l=T("h1"),n=N("Sverdle"),o=X(),r=T("form"),s=T("a"),c=N("How to play"),d=X(),f=T("div");for(let h=0;h<w.length;h+=1)w[h].c();g=X(),i=T("div"),O.c(),u=X(),A&&A.c(),_=se(),this.h()},l(h){const H=Ge("svelte-18lvto8",Y.head);e=j(H,"META",{name:!0,content:!0}),H.forEach(b),t=C(h),l=j(h,"H1",{class:!0});var z=G(l);n=M(z,"Sverdle"),z.forEach(b),o=C(h),r=j(h,"FORM",{method:!0,action:!0,class:!0});var W=G(r);s=j(W,"A",{class:!0,href:!0});var q=G(s);c=M(q,"How to play"),q.forEach(b),d=C(W),f=j(W,"DIV",{class:!0});var ae=G(f);for(let J=0;J<w.length;J+=1)w[J].l(ae);ae.forEach(b),g=C(W),i=j(W,"DIV",{class:!0});var le=G(i);O.l(le),le.forEach(b),W.forEach(b),u=C(h),A&&A.l(h),_=se(),this.h()},h(){var h;Y.title="Sverdle",v(e,"name","description"),v(e,"content","A Wordle clone written in SvelteKit"),v(l,"class","visually-hidden"),v(s,"class","how-to-play svelte-1pg2j5l"),v(s,"href","/sverdle/how-to-play"),v(f,"class","grid svelte-1pg2j5l"),P(f,"playing",!a[4]),P(f,"bad-guess",(h=a[1])==null?void 0:h.badGuess),v(i,"class","controls svelte-1pg2j5l"),v(r,"method","POST"),v(r,"action","?/enter"),v(r,"class","svelte-1pg2j5l")},m(h,H){y(Y.head,e),S(h,t,H),S(h,l,H),y(l,n),S(h,o,H),S(h,r,H),y(r,s),y(s,c),y(r,d),y(r,f);for(let z=0;z<w.length;z+=1)w[z].m(f,null);y(r,g),y(r,i),O.m(i,null),S(h,u,H),A&&A.m(h,H),S(h,_,H),p||(m=[ee(Ye,"keydown",st),Ee(Je.call(null,r,rt))],p=!0)},p(h,[H]){var z;if(H&9){k=Array(6);let W;for(W=0;W<k.length;W+=1){const q=pe(h,k,W);w[W]?w[W].p(q,H):(w[W]=ge(q),w[W].c(),w[W].m(f,null))}for(;W<w.length;W+=1)w[W].d(1);w.length=k.length}H&16&&P(f,"playing",!h[4]),H&2&&P(f,"bad-guess",(z=h[1])==null?void 0:z.badGuess),L===(L=E(h))&&O?O.p(h,H):(O.d(1),O=L(h),O&&(O.c(),O.m(i,null))),h[4]?A?A.p(h,H):(A=we(h),A.c(),A.m(_.parentNode,_)):A&&(A.d(1),A=null)},i:re,o:re,d(h){b(e),h&&b(t),h&&b(l),h&&b(o),h&&b(r),R(w,h),O.d(),h&&b(u),A&&A.d(h),h&&b(_),p=!1,Ne(m)}}}function st(a){var e;a.metaKey||(e=document.querySelector(`[data-key="${a.key}" i]`))==null||e.dispatchEvent(new MouseEvent("click",{cancelable:!0}))}const rt=()=>({update:a})=>{a({reset:!1})};function nt(a,e,t){let l,n,o,r;Me(a,Qe,i=>t(7,r=i));let{data:s}=e,{form:c}=e,d,f;function g(i){const u=s.guesses[n],_=i.target.getAttribute("data-key");_==="backspace"?(t(0,s.guesses[n]=u.slice(0,-1),s),c!=null&&c.badGuess&&t(1,c.badGuess=!1,c)):u.length<5&&t(0,s.guesses[n]+=_,s)}return a.$$set=i=>{"data"in i&&t(0,s=i.data),"form"in i&&t(1,c=i.form)},a.$$.update=()=>{var i;a.$$.dirty&1&&t(4,l=s.answers.at(-1)==="xxxxx"),a.$$.dirty&17&&t(3,n=l?-1:s.answers.length),a.$$.dirty&9&&t(6,o=((i=s.guesses[n])==null?void 0:i.length)===5),a.$$.dirty&5&&(t(2,d={}),t(5,f={}),s.answers.forEach((u,_)=>{const p=s.guesses[_];for(let m=0;m<5;m+=1){const k=p[m];u[m]==="x"?(t(2,d[k]="exact",d),t(5,f[k]="correct",f)):d[k]||(t(2,d[k]=u[m]==="c"?"close":"missing",d),t(5,f[k]=u[m]==="c"?"present":"absent",f))}}))},[s,c,d,n,l,f,o,r,g]}class ft extends Te{constructor(e){super(),je(this,e,nt,lt,He,{data:0,form:1})}}export{ft as default};
