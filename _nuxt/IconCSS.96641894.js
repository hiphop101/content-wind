import{a as p,an as d,C as m,Q as o,o as f,i as x,ao as S,x as v}from"./entry.74f05f46.js";const z=p({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(u){var c;const s=u;d(n=>({"935fd7cc":_.value}));const e=m();(c=e==null?void 0:e.nuxtIcon)!=null&&c.aliases;const l=o(()=>{var n;return(((n=e==null?void 0:e.nuxtIcon)==null?void 0:n.aliases)||{})[s.name]||s.name}),_=o(()=>`url('https://api.iconify.design/${l.value.replace(":","/")}.svg')`),a=o(()=>{var t,i,r;if(!s.size&&typeof((t=e.nuxtIcon)==null?void 0:t.size)=="boolean"&&!((i=e.nuxtIcon)!=null&&i.size))return;const n=s.size||((r=e.nuxtIcon)==null?void 0:r.size)||"1em";return String(Number(n))===n?`${n}px`:n});return(n,t)=>(f(),x("span",{style:S({width:a.value,height:a.value})},null,4))}});const y=v(z,[["__scopeId","data-v-d65fafec"]]);export{y as default};
