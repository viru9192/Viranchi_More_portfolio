"use strict";(self.webpackChunkviranchi_more_portfolio=self.webpackChunkviranchi_more_portfolio||[]).push([[199],{199:(e,t,i)=>{i.r(t),i.d(t,{default:()=>b});i(950);var n=i(937),r=i(539),a=i(372),o=i(875),s=i(414);const d=n.Ay.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, var(--background) 60%, var(--primary-light) 100%);
`,l=n.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`,c=(0,n.Ay)(r.P.h2)`
  font-size: clamp(2rem, 4vw, 2.5rem);
  color: var(--text);
  margin-bottom: 3rem;
  text-align: center;
  font-weight: 600;
`,m=n.Ay.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  &:before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: var(--primary);
    opacity: 0.2;

    @media (max-width: ${e=>e.theme.breakpoints.md}) {
      left: 20px;
    }
  }
`,p=(0,n.Ay)(r.P.div)`
  position: relative;
  margin-bottom: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    padding-left: 50px;
  }
`,g=n.Ay.div`
  background: var(--light);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  position: relative;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  &:before {
    content: '';
    position: absolute;
    top: 20px;
    width: 20px;
    height: 20px;
    background: var(--primary);
    border-radius: 50%;
    z-index: 1;

    ${e=>"left"===e.align?"\n      right: -60px;\n    ":"\n      left: -60px;\n    "}

    @media (max-width: ${e=>e.theme.breakpoints.md}) {
      left: -40px;
    }
  }

  ${e=>"left"===e.align?"\n    grid-column: 1;\n  ":"\n    grid-column: 2;\n  "}

  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    grid-column: 1;
  }
`,h=n.Ay.div`
  position: absolute;
  top: 20px;
  width: 40px;
  height: 40px;
  background: var(--background);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  z-index: 2;

  ${e=>"left"===e.align?"\n    right: -80px;\n  ":"\n    left: -80px;\n  "}

  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    left: -60px;
  }
`,u=n.Ay.span`
  display: block;
  font-size: 0.9rem;
  color: var(--primary);
  margin-bottom: 0.5rem;
  font-weight: 500;
`,y=n.Ay.h3`
  font-size: 1.5rem;
  color: var(--text);
  margin-bottom: 0.5rem;
  font-weight: 600;
`,f=n.Ay.h4`
  font-size: 1rem;
  color: var(--text);
  margin-bottom: 1rem;
  font-weight: 500;
`,v=n.Ay.p`
  font-size: 1rem;
  color: var(--text);
  line-height: 1.6;
  font-weight: 500;
`,b=()=>{const[e,t]=(0,a.Wx)({triggerOnce:!0,threshold:.1}),i=[{icon:(0,s.jsx)(o.YNd,{}),date:"January 2025 - Present",title:"Graduate Research Assistant",company:"Binghamton University",description:"Conducting research in data analysis and information systems.",align:"right"},{icon:(0,s.jsx)(o._yv,{}),date:"June 2023 - June 2024",title:"System Engineer",company:"Tata Consultancy Services",description:"Specialized in SQL optimization, PL/SQL development, and Oracle RDBMS management for State Bank of India.",align:"left"},{icon:(0,s.jsx)(o._yv,{}),date:"June 2021 - September 2023",title:"Assistant System Engineer",company:"Tata Consultancy Services",description:"Worked on core banking solutions and data management systems.",align:"right"},{icon:(0,s.jsx)(o._yv,{}),date:"August 2020 - October 2020",title:"Data Analyst Intern",company:"Unschool",description:"Analyzed educational data and created visualizations for student performance metrics.",align:"left"},{icon:(0,s.jsx)(o._yv,{}),date:"July 2020 - August 2020",title:"Data Analyst Intern",company:"Cityfurnish",description:"Worked on data analysis and reporting for business operations.",align:"right"}],n={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},b={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}};return(0,s.jsx)(d,{id:"experience",children:(0,s.jsxs)(l,{children:[(0,s.jsx)(c,{as:r.P.h2,initial:{opacity:0,y:20},animate:t?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.5},children:"Background"}),(0,s.jsx)(m,{ref:e,children:i.map(((e,i)=>(0,s.jsx)(p,{as:r.P.div,variants:n,initial:"hidden",animate:t?"visible":"hidden",custom:i,children:(0,s.jsxs)(g,{align:e.align,as:r.P.div,variants:b,whileHover:{scale:1.02},whileTap:{scale:.98},children:[(0,s.jsx)(h,{align:e.align,children:e.icon}),(0,s.jsx)(u,{children:e.date}),(0,s.jsx)(y,{children:e.title}),(0,s.jsx)(f,{children:e.company}),(0,s.jsx)(v,{children:e.description})]})},i)))})]})})}},372:(e,t,i)=>{i.d(t,{Wx:()=>p});var n=i(950),r=Object.defineProperty,a=(e,t,i)=>((e,t,i)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i)(e,"symbol"!==typeof t?t+"":t,i),o=new Map,s=new WeakMap,d=0,l=void 0;function c(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>{return`${t}_${"root"===t?(i=e.root,i?(s.has(i)||(d+=1,s.set(i,d.toString())),s.get(i)):"0"):e[t]}`;var i})).toString()}function m(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:l;if("undefined"===typeof window.IntersectionObserver&&void 0!==n){const r=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:"number"===typeof i.threshold?i.threshold:0,time:0,boundingClientRect:r,intersectionRect:r,rootBounds:r}),()=>{}}const{id:r,observer:a,elements:s}=function(e){const t=c(e);let i=o.get(t);if(!i){const n=new Map;let r;const a=new IntersectionObserver((t=>{t.forEach((t=>{var i;const a=t.isIntersecting&&r.some((e=>t.intersectionRatio>=e));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=a),null==(i=n.get(t.target))||i.forEach((e=>{e(a,t)}))}))}),e);r=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),i={id:t,observer:a,elements:n},o.set(t,i)}return i}(i),d=s.get(e)||[];return s.has(e)||s.set(e,d),d.push(t),a.observe(e),function(){d.splice(d.indexOf(t),1),0===d.length&&(s.delete(e),a.unobserve(e)),0===s.size&&(a.disconnect(),o.delete(r))}}n.Component;function p(){let{threshold:e,delay:t,trackVisibility:i,rootMargin:r,root:a,triggerOnce:o,skip:s,initialInView:d,fallbackInView:l,onChange:c}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var p;const[g,h]=n.useState(null),u=n.useRef(c),[y,f]=n.useState({inView:!!d,entry:void 0});u.current=c,n.useEffect((()=>{if(s||!g)return;let n;return n=m(g,((e,t)=>{f({inView:e,entry:t}),u.current&&u.current(e,t),t.isIntersecting&&o&&n&&(n(),n=void 0)}),{root:a,rootMargin:r,threshold:e,trackVisibility:i,delay:t},l),()=>{n&&n()}}),[Array.isArray(e)?e.toString():e,g,a,r,o,s,i,l,t]);const v=null==(p=y.entry)?void 0:p.target,b=n.useRef(void 0);g||!v||o||s||b.current===v||(b.current=v,f({inView:!!d,entry:void 0}));const x=[h,y.inView,y.entry];return x.ref=x[0],x.inView=x[1],x.entry=x[2],x}}}]);