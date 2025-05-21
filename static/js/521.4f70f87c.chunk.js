"use strict";(self.webpackChunkviranchi_more_portfolio=self.webpackChunkviranchi_more_portfolio||[]).push([[521],{521:(e,t,i)=>{i.r(t),i.d(t,{default:()=>w});i(950);var r=i(937),n=i(539),a=i(372),o=i(875),s=i(414);const l=r.Ay.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, var(--background) 60%, var(--primary-light) 100%);
`,d=r.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`,c=(0,r.Ay)(n.P.h2)`
  font-size: clamp(2rem, 4vw, 2.5rem);
  color: var(--text);
  margin-bottom: 3rem;
  text-align: center;
  font-weight: 600;
`,p=r.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,g=(0,r.Ay)(n.P.div)`
  background: var(--light);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
  }
`,h=r.Ay.div`
  width: 100%;
  height: 200px;
  position: relative;
  overflow: hidden;
  background: var(--primary);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`,m=r.Ay.div`
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`,u=r.Ay.h3`
  font-size: 1.5rem;
  color: var(--text);
  margin-bottom: 1rem;
  font-weight: 600;
`,f=r.Ay.p`
  font-size: 1rem;
  color: var(--text);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-weight: 500;
`,y=r.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`,v=r.Ay.span`
  font-size: 0.875rem;
  color: var(--primary);
  background: var(--background);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-weight: 500;
`,b=r.Ay.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
`,x=r.Ay.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary);
  font-size: 0.875rem;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: var(--secondary);
  }
`,w=()=>{const[e,t]=(0,a.Wx)({triggerOnce:!0,threshold:.1}),r=[{title:"Job Posting Analyzer \u2013 Fake Job Detection System",description:"Developed a machine learning pipeline to detect fraudulent job postings using NLP and classification models. Applied TF-IDF vectorization, feature engineering, and SMOTE to handle class imbalance (~95% real vs. 5% fake). XGBoost outperformed other models, achieving ~88% F1-score for fake class and >95% AUC. Deployed as an interactive Streamlit app with real-time predictions, confidence scores, and keyword impact analysis.",image:i(77),tags:["Python","NLP","Scikit-learn","XGBoost","SMOTE","Streamlit"],github:"https://github.com/viru9192/Job_Posting_Analyzer.git",demo:"https://job-posting-analyzer.streamlit.app"},{title:"MeToo Twitter Analysis",description:"Research paper examining #MeToo Twitter conversations using sentiment and topic modeling on over 390,000 tweets. The study highlights key themes such as personal narratives, public opinions, and the movement's digital evolution.",image:i(894),tags:["Python","NLP","Sentiment Analysis","Topic Modeling"],github:"https://github.com/viru9192/MeToo-Twitter-Analysis.git",demo:"#"},{title:"Olympic Medal Trends Analysis",description:"Data analysis project extracting valuable patterns and trends from Olympic data to shed light on medal trends, individual performance, and national accomplishments through in-depth Exploratory Data Analysis (EDA).",image:i(228),tags:["Python","Data Analysis","EDA","Visualization"],github:"https://github.com/viranchi-more/olympic-analysis",demo:"#"},{title:"Survey Application",description:"Web-based platform for creating, managing, and participating in surveys. Built with Django backend, PostgreSQL database, and a dynamic frontend using HTML, CSS, and JavaScript.",image:i(95),tags:["Django","PostgreSQL","JavaScript","Web Development"],github:"https://github.com/pbillava10/TDS537-SurveyApplication.git",demo:"#"},{title:"House Price Prediction System",description:"Machine learning model to predict housing prices with 80% accuracy using Random Forest. Includes comprehensive EDA, preprocessing techniques, and model evaluation.",image:i(545),tags:["Python","Machine Learning","Random Forest","Data Science"],github:"https://github.com/viranchi-more/house-price-prediction",demo:"#"}],w={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}};return(0,s.jsx)(l,{id:"projects",children:(0,s.jsxs)(d,{children:[(0,s.jsx)(c,{as:n.P.h2,initial:{opacity:0,y:20},animate:t?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.5},children:"Projects"}),(0,s.jsx)(p,{ref:e,children:r.map(((e,i)=>(0,s.jsxs)(g,{as:n.P.div,variants:w,initial:"hidden",animate:t?"visible":"hidden",custom:i,whileHover:{scale:1.02},whileTap:{scale:.98},children:[(0,s.jsx)(h,{children:(0,s.jsx)("img",{src:e.image,alt:`${e.title} screenshot`,loading:"lazy"})}),(0,s.jsxs)(m,{children:[(0,s.jsx)(u,{children:e.title}),(0,s.jsx)(f,{children:e.description}),(0,s.jsx)(y,{children:e.tags.map(((e,t)=>(0,s.jsx)(v,{children:e},t)))}),(0,s.jsxs)(b,{children:[(0,s.jsxs)(x,{href:e.github,target:"_blank",rel:"noopener noreferrer",children:[(0,s.jsx)(o.hL4,{})," Code"]}),(0,s.jsxs)(x,{href:e.demo,target:"_blank",rel:"noopener noreferrer",children:[(0,s.jsx)(o.EQc,{})," Demo"]})]})]})]},i)))})]})})}},545:(e,t,i)=>{e.exports=i.p+"static/media/hp3.99ed47859b7e30a816c9.jpg"},77:(e,t,i)=>{e.exports=i.p+"static/media/jd1.554afdde539586a4a4af.jpg"},228:(e,t,i)=>{e.exports=i.p+"static/media/ol1.06cf1349fa905f0f8a99.jpg"},95:(e,t,i)=>{e.exports=i.p+"static/media/sa1.d1db27f5988fb47029ae.jpg"},894:(e,t,i)=>{e.exports=i.p+"static/media/tw1.a3a2b45902c37c2242fb.jpg"},372:(e,t,i)=>{i.d(t,{Wx:()=>g});var r=i(950),n=Object.defineProperty,a=(e,t,i)=>((e,t,i)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i)(e,"symbol"!==typeof t?t+"":t,i),o=new Map,s=new WeakMap,l=0,d=void 0;function c(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>{return`${t}_${"root"===t?(i=e.root,i?(s.has(i)||(l+=1,s.set(i,l.toString())),s.get(i)):"0"):e[t]}`;var i})).toString()}function p(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:d;if("undefined"===typeof window.IntersectionObserver&&void 0!==r){const n=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"===typeof i.threshold?i.threshold:0,time:0,boundingClientRect:n,intersectionRect:n,rootBounds:n}),()=>{}}const{id:n,observer:a,elements:s}=function(e){const t=c(e);let i=o.get(t);if(!i){const r=new Map;let n;const a=new IntersectionObserver((t=>{t.forEach((t=>{var i;const a=t.isIntersecting&&n.some((e=>t.intersectionRatio>=e));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=a),null==(i=r.get(t.target))||i.forEach((e=>{e(a,t)}))}))}),e);n=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),i={id:t,observer:a,elements:r},o.set(t,i)}return i}(i),l=s.get(e)||[];return s.has(e)||s.set(e,l),l.push(t),a.observe(e),function(){l.splice(l.indexOf(t),1),0===l.length&&(s.delete(e),a.unobserve(e)),0===s.size&&(a.disconnect(),o.delete(n))}}r.Component;function g(){let{threshold:e,delay:t,trackVisibility:i,rootMargin:n,root:a,triggerOnce:o,skip:s,initialInView:l,fallbackInView:d,onChange:c}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var g;const[h,m]=r.useState(null),u=r.useRef(c),[f,y]=r.useState({inView:!!l,entry:void 0});u.current=c,r.useEffect((()=>{if(s||!h)return;let r;return r=p(h,((e,t)=>{y({inView:e,entry:t}),u.current&&u.current(e,t),t.isIntersecting&&o&&r&&(r(),r=void 0)}),{root:a,rootMargin:n,threshold:e,trackVisibility:i,delay:t},d),()=>{r&&r()}}),[Array.isArray(e)?e.toString():e,h,a,n,o,s,i,d,t]);const v=null==(g=f.entry)?void 0:g.target,b=r.useRef(void 0);h||!v||o||s||b.current===v||(b.current=v,y({inView:!!l,entry:void 0}));const x=[m,f.inView,f.entry];return x.ref=x[0],x.inView=x[1],x.entry=x[2],x}}}]);