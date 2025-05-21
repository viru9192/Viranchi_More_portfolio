"use strict";(self.webpackChunkviranchi_more_portfolio=self.webpackChunkviranchi_more_portfolio||[]).push([[656],{656:(e,t,i)=>{i.r(t),i.d(t,{default:()=>v});i(950);var r=i(937),n=i(539),o=i(372),a=i(875);const s=[{id:"edu-1",name:"State University of New York at Binghamton",description:"Masters in Information Systems",stack:["Aug 2024 - May 2026","GPA: 3.7/4.0"]},{id:"edu-2",name:"University of Mumbai",description:"B.E. in Electronics Engineering",stack:["Aug 2017 - Jun 2021","GPA: 7.4/10"]}];var d=i(414);const c=r.Ay.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, var(--background) 60%, var(--primary-light) 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,l=r.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  width: 100%;
`,h=(0,r.Ay)(n.P.h2)`
  font-size: clamp(2rem, 4vw, 2.5rem);
  color: var(--text);
  margin-bottom: 3rem;
  text-align: center;
  font-weight: 600;
`,g=r.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
`,m=(0,r.Ay)(n.P.div)`
  background: var(--light);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  overflow: hidden;
  height: 100%;
  min-height: 200px;

  &:hover {
    transform: translateY(-5px);
    transition: transform 0.3s ease;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
`,u=r.Ay.div`
  font-size: 2rem;
  color: var(--primary);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`,p=r.Ay.h3`
  font-size: 1.5rem;
  color: var(--text);
  margin: 0;
  font-weight: 600;
`,f=r.Ay.h4`
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin: 0;
  font-weight: 500;
`,y=r.Ay.p`
  font-size: 0.9rem;
  color: var(--muted);
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:before {
    content: "•";
    color: var(--primary);
  }
`,v=(r.Ay.p`
  font-size: 0.9rem;
  color: var(--muted);
  margin: 0;
`,()=>{const[e,t]=(0,o.Wx)({triggerOnce:!0,threshold:.1}),i={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}};return(0,d.jsx)(c,{id:"education",children:(0,d.jsxs)(l,{children:[(0,d.jsx)(h,{as:n.P.h2,initial:{opacity:0,y:20},animate:t?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.5},children:"Education"}),(0,d.jsx)(g,{ref:e,children:s.map(((e,r)=>(0,d.jsxs)(m,{as:n.P.div,variants:i,initial:"hidden",animate:t?"visible":"hidden",custom:r,whileHover:{scale:1.02},whileTap:{scale:.98},children:[(0,d.jsx)(u,{children:(0,d.jsx)(a.YNd,{})}),(0,d.jsx)(p,{children:e.name}),(0,d.jsx)(f,{children:e.description}),e.stack.map(((e,t)=>(0,d.jsx)(y,{children:e},t)))]},e.id)))})]})})})},372:(e,t,i)=>{i.d(t,{Wx:()=>g});var r=i(950),n=Object.defineProperty,o=(e,t,i)=>((e,t,i)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i)(e,"symbol"!==typeof t?t+"":t,i),a=new Map,s=new WeakMap,d=0,c=void 0;function l(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>{return`${t}_${"root"===t?(i=e.root,i?(s.has(i)||(d+=1,s.set(i,d.toString())),s.get(i)):"0"):e[t]}`;var i})).toString()}function h(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:c;if("undefined"===typeof window.IntersectionObserver&&void 0!==r){const n=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"===typeof i.threshold?i.threshold:0,time:0,boundingClientRect:n,intersectionRect:n,rootBounds:n}),()=>{}}const{id:n,observer:o,elements:s}=function(e){const t=l(e);let i=a.get(t);if(!i){const r=new Map;let n;const o=new IntersectionObserver((t=>{t.forEach((t=>{var i;const o=t.isIntersecting&&n.some((e=>t.intersectionRatio>=e));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=o),null==(i=r.get(t.target))||i.forEach((e=>{e(o,t)}))}))}),e);n=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),i={id:t,observer:o,elements:r},a.set(t,i)}return i}(i),d=s.get(e)||[];return s.has(e)||s.set(e,d),d.push(t),o.observe(e),function(){d.splice(d.indexOf(t),1),0===d.length&&(s.delete(e),o.unobserve(e)),0===s.size&&(o.disconnect(),a.delete(n))}}r.Component;function g(){let{threshold:e,delay:t,trackVisibility:i,rootMargin:n,root:o,triggerOnce:a,skip:s,initialInView:d,fallbackInView:c,onChange:l}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var g;const[m,u]=r.useState(null),p=r.useRef(l),[f,y]=r.useState({inView:!!d,entry:void 0});p.current=l,r.useEffect((()=>{if(s||!m)return;let r;return r=h(m,((e,t)=>{y({inView:e,entry:t}),p.current&&p.current(e,t),t.isIntersecting&&a&&r&&(r(),r=void 0)}),{root:o,rootMargin:n,threshold:e,trackVisibility:i,delay:t},c),()=>{r&&r()}}),[Array.isArray(e)?e.toString():e,m,o,n,a,s,i,c,t]);const v=null==(g=f.entry)?void 0:g.target,x=r.useRef(void 0);m||!v||a||s||x.current===v||(x.current=v,y({inView:!!d,entry:void 0}));const b=[u,f.inView,f.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}}}]);