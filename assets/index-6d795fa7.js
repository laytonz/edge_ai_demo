import{S as v,e as C,s as I,m as H,F as w,g as r,K as T,h as K,G as j,w as d,u as b,k as M,H as D,C as z,ar as J,a0 as k,D as L,a6 as N,a8 as q,aa as A,ab as B,ac as E}from"./index-2519a27e.js";import{T as O}from"./StaticTabs-7f435bd9.js";import{S as P}from"./StaticColumn-6bd0cb0d.js";function Q(n){let e;const l=n[8].default,t=q(l,n,n[9],null);return{c(){t&&t.c()},m(s,a){t&&t.m(s,a),e=!0},p(s,a){t&&t.p&&(!e||a&512)&&A(t,l,s,s[9],e?E(l,s[9],a,null):B(s[9]),null)},i(s){e||(d(t,s),e=!0)},o(s){b(t,s),e=!1},d(s){t&&t.d(s)}}}function R(n){let e,l,t,s;return l=new P({props:{$$slots:{default:[Q]},$$scope:{ctx:n}}}),{c(){e=H("div"),w(l.$$.fragment),r(e,"id",n[0]),r(e,"class",t="tabitem "+n[1].join(" ")+" svelte-19hvt5v"),T(e,"display",n[3]===n[2]?"block":"none")},m(a,c){K(a,e,c),j(l,e,null),s=!0},p(a,[c]){const f={};c&512&&(f.$$scope={dirty:c,ctx:a}),l.$set(f),(!s||c&1)&&r(e,"id",a[0]),(!s||c&2&&t!==(t="tabitem "+a[1].join(" ")+" svelte-19hvt5v"))&&r(e,"class",t),c&12&&T(e,"display",a[3]===a[2]?"block":"none")},i(a){s||(d(l.$$.fragment,a),s=!0)},o(a){b(l.$$.fragment,a),s=!1},d(a){a&&M(e),D(l)}}}function U(n,e,l){let t,s,{$$slots:a={},$$scope:c}=e,{elem_id:f=""}=e,{elem_classes:u=[]}=e,{name:m}=e,{id:o={}}=e;const i=z(),{register_tab:F,unregister_tab:G,selected_tab:g,selected_tab_index:h}=J(O);k(n,g,_=>l(3,s=_)),k(n,h,_=>l(7,t=_));let S=F({name:m,id:o});return L(()=>()=>G({name:m,id:o})),n.$$set=_=>{"elem_id"in _&&l(0,f=_.elem_id),"elem_classes"in _&&l(1,u=_.elem_classes),"name"in _&&l(6,m=_.name),"id"in _&&l(2,o=_.id),"$$scope"in _&&l(9,c=_.$$scope)},n.$$.update=()=>{n.$$.dirty&192&&t===S&&N().then(()=>i("select",{value:m,index:S}))},[f,u,o,s,g,h,m,t,a,c]}class V extends v{constructor(e){super(),C(this,e,U,R,I,{elem_id:0,elem_classes:1,name:6,id:2})}}function W(n){let e;const l=n[5].default,t=q(l,n,n[7],null);return{c(){t&&t.c()},m(s,a){t&&t.m(s,a),e=!0},p(s,a){t&&t.p&&(!e||a&128)&&A(t,l,s,s[7],e?E(l,s[7],a,null):B(s[7]),null)},i(s){e||(d(t,s),e=!0)},o(s){b(t,s),e=!1},d(s){t&&t.d(s)}}}function X(n){let e,l;return e=new V({props:{elem_id:n[0],elem_classes:n[1],name:n[2],id:n[3],$$slots:{default:[W]},$$scope:{ctx:n}}}),e.$on("select",n[6]),{c(){w(e.$$.fragment)},m(t,s){j(e,t,s),l=!0},p(t,[s]){const a={};s&1&&(a.elem_id=t[0]),s&2&&(a.elem_classes=t[1]),s&4&&(a.name=t[2]),s&8&&(a.id=t[3]),s&128&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){l||(d(e.$$.fragment,t),l=!0)},o(t){b(e.$$.fragment,t),l=!1},d(t){D(e,t)}}}function Y(n,e,l){let{$$slots:t={},$$scope:s}=e,{elem_id:a=""}=e,{elem_classes:c=[]}=e,{label:f}=e,{id:u}=e,{gradio:m}=e;const o=({detail:i})=>m.dispatch("select",i);return n.$$set=i=>{"elem_id"in i&&l(0,a=i.elem_id),"elem_classes"in i&&l(1,c=i.elem_classes),"label"in i&&l(2,f=i.label),"id"in i&&l(3,u=i.id),"gradio"in i&&l(4,m=i.gradio),"$$scope"in i&&l(7,s=i.$$scope)},[a,c,f,u,m,t,o,s]}class Z extends v{constructor(e){super(),C(this,e,Y,X,I,{elem_id:0,elem_classes:1,label:2,id:3,gradio:4})}}const $=Z;export{$ as default};
//# sourceMappingURL=index-6d795fa7.js.map
