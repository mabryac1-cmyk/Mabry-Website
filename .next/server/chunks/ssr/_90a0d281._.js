module.exports=[4987,(a,b,c)=>{"use strict";function d({widthInt:a,heightInt:b,blurWidth:c,blurHeight:d,blurDataURL:e,objectFit:f}){let g=c?40*c:a,h=d?40*d:b,i=g&&h?`viewBox='0 0 ${g} ${h}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${i}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${i?"none":"contain"===f?"xMidYMid":"cover"===f?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${e}'/%3E%3C/svg%3E`}Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"getImageBlurSvg",{enumerable:!0,get:function(){return d}})},345,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={VALID_LOADERS:function(){return f},imageConfigDefault:function(){return g}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=["default","imgix","cloudinary","akamai","custom"],g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumRedirects:3,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1}},94915,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"getImgProps",{enumerable:!0,get:function(){return j}}),a.r(92434);let d=a.r(68063),e=a.r(4987),f=a.r(345),g=["-moz-initial","fill","none","scale-down",void 0];function h(a){return void 0!==a.default}function i(a){return void 0===a?a:"number"==typeof a?Number.isFinite(a)?a:NaN:"string"==typeof a&&/^[0-9]+$/.test(a)?parseInt(a,10):NaN}function j({src:a,sizes:b,unoptimized:c=!1,priority:j=!1,preload:k=!1,loading:l,className:m,quality:n,width:o,height:p,fill:q=!1,style:r,overrideSrc:s,onLoad:t,onLoadingComplete:u,placeholder:v="empty",blurDataURL:w,fetchPriority:x,decoding:y="async",layout:z,objectFit:A,objectPosition:B,lazyBoundary:C,lazyRoot:D,...E},F){var G;let H,I,J,{imgConf:K,showAltText:L,blurComplete:M,defaultLoader:N}=F,O=K||f.imageConfigDefault;if("allSizes"in O)H=O;else{let a=[...O.deviceSizes,...O.imageSizes].sort((a,b)=>a-b),b=O.deviceSizes.sort((a,b)=>a-b),c=O.qualities?.sort((a,b)=>a-b);H={...O,allSizes:a,deviceSizes:b,qualities:c}}if(void 0===N)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let P=E.loader||N;delete E.loader,delete E.srcSet;let Q="__next_img_default"in P;if(Q){if("custom"===H.loader)throw Object.defineProperty(Error(`Image with src "${a}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let a=P;P=b=>{let{config:c,...d}=b;return a(d)}}if(z){"fill"===z&&(q=!0);let a={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[z];a&&(r={...r,...a});let c={responsive:"100vw",fill:"100vw"}[z];c&&!b&&(b=c)}let R="",S=i(o),T=i(p);if((G=a)&&"object"==typeof G&&(h(G)||void 0!==G.src)){let b=h(a)?a.default:a;if(!b.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(b)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!b.height||!b.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(b)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(I=b.blurWidth,J=b.blurHeight,w=w||b.blurDataURL,R=b.src,!q)if(S||T){if(S&&!T){let a=S/b.width;T=Math.round(b.height*a)}else if(!S&&T){let a=T/b.height;S=Math.round(b.width*a)}}else S=b.width,T=b.height}let U=!j&&!k&&("lazy"===l||void 0===l);(!(a="string"==typeof a?a:R)||a.startsWith("data:")||a.startsWith("blob:"))&&(c=!0,U=!1),H.unoptimized&&(c=!0),Q&&!H.dangerouslyAllowSVG&&a.split("?",1)[0].endsWith(".svg")&&(c=!0);let V=i(n),W=Object.assign(q?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:A,objectPosition:B}:{},L?{}:{color:"transparent"},r),X=M||"empty"===v?null:"blur"===v?`url("data:image/svg+xml;charset=utf-8,${(0,e.getImageBlurSvg)({widthInt:S,heightInt:T,blurWidth:I,blurHeight:J,blurDataURL:w||"",objectFit:W.objectFit})}")`:`url("${v}")`,Y=g.includes(W.objectFit)?"fill"===W.objectFit?"100% 100%":"cover":W.objectFit,Z=X?{backgroundSize:Y,backgroundPosition:W.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:X}:{},$=function({config:a,src:b,unoptimized:c,width:e,quality:f,sizes:g,loader:h}){if(c){let a=(0,d.getDeploymentId)();if(b.startsWith("/")&&!b.startsWith("//")&&a){let c=b.includes("?")?"&":"?";b=`${b}${c}dpl=${a}`}return{src:b,srcSet:void 0,sizes:void 0}}let{widths:i,kind:j}=function({deviceSizes:a,allSizes:b},c,d){if(d){let c=/(^|\s)(1?\d?\d)vw/g,e=[];for(let a;a=c.exec(d);)e.push(parseInt(a[2]));if(e.length){let c=.01*Math.min(...e);return{widths:b.filter(b=>b>=a[0]*c),kind:"w"}}return{widths:b,kind:"w"}}return"number"!=typeof c?{widths:a,kind:"w"}:{widths:[...new Set([c,2*c].map(a=>b.find(b=>b>=a)||b[b.length-1]))],kind:"x"}}(a,e,g),k=i.length-1;return{sizes:g||"w"!==j?g:"100vw",srcSet:i.map((c,d)=>`${h({config:a,src:b,quality:f,width:c})} ${"w"===j?c:d+1}${j}`).join(", "),src:h({config:a,src:b,quality:f,width:i[k]})}}({config:H,src:a,unoptimized:c,width:S,quality:V,sizes:b,loader:P}),_=U?"lazy":l;return{props:{...E,loading:_,fetchPriority:x,width:S,height:T,decoding:y,className:m,style:{...W,...Z},sizes:$.sizes,srcSet:$.srcSet,src:s||$.src},meta:{unoptimized:c,preload:k||j,placeholder:v,fill:q}}}},94613,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"default",{enumerable:!0,get:function(){return f}});let d=a.r(72131),e=()=>{};function f(a){let{headManager:b,reduceComponentsToState:c}=a;function f(){if(b&&b.mountedInstances){let a=d.Children.toArray(Array.from(b.mountedInstances).filter(Boolean));b.updateHead(c(a))}}return b?.mountedInstances?.add(a.children),f(),e(()=>(b?.mountedInstances?.add(a.children),()=>{b?.mountedInstances?.delete(a.children)})),e(()=>(b&&(b._pendingUpdate=f),()=>{b&&(b._pendingUpdate=f)})),null}},58018,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={default:function(){return p},defaultHead:function(){return l}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(33354),g=a.r(46058),h=a.r(87924),i=g._(a.r(72131)),j=f._(a.r(94613)),k=a.r(92966);function l(){return[(0,h.jsx)("meta",{charSet:"utf-8"},"charset"),(0,h.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function m(a,b){return"string"==typeof b||"number"==typeof b?a:b.type===i.default.Fragment?a.concat(i.default.Children.toArray(b.props.children).reduce((a,b)=>"string"==typeof b||"number"==typeof b?a:a.concat(b),[])):a.concat(b)}a.r(92434);let n=["name","httpEquiv","charSet","itemProp"];function o(a){let b,c,d,e;return a.reduce(m,[]).reverse().concat(l().reverse()).filter((b=new Set,c=new Set,d=new Set,e={},a=>{let f=!0,g=!1;if(a.key&&"number"!=typeof a.key&&a.key.indexOf("$")>0){g=!0;let c=a.key.slice(a.key.indexOf("$")+1);b.has(c)?f=!1:b.add(c)}switch(a.type){case"title":case"base":c.has(a.type)?f=!1:c.add(a.type);break;case"meta":for(let b=0,c=n.length;b<c;b++){let c=n[b];if(a.props.hasOwnProperty(c))if("charSet"===c)d.has(c)?f=!1:d.add(c);else{let b=a.props[c],d=e[c]||new Set;("name"!==c||!g)&&d.has(b)?f=!1:(d.add(b),e[c]=d)}}}return f})).reverse().map((a,b)=>{let c=a.key||b;return i.default.cloneElement(a,{key:c})})}let p=function({children:a}){let b=(0,i.useContext)(k.HeadManagerContext);return(0,h.jsx)(j.default,{reduceComponentsToState:o,headManager:b,children:a})};("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},4486,(a,b,c)=>{"use strict";b.exports=a.r(42602).vendored.contexts.ImageConfigContext},53773,(a,b,c)=>{"use strict";b.exports=a.r(42602).vendored.contexts.RouterContext},35444,(a,b,c)=>{"use strict";function d(a,b){let c=a||75;return b?.qualities?.length?b.qualities.reduce((a,b)=>Math.abs(b-c)<Math.abs(a-c)?b:a,0):c}Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"findClosestQuality",{enumerable:!0,get:function(){return d}})},2305,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"default",{enumerable:!0,get:function(){return g}});let d=a.r(35444),e=a.r(68063);function f({config:a,src:b,width:c,quality:f}){if(b.startsWith("/")&&b.includes("?")&&a.localPatterns?.length===1&&"**"===a.localPatterns[0].pathname&&""===a.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${b}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let g=(0,d.findClosestQuality)(f,a),h=(0,e.getDeploymentId)();return`${a.path}?url=${encodeURIComponent(b)}&w=${c}&q=${g}${b.startsWith("/")&&h?`&dpl=${h}`:""}`}f.__next_img_default=!0;let g=f},67161,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"Image",{enumerable:!0,get:function(){return u}});let d=a.r(33354),e=a.r(46058),f=a.r(87924),g=e._(a.r(72131)),h=d._(a.r(35112)),i=d._(a.r(58018)),j=a.r(94915),k=a.r(345),l=a.r(4486);a.r(92434);let m=a.r(53773),n=d._(a.r(2305)),o=a.r(8591),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function q(a,b,c,d,e,f,g){let h=a?.src;a&&a["data-loaded-src"]!==h&&(a["data-loaded-src"]=h,("decode"in a?a.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(a.parentElement&&a.isConnected){if("empty"!==b&&e(!0),c?.current){let b=new Event("load");Object.defineProperty(b,"target",{writable:!1,value:a});let d=!1,e=!1;c.current({...b,nativeEvent:b,currentTarget:a,target:a,isDefaultPrevented:()=>d,isPropagationStopped:()=>e,persist:()=>{},preventDefault:()=>{d=!0,b.preventDefault()},stopPropagation:()=>{e=!0,b.stopPropagation()}})}d?.current&&d.current(a)}}))}function r(a){return g.use?{fetchPriority:a}:{fetchpriority:a}}globalThis.__NEXT_IMAGE_IMPORTED=!0;let s=(0,g.forwardRef)(({src:a,srcSet:b,sizes:c,height:d,width:e,decoding:h,className:i,style:j,fetchPriority:k,placeholder:l,loading:m,unoptimized:n,fill:p,onLoadRef:s,onLoadingCompleteRef:t,setBlurComplete:u,setShowAltText:v,sizesInput:w,onLoad:x,onError:y,...z},A)=>{let B=(0,g.useCallback)(a=>{a&&(y&&(a.src=a.src),a.complete&&q(a,l,s,t,u,n,w))},[a,l,s,t,u,y,n,w]),C=(0,o.useMergedRef)(A,B);return(0,f.jsx)("img",{...z,...r(k),loading:m,width:e,height:d,decoding:h,"data-nimg":p?"fill":"1",className:i,style:j,sizes:c,srcSet:b,src:a,ref:C,onLoad:a=>{q(a.currentTarget,l,s,t,u,n,w)},onError:a=>{v(!0),"empty"!==l&&u(!0),y&&y(a)}})});function t({isAppRouter:a,imgAttributes:b}){let c={as:"image",imageSrcSet:b.srcSet,imageSizes:b.sizes,crossOrigin:b.crossOrigin,referrerPolicy:b.referrerPolicy,...r(b.fetchPriority)};return a&&h.default.preload?(h.default.preload(b.src,c),null):(0,f.jsx)(i.default,{children:(0,f.jsx)("link",{rel:"preload",href:b.srcSet?void 0:b.src,...c},"__nimg-"+b.src+b.srcSet+b.sizes)})}let u=(0,g.forwardRef)((a,b)=>{let c=(0,g.useContext)(m.RouterContext),d=(0,g.useContext)(l.ImageConfigContext),e=(0,g.useMemo)(()=>{let a=p||d||k.imageConfigDefault,b=[...a.deviceSizes,...a.imageSizes].sort((a,b)=>a-b),c=a.deviceSizes.sort((a,b)=>a-b),e=a.qualities?.sort((a,b)=>a-b);return{...a,allSizes:b,deviceSizes:c,qualities:e,localPatterns:d?.localPatterns}},[d]),{onLoad:h,onLoadingComplete:i}=a,o=(0,g.useRef)(h);(0,g.useEffect)(()=>{o.current=h},[h]);let q=(0,g.useRef)(i);(0,g.useEffect)(()=>{q.current=i},[i]);let[r,u]=(0,g.useState)(!1),[v,w]=(0,g.useState)(!1),{props:x,meta:y}=(0,j.getImgProps)(a,{defaultLoader:n.default,imgConf:e,blurComplete:r,showAltText:v});return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(s,{...x,unoptimized:y.unoptimized,placeholder:y.placeholder,fill:y.fill,onLoadRef:o,onLoadingCompleteRef:q,setBlurComplete:u,setShowAltText:w,sizesInput:a.sizes,ref:b}),y.preload?(0,f.jsx)(t,{isAppRouter:!c,imgAttributes:x}):null]})});("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},33095,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={default:function(){return k},getImageProps:function(){return j}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(33354),g=a.r(94915),h=a.r(67161),i=f._(a.r(2305));function j(a){let{props:b}=(0,g.getImgProps)(a,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[a,c]of Object.entries(b))void 0===c&&delete b[a];return{props:b}}let k=h.Image},71987,(a,b,c)=>{b.exports=a.r(33095)},38679,a=>{"use strict";var b=a.i(87924),c=a.i(38246),d=a.i(71987),e=a.i(72131),f=a.i(70106);let g=(0,f.default)("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]),h=(0,f.default)("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),i=(0,f.default)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var j=a.i(5784);let k="TACLB12058E",l=[{slug:"ac-repair",name:"AC Repair",title:"AC Repair Services",shortDescription:"Fast, reliable residential AC repair",description:"Fast, reliable residential AC repair services. We fix all makes and models with honest, flat-rate pricing.",content:`
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
    `,keywords:["AC installation","new air conditioner","AC replacement","HVAC installation"],faqs:[{question:"How much does a new AC system cost?",answer:"AC installation costs depend on your home's size, the system's efficiency rating, and installation complexity. We provide free consultations and upfront, flat-rate pricing with no hidden fees."},{question:"How long does AC installation take?",answer:"A typical residential AC installation takes one day. More complex installations involving ductwork modifications may take longer, but we'll let you know upfront."},{question:"What size AC do I need for my home?",answer:"Proper sizing requires a load calculation based on your home's square footage, insulation, windows, and other factors. An oversized or undersized unit won't cool efficiently - we ensure you get the right fit."},{question:"What brands do you install?",answer:"We install quality, energy-efficient systems from trusted manufacturers. During your consultation, we'll recommend options that fit your budget and cooling needs."},{question:"Should I replace my AC before it completely fails?",answer:"If your system is 10-15+ years old, uses R-22 refrigerant (being phased out), or needs frequent repairs, proactive replacement can save money on energy bills and prevent an emergency breakdown."}]}],m=[{slug:"alvin",name:"Alvin",state:"TX",zipCodes:["77511","77512"],phone:"281-331-5248",isPrimary:!0,headline:"Air Conditioning & Heating Services in Alvin, TX",description:"Located in downtown Alvin since 1986. Your trusted local HVAC experts providing honest, flat-rate pricing and BBB A+ rated service.",content:`
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
    `,keywords:["HVAC Rosharon TX","AC repair Rosharon","heating repair Rosharon TX","air conditioning Rosharon"]}],n={src:a.i(36452).default,width:600,height:281,blurWidth:8,blurHeight:4,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAb0lEQVR42gFkAJv/AMZvgr5Tad27xvLo7f39/f////////7+/gC/PlTARFq/XnPCaHzUnqzmyNDly9PXo7AA0Zqp4cHL5MXN1Jelw2J2vl90xoGUxWx/AOLl6+Xo7d/i6d/i6dLJ1MSvv8/E0dvS29PwR3sPAzvXAAAAAElFTkSuQmCC"},o={src:a.i(97561).default,width:1457,height:706,blurWidth:8,blurHeight:4,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAj0lEQVR42gGEAHv/AAAKDhgAJDVaASMzVwBciOkAXIjpAVuH5wFbh+cBW4joAAALEBwBKDtlASAvUAFKbroCRmewAkNjqAFLb7wBVX7XAAEYIzsCLEFuASY4XgFPdccBTnTFAU1ywwFUfNQAXInqAAEICxMCIC5OAiU3XAIuQ3ICLkRzASc6YgEiM1YAFR81YwsisG2Y+7kAAAAASUVORK5CYII="},p={src:a.i(14048).default,width:691,height:361,blurWidth:8,blurHeight:4,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAiUlEQVR42i2MsQrCMBRFUxwDXTu0i/gRDoKLQhJ5r7F1KKhDdXIRX18aKBUHFfvdGulw7x3u4QhFGAHXGfI+sQ1IdLnEdpcggVQEQmjKJ1vP8zM39tWZ0g2n6vK4O77iWhNEIlCHHqe3p1n492rZDla7T1XUnZ79DaFKb+Jjr9JfsnHTwm/i8H0BcbYoSKjiJYAAAAAASUVORK5CYII="};function q(){let[a,f]=(0,e.useState)(!1),[q,r]=(0,e.useState)(!1),[s,t]=(0,e.useState)(!1),u=(0,e.useRef)(null),[v,w]=(0,e.useState)(0);return(0,e.useEffect)(()=>(a?(document.body.style.overflow="hidden",u.current&&w(u.current.getBoundingClientRect().height)):document.body.style.overflow="",()=>{document.body.style.overflow=""}),[a]),(0,b.jsxs)("header",{ref:u,className:"sticky top-0 z-50 w-full bg-white shadow-md",children:[(0,b.jsx)("div",{className:"bg-primary text-white py-2 px-4 text-sm",children:(0,b.jsxs)("div",{className:"max-w-7xl mx-auto flex justify-between items-center",children:[(0,b.jsxs)("span",{className:"hidden sm:inline",children:["Residential HVAC Experts Since 1986 | License ",k]}),(0,b.jsxs)("span",{className:"sm:hidden",children:["License ",k]}),(0,b.jsxs)("div",{className:"flex items-center gap-3",children:[(0,b.jsxs)("a",{href:"tel:281-331-5248",className:"hidden sm:flex items-center gap-1.5 hover:text-accent transition-colors font-semibold",children:[(0,b.jsx)(g,{className:"w-3.5 h-3.5"}),(0,b.jsx)("span",{children:"Alvin: 281-331-5248"})]}),(0,b.jsx)("span",{className:"hidden sm:inline text-white/40",children:"|"}),(0,b.jsxs)("a",{href:"tel:281-482-8400",className:"hidden sm:flex items-center gap-1.5 hover:text-accent transition-colors font-semibold",children:[(0,b.jsx)(g,{className:"w-3.5 h-3.5"}),(0,b.jsx)("span",{children:"Friendswood: 281-482-8400"})]}),(0,b.jsxs)("div",{className:"flex sm:hidden flex-col items-end gap-0.5",children:[(0,b.jsxs)("a",{href:"tel:281-331-5248",className:"flex items-center gap-1.5 hover:text-accent transition-colors font-semibold",children:[(0,b.jsx)(g,{className:"w-3.5 h-3.5"}),(0,b.jsx)("span",{children:"Alvin: 281-331-5248"})]}),(0,b.jsxs)("a",{href:"tel:281-482-8400",className:"flex items-center gap-1.5 hover:text-accent transition-colors font-semibold",children:[(0,b.jsx)(g,{className:"w-3.5 h-3.5"}),(0,b.jsx)("span",{children:"Friendswood: 281-482-8400"})]})]})]})]})}),(0,b.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,b.jsxs)("div",{className:"flex justify-between items-center py-3",children:[(0,b.jsxs)("div",{className:"flex items-center gap-6",children:[(0,b.jsx)(c.default,{href:"/",className:"hover:opacity-80 transition-opacity",children:(0,b.jsx)(d.default,{src:n,alt:"Mabry's Air Conditioning & Heating, Inc.",width:400,height:120,className:"h-[96px] w-auto",priority:!0})}),(0,b.jsxs)("div",{className:"hidden sm:flex items-center gap-4 ml-8",children:[(0,b.jsx)("a",{href:"https://www.bbb.org/us/tx/friendswood/profile/air-conditioning-contractor/mabrys-air-conditioning-heating-inc-0915-50000805",target:"_blank",rel:"noopener noreferrer",className:"hover:opacity-80 transition-opacity",title:"BBB Accredited Business - A+ Rating",children:(0,b.jsx)(d.default,{src:o,alt:"BBB Accredited Business - A+ Rating",width:120,height:46,className:"h-[38px] w-auto"})}),(0,b.jsx)("a",{href:"https://share.google/tQHl90FISHBjGCNIM",target:"_blank",rel:"noopener noreferrer",className:"hover:opacity-80 transition-opacity",title:"Google 5-Star Reviews",children:(0,b.jsx)(d.default,{src:p,alt:"Google 5-Star Reviews",width:100,height:50,className:"h-[40px] w-auto"})})]})]}),(0,b.jsxs)("nav",{className:"hidden lg:flex items-center gap-8",children:[(0,b.jsx)(c.default,{href:"/",className:"text-sm font-semibold hover:text-accent transition-colors",children:"Home"}),(0,b.jsxs)("div",{className:"relative group",onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[(0,b.jsxs)("button",{className:"flex items-center gap-1 text-sm font-semibold hover:text-accent transition-colors py-2",children:["Services ",(0,b.jsx)(j.ChevronDown,{className:"w-4 h-4"})]}),q&&(0,b.jsx)("div",{className:"absolute top-full left-0 w-56 bg-white shadow-lg rounded-lg border py-2",children:l.map(a=>(0,b.jsx)(c.default,{href:`/services/${a.slug}`,className:"block px-4 py-2 text-sm hover:bg-muted transition-colors",children:a.name},a.slug))})]}),(0,b.jsxs)("div",{className:"relative group",onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),children:[(0,b.jsxs)("button",{className:"flex items-center gap-1 text-sm font-semibold hover:text-accent transition-colors py-2",children:["Service Areas ",(0,b.jsx)(j.ChevronDown,{className:"w-4 h-4"})]}),s&&(0,b.jsx)("div",{className:"absolute top-full left-0 w-56 bg-white shadow-lg rounded-lg border py-2",children:m.map(a=>(0,b.jsxs)(c.default,{href:`/areas/${a.slug}`,className:"block px-4 py-2 text-sm hover:bg-muted transition-colors",children:[a.name,", ",a.state]},a.slug))})]}),(0,b.jsx)(c.default,{href:"/about",className:"text-sm font-semibold hover:text-accent transition-colors",children:"About"}),(0,b.jsx)(c.default,{href:"/reviews",className:"text-sm font-semibold hover:text-accent transition-colors",children:"Reviews"}),(0,b.jsx)(c.default,{href:"/contact",className:"bg-accent hover:bg-accent/90 text-white font-bold px-6 py-3 rounded-lg transition-colors",children:"Contact Us"})]}),(0,b.jsx)("button",{className:"lg:hidden p-2",onClick:()=>f(!a),"data-testid":"button-mobile-menu",children:a?(0,b.jsx)(i,{className:"w-6 h-6"}):(0,b.jsx)(h,{className:"w-6 h-6"})})]})}),a&&(0,b.jsx)("div",{className:"lg:hidden fixed left-0 right-0 bottom-0 bg-white overflow-y-auto border-t z-50",style:{top:`${v}px`},children:(0,b.jsxs)("div",{className:"px-4 py-6 space-y-4",children:[(0,b.jsx)(c.default,{href:"/",className:"block text-lg font-semibold",onClick:()=>f(!1),children:"Home"}),(0,b.jsxs)("div",{className:"space-y-2",children:[(0,b.jsx)("p",{className:"text-sm font-bold text-muted-foreground uppercase",children:"Services"}),l.map(a=>(0,b.jsx)(c.default,{href:`/services/${a.slug}`,className:"block pl-4 py-1",onClick:()=>f(!1),children:a.name},a.slug))]}),(0,b.jsxs)("div",{className:"space-y-2",children:[(0,b.jsx)("p",{className:"text-sm font-bold text-muted-foreground uppercase",children:"Service Areas"}),m.map(a=>(0,b.jsxs)(c.default,{href:`/areas/${a.slug}`,className:"block pl-4 py-1",onClick:()=>f(!1),children:[a.name,", ",a.state]},a.slug))]}),(0,b.jsx)(c.default,{href:"/about",className:"block text-lg font-semibold",onClick:()=>f(!1),children:"About"}),(0,b.jsx)(c.default,{href:"/reviews",className:"block text-lg font-semibold",onClick:()=>f(!1),children:"Reviews"}),(0,b.jsx)(c.default,{href:"/contact",className:"block w-full text-center bg-accent text-white font-bold py-3 rounded-lg",onClick:()=>f(!1),children:"Contact Us"})]})})]})}a.s(["Header",()=>q],38679)}];

//# sourceMappingURL=_90a0d281._.js.map