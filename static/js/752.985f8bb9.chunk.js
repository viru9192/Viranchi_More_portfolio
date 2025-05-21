"use strict";(self.webpackChunkviranchi_more_portfolio=self.webpackChunkviranchi_more_portfolio||[]).push([[752],{752:(e,i,t)=>{t.r(i),t.d(i,{default:()=>x});t(950);var n=t(937),r=t(539),a=t(372),o=t(414);const s=n.Ay.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, var(--background) 60%, var(--primary-light) 100%);
`,l=n.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`,d=n.Ay.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: start;

  @media (min-width: ${e=>e.theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  }
`,c=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 0.5rem;
`,m=(0,n.Ay)(r.P.h2)`
  font-size: clamp(2rem, 4vw, 2.5rem);
  color: var(--text);
  margin-bottom: 1.5rem;
  text-align: left;
  font-weight: 600;
`,h=(0,n.Ay)(r.P.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,g=(0,n.Ay)(r.P.p)`
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text);
  font-weight: 500;
  margin: 0;
`,p=(0,n.Ay)(r.P.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 0;
`,u=(0,n.Ay)(r.P.div)`
  background: var(--light);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  &:hover {
    transform: translateY(-5px);
  }
`,f=n.Ay.h3`
  font-size: 1.5rem;
  color: var(--text);
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 600;
`,v=n.Ay.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 1.2rem;
  flex: 1;
`,y=n.Ay.li`
  color: var(--text);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  font-size: 0.9rem;
  line-height: 1.2;

  &:before {
    content: "•";
    color: var(--primary);
  }
`,x=()=>{const[e,i]=(0,a.Wx)({triggerOnce:!0,threshold:.1}),t={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},n={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}};return(0,o.jsx)(s,{id:"about",children:(0,o.jsx)(l,{children:(0,o.jsxs)(d,{ref:e,children:[(0,o.jsxs)(c,{as:r.P.div,variants:t,initial:"hidden",animate:i?"visible":"hidden",children:[(0,o.jsx)(m,{variants:n,children:"About Me"}),(0,o.jsxs)(h,{children:[(0,o.jsx)(g,{variants:n,children:"Hi, I'm Viranchi More, a Master's student in Information Systems at SUNY Binghamton with 3+ years of experience as a Data Analyst and System Engineer."}),(0,o.jsx)(g,{variants:n,children:"At Tata Consultancy Services, I specialized in SQL optimization, PL/SQL development, and Oracle RDBMS management, enhancing data efficiency and reliability for clients like the State Bank of India."}),(0,o.jsx)(g,{variants:n,children:"I'm proficient in Python, Tableau, Power BI, and statistical analysis, with expertise in machine learning and sentiment analysis, showcased in my research on #MeToo narratives on Twitter."}),(0,o.jsx)(g,{variants:n,children:"I combine technical skills and innovative thinking to optimize workflows, create impactful visualizations, and deliver measurable results."}),(0,o.jsx)(g,{variants:n,children:"Let's transform data into innovation together!"})]})]}),(0,o.jsx)(p,{as:r.P.div,variants:t,initial:"hidden",animate:i?"visible":"hidden",children:[{title:"Data Analysis & Visualization",items:["Power BI","Tableau","Excel","Statistical Analysis"]},{title:"Programming & Development",items:["Python","SQL Optimization","PL/SQL Development","Machine Learning"]},{title:"Database & Systems",items:["Oracle RDBMS","Core Banking Solutions","Data Management","Performance Optimization"]},{title:"Research & Innovation",items:["Sentiment Analysis","Multi-AI Agents","LLM Integration","Data Automation"]}].map(((e,i)=>(0,o.jsxs)(u,{variants:n,whileHover:{scale:1.02},whileTap:{scale:.98},children:[(0,o.jsx)(f,{children:e.title}),(0,o.jsx)(v,{children:e.items.map(((e,i)=>(0,o.jsx)(y,{children:e},i)))})]},i)))})]})})})}},372:(e,i,t)=>{t.d(i,{Wx:()=>h});var n=t(950),r=Object.defineProperty,a=(e,i,t)=>((e,i,t)=>i in e?r(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t)(e,"symbol"!==typeof i?i+"":i,t),o=new Map,s=new WeakMap,l=0,d=void 0;function c(e){return Object.keys(e).sort().filter((i=>void 0!==e[i])).map((i=>{return`${i}_${"root"===i?(t=e.root,t?(s.has(t)||(l+=1,s.set(t,l.toString())),s.get(t)):"0"):e[i]}`;var t})).toString()}function m(e,i){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:d;if("undefined"===typeof window.IntersectionObserver&&void 0!==n){const r=e.getBoundingClientRect();return i(n,{isIntersecting:n,target:e,intersectionRatio:"number"===typeof t.threshold?t.threshold:0,time:0,boundingClientRect:r,intersectionRect:r,rootBounds:r}),()=>{}}const{id:r,observer:a,elements:s}=function(e){const i=c(e);let t=o.get(i);if(!t){const n=new Map;let r;const a=new IntersectionObserver((i=>{i.forEach((i=>{var t;const a=i.isIntersecting&&r.some((e=>i.intersectionRatio>=e));e.trackVisibility&&"undefined"===typeof i.isVisible&&(i.isVisible=a),null==(t=n.get(i.target))||t.forEach((e=>{e(a,i)}))}))}),e);r=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),t={id:i,observer:a,elements:n},o.set(i,t)}return t}(t),l=s.get(e)||[];return s.has(e)||s.set(e,l),l.push(i),a.observe(e),function(){l.splice(l.indexOf(i),1),0===l.length&&(s.delete(e),a.unobserve(e)),0===s.size&&(a.disconnect(),o.delete(r))}}n.Component;function h(){let{threshold:e,delay:i,trackVisibility:t,rootMargin:r,root:a,triggerOnce:o,skip:s,initialInView:l,fallbackInView:d,onChange:c}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var h;const[g,p]=n.useState(null),u=n.useRef(c),[f,v]=n.useState({inView:!!l,entry:void 0});u.current=c,n.useEffect((()=>{if(s||!g)return;let n;return n=m(g,((e,i)=>{v({inView:e,entry:i}),u.current&&u.current(e,i),i.isIntersecting&&o&&n&&(n(),n=void 0)}),{root:a,rootMargin:r,threshold:e,trackVisibility:t,delay:i},d),()=>{n&&n()}}),[Array.isArray(e)?e.toString():e,g,a,r,o,s,t,d,i]);const y=null==(h=f.entry)?void 0:h.target,x=n.useRef(void 0);g||!y||o||s||x.current===y||(x.current=y,v({inView:!!l,entry:void 0}));const b=[p,f.inView,f.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}}}]);