import"./global.bf3fb37f.js";import{S as _e,i as ce,s as ue,e as He,a as T,d as F,b as c,c as S,f as r,g as s,n as R,h as Ce,t as G,j as O,q as j,H as ie,k as Te,m as Fe,l as Le,o as je,p as Ne}from"./vendor.d71f8859.js";function qe(l,e,t){const n=l.slice();return n[6]=e[t],n}function Ie(l,e,t){const n=l.slice();return n[6]=e[t],n}function Ae(l){let e;return{c(){e=c("div"),r(e,"class","s fill svelte-1tbr743")},m(t,n){T(t,e,n)},d(t){t&&F(e)}}}function Je(l){let e;return{c(){e=c("div"),r(e,"class","s svelte-1tbr743")},m(t,n){T(t,e,n)},d(t){t&&F(e)}}}function Pe(l){let e;function t(f,a){return f[2]<f[6]?Je:Ae}let n=t(l),i=n(l);return{c(){i.c(),e=He()},m(f,a){i.m(f,a),T(f,e,a)},p(f,a){n!==(n=t(f))&&(i.d(1),i=n(f),i&&(i.c(),i.m(e.parentNode,e)))},d(f){i.d(f),f&&F(e)}}}function Oe(l){let e;return{c(){e=c("div"),r(e,"class","s fill svelte-1tbr743")},m(t,n){T(t,e,n)},d(t){t&&F(e)}}}function ze(l){let e;return{c(){e=c("div"),r(e,"class","s svelte-1tbr743")},m(t,n){T(t,e,n)},d(t){t&&F(e)}}}function We(l){let e;function t(f,a){return f[3]<f[6]?ze:Oe}let n=t(l),i=n(l);return{c(){i.c(),e=He()},m(f,a){i.m(f,a),T(f,e,a)},p(f,a){n!==(n=t(f))&&(i.d(1),i=n(f),i&&(i.c(),i.m(e.parentNode,e)))},d(f){i.d(f),f&&F(e)}}}function Be(l){let e,t,n,i,f,a,_,p,u,k,g=l[4],m=[];for(let o=0;o<g.length;o+=1)m[o]=Pe(Ie(l,g,o));let y=l[4],h=[];for(let o=0;o<y.length;o+=1)h[o]=We(qe(l,y,o));return{c(){e=c("div"),t=c("div"),n=c("div");for(let o=0;o<m.length;o+=1)m[o].c();i=S(),f=c("div"),a=S(),_=c("div"),p=c("div");for(let o=0;o<h.length;o+=1)h[o].c();u=S(),k=c("div"),r(n,"class","s1 svelte-1tbr743"),r(f,"class","p1 svelte-1tbr743"),r(t,"class","player1 svelte-1tbr743"),r(p,"class","s2 svelte-1tbr743"),r(k,"class","p2 svelte-1tbr743"),r(_,"class","player2 svelte-1tbr743"),r(e,"class","players svelte-1tbr743")},m(o,w){T(o,e,w),s(e,t),s(t,n);for(let v=0;v<m.length;v+=1)m[v].m(n,null);s(t,i),s(t,f),f.innerHTML=l[0],s(e,a),s(e,_),s(_,p);for(let v=0;v<h.length;v+=1)h[v].m(p,null);s(_,u),s(_,k),k.innerHTML=l[1]},p(o,[w]){if(w&20){g=o[4];let v;for(v=0;v<g.length;v+=1){const H=Ie(o,g,v);m[v]?m[v].p(H,w):(m[v]=Pe(H),m[v].c(),m[v].m(n,null))}for(;v<m.length;v+=1)m[v].d(1);m.length=g.length}if(w&1&&(f.innerHTML=o[0]),w&24){y=o[4];let v;for(v=0;v<y.length;v+=1){const H=qe(o,y,v);h[v]?h[v].p(H,w):(h[v]=We(H),h[v].c(),h[v].m(p,null))}for(;v<h.length;v+=1)h[v].d(1);h.length=y.length}w&2&&(k.innerHTML=o[1])},i:R,o:R,d(o){o&&F(e),Ce(m,o),Ce(h,o)}}}function De(l,e,t){let{p1:n="gaebpls"}=e,{p2:i="Miscellany"}=e,{s1:f=2}=e,{s2:a=3}=e,{win:_=4}=e,p=[];return l.$$set=u=>{"p1"in u&&t(0,n=u.p1),"p2"in u&&t(1,i=u.p2),"s1"in u&&t(2,f=u.s1),"s2"in u&&t(3,a=u.s2),"win"in u&&t(5,_=u.win)},l.$$.update=()=>{l.$$.dirty&32&&t(4,p=new Array(_).fill(0).map((u,k)=>k+1))},[n,i,f,a,p,_]}class Ee extends _e{constructor(e){super();ce(this,e,De,Be,ue,{p1:0,p2:1,s1:2,s2:3,win:5})}}function Ke(l){let e;return{c(){e=c("div"),e.textContent="\xA0",r(e,"class","pick svelte-1w6n7mt")},m(t,n){T(t,e,n)},p:R,d(t){t&&F(e)}}}function Qe(l){let e,t,n,i=l[6].song.cat+"",f,a,_=l[6].song.artist+"",p,u,k=l[6].song.name+"",g,m,y=l[6].song.charter+"",h,o;return{c(){e=c("div"),t=G("["),n=new ie,f=G("] "),a=new ie,p=G(" - "),u=new ie,g=G(" ("),m=new ie,h=G(")"),n.a=f,a.a=p,u.a=g,m.a=h,r(e,"class",o=""+(O(`pick p${l[6].picker}`)+" svelte-1w6n7mt"))},m(w,v){T(w,e,v),s(e,t),n.m(i,e),s(e,f),a.m(_,e),s(e,p),u.m(k,e),s(e,g),m.m(y,e),s(e,h)},p(w,v){v&64&&i!==(i=w[6].song.cat+"")&&n.p(i),v&64&&_!==(_=w[6].song.artist+"")&&a.p(_),v&64&&k!==(k=w[6].song.name+"")&&u.p(k),v&64&&y!==(y=w[6].song.charter+"")&&m.p(y),v&64&&o!==(o=""+(O(`pick p${w[6].picker}`)+" svelte-1w6n7mt"))&&r(e,"class",o)},d(w){w&&F(e)}}}function Re(l){let e,t,n,i,f,a,_,p,u,k,g,m=(l[0]>=l[1]?"+"+(l[0]-l[1]):"")+"",y,h,o,w,v,H,M,N,I,q,z,P,B,U,pe,D,V=l[4].toFixed(2)+"",ae,de,we,C,E,X,he,Y,fe,ke,Z,x=(l[1]>=l[0]?"+"+(l[1]-l[0]):"")+"",re,ge,W,$,ve,be,A,ee,oe,te,ye,J,K,le,Me,Q,se=l[5].toFixed(2)+"",me,Se;function Ge(d,b){return d[6].song.cat?Qe:Ke}let ne=Ge(l),L=ne(l);return{c(){e=c("div"),L.c(),t=S(),n=c("div"),i=c("div"),f=c("div"),_=S(),p=c("div"),u=G(l[0]),k=S(),g=c("div"),y=G(m),h=S(),o=c("div"),w=c("div"),v=G(l[2]),H=S(),M=c("div"),N=c("small"),N.textContent="x",I=G(l[8]),z=S(),P=c("div"),B=c("div"),pe=S(),D=c("div"),ae=G(V),de=G("%"),we=S(),C=c("div"),E=c("div"),he=S(),Y=c("div"),fe=G(l[1]),ke=S(),Z=c("div"),re=G(x),ge=S(),W=c("div"),$=c("div"),ve=G(l[3]),be=S(),A=c("div"),ee=c("small"),ee.textContent="x",oe=G(l[7]),ye=S(),J=c("div"),K=c("div"),Me=S(),Q=c("div"),me=G(se),Se=G("%"),r(f,"class","pfill svelte-1w6n7mt"),r(f,"style",a=`width:${Math.min(100,Math.max(0,(l[0]-l[1])/1e3))}%`),r(p,"class","points svelte-1w6n7mt"),r(g,"class","distance svelte-1w6n7mt"),r(w,"class","streak svelte-1w6n7mt"),r(N,"class","svelte-1w6n7mt"),r(M,"class",q=""+(O(`multiplier x${l[8]}`)+" svelte-1w6n7mt")),r(o,"class","combo svelte-1w6n7mt"),r(B,"class","spfill svelte-1w6n7mt"),r(B,"style",U=`width:${l[4]}%`),r(D,"class","spvalue svelte-1w6n7mt"),r(P,"class","sp svelte-1w6n7mt"),r(i,"class","player1 svelte-1w6n7mt"),r(E,"class","pfill svelte-1w6n7mt"),r(E,"style",X=`width:${Math.min(100,Math.max(0,(l[1]-l[0])/1e3))}%`),r(Y,"class","points svelte-1w6n7mt"),r(Z,"class","distance svelte-1w6n7mt"),r($,"class","streak svelte-1w6n7mt"),r(ee,"class","svelte-1w6n7mt"),r(A,"class",te=""+(O(`multiplier x${l[7]}`)+" svelte-1w6n7mt")),r(W,"class","combo svelte-1w6n7mt"),r(K,"class","spfill svelte-1w6n7mt"),r(K,"style",le=`width:${l[5]}%`),r(Q,"class","spvalue svelte-1w6n7mt"),r(J,"class","sp svelte-1w6n7mt"),r(C,"class","player2 svelte-1w6n7mt"),r(n,"class","players svelte-1w6n7mt"),r(e,"class","gameplay svelte-1w6n7mt")},m(d,b){T(d,e,b),L.m(e,null),s(e,t),s(e,n),s(n,i),s(i,f),s(i,_),s(i,p),s(p,u),s(i,k),s(i,g),s(g,y),s(i,h),s(i,o),s(o,w),s(w,v),s(o,H),s(o,M),s(M,N),s(M,I),s(i,z),s(i,P),s(P,B),s(P,pe),s(P,D),s(D,ae),s(D,de),s(n,we),s(n,C),s(C,E),s(C,he),s(C,Y),s(Y,fe),s(C,ke),s(C,Z),s(Z,re),s(C,ge),s(C,W),s(W,$),s($,ve),s(W,be),s(W,A),s(A,ee),s(A,oe),s(C,ye),s(C,J),s(J,K),s(J,Me),s(J,Q),s(Q,me),s(Q,Se)},p(d,[b]){ne===(ne=Ge(d))&&L?L.p(d,b):(L.d(1),L=ne(d),L&&(L.c(),L.m(e,t))),b&3&&a!==(a=`width:${Math.min(100,Math.max(0,(d[0]-d[1])/1e3))}%`)&&r(f,"style",a),b&1&&j(u,d[0]),b&3&&m!==(m=(d[0]>=d[1]?"+"+(d[0]-d[1]):"")+"")&&j(y,m),b&4&&j(v,d[2]),b&256&&j(I,d[8]),b&256&&q!==(q=""+(O(`multiplier x${d[8]}`)+" svelte-1w6n7mt"))&&r(M,"class",q),b&16&&U!==(U=`width:${d[4]}%`)&&r(B,"style",U),b&16&&V!==(V=d[4].toFixed(2)+"")&&j(ae,V),b&3&&X!==(X=`width:${Math.min(100,Math.max(0,(d[1]-d[0])/1e3))}%`)&&r(E,"style",X),b&2&&j(fe,d[1]),b&3&&x!==(x=(d[1]>=d[0]?"+"+(d[1]-d[0]):"")+"")&&j(re,x),b&8&&j(ve,d[3]),b&128&&j(oe,d[7]),b&128&&te!==(te=""+(O(`multiplier x${d[7]}`)+" svelte-1w6n7mt"))&&r(A,"class",te),b&32&&le!==(le=`width:${d[5]}%`)&&r(K,"style",le),b&32&&se!==(se=d[5].toFixed(2)+"")&&j(me,se)},i:R,o:R,d(d){d&&F(e),L.d()}}}function Ue(l,e,t){let n,i,{points1:f=0}=e,{points2:a=0}=e,{streak1:_=0}=e,{streak2:p=0}=e,{sp1:u=0}=e,{sp2:k=0}=e,{pick:g={picker:1,song:{}}}=e;return l.$$set=m=>{"points1"in m&&t(0,f=m.points1),"points2"in m&&t(1,a=m.points2),"streak1"in m&&t(2,_=m.streak1),"streak2"in m&&t(3,p=m.streak2),"sp1"in m&&t(4,u=m.sp1),"sp2"in m&&t(5,k=m.sp2),"pick"in m&&t(6,g=m.pick)},l.$$.update=()=>{l.$$.dirty&4&&t(8,n=1+Math.min(30,_)/10>>0),l.$$.dirty&8&&t(7,i=1+Math.min(30,p)/10>>0)},[f,a,_,p,u,k,g,i,n]}class Ve extends _e{constructor(e){super();ce(this,e,Ue,Re,ue,{points1:0,points2:1,streak1:2,streak2:3,sp1:4,sp2:5,pick:6})}}function Xe(l){let e,t,n,i,f;return t=new Ve({props:{points1:l[6],points2:l[9],streak1:l[7],streak2:l[10],sp1:l[8],sp2:l[11],pick:l[4]}}),i=new Ee({props:{p1:l[0],p2:l[1],s1:l[2],s2:l[3],win:l[5]}}),{c(){e=c("main"),Te(t.$$.fragment),n=S(),Te(i.$$.fragment),r(e,"class","svelte-8df9ax")},m(a,_){T(a,e,_),Fe(t,e,null),s(e,n),Fe(i,e,null),f=!0},p(a,[_]){const p={};_&64&&(p.points1=a[6]),_&512&&(p.points2=a[9]),_&128&&(p.streak1=a[7]),_&1024&&(p.streak2=a[10]),_&256&&(p.sp1=a[8]),_&2048&&(p.sp2=a[11]),_&16&&(p.pick=a[4]),t.$set(p);const u={};_&1&&(u.p1=a[0]),_&2&&(u.p2=a[1]),_&4&&(u.s1=a[2]),_&8&&(u.s2=a[3]),_&32&&(u.win=a[5]),i.$set(u)},i(a){f||(Le(t.$$.fragment,a),Le(i.$$.fragment,a),f=!0)},o(a){je(t.$$.fragment,a),je(i.$$.fragment,a),f=!1},d(a){a&&F(e),Ne(t),Ne(i)}}}function Ye(l,e,t){let n,i,f,a,_,p,u,k,g,m,y,h;const o=new WebSocket("ws://arcturus.fightthe.pw:3000"),w=H=>{if(H.data[0]=="{"){const M=JSON.parse(H.data);localStorage.setItem("data",H.data),t(0,n=M.player1),t(1,i=M.player2),t(2,f=M.matchScore[1]),t(3,a=M.matchScore[2]),t(4,_=M.picks.pop()),t(5,p=M.winCondition)}else if(H.data.startsWith("game")){const[,M,N,I,q]=H.data.split(" ");if(M!=0&&M!=1)return;const z=location.search=="?reverse"?M==0?1:0:M;z==0?(t(6,u=+N),t(7,k=+I),t(8,g=+q/10)):z==1&&(t(9,m=+N),t(10,y=+I),t(11,h=+q/10))}};o.onmessage=w;const v=localStorage.getItem("data");return v&&w({data:v}),[n,i,f,a,_,p,u,k,g,m,y,h]}class Ze extends _e{constructor(e){super();ce(this,e,Ye,Xe,ue,{})}}new Ze({target:document.body});
