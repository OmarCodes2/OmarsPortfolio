(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5906:function(e,t,r){Promise.resolve().then(r.bind(r,1203)),Promise.resolve().then(r.bind(r,3290)),Promise.resolve().then(r.bind(r,3220)),Promise.resolve().then(r.bind(r,137))},1203:function(e,t,r){"use strict";r.d(t,{ExperienceSection:function(){return h}});var a=r(7437);r(2265);var s=r(8185),i=r(5555),n=r(4662),l=r(9733),o=r(356),d=r(2391),c=r(3473);let u=[{title:"Canada Life",description:"Software Developer",details:["Conducted financial analysis and prepared reports.","Provided support to senior financial advisors.","Helped clients understand their financial options."],imageUrl:"./canadalife.png",duration:"May 2024 - August 2024"},{title:"Vidyard",description:"Software Developer",details:["Collaborated with the marketing team to develop video campaigns.","Increased video views and engagement by 30%.","Edited and produced high-quality video content."],imageUrl:"./vidyard.png",duration:"January 2024 - April 2024"},{title:"FirstHX",description:"Junior Software Developer",details:["Developed marketing strategies to increase brand awareness.","Analyzed data to track campaign performance and optimize strategies.","Created and presented reports to stakeholders."],imageUrl:"./firsthx.png",duration:"May 2023 - Dec 2023"},{title:"Prolancify",description:"Full-Stack Developer, API Integrations",details:["Implemented new features based on user feedback.","Ensured high performance and responsiveness of applications.","Collaborated with cross-functional teams to define project requirements."],imageUrl:"./prolancify.png",duration:"January 2023 - March 2023"},{title:"AdMass",description:"Full-stack Developer",details:["Increased client engagement by 20%.","Collaborated with the design team to create effective ads.","Conducted market research to identify target demographics."],imageUrl:"./admass.png",duration:"October 2022 - January 2023"},{title:"McMaster Design League",description:"Co President",details:["Organized and managed design competitions and workshops.","Fostered a collaborative and creative team environment.","Mentored team members and provided guidance."],imageUrl:"./mdl.png",duration:"July 2022 - Present"}],m={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:1.5}}},h=()=>{let e=(0,o.Z)("(min-width:768px)");return(0,a.jsxs)("section",{id:"experience",className:"p-8 flex flex-col justify-center items-center min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]",children:[(0,a.jsx)("h2",{className:"text-3xl font-bold mb-8",children:"Experience"}),(0,a.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-screen-lg",children:u.map((t,r)=>{let{ref:o,inView:u}=(0,c.YD)({triggerOnce:!0,threshold:.1});return(0,a.jsx)(d.E.div,{ref:o,initial:"hidden",animate:u?"visible":"hidden",variants:m,custom:r,children:(0,a.jsxs)(s.Zb,{className:"shadow-lg",children:[(0,a.jsxs)(s.Ol,{children:[(0,a.jsx)("img",{src:t.imageUrl,alt:t.title,className:"w-full h-32 object-cover mb-4 rounded-t-lg"}),(0,a.jsx)(s.ll,{children:t.title}),(0,a.jsx)(s.SZ,{children:t.description}),(0,a.jsx)("p",{className:"text-sm text-gray-500 mt-2",children:t.duration})]}),(0,a.jsx)(s.eW,{children:e?(0,a.jsxs)(n.Vq,{children:[(0,a.jsx)(n.hg,{asChild:!0,children:(0,a.jsx)(l.z,{variant:"outline",children:"Learn More"})}),(0,a.jsxs)(n.cZ,{children:[(0,a.jsxs)(n.fK,{children:[(0,a.jsx)(n.$N,{children:t.title}),(0,a.jsx)(n.Be,{children:t.description})]}),(0,a.jsx)("div",{className:"p-4",children:(0,a.jsx)("ul",{className:"list-disc ml-4",children:t.details.map((e,t)=>(0,a.jsx)("li",{children:e},t))})})]})]}):(0,a.jsxs)(i.dy,{children:[(0,a.jsx)(i.Qz,{asChild:!0,children:(0,a.jsx)(l.z,{variant:"outline",children:"Learn More"})}),(0,a.jsxs)(i.sc,{children:[(0,a.jsxs)(i.OX,{children:[(0,a.jsx)(i.iI,{children:t.title}),(0,a.jsx)(i.u6,{children:t.description})]}),(0,a.jsx)("div",{className:"p-4",children:(0,a.jsx)("ul",{className:"list-disc ml-4",children:t.details.map((e,t)=>(0,a.jsx)("li",{children:e},t))})}),(0,a.jsx)(i.ze,{children:(0,a.jsx)(i.uh,{asChild:!0,children:(0,a.jsx)(l.z,{variant:"outline",children:"Close"})})})]})]})})]})},r)})})]})}},3290:function(e,t,r){"use strict";r.d(t,{IntroSection:function(){return u}});var a=r(7437),s=r(2265),i=r(7059),n=r(8185),l=r(5642),o=r(2391);let d=[{src:"./student.png",label:"Student"},{src:"./coop.png",label:"Coop"},{src:"./leader.png",label:"Leader"},{src:"./hacker.png",label:"Hacker"},{src:"./speaker.png",label:"Speaker"},{src:"./foodie.png",label:"Foodie"},{src:"./sportsman.png",label:"Sportsman"},{src:"./friend.png",label:"Friend"}],c={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}},u=()=>{let e=s.useRef((0,i.Z)({delay:4e3,stopOnInteraction:!0})),[t,r]=s.useState(0);return s.useEffect(()=>{let e=setInterval(()=>{r(e=>(e+1)%d.length)},4e3);return()=>clearInterval(e)},[]),(0,a.jsxs)("section",{id:"intro",className:"p-8 flex flex-col md:flex-row justify-center items-center text-center md:text-left mx-auto",style:{minHeight:"calc(100vh - 64px)"},children:[(0,a.jsxs)(o.E.div,{className:"flex flex-col justify-center items-center md:items-start md:mr-8 mb-8 md:mb-0 md:w-2/5",initial:"hidden",animate:"visible",variants:c,children:[(0,a.jsx)(o.E.h1,{className:"text-4xl font-bold",children:"Welcome to My Portfolio"}),(0,a.jsxs)(o.E.p,{className:"mt-4 text-lg flex flex-wrap justify-center md:justify-start",children:[(0,a.jsx)("span",{className:"text-2xl mr-2",children:"I am a"}),(0,a.jsx)("span",{className:"font-semibold text-2xl inline-block",style:{whiteSpace:"nowrap",overflow:"hidden",textAlign:"center"},children:(0,a.jsx)("span",{className:"roll-up",children:d[t].label},t)})]}),(0,a.jsx)(o.E.p,{className:"mt-4 text-lg text-center md:text-left",children:"passionate about coding and technology and looking to make the world a better place."})]}),(0,a.jsx)(o.E.div,{className:"w-full max-w-xs md:max-w-md md:w-2/5",initial:"hidden",animate:"visible",variants:c,children:(0,a.jsxs)(l.lr,{plugins:[e.current],className:"w-full",children:[(0,a.jsx)(l.KI,{children:d.map((e,t)=>(0,a.jsx)(l.d$,{children:(0,a.jsx)(o.E.div,{className:"p-1",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:1.5},children:(0,a.jsx)(n.Zb,{children:(0,a.jsx)(n.aY,{className:"flex aspect-square items-center justify-center p-6",children:(0,a.jsx)("img",{src:e.src,alt:"Slide ".concat(t+1),className:"w-full h-full object-cover rounded"})})})})},t))}),(0,a.jsx)(l.am,{style:{display:"none"}}),(0,a.jsx)(l.Pz,{style:{display:"none"}})]})})]})}},3220:function(e,t,r){"use strict";r.d(t,{NavBar:function(){return N}});var a=r(7437),s=r(2265),i=r(5659),n=r(2218),l=r(2421),o=r(9354);let d=s.forwardRef((e,t)=>{let{className:r,children:s,...n}=e;return(0,a.jsxs)(i.fC,{ref:t,className:(0,o.cn)("relative z-10 flex max-w-max flex-1 items-center justify-center",r),...n,children:[s,(0,a.jsx)(f,{})]})});d.displayName=i.fC.displayName;let c=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(i.aV,{ref:t,className:(0,o.cn)("group flex flex-1 list-none items-center justify-center space-x-1",r),...s})});c.displayName=i.aV.displayName;let u=i.ck,m=(0,n.j)("group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"),h=s.forwardRef((e,t)=>{let{className:r,children:s,...n}=e;return(0,a.jsxs)(i.xz,{ref:t,className:(0,o.cn)(m(),"group",r),...n,children:[s," ",(0,a.jsx)(l.Z,{className:"relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180","aria-hidden":"true"})]})});h.displayName=i.xz.displayName,s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(i.VY,{ref:t,className:(0,o.cn)("left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",r),...s})}).displayName=i.VY.displayName;let p=i.rU,f=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{className:(0,o.cn)("absolute left-0 top-full flex justify-center"),children:(0,a.jsx)(i.l_,{className:(0,o.cn)("origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",r),ref:t,...s})})});f.displayName=i.l_.displayName;let x=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(i.z$,{ref:t,className:(0,o.cn)("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",r),...s,children:(0,a.jsx)("div",{className:"relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md"})})});x.displayName=i.z$.displayName;var g=r(9425);let v=(0,n.j)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",{variants:{variant:{default:"bg-transparent",outline:"border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"},size:{default:"h-10 px-3",sm:"h-9 px-2.5",lg:"h-11 px-5"}},defaultVariants:{variant:"default",size:"default"}}),j=s.forwardRef((e,t)=>{let{className:r,variant:s,size:i,...n}=e;return(0,a.jsx)(g.f,{ref:t,className:(0,o.cn)(v({variant:s,size:i,className:r})),...n})});j.displayName=g.f.displayName;var b=r(8296),y=r(2699);let N=()=>{let[e,t]=(0,s.useState)(!1),[r,i]=(0,s.useState)(!0);return(0,s.useEffect)(()=>{r?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[r]),(0,a.jsx)("nav",{className:"sticky top-0 z-50 bg-[hsl(var(--background))] text-[hsl(var(--foreground))] shadow-md",children:(0,a.jsxs)("div",{className:"container mx-auto flex justify-between items-center p-4",children:[(0,a.jsx)("div",{className:"text-xl font-bold",children:"Omar's Portfolio"}),(0,a.jsx)("div",{className:"md:hidden",children:(0,a.jsx)("button",{onClick:()=>t(!e),className:"text-[hsl(var(--foreground))] focus:outline-none",children:(0,a.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16m-7 6h7"})})})}),(0,a.jsxs)("div",{className:"flex-col md:flex-row md:flex ".concat(e?"flex":"hidden"," space-y-4 md:space-y-0 md:space-x-4"),children:[(0,a.jsxs)(d,{children:[(0,a.jsxs)(c,{className:"flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4",children:[(0,a.jsx)(u,{children:(0,a.jsx)(h,{children:(0,a.jsx)(p,{href:"#experience",children:"Experience"})})}),(0,a.jsx)(u,{children:(0,a.jsx)(h,{children:(0,a.jsx)(p,{href:"#projects",children:"Projects"})})}),(0,a.jsx)(u,{children:(0,a.jsx)(h,{children:(0,a.jsx)(p,{href:"https://drive.google.com/file/d/18TcrSgDz3v58U_oAPduljoqX9DPhh411/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",children:"Resume"})})}),(0,a.jsx)(u,{children:(0,a.jsx)(h,{children:(0,a.jsx)(p,{href:"https://www.linkedin.com/in/omarbakr03/",target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"})})}),(0,a.jsx)(u,{children:(0,a.jsx)(h,{children:(0,a.jsx)(p,{href:"https://github.com/OmarCodes2",target:"_blank",rel:"noopener noreferrer",children:"GitHub"})})})]}),(0,a.jsx)(x,{})]}),(0,a.jsx)(j,{"aria-label":"Toggle theme",onClick:()=>{i(!r)},children:r?(0,a.jsx)(b.Z,{className:"h-4 w-4"}):(0,a.jsx)(y.Z,{className:"h-4 w-4"})})]})]})})}},137:function(e,t,r){"use strict";r.d(t,{ProjectsSection:function(){return N}});var a=r(7437),s=r(2265),i=r(8185),n=r(5555),l=r(4662),o=r(9733),d=r(4458),c=r(9354);let u=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(d.fC,{ref:t,className:(0,c.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",r),...s})});u.displayName=d.fC.displayName;let m=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(d.Ee,{ref:t,className:(0,c.cn)("aspect-square h-full w-full",r),...s})});m.displayName=d.Ee.displayName;let h=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(d.NY,{ref:t,className:(0,c.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",r),...s})});h.displayName=d.NY.displayName;let p=(0,r(2218).j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function f(e){let{className:t,variant:r,...s}=e;return(0,a.jsx)("div",{className:(0,c.cn)(p({variant:r}),t),...s})}var x=r(5642),g=r(356),v=r(2391),j=r(3473);let b=[{title:"MacShuttle",description:"A shuttle tracking app for students.",images:["https://via.placeholder.com/400x300","https://via.placeholder.com/400x300","https://via.placeholder.com/400x300"],github:"https://github.com/macshuttle"},{title:"Critiqly",description:"A platform for critical reviews.",images:["https://via.placeholder.com/400x300","https://via.placeholder.com/400x300","https://via.placeholder.com/400x300"],github:"https://github.com/critiqly",devpost:"https://devpost.com/software/critiqly"},{title:"Caddie",description:"A Discord bot for managing tasks.",images:["https://via.placeholder.com/400x300","https://via.placeholder.com/400x300","https://via.placeholder.com/400x300"],github:"https://github.com/caddie"},{title:"Pawndr",description:"A pet adoption app.",images:["https://via.placeholder.com/400x300","https://via.placeholder.com/400x300","https://via.placeholder.com/400x300"],github:"https://github.com/pawndr",devpost:"https://devpost.com/software/pawndr",badge:"Hackathon Winner"},{title:"Island Generator",description:"Generates random islands.",images:["https://via.placeholder.com/400x300","https://via.placeholder.com/400x300","https://via.placeholder.com/400x300"],github:"https://github.com/islandgenerator"},{title:"Verses",description:"A poetry sharing platform.",images:["https://via.placeholder.com/400x300","https://via.placeholder.com/400x300","https://via.placeholder.com/400x300"],github:"https://github.com/verses",devpost:"https://devpost.com/software/verses",badge:"Hackathon Winner"},{title:"Afk Student",description:"Tracks student activity.",images:["https://via.placeholder.com/400x300","https://via.placeholder.com/400x300","https://via.placeholder.com/400x300"],github:"https://github.com/afkstudent",devpost:"https://devpost.com/software/afkstudent",badge:"Hackathon Winner"},{title:"StudyComb",description:"A study companion app.",images:["https://via.placeholder.com/400x300","https://via.placeholder.com/400x300","https://via.placeholder.com/400x300"],github:"https://github.com/studycomb",devpost:"https://devpost.com/software/studycomb",badge:"Hackathon Winner"},{title:"RoomE",description:"A room management system.",images:["https://via.placeholder.com/400x300","https://via.placeholder.com/400x300","https://via.placeholder.com/400x300"],github:"https://github.com/roome",devpost:"https://devpost.com/software/roome"},{title:"Certificate Generator",description:"Automatically generates certificates.",images:["https://via.placeholder.com/400x300","https://via.placeholder.com/400x300","https://via.placeholder.com/400x300"],github:"https://github.com/certgen"},{title:"AI Quiz Solver",description:"Solves quizzes using AI.",images:["https://via.placeholder.com/400x300","https://via.placeholder.com/400x300","https://via.placeholder.com/400x300"],github:"https://github.com/aiquizsolver"},{title:"Lori's Grocer",description:"A grocery management system.",images:["https://via.placeholder.com/400x300","https://via.placeholder.com/400x300","https://via.placeholder.com/400x300"],github:"https://github.com/lorisgrocer"},{title:"Wavey",description:"A wave simulation tool.",images:["https://via.placeholder.com/400x300","https://via.placeholder.com/400x300","https://via.placeholder.com/400x300"],github:"https://github.com/wavey",devpost:"https://devpost.com/software/wavey"},{title:"Student Council Sign Up Page",description:"A sign-up page for student council.",images:["https://via.placeholder.com/400x300","https://via.placeholder.com/400x300","https://via.placeholder.com/400x300"],github:"https://github.com/studentcouncil"},{title:"Portfolio",description:"A personal portfolio website.",images:["https://via.placeholder.com/400x300","https://via.placeholder.com/400x300","https://via.placeholder.com/400x300"],github:"https://github.com/portfolio"}],y={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:1.5}}},N=()=>{let e=(0,g.Z)("(min-width:768px)");return(0,a.jsxs)("section",{id:"projects",className:"p-8 flex flex-col justify-center items-center min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]",children:[(0,a.jsx)("h2",{className:"text-3xl font-bold mb-8",children:"Projects"}),(0,a.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-screen-lg",children:b.map((t,r)=>{let{ref:s,inView:d}=(0,j.YD)({triggerOnce:!0,threshold:.1});return(0,a.jsx)(v.E.div,{ref:s,initial:"hidden",animate:d?"visible":"hidden",variants:y,custom:r,children:(0,a.jsxs)(i.Zb,{className:"shadow-lg",children:[(0,a.jsxs)(i.Ol,{className:"flex flex-col items-start",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between w-full",children:[(0,a.jsx)("div",{className:"flex items-center space-x-2",children:(0,a.jsx)(i.ll,{children:t.title})}),(0,a.jsxs)("div",{className:"flex space-x-2",children:[(0,a.jsx)("a",{href:t.github,target:"_blank",rel:"noopener noreferrer",children:(0,a.jsxs)(u,{children:[(0,a.jsx)(m,{src:"/github.png",alt:"GitHub Link"}),(0,a.jsx)(h,{children:"GH"})]})}),t.devpost&&(0,a.jsx)("a",{href:t.devpost,target:"_blank",rel:"noopener noreferrer",children:(0,a.jsxs)(u,{children:[(0,a.jsx)(m,{src:"/devpost.png",alt:"Devpost Link"}),(0,a.jsx)(h,{children:"DP"})]})})]})]}),(0,a.jsx)(i.SZ,{children:t.description}),(0,a.jsx)("img",{src:t.images[0],alt:t.title,className:"w-full h-32 object-cover mt-4 rounded-t-lg"})]}),(0,a.jsxs)(i.eW,{className:"flex justify-between items-center",children:[e?(0,a.jsxs)(l.Vq,{children:[(0,a.jsx)(l.hg,{asChild:!0,children:(0,a.jsx)(o.z,{variant:"outline",children:"Learn More"})}),(0,a.jsxs)(l.cZ,{children:[(0,a.jsxs)(l.fK,{children:[(0,a.jsx)(l.$N,{children:t.title}),(0,a.jsx)(l.Be,{children:t.description})]}),(0,a.jsxs)("div",{className:"flex flex-col items-center p-4",children:[(0,a.jsxs)(x.lr,{className:"w-full max-w-xs",children:[(0,a.jsx)(x.KI,{children:t.images.map((e,t)=>(0,a.jsx)(x.d$,{children:(0,a.jsx)("div",{className:"p-1",children:(0,a.jsx)(i.Zb,{children:(0,a.jsx)(i.aY,{className:"flex aspect-square items-center justify-center p-6",children:(0,a.jsx)("img",{src:e,alt:"Project ".concat(r+1," Image ").concat(t+1),className:"w-full h-full object-cover rounded"})})})})},t))}),(0,a.jsx)(x.am,{}),(0,a.jsx)(x.Pz,{})]}),(0,a.jsxs)("div",{className:"flex mt-4 space-x-4",children:[(0,a.jsx)("a",{href:t.github,target:"_blank",rel:"noopener noreferrer",children:(0,a.jsxs)(u,{children:[(0,a.jsx)(m,{src:"/github.png",alt:"GitHub Link"}),(0,a.jsx)(h,{children:"GH"})]})}),t.devpost&&(0,a.jsx)("a",{href:t.devpost,target:"_blank",rel:"noopener noreferrer",children:(0,a.jsxs)(u,{children:[(0,a.jsx)(m,{src:"/devpost.png",alt:"Devpost Link"}),(0,a.jsx)(h,{children:"DP"})]})})]})]})]})]}):(0,a.jsxs)(n.dy,{children:[(0,a.jsx)(n.Qz,{asChild:!0,children:(0,a.jsx)(o.z,{variant:"outline",children:"Learn More"})}),(0,a.jsxs)(n.sc,{children:[(0,a.jsxs)(n.OX,{children:[(0,a.jsx)(n.iI,{children:t.title}),(0,a.jsx)(n.u6,{children:t.description})]}),(0,a.jsxs)("div",{className:"flex flex-col items-center p-4",children:[(0,a.jsxs)(x.lr,{className:"w-full max-w-xs",children:[(0,a.jsx)(x.KI,{children:t.images.map((e,t)=>(0,a.jsx)(x.d$,{children:(0,a.jsx)("div",{className:"p-1",children:(0,a.jsx)(i.Zb,{children:(0,a.jsx)(i.aY,{className:"flex aspect-square items-center justify-center p-6",children:(0,a.jsx)("img",{src:e,alt:"Project ".concat(r+1," Image ").concat(t+1),className:"w-full h-full object-cover rounded"})})})})},t))}),(0,a.jsx)(x.am,{}),(0,a.jsx)(x.Pz,{})]}),(0,a.jsxs)("div",{className:"flex mt-4 space-x-4",children:[(0,a.jsx)("a",{href:t.github,target:"_blank",rel:"noopener noreferrer",children:(0,a.jsxs)(u,{children:[(0,a.jsx)(m,{src:"/github.png",alt:"GitHub Link"}),(0,a.jsx)(h,{children:"GH"})]})}),t.devpost&&(0,a.jsx)("a",{href:t.devpost,target:"_blank",rel:"noopener noreferrer",children:(0,a.jsxs)(u,{children:[(0,a.jsx)(m,{src:"/devpost.png",alt:"Devpost Link"}),(0,a.jsx)(h,{children:"DP"})]})})]})]}),(0,a.jsxs)(n.ze,{className:"flex justify-between items-center",children:[(0,a.jsx)(n.uh,{asChild:!0,children:(0,a.jsx)(o.z,{variant:"outline",children:"Close"})}),t.badge&&(0,a.jsx)(f,{variant:"destructive",className:"text-right whitespace-normal block",children:t.badge})]})]})]}),t.badge&&(0,a.jsx)(f,{className:"ml-auto text-right whitespace-normal block",children:t.badge})]})]})},r)})})]})}},9733:function(e,t,r){"use strict";r.d(t,{z:function(){return d}});var a=r(7437),s=r(2265),i=r(1538),n=r(2218),l=r(9354);let o=(0,n.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=s.forwardRef((e,t)=>{let{className:r,variant:s,size:n,asChild:d=!1,...c}=e,u=d?i.g7:"button";return(0,a.jsx)(u,{className:(0,l.cn)(o({variant:s,size:n,className:r})),ref:t,...c})});d.displayName="Button"},8185:function(e,t,r){"use strict";r.d(t,{Ol:function(){return l},SZ:function(){return d},Zb:function(){return n},aY:function(){return c},eW:function(){return u},ll:function(){return o}});var a=r(7437),s=r(2265),i=r(9354);let n=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,i.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",r),...s})});n.displayName="Card";let l=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,i.cn)("flex flex-col space-y-1.5 p-6",r),...s})});l.displayName="CardHeader";let o=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("h3",{ref:t,className:(0,i.cn)("text-2xl font-semibold leading-none tracking-tight",r),...s})});o.displayName="CardTitle";let d=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("p",{ref:t,className:(0,i.cn)("text-sm text-muted-foreground",r),...s})});d.displayName="CardDescription";let c=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,i.cn)("p-6 pt-0",r),...s})});c.displayName="CardContent";let u=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,i.cn)("flex items-center p-6 pt-0",r),...s})});u.displayName="CardFooter"},5642:function(e,t,r){"use strict";r.d(t,{KI:function(){return h},Pz:function(){return x},am:function(){return f},d$:function(){return p},lr:function(){return m}});var a=r(7437),s=r(2265),i=r(4300),n=r(1266),l=r(1976),o=r(9354),d=r(9733);let c=s.createContext(null);function u(){let e=s.useContext(c);if(!e)throw Error("useCarousel must be used within a <Carousel />");return e}let m=s.forwardRef((e,t)=>{let{orientation:r="horizontal",opts:n,setApi:l,plugins:d,className:u,children:m,...h}=e,[p,f]=(0,i.Z)({...n,axis:"horizontal"===r?"x":"y"},d),[x,g]=s.useState(!1),[v,j]=s.useState(!1),b=s.useCallback(e=>{e&&(g(e.canScrollPrev()),j(e.canScrollNext()))},[]),y=s.useCallback(()=>{null==f||f.scrollPrev()},[f]),N=s.useCallback(()=>{null==f||f.scrollNext()},[f]),w=s.useCallback(e=>{"ArrowLeft"===e.key?(e.preventDefault(),y()):"ArrowRight"===e.key&&(e.preventDefault(),N())},[y,N]);return s.useEffect(()=>{f&&l&&l(f)},[f,l]),s.useEffect(()=>{if(f)return b(f),f.on("reInit",b),f.on("select",b),()=>{null==f||f.off("select",b)}},[f,b]),(0,a.jsx)(c.Provider,{value:{carouselRef:p,api:f,opts:n,orientation:r||((null==n?void 0:n.axis)==="y"?"vertical":"horizontal"),scrollPrev:y,scrollNext:N,canScrollPrev:x,canScrollNext:v},children:(0,a.jsx)("div",{ref:t,onKeyDownCapture:w,className:(0,o.cn)("relative",u),role:"region","aria-roledescription":"carousel",...h,children:m})})});m.displayName="Carousel";let h=s.forwardRef((e,t)=>{let{className:r,...s}=e,{carouselRef:i,orientation:n}=u();return(0,a.jsx)("div",{ref:i,className:"overflow-hidden",children:(0,a.jsx)("div",{ref:t,className:(0,o.cn)("flex","horizontal"===n?"-ml-4":"-mt-4 flex-col",r),...s})})});h.displayName="CarouselContent";let p=s.forwardRef((e,t)=>{let{className:r,...s}=e,{orientation:i}=u();return(0,a.jsx)("div",{ref:t,role:"group","aria-roledescription":"slide",className:(0,o.cn)("min-w-0 shrink-0 grow-0 basis-full","horizontal"===i?"pl-4":"pt-4",r),...s})});p.displayName="CarouselItem";let f=s.forwardRef((e,t)=>{let{className:r,variant:s="outline",size:i="icon",...l}=e,{orientation:c,scrollPrev:m,canScrollPrev:h}=u();return(0,a.jsxs)(d.z,{ref:t,variant:s,size:i,className:(0,o.cn)("absolute  h-8 w-8 rounded-full","horizontal"===c?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",r),disabled:!h,onClick:m,...l,children:[(0,a.jsx)(n.Z,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"sr-only",children:"Previous slide"})]})});f.displayName="CarouselPrevious";let x=s.forwardRef((e,t)=>{let{className:r,variant:s="outline",size:i="icon",...n}=e,{orientation:c,scrollNext:m,canScrollNext:h}=u();return(0,a.jsxs)(d.z,{ref:t,variant:s,size:i,className:(0,o.cn)("absolute h-8 w-8 rounded-full","horizontal"===c?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",r),disabled:!h,onClick:m,...n,children:[(0,a.jsx)(l.Z,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"sr-only",children:"Next slide"})]})});x.displayName="CarouselNext"},4662:function(e,t,r){"use strict";r.d(t,{$N:function(){return p},Be:function(){return f},Vq:function(){return o},cZ:function(){return m},fK:function(){return h},hg:function(){return d}});var a=r(7437),s=r(2265),i=r(295),n=r(4697),l=r(9354);let o=i.fC,d=i.xz,c=i.h_;i.x8;let u=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(i.aV,{ref:t,className:(0,l.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",r),...s})});u.displayName=i.aV.displayName;let m=s.forwardRef((e,t)=>{let{className:r,children:s,...o}=e;return(0,a.jsxs)(c,{children:[(0,a.jsx)(u,{}),(0,a.jsxs)(i.VY,{ref:t,className:(0,l.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",r),...o,children:[s,(0,a.jsxs)(i.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,a.jsx)(n.Z,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});m.displayName=i.VY.displayName;let h=e=>{let{className:t,...r}=e;return(0,a.jsx)("div",{className:(0,l.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...r})};h.displayName="DialogHeader";let p=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(i.Dx,{ref:t,className:(0,l.cn)("text-lg font-semibold leading-none tracking-tight",r),...s})});p.displayName=i.Dx.displayName;let f=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(i.dk,{ref:t,className:(0,l.cn)("text-sm text-muted-foreground",r),...s})});f.displayName=i.dk.displayName},5555:function(e,t,r){"use strict";r.d(t,{OX:function(){return h},Qz:function(){return o},dy:function(){return l},iI:function(){return f},sc:function(){return m},u6:function(){return x},uh:function(){return c},ze:function(){return p}});var a=r(7437),s=r(2265),i=r(7213),n=r(9354);let l=e=>{let{shouldScaleBackground:t=!0,...r}=e;return(0,a.jsx)(i.d.Root,{shouldScaleBackground:t,...r})};l.displayName="Drawer";let o=i.d.Trigger,d=i.d.Portal,c=i.d.Close,u=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(i.d.Overlay,{ref:t,className:(0,n.cn)("fixed inset-0 z-50 bg-black/80",r),...s})});u.displayName=i.d.Overlay.displayName;let m=s.forwardRef((e,t)=>{let{className:r,children:s,...l}=e;return(0,a.jsxs)(d,{children:[(0,a.jsx)(u,{}),(0,a.jsxs)(i.d.Content,{ref:t,className:(0,n.cn)("fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",r),...l,children:[(0,a.jsx)("div",{className:"mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted"}),s]})]})});m.displayName="DrawerContent";let h=e=>{let{className:t,...r}=e;return(0,a.jsx)("div",{className:(0,n.cn)("grid gap-1.5 p-4 text-center sm:text-left",t),...r})};h.displayName="DrawerHeader";let p=e=>{let{className:t,...r}=e;return(0,a.jsx)("div",{className:(0,n.cn)("mt-auto flex flex-col gap-2 p-4",t),...r})};p.displayName="DrawerFooter";let f=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(i.d.Title,{ref:t,className:(0,n.cn)("text-lg font-semibold leading-none tracking-tight",r),...s})});f.displayName=i.d.Title.displayName;let x=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(i.d.Description,{ref:t,className:(0,n.cn)("text-sm text-muted-foreground",r),...s})});x.displayName=i.d.Description.displayName},9354:function(e,t,r){"use strict";r.d(t,{cn:function(){return i}});var a=r(4839),s=r(6164);function i(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.m6)((0,a.W)(t))}}},function(e){e.O(0,[801,971,23,744],function(){return e(e.s=5906)}),_N_E=e.O()}]);