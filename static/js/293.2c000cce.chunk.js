"use strict";(self.webpackChunkviranchi_more_portfolio=self.webpackChunkviranchi_more_portfolio||[]).push([[293],{293:(e,r,i)=>{i.r(r),i.d(r,{default:()=>k});var t=i(950),n=i(937),a=i(539),o=i(372),s=i(875),l=i(414);const d=n.Ay.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, var(--background) 60%, var(--primary-light) 100%);
`,c=n.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`,h=(0,n.Ay)(a.P.h2)`
  font-size: clamp(2rem, 4vw, 2.5rem);
  color: var(--text);
  margin-bottom: 3rem;
  text-align: center;
`,m=n.Ay.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media (min-width: ${e=>e.theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  }
`,u=(0,n.Ay)(a.P.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,g=n.Ay.p`
  font-size: 1.1rem;
  color: var(--muted);
  line-height: 1.8;
`,p=n.Ay.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
`,v=(0,n.Ay)(a.P.a)`
  color: var(--primary);
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--secondary);
  }
`,y=(0,n.Ay)(a.P.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,f=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,x=n.Ay.label`
  font-size: 0.9rem;
  color: var(--text);
  font-weight: 500;
`,b=n.Ay.input`
  padding: 0.75rem;
  border: 2px solid var(--light);
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`,w=n.Ay.textarea`
  padding: 0.75rem;
  border: 2px solid var(--light);
  border-radius: 8px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`,j=(0,n.Ay)(a.P.button)`
  background: var(--primary);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--secondary);
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,k=()=>{const[e,r]=(0,o.Wx)({triggerOnce:!0,threshold:.1}),[i,n]=(0,t.useState)({name:"",email:"",message:""}),[k,A]=(0,t.useState)(!1),P=e=>{const{name:r,value:i}=e.target;n((e=>({...e,[r]:i})))},V={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},C={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}};return(0,l.jsx)(d,{id:"contact",children:(0,l.jsxs)(c,{children:[(0,l.jsx)(h,{as:a.P.h2,initial:{opacity:0,y:20},animate:r?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.5},children:"Get in Touch"}),(0,l.jsxs)(m,{ref:e,children:[(0,l.jsxs)(u,{as:a.P.div,variants:V,initial:"hidden",animate:r?"visible":"hidden",children:[(0,l.jsxs)(a.P.div,{variants:C,children:[(0,l.jsx)(g,{children:"I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."}),(0,l.jsx)(g,{children:"Feel free to reach out through the contact form or connect with me on social media."})]}),(0,l.jsx)(a.P.div,{variants:C,children:(0,l.jsxs)(p,{children:[(0,l.jsx)(v,{href:"mailto:viranchimore2112@gmail.com",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1},whileTap:{scale:.9},children:(0,l.jsx)(s.maD,{})}),(0,l.jsx)(v,{href:"https://github.com/viru9192",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1},whileTap:{scale:.9},children:(0,l.jsx)(s.hL4,{})}),(0,l.jsx)(v,{href:"https://linkedin.com/in/viranchimore",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1},whileTap:{scale:.9},children:(0,l.jsx)(s.QEs,{})})]})})]}),(0,l.jsxs)(y,{as:a.P.form,variants:V,initial:"hidden",animate:r?"visible":"hidden",onSubmit:async e=>{e.preventDefault(),A(!0);try{await new Promise((e=>setTimeout(e,1e3))),alert("Message sent successfully!"),n({name:"",email:"",message:""})}catch(r){alert("Failed to send message. Please try again.")}finally{A(!1)}},children:[(0,l.jsx)(a.P.div,{variants:C,children:(0,l.jsxs)(f,{children:[(0,l.jsx)(x,{htmlFor:"name",children:"Name"}),(0,l.jsx)(b,{type:"text",id:"name",name:"name",value:i.name,onChange:P,required:!0})]})}),(0,l.jsx)(a.P.div,{variants:C,children:(0,l.jsxs)(f,{children:[(0,l.jsx)(x,{htmlFor:"email",children:"Email"}),(0,l.jsx)(b,{type:"email",id:"email",name:"email",value:i.email,onChange:P,required:!0})]})}),(0,l.jsx)(a.P.div,{variants:C,children:(0,l.jsxs)(f,{children:[(0,l.jsx)(x,{htmlFor:"message",children:"Message"}),(0,l.jsx)(w,{id:"message",name:"message",value:i.message,onChange:P,required:!0})]})}),(0,l.jsx)(a.P.div,{variants:C,children:(0,l.jsx)(j,{type:"submit",disabled:k,whileHover:{scale:1.02},whileTap:{scale:.98},children:k?"Sending...":"Send Message"})})]})]})]})})}},372:(e,r,i)=>{i.d(r,{Wx:()=>m});var t=i(950),n=Object.defineProperty,a=(e,r,i)=>((e,r,i)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[r]=i)(e,"symbol"!==typeof r?r+"":r,i),o=new Map,s=new WeakMap,l=0,d=void 0;function c(e){return Object.keys(e).sort().filter((r=>void 0!==e[r])).map((r=>{return`${r}_${"root"===r?(i=e.root,i?(s.has(i)||(l+=1,s.set(i,l.toString())),s.get(i)):"0"):e[r]}`;var i})).toString()}function h(e,r){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:d;if("undefined"===typeof window.IntersectionObserver&&void 0!==t){const n=e.getBoundingClientRect();return r(t,{isIntersecting:t,target:e,intersectionRatio:"number"===typeof i.threshold?i.threshold:0,time:0,boundingClientRect:n,intersectionRect:n,rootBounds:n}),()=>{}}const{id:n,observer:a,elements:s}=function(e){const r=c(e);let i=o.get(r);if(!i){const t=new Map;let n;const a=new IntersectionObserver((r=>{r.forEach((r=>{var i;const a=r.isIntersecting&&n.some((e=>r.intersectionRatio>=e));e.trackVisibility&&"undefined"===typeof r.isVisible&&(r.isVisible=a),null==(i=t.get(r.target))||i.forEach((e=>{e(a,r)}))}))}),e);n=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),i={id:r,observer:a,elements:t},o.set(r,i)}return i}(i),l=s.get(e)||[];return s.has(e)||s.set(e,l),l.push(r),a.observe(e),function(){l.splice(l.indexOf(r),1),0===l.length&&(s.delete(e),a.unobserve(e)),0===s.size&&(a.disconnect(),o.delete(n))}}t.Component;function m(){let{threshold:e,delay:r,trackVisibility:i,rootMargin:n,root:a,triggerOnce:o,skip:s,initialInView:l,fallbackInView:d,onChange:c}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var m;const[u,g]=t.useState(null),p=t.useRef(c),[v,y]=t.useState({inView:!!l,entry:void 0});p.current=c,t.useEffect((()=>{if(s||!u)return;let t;return t=h(u,((e,r)=>{y({inView:e,entry:r}),p.current&&p.current(e,r),r.isIntersecting&&o&&t&&(t(),t=void 0)}),{root:a,rootMargin:n,threshold:e,trackVisibility:i,delay:r},d),()=>{t&&t()}}),[Array.isArray(e)?e.toString():e,u,a,n,o,s,i,d,r]);const f=null==(m=v.entry)?void 0:m.target,x=t.useRef(void 0);u||!f||o||s||x.current===f||(x.current=f,y({inView:!!l,entry:void 0}));const b=[g,v.inView,v.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}}}]);