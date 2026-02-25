(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,88143,(e,i,n)=>{"use strict";function t({widthInt:e,heightInt:i,blurWidth:n,blurHeight:t,blurDataURL:r,objectFit:a}){let s=n?40*n:e,o=t?40*t:i,l=s&&o?`viewBox='0 0 ${s} ${o}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${l}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${l?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${r}'/%3E%3C/svg%3E`}Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"getImageBlurSvg",{enumerable:!0,get:function(){return t}})},87690,(e,i,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t={VALID_LOADERS:function(){return a},imageConfigDefault:function(){return s}};for(var r in t)Object.defineProperty(n,r,{enumerable:!0,get:t[r]});let a=["default","imgix","cloudinary","akamai","custom"],s={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumRedirects:3,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1}},8927,(e,i,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"getImgProps",{enumerable:!0,get:function(){return d}}),e.r(33525);let t=e.r(43369),r=e.r(88143),a=e.r(87690),s=["-moz-initial","fill","none","scale-down",void 0];function o(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function d({src:e,sizes:i,unoptimized:n=!1,priority:d=!1,preload:c=!1,loading:u,className:h,quality:p,width:m,height:g,fill:f=!1,style:y,overrideSrc:A,onLoad:v,onLoadingComplete:w,placeholder:C="empty",blurDataURL:b,fetchPriority:x,decoding:S="async",layout:H,objectFit:P,objectPosition:k,lazyBoundary:j,lazyRoot:R,...B},T){var N;let E,M,L,{imgConf:_,showAltText:z,blurComplete:V,defaultLoader:O}=T,F=_||a.imageConfigDefault;if("allSizes"in F)E=F;else{let e=[...F.deviceSizes,...F.imageSizes].sort((e,i)=>e-i),i=F.deviceSizes.sort((e,i)=>e-i),n=F.qualities?.sort((e,i)=>e-i);E={...F,allSizes:e,deviceSizes:i,qualities:n}}if(void 0===O)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let X=B.loader||O;delete B.loader,delete B.srcSet;let W="__next_img_default"in X;if(W){if("custom"===E.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=X;X=i=>{let{config:n,...t}=i;return e(t)}}if(H){"fill"===H&&(f=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[H];e&&(y={...y,...e});let n={responsive:"100vw",fill:"100vw"}[H];n&&!i&&(i=n)}let I="",D=l(m),q=l(g);if((N=e)&&"object"==typeof N&&(o(N)||void 0!==N.src)){let i=o(e)?e.default:e;if(!i.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(i)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!i.height||!i.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(i)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(M=i.blurWidth,L=i.blurHeight,b=b||i.blurDataURL,I=i.src,!f)if(D||q){if(D&&!q){let e=D/i.width;q=Math.round(i.height*e)}else if(!D&&q){let e=q/i.height;D=Math.round(i.width*e)}}else D=i.width,q=i.height}let U=!d&&!c&&("lazy"===u||void 0===u);(!(e="string"==typeof e?e:I)||e.startsWith("data:")||e.startsWith("blob:"))&&(n=!0,U=!1),E.unoptimized&&(n=!0),W&&!E.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(n=!0);let $=l(p),G=Object.assign(f?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:P,objectPosition:k}:{},z?{}:{color:"transparent"},y),Y=V||"empty"===C?null:"blur"===C?`url("data:image/svg+xml;charset=utf-8,${(0,r.getImageBlurSvg)({widthInt:D,heightInt:q,blurWidth:M,blurHeight:L,blurDataURL:b||"",objectFit:G.objectFit})}")`:`url("${C}")`,K=s.includes(G.objectFit)?"fill"===G.objectFit?"100% 100%":"cover":G.objectFit,Q=Y?{backgroundSize:K,backgroundPosition:G.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:Y}:{},J=function({config:e,src:i,unoptimized:n,width:r,quality:a,sizes:s,loader:o}){if(n){let e=(0,t.getDeploymentId)();if(i.startsWith("/")&&!i.startsWith("//")&&e){let n=i.includes("?")?"&":"?";i=`${i}${n}dpl=${e}`}return{src:i,srcSet:void 0,sizes:void 0}}let{widths:l,kind:d}=function({deviceSizes:e,allSizes:i},n,t){if(t){let n=/(^|\s)(1?\d?\d)vw/g,r=[];for(let e;e=n.exec(t);)r.push(parseInt(e[2]));if(r.length){let n=.01*Math.min(...r);return{widths:i.filter(i=>i>=e[0]*n),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof n?{widths:e,kind:"w"}:{widths:[...new Set([n,2*n].map(e=>i.find(i=>i>=e)||i[i.length-1]))],kind:"x"}}(e,r,s),c=l.length-1;return{sizes:s||"w"!==d?s:"100vw",srcSet:l.map((n,t)=>`${o({config:e,src:i,quality:a,width:n})} ${"w"===d?n:t+1}${d}`).join(", "),src:o({config:e,src:i,quality:a,width:l[c]})}}({config:E,src:e,unoptimized:n,width:D,quality:$,sizes:i,loader:X}),Z=U?"lazy":u;return{props:{...B,loading:Z,fetchPriority:x,width:D,height:q,decoding:S,className:h,style:{...G,...Q},sizes:J.sizes,srcSet:J.srcSet,src:A||J.src},meta:{unoptimized:n,preload:c||d,placeholder:C,fill:f}}}},98879,(e,i,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});let t=e.r(71645),r="undefined"==typeof window,a=r?()=>{}:t.useLayoutEffect,s=r?()=>{}:t.useEffect;function o(e){let{headManager:i,reduceComponentsToState:n}=e;function o(){if(i&&i.mountedInstances){let e=t.Children.toArray(Array.from(i.mountedInstances).filter(Boolean));i.updateHead(n(e))}}return r&&(i?.mountedInstances?.add(e.children),o()),a(()=>(i?.mountedInstances?.add(e.children),()=>{i?.mountedInstances?.delete(e.children)})),a(()=>(i&&(i._pendingUpdate=o),()=>{i&&(i._pendingUpdate=o)})),s(()=>(i&&i._pendingUpdate&&(i._pendingUpdate(),i._pendingUpdate=null),()=>{i&&i._pendingUpdate&&(i._pendingUpdate(),i._pendingUpdate=null)})),null}},25633,(e,i,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t={default:function(){return g},defaultHead:function(){return u}};for(var r in t)Object.defineProperty(n,r,{enumerable:!0,get:t[r]});let a=e.r(55682),s=e.r(90809),o=e.r(43476),l=s._(e.r(71645)),d=a._(e.r(98879)),c=e.r(42732);function u(){return[(0,o.jsx)("meta",{charSet:"utf-8"},"charset"),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function h(e,i){return"string"==typeof i||"number"==typeof i?e:i.type===l.default.Fragment?e.concat(l.default.Children.toArray(i.props.children).reduce((e,i)=>"string"==typeof i||"number"==typeof i?e:e.concat(i),[])):e.concat(i)}e.r(33525);let p=["name","httpEquiv","charSet","itemProp"];function m(e){let i,n,t,r;return e.reduce(h,[]).reverse().concat(u().reverse()).filter((i=new Set,n=new Set,t=new Set,r={},e=>{let a=!0,s=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){s=!0;let n=e.key.slice(e.key.indexOf("$")+1);i.has(n)?a=!1:i.add(n)}switch(e.type){case"title":case"base":n.has(e.type)?a=!1:n.add(e.type);break;case"meta":for(let i=0,n=p.length;i<n;i++){let n=p[i];if(e.props.hasOwnProperty(n))if("charSet"===n)t.has(n)?a=!1:t.add(n);else{let i=e.props[n],t=r[n]||new Set;("name"!==n||!s)&&t.has(i)?a=!1:(t.add(i),r[n]=t)}}}return a})).reverse().map((e,i)=>{let n=e.key||i;return l.default.cloneElement(e,{key:n})})}let g=function({children:e}){let i=(0,l.useContext)(c.HeadManagerContext);return(0,o.jsx)(d.default,{reduceComponentsToState:m,headManager:i,children:e})};("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),i.exports=n.default)},18556,(e,i,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"ImageConfigContext",{enumerable:!0,get:function(){return a}});let t=e.r(55682)._(e.r(71645)),r=e.r(87690),a=t.default.createContext(r.imageConfigDefault)},65856,(e,i,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"RouterContext",{enumerable:!0,get:function(){return t}});let t=e.r(55682)._(e.r(71645)).default.createContext(null)},70965,(e,i,n)=>{"use strict";function t(e,i){let n=e||75;return i?.qualities?.length?i.qualities.reduce((e,i)=>Math.abs(i-n)<Math.abs(e-n)?i:e,0):n}Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"findClosestQuality",{enumerable:!0,get:function(){return t}})},1948,(e,i,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return s}});let t=e.r(70965),r=e.r(43369);function a({config:e,src:i,width:n,quality:a}){if(i.startsWith("/")&&i.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${i}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let s=(0,t.findClosestQuality)(a,e),o=(0,r.getDeploymentId)();return`${e.path}?url=${encodeURIComponent(i)}&w=${n}&q=${s}${i.startsWith("/")&&o?`&dpl=${o}`:""}`}a.__next_img_default=!0;let s=a},5500,(e,i,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"Image",{enumerable:!0,get:function(){return w}});let t=e.r(55682),r=e.r(90809),a=e.r(43476),s=r._(e.r(71645)),o=t._(e.r(74080)),l=t._(e.r(25633)),d=e.r(8927),c=e.r(87690),u=e.r(18556);e.r(33525);let h=e.r(65856),p=t._(e.r(1948)),m=e.r(18581),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function f(e,i,n,t,r,a,s){let o=e?.src;e&&e["data-loaded-src"]!==o&&(e["data-loaded-src"]=o,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==i&&r(!0),n?.current){let i=new Event("load");Object.defineProperty(i,"target",{writable:!1,value:e});let t=!1,r=!1;n.current({...i,nativeEvent:i,currentTarget:e,target:e,isDefaultPrevented:()=>t,isPropagationStopped:()=>r,persist:()=>{},preventDefault:()=>{t=!0,i.preventDefault()},stopPropagation:()=>{r=!0,i.stopPropagation()}})}t?.current&&t.current(e)}}))}function y(e){return s.use?{fetchPriority:e}:{fetchpriority:e}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let A=(0,s.forwardRef)(({src:e,srcSet:i,sizes:n,height:t,width:r,decoding:o,className:l,style:d,fetchPriority:c,placeholder:u,loading:h,unoptimized:p,fill:g,onLoadRef:A,onLoadingCompleteRef:v,setBlurComplete:w,setShowAltText:C,sizesInput:b,onLoad:x,onError:S,...H},P)=>{let k=(0,s.useCallback)(e=>{e&&(S&&(e.src=e.src),e.complete&&f(e,u,A,v,w,p,b))},[e,u,A,v,w,S,p,b]),j=(0,m.useMergedRef)(P,k);return(0,a.jsx)("img",{...H,...y(c),loading:h,width:r,height:t,decoding:o,"data-nimg":g?"fill":"1",className:l,style:d,sizes:n,srcSet:i,src:e,ref:j,onLoad:e=>{f(e.currentTarget,u,A,v,w,p,b)},onError:e=>{C(!0),"empty"!==u&&w(!0),S&&S(e)}})});function v({isAppRouter:e,imgAttributes:i}){let n={as:"image",imageSrcSet:i.srcSet,imageSizes:i.sizes,crossOrigin:i.crossOrigin,referrerPolicy:i.referrerPolicy,...y(i.fetchPriority)};return e&&o.default.preload?(o.default.preload(i.src,n),null):(0,a.jsx)(l.default,{children:(0,a.jsx)("link",{rel:"preload",href:i.srcSet?void 0:i.src,...n},"__nimg-"+i.src+i.srcSet+i.sizes)})}let w=(0,s.forwardRef)((e,i)=>{let n=(0,s.useContext)(h.RouterContext),t=(0,s.useContext)(u.ImageConfigContext),r=(0,s.useMemo)(()=>{let e=g||t||c.imageConfigDefault,i=[...e.deviceSizes,...e.imageSizes].sort((e,i)=>e-i),n=e.deviceSizes.sort((e,i)=>e-i),r=e.qualities?.sort((e,i)=>e-i);return{...e,allSizes:i,deviceSizes:n,qualities:r,localPatterns:"undefined"==typeof window?t?.localPatterns:e.localPatterns}},[t]),{onLoad:o,onLoadingComplete:l}=e,m=(0,s.useRef)(o);(0,s.useEffect)(()=>{m.current=o},[o]);let f=(0,s.useRef)(l);(0,s.useEffect)(()=>{f.current=l},[l]);let[y,w]=(0,s.useState)(!1),[C,b]=(0,s.useState)(!1),{props:x,meta:S}=(0,d.getImgProps)(e,{defaultLoader:p.default,imgConf:r,blurComplete:y,showAltText:C});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(A,{...x,unoptimized:S.unoptimized,placeholder:S.placeholder,fill:S.fill,onLoadRef:m,onLoadingCompleteRef:f,setBlurComplete:w,setShowAltText:b,sizesInput:e.sizes,ref:i}),S.preload?(0,a.jsx)(v,{isAppRouter:!n,imgAttributes:x}):null]})});("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),i.exports=n.default)},94909,(e,i,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t={default:function(){return c},getImageProps:function(){return d}};for(var r in t)Object.defineProperty(n,r,{enumerable:!0,get:t[r]});let a=e.r(55682),s=e.r(8927),o=e.r(5500),l=a._(e.r(1948));function d(e){let{props:i}=(0,s.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,n]of Object.entries(i))void 0===n&&delete i[e];return{props:i}}let c=o.Image},57688,(e,i,n)=>{i.exports=e.r(94909)},70119,e=>{"use strict";var i=e.i(43476),n=e.i(22016),t=e.i(57688),r=e.i(71645),a=e.i(75254);let s=(0,a.default)("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]),o=(0,a.default)("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),l=(0,a.default)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var d=e.i(64659);let c="TACLB12058E",u=[{slug:"ac-repair",name:"AC Repair",title:"AC Repair Services",shortDescription:"Fast, reliable residential AC repair",description:"Fast, reliable residential AC repair services. We fix all makes and models with honest, flat-rate pricing.",content:`
      <h2>Fast, Reliable Residential AC Repair</h2>
      <p>When your air conditioner stops working, you need a trusted professional who can diagnose and fix the problem quickly. Mabry's Air Conditioning & Heating has been providing reliable AC repair services since 1986.</p>
      
      <h3>Common AC Problems We Fix</h3>
      <ul>
        <li>AC not cooling or blowing warm air</li>
        <li>Unit won't turn on or keeps shutting off</li>
        <li>Strange noises or unusual odors</li>
        <li>Frozen evaporator coils</li>
        <li>Refrigerant leaks</li>
        <li>Thermostat issues</li>
        <li>Electrical and wiring problems</li>
        <li>Drainage and condensation issues</li>
      </ul>

      <h3>Benefits of Professional AC Repair</h3>
      <ul>
        <li>Proper diagnosis saves money on unnecessary repairs</li>
        <li>Licensed technicians ensure safe, code-compliant work</li>
        <li>Quality repairs extend the life of your system</li>
        <li>Improved efficiency lowers your energy bills</li>
      </ul>

      <h3>Why Choose Mabry's for AC Repair?</h3>
      <ul>
        <li>Flat-rate pricing - no hidden or surprise charges</li>
        <li>Texas licensed HVAC contractor (TACLB12058E)</li>
        <li>BBB A+ Accredited Business</li>
        <li>Serving Alvin, Friendswood, Pearland, Clear Lake & surrounding cities</li>
        <li>Residential specialists - we know homes</li>
      </ul>
    `,keywords:["air conditioning repair","AC repair","AC not cooling","AC service"],faqs:[{question:"How much does AC repair cost?",answer:"AC repair costs vary depending on the issue, but we provide honest, flat-rate pricing with no hidden charges. We'll diagnose the problem and give you an upfront price before any work begins."},{question:"Why is my AC blowing warm air?",answer:"Common causes include low refrigerant, a dirty air filter, frozen evaporator coils, or a faulty compressor. Our technicians can diagnose the exact issue and provide a reliable fix."},{question:"How long does AC repair take?",answer:"Most AC repairs can be completed in one visit, typically within 1-3 hours. More complex issues may require ordering parts, but we'll keep you informed throughout the process."},{question:"Do you repair all AC brands?",answer:"Yes, our licensed technicians repair all major AC brands and models. We've been servicing residential air conditioners since 1986."},{question:"Should I repair or replace my AC unit?",answer:"Generally, if your unit is over 10-15 years old and repairs are becoming frequent, replacement may be more cost-effective. We'll give you an honest assessment to help you decide."}]},{slug:"heating-repair",name:"Heating Repair & Maintenance",title:"Heating Repair & Maintenance Services",shortDescription:"Furnace and heating system repair and maintenance",description:"Professional furnace and heating system repair and seasonal maintenance. Keep your home warm and safe all winter.",content:`
      <h2>Professional Heating Repair & Maintenance</h2>
      <p>Don't let a broken heater leave your family in the cold. Mabry's provides fast, reliable heating repair for all types of residential heating systems.</p>

      <h3>Our Heating Services Include</h3>
      <ul>
        <li>Furnace repair and diagnostics</li>
        <li>Heat pump service and repair</li>
        <li>Seasonal maintenance tune-ups</li>
        <li>Thermostat calibration and replacement</li>
        <li>Ductwork inspection and repair</li>
        <li>Safety inspections</li>
      </ul>

      <h3>Why Seasonal Maintenance Matters</h3>
      <p>Regular heating maintenance is essential for:</p>
      <ul>
        <li><strong>Safety</strong> - Prevent carbon monoxide leaks and fire hazards</li>
        <li><strong>Efficiency</strong> - A tuned system uses less energy</li>
        <li><strong>Reliability</strong> - Catch problems before they become emergencies</li>
        <li><strong>Longevity</strong> - Extend the life of your equipment</li>
      </ul>

      <h3>Residential Focus Only</h3>
      <p>Unlike companies that split their attention between commercial and residential work, we focus exclusively on homes. This means our technicians are experts in residential heating systems and understand the unique needs of homeowners.</p>
    `,keywords:["heating repair","furnace repair","heater not working","heating maintenance"],faqs:[{question:"Why is my heater not producing heat?",answer:"Common causes include a tripped breaker, thermostat issues, a dirty filter restricting airflow, or a faulty pilot light or igniter. Our technicians can diagnose and fix the problem quickly."},{question:"How often should I have my heating system serviced?",answer:"We recommend annual maintenance before the heating season begins. Regular tune-ups prevent breakdowns, improve efficiency, and extend your system's lifespan."},{question:"Is a furnace tune-up worth it?",answer:"Absolutely. A tune-up catches small problems before they become expensive repairs, ensures safe operation (especially important for gas furnaces), and keeps your system running efficiently."},{question:"How long do furnaces typically last?",answer:"With proper maintenance, most furnaces last 15-20 years. If your furnace is approaching this age and needing frequent repairs, it may be time to consider replacement."},{question:"Do you service heat pumps?",answer:"Yes, we service and repair all types of residential heating systems including heat pumps, gas furnaces, and electric heaters."}]},{slug:"ac-installation",name:"AC Installation",title:"AC Installation & Replacement",shortDescription:"New system installation and energy-efficient upgrades",description:"Professional AC installation and replacement. We help you choose the right energy-efficient system for your home.",content:`
      <h2>Professional AC Installation & Replacement</h2>
      <p>When it's time for a new air conditioning system, trust the experienced team at Mabry's. We've been installing quality AC systems in homes since 1986.</p>

      <h3>Our Installation Process</h3>
      <ul>
        <li><strong>Free Consultation</strong> - We assess your home's cooling needs</li>
        <li><strong>Proper Sizing</strong> - Load calculations ensure the right-sized system</li>
        <li><strong>Quality Equipment</strong> - We install trusted, energy-efficient brands</li>
        <li><strong>Professional Installation</strong> - Licensed technicians do it right</li>
        <li><strong>System Testing</strong> - We verify everything works perfectly</li>
        <li><strong>Customer Education</strong> - Learn how to get the most from your new system</li>
      </ul>

      <h3>Energy-Efficient Upgrades</h3>
      <p>Today's AC systems are more efficient than ever. Upgrading from an older unit can significantly reduce your energy bills while keeping your home more comfortable. We'll help you understand your options and find the best system for your budget.</p>

      <h3>Signs You Need a New AC System</h3>
      <ul>
        <li>Your system is more than 10-15 years old</li>
        <li>Frequent repairs are adding up</li>
        <li>Energy bills keep rising</li>
        <li>Some rooms are hard to keep cool</li>
        <li>The system uses R-22 refrigerant (being phased out)</li>
      </ul>

      <h3>Flat-Rate Pricing</h3>
      <p>We provide clear, upfront pricing for all installations - no hidden fees or surprise charges. You'll know exactly what to expect before we begin.</p>
    `,keywords:["AC installation","new air conditioner","AC replacement","HVAC installation"],faqs:[{question:"How much does a new AC system cost?",answer:"AC installation costs depend on your home's size, the system's efficiency rating, and installation complexity. We provide free consultations and upfront, flat-rate pricing with no hidden fees."},{question:"How long does AC installation take?",answer:"A typical residential AC installation takes one day. More complex installations involving ductwork modifications may take longer, but we'll let you know upfront."},{question:"What size AC do I need for my home?",answer:"Proper sizing requires a load calculation based on your home's square footage, insulation, windows, and other factors. An oversized or undersized unit won't cool efficiently - we ensure you get the right fit."},{question:"What brands do you install?",answer:"We install quality, energy-efficient systems from trusted manufacturers. During your consultation, we'll recommend options that fit your budget and cooling needs."},{question:"Should I replace my AC before it completely fails?",answer:"If your system is 10-15+ years old, uses R-22 refrigerant (being phased out), or needs frequent repairs, proactive replacement can save money on energy bills and prevent an emergency breakdown."}]}],h=[{slug:"alvin",name:"Alvin",state:"TX",zipCodes:["77511","77512"],phone:"281-331-5248",isPrimary:!0,headline:"Air Conditioning & Heating Services in Alvin, TX",description:"Located in downtown Alvin since 1986. Your trusted local HVAC experts providing honest, flat-rate pricing and BBB A+ rated service.",content:`
      <h2>Your Hometown HVAC Company in Alvin, TX</h2>
      <p>Located at 2110 S Gordon St in downtown Alvin, Mabry's Air Conditioning & Heating has been your trusted local HVAC company since 1986. We're proud to call Alvin home and treat every customer like family.</p>

      <h3>Our Services in Alvin</h3>
      <ul>
        <li>AC repair for all makes and models</li>
        <li>Furnace and heating repair</li>
        <li>New air conditioning installation</li>
        <li>Preventive maintenance programs</li>
      </ul>

      <h3>Why Alvin Homeowners Trust Mabry's</h3>
      <ul>
        <li>Locally owned with our shop right here in downtown Alvin</li>
        <li>Family-owned and operated since 1986</li>
        <li>Upfront, flat-rate pricing - no hidden fees</li>
        <li>BBB A+ Rating earned through quality service</li>
        <li>Licensed Texas HVAC Contractor (TACLB12058E)</li>
        <li>Residential specialists - we focus on homes</li>
      </ul>

      <p>From downtown Alvin to the surrounding areas, we provide prompt, professional HVAC service throughout the 77511 and 77512 zip codes. When your home's comfort is on the line, trust the company that Alvin families have relied on for decades.</p>
    `,keywords:["HVAC Alvin TX","AC repair Alvin TX","heating repair Alvin TX","air conditioning Alvin"]},{slug:"friendswood",name:"Friendswood",state:"TX",zipCodes:["77546","77549"],phone:"281-482-8400",isPrimary:!1,headline:"Air Conditioning & Heating Services in Friendswood, TX",description:"Trusted local HVAC service for Friendswood families since 1986. BBB A+ rated with fast response times.",content:`
      <h2>Your Trusted HVAC Company in Friendswood, TX</h2>
      <p>Mabry's Air Conditioning & Heating has been serving Friendswood homeowners since 1986. Friendswood is where our story began, and we take immense pride in serving the families throughout the 77546 and 77549 zip codes. We treat every customer like family.</p>

      <h3>Residential HVAC Services in Friendswood</h3>
      <ul>
        <li>AC repair and emergency service</li>
        <li>Heating repair and maintenance</li>
        <li>New AC installation and replacement</li>
        <li>Seasonal tune-ups and inspections</li>
      </ul>

      <h3>Why Friendswood Homeowners Trust Mabry's</h3>
      <ul>
        <li>Local business serving this community for nearly 40 years</li>
        <li>Flat-rate pricing with no hidden charges</li>
        <li>BBB A+ Accredited Business</li>
        <li>Licensed Texas HVAC Contractor (TACLB12058E)</li>
        <li>Residential specialists who understand homes</li>
      </ul>

      <p>Whether you're in the historic downtown area, near Friendswood High School, or anywhere else in the 77546 zip code, we're just a phone call away.</p>
    `,keywords:["HVAC Friendswood TX","air conditioning Friendswood","AC repair Friendswood TX"]},{slug:"pearland",name:"Pearland",state:"TX",zipCodes:["77581","77584","77588"],phone:"281-482-8400",isPrimary:!1,headline:"Air Conditioning & Heating Services in Pearland, TX",description:"Trusted local HVAC service for Pearland families since 1986. BBB A+ rated with fast response times.",content:`
      <h2>Trusted HVAC Services for Pearland Homes</h2>
      <p>Pearland homeowners have counted on Mabry's Air Conditioning & Heating for decades. We provide fast, reliable service throughout Pearland with a commitment to treat every customer like family.</p>

      <h3>HVAC Services We Offer in Pearland</h3>
      <ul>
        <li>AC repair - same-day service available</li>
        <li>Heating repair and furnace maintenance</li>
        <li>New AC system installation</li>
        <li>Seasonal maintenance programs</li>
      </ul>

      <h3>Serving All Pearland Neighborhoods</h3>
      <p>From Shadow Creek Ranch to Silverlake, from Old Pearland to the newest subdivisions, we service homes throughout Pearland including zip codes 77581, 77584, and 77588.</p>

      <h3>Why Pearland Residents Choose Us</h3>
      <ul>
        <li>Nearly 40 years of experience</li>
        <li>Honest, flat-rate pricing - no surprises</li>
        <li>BBB A+ Rating you can trust</li>
        <li>Residential-only focus means we specialize in homes</li>
        <li>Licensed and insured (TACLB12058E)</li>
      </ul>
    `,keywords:["HVAC company Pearland TX","AC repair Pearland","heating repair Pearland TX"]},{slug:"clear-lake",name:"Clear Lake",state:"TX",zipCodes:["77058","77059","77062"],phone:"281-482-8400",isPrimary:!1,headline:"Air Conditioning & Heating Services in Clear Lake (Houston), TX",description:"Expert residential HVAC services for Clear Lake area homes. Serving the NASA/Johnson Space Center community since 1986.",content:`
      <h2>HVAC Experts Serving Clear Lake, Houston</h2>
      <p>The Clear Lake area has unique cooling demands with our hot, humid Gulf Coast climate. Mabry's Air Conditioning & Heating has been keeping Clear Lake homes comfortable since 1986.</p>

      <h3>Residential HVAC Services in Clear Lake</h3>
      <ul>
        <li>Emergency AC repair when you need it most</li>
        <li>Heating system repair and maintenance</li>
        <li>Energy-efficient AC installation</li>
        <li>Annual maintenance to prevent breakdowns</li>
      </ul>

      <h3>Serving the Clear Lake Community</h3>
      <p>We provide service throughout the Clear Lake area including Nassau Bay, El Lago, Taylor Lake Village, and surrounding neighborhoods near the Johnson Space Center. Zip codes served include 77058, 77059, and 77062.</p>

      <h3>What Makes Mabry's Different</h3>
      <ul>
        <li>Established in 1986 - we've earned our reputation</li>
        <li>Flat-rate pricing you can count on</li>
        <li>BBB A+ Accredited Business</li>
        <li>Texas Licensed (TACLB12058E)</li>
        <li>We only do residential - homes are our specialty</li>
      </ul>
    `,keywords:["AC installation Clear Lake Houston","HVAC Clear Lake TX","air conditioning Clear Lake"]},{slug:"deer-park",name:"Deer Park",state:"TX",zipCodes:["77536"],phone:"281-482-8400",isPrimary:!1,headline:"Air Conditioning & Heating Services in Deer Park, TX",description:"Reliable residential HVAC service for Deer Park homeowners. BBB A+ rated with flat-rate pricing since 1986.",content:`
      <h2>Reliable HVAC Services for Deer Park Homes</h2>
      <p>Deer Park homeowners deserve an HVAC company they can count on. Mabry's Air Conditioning & Heating has been providing honest, dependable service to the greater Houston area since 1986, and we're proud to serve the Deer Park community.</p>

      <h3>Residential HVAC Services in Deer Park</h3>
      <ul>
        <li>AC repair - fast response times</li>
        <li>Heating repair and furnace service</li>
        <li>New AC system installation</li>
        <li>Preventive maintenance programs</li>
      </ul>

      <h3>Serving the Deer Park Community</h3>
      <p>From neighborhoods near Deer Park High School to the areas around the San Jacinto Monument, we provide service throughout Deer Park and the 77536 zip code.</p>

      <h3>Why Deer Park Homeowners Trust Mabry's</h3>
      <ul>
        <li>Nearly 40 years of experience serving the Houston area</li>
        <li>Flat-rate pricing with no hidden charges</li>
        <li>BBB A+ Accredited Business</li>
        <li>Licensed Texas HVAC Contractor (TACLB12058E)</li>
        <li>Residential specialists who understand homes</li>
      </ul>
    `,keywords:["HVAC Deer Park TX","AC repair Deer Park","heating repair Deer Park TX","air conditioning Deer Park"]},{slug:"league-city",name:"League City",state:"TX",zipCodes:["77573","77574"],phone:"281-482-8400",isPrimary:!1,headline:"Air Conditioning & Heating Services in League City, TX",description:"Trusted HVAC service for League City families. BBB A+ rated with flat-rate pricing since 1986.",content:`
      <h2>Trusted HVAC Services for League City Homes</h2>
      <p>League City is one of the fastest-growing communities in the Houston area, and Mabry's Air Conditioning & Heating is proud to serve its residents. Since 1986, we've built our reputation on honest service and fair pricing.</p>

      <h3>HVAC Services We Offer in League City</h3>
      <ul>
        <li>AC repair - same-day service available</li>
        <li>Heating repair and furnace maintenance</li>
        <li>New AC system installation and replacement</li>
        <li>Seasonal maintenance programs</li>
      </ul>

      <h3>Serving All League City Neighborhoods</h3>
      <p>From South Shore Harbour to Tuscan Lakes, from Victory Lakes to Bay Colony, we service homes throughout League City including zip codes 77573 and 77574.</p>

      <h3>Why League City Residents Choose Mabry's</h3>
      <ul>
        <li>Nearly 40 years serving the greater Houston area</li>
        <li>Honest, flat-rate pricing - no surprises</li>
        <li>BBB A+ Rating you can trust</li>
        <li>Residential-only focus means we specialize in homes</li>
        <li>Licensed and insured (TACLB12058E)</li>
      </ul>
    `,keywords:["HVAC League City TX","AC repair League City","heating repair League City TX","air conditioning League City"]},{slug:"pasadena",name:"Pasadena",state:"TX",zipCodes:["77504","77505"],phone:"281-482-8400",isPrimary:!1,headline:"Air Conditioning & Heating Services in Pasadena, TX",description:"Expert residential HVAC service for Pasadena homeowners. BBB A+ rated with flat-rate pricing since 1986.",content:`
      <h2>Expert HVAC Services for Pasadena Homes</h2>
      <p>Pasadena homeowners in the 77504 and 77505 areas can count on Mabry's Air Conditioning & Heating for reliable, honest HVAC service. We've been serving the greater Houston area since 1986.</p>

      <h3>Residential HVAC Services in Pasadena</h3>
      <ul>
        <li>AC repair for all makes and models</li>
        <li>Heating repair and furnace service</li>
        <li>New AC installation and replacement</li>
        <li>Preventive maintenance programs</li>
      </ul>

      <h3>Serving South Pasadena Neighborhoods</h3>
      <p>We provide service throughout the southern Pasadena area, including neighborhoods near Pasadena Memorial High School, South Shaver, and the Burke Road corridor. Our service area covers the 77504 and 77505 zip codes.</p>

      <h3>Why Pasadena Homeowners Trust Mabry's</h3>
      <ul>
        <li>Nearly 40 years of proven experience</li>
        <li>Flat-rate pricing with no hidden fees</li>
        <li>BBB A+ Accredited Business</li>
        <li>Licensed Texas HVAC Contractor (TACLB12058E)</li>
        <li>Residential specialists who focus on homes</li>
      </ul>
    `,keywords:["HVAC Pasadena TX","AC repair Pasadena","heating repair Pasadena TX","air conditioning Pasadena"]},{slug:"sienna",name:"Sienna",state:"TX",zipCodes:["77459"],phone:"281-331-5248",isPrimary:!1,headline:"Air Conditioning & Heating Services in Sienna, TX",description:"Trusted HVAC service for Sienna Plantation homeowners. BBB A+ rated with flat-rate pricing since 1986.",content:`
      <h2>Quality HVAC Services for Sienna Homes</h2>
      <p>Sienna is known for its beautiful master-planned community and family-friendly neighborhoods. Mabry's Air Conditioning & Heating is proud to serve Sienna homeowners with the same honest, reliable service we've provided since 1986.</p>

      <h3>HVAC Services We Offer in Sienna</h3>
      <ul>
        <li>AC repair - fast response times</li>
        <li>Heating repair and furnace maintenance</li>
        <li>New AC system installation</li>
        <li>Seasonal maintenance programs</li>
      </ul>

      <h3>Serving the Sienna Community</h3>
      <p>From Waters Lake to Sawmill Lake, from Sienna Village to the Club Sienna areas, we service homes throughout the Sienna Plantation community and the 77459 zip code.</p>

      <h3>Why Sienna Homeowners Choose Mabry's</h3>
      <ul>
        <li>Nearly 40 years serving the greater Houston area</li>
        <li>Flat-rate pricing with no hidden charges</li>
        <li>BBB A+ Accredited Business</li>
        <li>Licensed Texas HVAC Contractor (TACLB12058E)</li>
        <li>Residential specialists who understand homes</li>
      </ul>
    `,keywords:["HVAC Sienna TX","AC repair Sienna","heating repair Sienna TX","air conditioning Sienna Plantation"]},{slug:"angleton",name:"Angleton",state:"TX",zipCodes:["77515","77516"],phone:"281-331-5248",isPrimary:!1,headline:"Air Conditioning & Heating Services in Angleton, TX",description:"Reliable residential HVAC service for Angleton homeowners. BBB A+ rated with flat-rate pricing since 1986.",content:`
      <h2>Reliable HVAC Services for Angleton Homes</h2>
      <p>As the county seat of Brazoria County, Angleton is at the heart of our service area. Mabry's Air Conditioning & Heating has been providing honest, dependable HVAC service to the region since 1986, and we're proud to serve Angleton homeowners.</p>

      <h3>Residential HVAC Services in Angleton</h3>
      <ul>
        <li>AC repair for all makes and models</li>
        <li>Heating repair and furnace service</li>
        <li>New AC installation and replacement</li>
        <li>Preventive maintenance programs</li>
      </ul>

      <h3>Serving the Angleton Community</h3>
      <p>From downtown Angleton to the surrounding neighborhoods, including areas near Angleton High School and the Brazoria County Courthouse, we service homes throughout Angleton and the 77515 and 77516 zip codes.</p>

      <h3>Why Angleton Homeowners Trust Mabry's</h3>
      <ul>
        <li>Based nearby in Alvin - just a short drive away</li>
        <li>Nearly 40 years of proven experience</li>
        <li>Flat-rate pricing with no hidden fees</li>
        <li>BBB A+ Accredited Business</li>
        <li>Licensed Texas HVAC Contractor (TACLB12058E)</li>
        <li>Residential specialists who focus on homes</li>
      </ul>
    `,keywords:["HVAC Angleton TX","AC repair Angleton","heating repair Angleton TX","air conditioning Angleton"]},{slug:"manvel",name:"Manvel",state:"TX",zipCodes:["77578"],phone:"281-331-5248",isPrimary:!1,headline:"Air Conditioning & Heating Services in Manvel, TX",description:"Trusted residential HVAC service for Manvel homeowners. BBB A+ rated with flat-rate pricing since 1986.",content:`
      <h2>Trusted HVAC Services for Manvel Homes</h2>
      <p>Manvel has grown rapidly in recent years, and Mabry's Air Conditioning & Heating is proud to serve this thriving community. Based nearby in Alvin, we provide fast, reliable HVAC service with the same honest approach we've used since 1986.</p>

      <h3>Residential HVAC Services in Manvel</h3>
      <ul>
        <li>AC repair - fast response times</li>
        <li>Heating repair and furnace maintenance</li>
        <li>New AC system installation</li>
        <li>Seasonal maintenance programs</li>
      </ul>

      <h3>Serving the Manvel Community</h3>
      <p>From Rodeo Palms to Pomona, from Manvel Town Center to the surrounding neighborhoods, we service homes throughout Manvel and the 77578 zip code.</p>

      <h3>Why Manvel Homeowners Choose Mabry's</h3>
      <ul>
        <li>Based nearby in Alvin - quick response times</li>
        <li>Nearly 40 years serving the greater Houston area</li>
        <li>Flat-rate pricing with no hidden charges</li>
        <li>BBB A+ Accredited Business</li>
        <li>Licensed Texas HVAC Contractor (TACLB12058E)</li>
        <li>Residential specialists who understand homes</li>
      </ul>
    `,keywords:["HVAC Manvel TX","AC repair Manvel","heating repair Manvel TX","air conditioning Manvel"]},{slug:"rosharon",name:"Rosharon",state:"TX",zipCodes:["77583"],phone:"281-331-5248",isPrimary:!1,headline:"Air Conditioning & Heating Services in Rosharon, TX",description:"Reliable residential HVAC service for Rosharon homeowners. BBB A+ rated with flat-rate pricing since 1986.",content:`
      <h2>Reliable HVAC Services for Rosharon Homes</h2>
      <p>Rosharon residents can count on Mabry's Air Conditioning & Heating for dependable, honest HVAC service. Located nearby in Alvin, we've been serving the Brazoria County area since 1986.</p>

      <h3>Residential HVAC Services in Rosharon</h3>
      <ul>
        <li>AC repair for all makes and models</li>
        <li>Heating repair and furnace service</li>
        <li>New AC installation and replacement</li>
        <li>Preventive maintenance programs</li>
      </ul>

      <h3>Serving the Rosharon Community</h3>
      <p>From the rural homesteads to the newer developments, we service homes throughout Rosharon and the 77583 zip code. Our proximity in Alvin means fast response times for your HVAC needs.</p>

      <h3>Why Rosharon Homeowners Trust Mabry's</h3>
      <ul>
        <li>Based nearby in Alvin - just minutes away</li>
        <li>Nearly 40 years of proven experience</li>
        <li>Flat-rate pricing with no hidden fees</li>
        <li>BBB A+ Accredited Business</li>
        <li>Licensed Texas HVAC Contractor (TACLB12058E)</li>
        <li>Residential specialists who focus on homes</li>
      </ul>
    `,keywords:["HVAC Rosharon TX","AC repair Rosharon","heating repair Rosharon TX","air conditioning Rosharon"]}],p={src:e.i(36452).default,width:600,height:281,blurWidth:8,blurHeight:4,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAb0lEQVR42gFkAJv/AMZvgr5Tad27xvLo7f39/f////////7+/gC/PlTARFq/XnPCaHzUnqzmyNDly9PXo7AA0Zqp4cHL5MXN1Jelw2J2vl90xoGUxWx/AOLl6+Xo7d/i6d/i6dLJ1MSvv8/E0dvS29PwR3sPAzvXAAAAAElFTkSuQmCC"},m={src:e.i(97561).default,width:1457,height:706,blurWidth:8,blurHeight:4,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAj0lEQVR42gGEAHv/AAAKDhgAJDVaASMzVwBciOkAXIjpAVuH5wFbh+cBW4joAAALEBwBKDtlASAvUAFKbroCRmewAkNjqAFLb7wBVX7XAAEYIzsCLEFuASY4XgFPdccBTnTFAU1ywwFUfNQAXInqAAEICxMCIC5OAiU3XAIuQ3ICLkRzASc6YgEiM1YAFR81YwsisG2Y+7kAAAAASUVORK5CYII="},g={src:e.i(14048).default,width:691,height:361,blurWidth:8,blurHeight:4,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAiUlEQVR42i2MsQrCMBRFUxwDXTu0i/gRDoKLQhJ5r7F1KKhDdXIRX18aKBUHFfvdGulw7x3u4QhFGAHXGfI+sQ1IdLnEdpcggVQEQmjKJ1vP8zM39tWZ0g2n6vK4O77iWhNEIlCHHqe3p1n492rZDla7T1XUnZ79DaFKb+Jjr9JfsnHTwm/i8H0BcbYoSKjiJYAAAAAASUVORK5CYII="};function f(){let[e,a]=(0,r.useState)(!1),[f,y]=(0,r.useState)(!1),[A,v]=(0,r.useState)(!1),w=(0,r.useRef)(null),[C,b]=(0,r.useState)(0);return(0,r.useEffect)(()=>(e?(document.body.style.overflow="hidden",w.current&&b(w.current.getBoundingClientRect().height)):document.body.style.overflow="",()=>{document.body.style.overflow=""}),[e]),(0,i.jsxs)("header",{ref:w,className:"sticky top-0 z-50 w-full bg-white shadow-md",children:[(0,i.jsx)("div",{className:"bg-primary text-white py-2 px-4 text-sm",children:(0,i.jsxs)("div",{className:"max-w-7xl mx-auto flex justify-between items-center",children:[(0,i.jsxs)("span",{className:"hidden sm:inline",children:["Residential HVAC Experts Since 1986 | License ",c]}),(0,i.jsxs)("span",{className:"sm:hidden",children:["License ",c]}),(0,i.jsxs)("div",{className:"flex items-center gap-3",children:[(0,i.jsxs)("a",{href:"tel:281-331-5248",className:"hidden sm:flex items-center gap-1.5 hover:text-accent transition-colors font-semibold",children:[(0,i.jsx)(s,{className:"w-3.5 h-3.5"}),(0,i.jsx)("span",{children:"Alvin: 281-331-5248"})]}),(0,i.jsx)("span",{className:"hidden sm:inline text-white/40",children:"|"}),(0,i.jsxs)("a",{href:"tel:281-482-8400",className:"hidden sm:flex items-center gap-1.5 hover:text-accent transition-colors font-semibold",children:[(0,i.jsx)(s,{className:"w-3.5 h-3.5"}),(0,i.jsx)("span",{children:"Friendswood: 281-482-8400"})]}),(0,i.jsxs)("div",{className:"flex sm:hidden flex-col items-end gap-0.5",children:[(0,i.jsxs)("a",{href:"tel:281-331-5248",className:"flex items-center gap-1.5 hover:text-accent transition-colors font-semibold",children:[(0,i.jsx)(s,{className:"w-3.5 h-3.5"}),(0,i.jsx)("span",{children:"Alvin: 281-331-5248"})]}),(0,i.jsxs)("a",{href:"tel:281-482-8400",className:"flex items-center gap-1.5 hover:text-accent transition-colors font-semibold",children:[(0,i.jsx)(s,{className:"w-3.5 h-3.5"}),(0,i.jsx)("span",{children:"Friendswood: 281-482-8400"})]})]})]})]})}),(0,i.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,i.jsxs)("div",{className:"flex justify-between items-center py-3",children:[(0,i.jsxs)("div",{className:"flex items-center gap-6",children:[(0,i.jsx)(n.default,{href:"/",className:"hover:opacity-80 transition-opacity",children:(0,i.jsx)(t.default,{src:p,alt:"Mabry's Air Conditioning & Heating, Inc.",width:400,height:120,className:"h-[96px] w-auto",priority:!0})}),(0,i.jsxs)("div",{className:"hidden sm:flex items-center gap-4 ml-8",children:[(0,i.jsx)("a",{href:"https://www.bbb.org/us/tx/friendswood/profile/air-conditioning-contractor/mabrys-air-conditioning-heating-inc-0915-50000805",target:"_blank",rel:"noopener noreferrer",className:"hover:opacity-80 transition-opacity",title:"BBB Accredited Business - A+ Rating",children:(0,i.jsx)(t.default,{src:m,alt:"BBB Accredited Business - A+ Rating",width:120,height:46,className:"h-[38px] w-auto"})}),(0,i.jsx)("a",{href:"https://share.google/tQHl90FISHBjGCNIM",target:"_blank",rel:"noopener noreferrer",className:"hover:opacity-80 transition-opacity",title:"Google 5-Star Reviews",children:(0,i.jsx)(t.default,{src:g,alt:"Google 5-Star Reviews",width:100,height:50,className:"h-[40px] w-auto"})})]})]}),(0,i.jsxs)("nav",{className:"hidden lg:flex items-center gap-8",children:[(0,i.jsx)(n.default,{href:"/",className:"text-sm font-semibold hover:text-accent transition-colors",children:"Home"}),(0,i.jsxs)("div",{className:"relative group",onMouseEnter:()=>y(!0),onMouseLeave:()=>y(!1),children:[(0,i.jsxs)("button",{className:"flex items-center gap-1 text-sm font-semibold hover:text-accent transition-colors py-2",children:["Services ",(0,i.jsx)(d.ChevronDown,{className:"w-4 h-4"})]}),f&&(0,i.jsx)("div",{className:"absolute top-full left-0 w-56 bg-white shadow-lg rounded-lg border py-2",children:u.map(e=>(0,i.jsx)(n.default,{href:`/services/${e.slug}`,className:"block px-4 py-2 text-sm hover:bg-muted transition-colors",children:e.name},e.slug))})]}),(0,i.jsxs)("div",{className:"relative group",onMouseEnter:()=>v(!0),onMouseLeave:()=>v(!1),children:[(0,i.jsxs)("button",{className:"flex items-center gap-1 text-sm font-semibold hover:text-accent transition-colors py-2",children:["Service Areas ",(0,i.jsx)(d.ChevronDown,{className:"w-4 h-4"})]}),A&&(0,i.jsx)("div",{className:"absolute top-full left-0 w-56 bg-white shadow-lg rounded-lg border py-2",children:h.map(e=>(0,i.jsxs)(n.default,{href:`/areas/${e.slug}`,className:"block px-4 py-2 text-sm hover:bg-muted transition-colors",children:[e.name,", ",e.state]},e.slug))})]}),(0,i.jsx)(n.default,{href:"/about",className:"text-sm font-semibold hover:text-accent transition-colors",children:"About"}),(0,i.jsx)(n.default,{href:"/reviews",className:"text-sm font-semibold hover:text-accent transition-colors",children:"Reviews"}),(0,i.jsx)(n.default,{href:"/contact",className:"bg-accent hover:bg-accent/90 text-white font-bold px-6 py-3 rounded-lg transition-colors",children:"Contact Us"})]}),(0,i.jsx)("button",{className:"lg:hidden p-2",onClick:()=>a(!e),"data-testid":"button-mobile-menu",children:e?(0,i.jsx)(l,{className:"w-6 h-6"}):(0,i.jsx)(o,{className:"w-6 h-6"})})]})}),e&&(0,i.jsx)("div",{className:"lg:hidden fixed left-0 right-0 bottom-0 bg-white overflow-y-auto border-t z-50",style:{top:`${C}px`},children:(0,i.jsxs)("div",{className:"px-4 py-6 space-y-4",children:[(0,i.jsx)(n.default,{href:"/",className:"block text-lg font-semibold",onClick:()=>a(!1),children:"Home"}),(0,i.jsxs)("div",{className:"space-y-2",children:[(0,i.jsx)("p",{className:"text-sm font-bold text-muted-foreground uppercase",children:"Services"}),u.map(e=>(0,i.jsx)(n.default,{href:`/services/${e.slug}`,className:"block pl-4 py-1",onClick:()=>a(!1),children:e.name},e.slug))]}),(0,i.jsxs)("div",{className:"space-y-2",children:[(0,i.jsx)("p",{className:"text-sm font-bold text-muted-foreground uppercase",children:"Service Areas"}),h.map(e=>(0,i.jsxs)(n.default,{href:`/areas/${e.slug}`,className:"block pl-4 py-1",onClick:()=>a(!1),children:[e.name,", ",e.state]},e.slug))]}),(0,i.jsx)(n.default,{href:"/about",className:"block text-lg font-semibold",onClick:()=>a(!1),children:"About"}),(0,i.jsx)(n.default,{href:"/reviews",className:"block text-lg font-semibold",onClick:()=>a(!1),children:"Reviews"}),(0,i.jsx)(n.default,{href:"/contact",className:"block w-full text-center bg-accent text-white font-bold py-3 rounded-lg",onClick:()=>a(!1),children:"Contact Us"})]})})]})}e.s(["Header",()=>f],70119)}]);