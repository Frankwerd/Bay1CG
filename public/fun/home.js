/* bay1cg home page behavior, ported verbatim from docs/prototype/bay1cg-fun-prototype.html.
   Wrapped so it can run again after client-side navigation without redeclaring globals. */
(function(){
document.documentElement.classList.add('js');
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches, fine=matchMedia('(pointer:fine)').matches;

/* marquee */
(function(){const words=['Websites','Booking forms','Rebuilds','Care plans','AI add-ons','Made in Bayonne'];
  const t=document.getElementById('track');let h='';for(let k=0;k<2;k++)h+=words.map(w=>`<span>${w}<i>✶</i></span>`).join('');t.innerHTML=h})();

/* bridge: truss, hangers, cars, ship */
(function(){
  const q=(t,a,b,c)=>(1-t)*(1-t)*a+2*t*(1-t)*b+t*t*c, outer=t=>[q(t,118,600,1082),q(t,214,-86,214)], inner=t=>[q(t,150,600,1050),q(t,214,-30,214)];
  const ns='http://www.w3.org/2000/svg', truss=document.getElementById('truss'), hg=document.getElementById('hangers'), cars=document.getElementById('cars');
  let d='';for(let i=1;i<24;i++){const t=i/24,[x1,y1]=outer(t),[x2,y2]=inner(i%2?t+1/48:t-1/48);d+=`M${x1.toFixed(1)} ${y1.toFixed(1)}L${x2.toFixed(1)} ${y2.toFixed(1)}`}
  const p=document.createElementNS(ns,'path');p.setAttribute('d',d);truss.appendChild(p);
  let k=0;for(let i=3;i<=21;i++){const[x,y]=inner(i/24);if(y>176)continue;const l=document.createElementNS(ns,'line');
    l.setAttribute('x1',x.toFixed(1));l.setAttribute('x2',x.toFixed(1));l.setAttribute('y1',y.toFixed(1));l.setAttribute('y2','178');l.setAttribute('class','hanger');l.setAttribute('stroke-width','1.2');l.style.setProperty('--i',k++);hg.appendChild(l)}
  const list=[];for(let i=0;i<7;i++){const r=document.createElementNS(ns,'rect');const dir=i%2?1:-1;r.setAttribute('y',dir>0?171:172);r.setAttribute('width',14);r.setAttribute('height',5);r.setAttribute('rx',2);
    r.setAttribute('fill',i%3===0?'#E8531E':'#F7F7F4');cars.appendChild(r);list.push({r,dir,x:Math.random()*1160+20,v:(70+Math.random()*60)*dir})}
  let last=performance.now();
  function tick(now){const dt=Math.min(.05,(now-last)/1000);last=now;if(!reduce)list.forEach(c=>{c.x+=c.v*dt;if(c.x>1170)c.x=20;if(c.x<20)c.x=1170;c.r.setAttribute('x',c.x.toFixed(1))});requestAnimationFrame(tick)}
  list.forEach(c=>c.r.setAttribute('x',c.x.toFixed(1)));requestAnimationFrame(tick);
  const svg=document.getElementById('bridge'), ship=document.getElementById('ship');let sailing=false;
  svg.addEventListener('click',()=>{if(sailing||reduce)return;sailing=true;ship.style.transition='none';ship.setAttribute('transform','translate(-260 0)');ship.style.transform='translateX(0)';
    void ship.getBoundingClientRect();ship.style.transition='transform 7s linear';ship.style.transform='translateX(1500px)';setTimeout(()=>{sailing=false;ship.style.transition='none';ship.style.transform='translateX(0)'},7100)});
  if(!reduce)addEventListener('scroll',()=>{const y=Math.min(scrollY,400);svg.style.transform=`translateY(${(-y*.06).toFixed(1)}px)`},{passive:true});
})();

/* rotating words */
(function(){const w=[...document.querySelectorAll('.rot span')];let i=0;const rot=document.querySelector('.rot');function fit(){if(!rot)return;rot.style.fontSize='';const avail=rot.clientWidth;const widest=Math.max(...w.map(s=>s.scrollWidth));if(avail>0&&widest>avail)rot.style.fontSize=(avail/widest*0.98)+'em'}fit();if(document.fonts&&document.fonts.ready)document.fonts.ready.then(fit);addEventListener('resize',fit);if(reduce)return;
  setInterval(()=>{const c=w[i];c.classList.remove('on');c.classList.add('out');i=(i+1)%w.length;const n=w[i];n.classList.remove('out');void n.offsetWidth;n.classList.add('on');setTimeout(()=>c.classList.remove('out'),600)},2400)})();

/* showcase carousel + tilt */
(function(){
  const track=document.getElementById('car-track'); if(!track)return;
  const slides=[...track.children], n=slides.length, count=document.getElementById('count'), dots=document.getElementById('dots'), region=document.getElementById('carousel');
  let i=0, inView=false;
  slides.forEach((s,k)=>{const b=document.createElement('button');b.type='button';b.setAttribute('aria-label','Show '+s.dataset.name);b.onclick=()=>go(k);dots.appendChild(b)});
  function play(){live();slides.forEach((s,k)=>s.querySelectorAll('video').forEach(v=>{if(k===i&&inView&&!reduce&&!v.closest('.is-live')){v.play().catch(()=>{})}else{v.pause()}}))}
  /* live previews: on desktop, slides marked data-live swap the desktop recording for the real site once shown */
  function live(){const s=slides[i];if(!fine||reduce||!inView||!s.hasAttribute('data-live')||s.dataset.loaded)return;s.dataset.loaded='1';
    const b=s.querySelector('.browser'),v=b.querySelector('video'),box=document.createElement('div'),f=document.createElement('iframe');
    box.className='live';f.src=s.querySelector('.visit').href;f.title=s.dataset.name+', live website';
    f.setAttribute('sandbox','allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox');
    f.addEventListener('load',()=>{fit(b);b.classList.add('is-live');v.pause()});
    f.addEventListener('mouseenter',()=>{const c=document.getElementById('cur');if(c)c.style.opacity=0});
    box.appendChild(f);v.after(box);fit(b)}
  function fit(b){const box=b.querySelector('.live'),v=b.querySelector('video');if(!box)return;box.style.top=v.offsetTop+'px';box.style.setProperty('--s',v.clientWidth/1280)}
  addEventListener('resize',()=>slides.forEach(s=>fit(s.querySelector('.browser'))));
  function go(k){i=(k+n)%n;track.style.transform=`translateX(${-i*100}%)`;
    slides.forEach((s,k2)=>{const on=k2===i;s.inert=!on;s.setAttribute('aria-hidden',String(!on))});
    count.textContent=`${i+1} / ${n}`;[...dots.children].forEach((d,k2)=>d.setAttribute('aria-current',String(k2===i)));play()}
  document.getElementById('prev').onclick=()=>go(i-1);
  document.getElementById('next').onclick=()=>go(i+1);
  region.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){e.preventDefault();go(i-1)}if(e.key==='ArrowRight'){e.preventDefault();go(i+1)}});
  let x0=null;region.addEventListener('pointerdown',e=>{x0=e.clientX});
  region.addEventListener('pointerup',e=>{if(x0===null)return;const dx=e.clientX-x0;x0=null;if(Math.abs(dx)>50)go(i+(dx<0?1:-1))});
  if(reduce)slides.forEach(s=>s.querySelectorAll('video').forEach(v=>v.controls=true));
  if('IntersectionObserver' in window){new IntersectionObserver(es=>{inView=es[0].isIntersecting;play()},{threshold:.25}).observe(region)}else{inView=true}
  go(0);
  if(!reduce&&fine)slides.forEach(s=>{const box=s.querySelector('.stagebox'),b=s.querySelector('.browser');
    box.addEventListener('mousemove',e=>{const r=box.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;b.style.transform=`rotateY(${x*8}deg) rotateX(${-y*6}deg)`});
    box.addEventListener('mouseleave',()=>b.style.transform='')});
})();

/* problem picker */
(function(){
  const A={
    old:{tag:'Web design',h:'A fresh design that looks as good as your work.',p:'We redesign your site around your business, not a template. Same domain, new everything.',li:['Custom design built around your brand','Fast on every phone','Your services, photos and reviews front and center'],n:'goodbye, 2009'},
    calls:{tag:'Web design',h:'A site built to make the phone ring.',p:'Most sites hide the one thing visitors want: a way to reach you. We put it everywhere it should be.',li:['Call and quote buttons always in reach','Booking and quote forms that land in your inbox','Pages written for what your customers search'],n:'ring ring'},
    stuck:{tag:'Care plan',h:"Updates without the headache.",p:'Change hours, add a job, swap a photo. Do it yourself in minutes, or send it to us and it is done.',li:['Simple editing you can actually use','Monthly care plan for updates and fixes','Backups, security and speed handled'],n:'one text away'},
    none:{tag:'Web design',h:'Your first website, done right.',p:'From domain to launch: a clean, fast site that makes a great first impression and brings in work.',li:['Domain, email and hosting set up','A homepage, services and contact that convert','Google Business Profile connected'],n:'welcome online'},
    time:{tag:'AI add-on',h:'Let the busywork run itself.',p:'Once your site is working, we can add AI tools that draft quotes, answer common questions and keep your Google profile posting.',li:['Quote and follow-up drafts in seconds','Content that posts on schedule','You approve everything before it goes out'],n:'Fridays back'}
  };
  const box=document.getElementById('answer');
  function show(k,anim){const a=A[k];box.innerHTML=`<span class="tag">${a.tag}</span><h3>${a.h}</h3><p>${a.p}</p><ul>${a.li.map(x=>`<li>${x}</li>`).join('')}</ul><span class="hand">${a.n}</span>`;
    if(anim&&!reduce){box.classList.remove('pop');void box.offsetWidth;box.classList.add('pop')}}
  document.querySelectorAll('.prob').forEach(b=>b.onclick=()=>{document.querySelectorAll('.prob').forEach(x=>x.setAttribute('aria-pressed',x===b));show(b.dataset.k,true)});
  show('old',false);
})();

/* cursor dot + magnetic buttons */
if(fine&&!reduce){
  const cur=document.getElementById('cur');let tx=0,ty=0,cx=0,cy=0;
  addEventListener('mousemove',e=>{tx=e.clientX;ty=e.clientY;cur.style.opacity=1});
  (function loop(){cx+=(tx-cx)*.2;cy+=(ty-cy)*.2;cur.style.left=cx+'px';cur.style.top=cy+'px';requestAnimationFrame(loop)})();
  document.querySelectorAll('a,button,.bridge').forEach(el=>{el.addEventListener('mouseenter',()=>cur.classList.add('big'));el.addEventListener('mouseleave',()=>cur.classList.remove('big'))});
  document.querySelectorAll('.mag').forEach(b=>{b.addEventListener('mousemove',e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.2}px,${(e.clientY-r.top-r.height/2)*.32}px)`});b.addEventListener('mouseleave',()=>b.style.transform='')});
}

/* reveals */
if(!reduce&&'IntersectionObserver' in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('go-in');io.unobserve(e.target)}}),{rootMargin:'0px 0px 12% 0px'});
  document.querySelectorAll('.rv').forEach(el=>{if(el.getBoundingClientRect().top>innerHeight)io.observe(el)})}

/* logo story */
/* pinned logo story: the B mark as extruded layers that assemble on scroll */
(function(){
  const host=document.getElementById('logo3d'), section=document.getElementById('how');
  const steps=[...document.querySelectorAll('#steps li')], meter=document.getElementById('meter');
  let stage=0;
  function readStage(){
    const r=section.getBoundingClientRect(), span=r.height-innerHeight;
    const p=Math.min(1,Math.max(0,-r.top/Math.max(1,span)));
    meter.style.width=(p*100).toFixed(1)+'%';
    return Math.min(3,Math.floor(p*4.0001));
  }
  function setStage(s){if(s===stage)return;stage=s;steps.forEach((li,i)=>li.classList.toggle('on',i===s))}
  addEventListener('scroll',()=>setStage(readStage()),{passive:true});
  setStage(readStage());
  if(!window.THREE)return;
  let gl;try{const c=document.createElement('canvas');gl=c.getContext('webgl')||c.getContext('experimental-webgl')}catch(_){}
  if(!gl)return;

  // SVG path (M/L/C/Z, absolute) to THREE shapes, holes assigned by winding
  const d=host.dataset.d, polys=[];
  d.replace(/([MLCZ])([^MLCZ]*)/g,(_,c,a)=>{const n=a.trim()?a.trim().split(/[\s,]+/).map(Number):[];polys.length&&0;
    if(c==='M'){polys.push({path:new THREE.Path(),pts:[]});const P=polys[polys.length-1];P.path.moveTo(n[0],-n[1]);P.pts.push([n[0],-n[1]])}
    else if(c==='L'){const P=polys[polys.length-1];P.path.lineTo(n[0],-n[1]);P.pts.push([n[0],-n[1]])}
    else if(c==='C'){const P=polys[polys.length-1];P.path.bezierCurveTo(n[0],-n[1],n[2],-n[3],n[4],-n[5]);P.pts.push([n[4],-n[5]])}
    return ''});
  const area=pts=>{let s=0;for(let i=0;i<pts.length;i++){const[a,b]=pts[i],[c,e]=pts[(i+1)%pts.length];s+=a*e-c*b}return s/2};
  const inside=(pt,pts)=>{let o=false;for(let i=0,j=pts.length-1;i<pts.length;j=i++){const[xi,yi]=pts[i],[xj,yj]=pts[j];if((yi>pt[1])!==(yj>pt[1])&&pt[0]<(xj-xi)*(pt[1]-yi)/(yj-yi)+xi)o=!o}return o};
  polys.forEach(p=>p.a=area(p.pts));
  const big=polys.reduce((m,p)=>Math.abs(p.a)>Math.abs(m.a)?p:m), sign=Math.sign(big.a);
  const outers=polys.filter(p=>Math.sign(p.a)===sign), holes=polys.filter(p=>Math.sign(p.a)!==sign);
  const shapes=outers.map(o=>{const s=new THREE.Shape();s.curves=o.path.curves;s.currentPoint=o.path.currentPoint;
    if(sign<0)s.curves=s.curves; s.holes=holes.filter(h=>inside(h.pts[0],o.pts)).map(h=>h.path);return {s,c:o.pts.reduce((m,[x,y])=>[m[0]+x/o.pts.length,m[1]+y/o.pts.length],[0,0])}});

  const LAYERS=5, SCALE=1/100, CX=147, CY=-164;
  const scene=new THREE.Scene(), cam=new THREE.PerspectiveCamera(32,1,0.1,100); cam.position.set(0,0,11);
  const ren=new THREE.WebGLRenderer({antialias:true,alpha:true}); ren.setPixelRatio(Math.min(devicePixelRatio,1.75));
  host.appendChild(ren.domElement); host.classList.add('gl');
  scene.add(new THREE.AmbientLight(0xffffff,.55));
  const key=new THREE.DirectionalLight(0xffffff,1.05);key.position.set(3,4,6);scene.add(key);
  const rim=new THREE.DirectionalLight(0x8ea2b9,.9);rim.position.set(-5,-2,-4);scene.add(rim);
  const group=new THREE.Group();scene.add(group);
  const tones=[0x6E230A,0x8A2C0B,0xB33A0F,0xCF4716,0xE8531E];
  const mats=tones.map(t=>new THREE.MeshStandardMaterial({color:t,roughness:.42,metalness:.12,emissive:0xE8531E,emissiveIntensity:0}));
  const rnd=(i,k)=>{const x=Math.sin(i*127.1+k*311.7)*43758.5453;return x-Math.floor(x)};
  const items=[];
  shapes.forEach(({s,c},pi)=>{
    const geo=new THREE.ExtrudeGeometry(s,{depth:12,bevelEnabled:true,bevelThickness:1.2,bevelSize:1,bevelSegments:2,curveSegments:10});
    geo.translate(-c[0],-c[1],-6);
    for(let l=0;l<LAYERS;l++){
      const m=new THREE.Mesh(geo,mats[l]);m.scale.setScalar(SCALE);group.add(m);
      const off=[(c[0]-CX)*SCALE,(c[1]-CY)*SCALE];
      const k=pi*LAYERS+l;
      const poses=[
        {p:[(rnd(k,1)-.5)*5.2,(rnd(k,2)-.5)*3.8,(rnd(k,3)-.5)*3],r:[(rnd(k,4)-.5)*2.2,(rnd(k,5)-.5)*2.2,(rnd(k,6)-.5)*1.6],s:.62},
        {p:[off[0]+(pi-1)*.18,off[1]+(pi-1)*.12,(l-2)*.62],r:[0,0,0],s:.92},
        {p:[off[0],off[1],(l-2)*.13],r:[0,0,0],s:1},
        {p:[off[0],off[1],(l-2)*.13],r:[0,0,0],s:1.04},
      ];
      const st={x:[...poses[0].p,...poses[0].r,poses[0].s],v:new Array(7).fill(0)};
      items.push({m,poses,st,delay:(pi*LAYERS+l)*0.035});
    }
  });
  const gPose=[{r:[.15,-.5,0]},{r:[.32,-.78,0]},{r:[.08,-.22,0]},{r:[.05,0,0]}];
  const g={x:[.15,-.5,0],v:[0,0,0]};
  function size(){const w=host.clientWidth,h=host.clientHeight;ren.setSize(w,h,false);cam.aspect=w/h;
    cam.position.z=w<500?13.5:11;cam.updateProjectionMatrix()}
  size();addEventListener('resize',size);
  const K=reduce?0:120, C=reduce?0:13; let last=performance.now(), t0=last, idle=0, ptr=[0,0], stageAt=last;
  addEventListener('pointermove',e=>{ptr=[e.clientX/innerWidth-.5,e.clientY/innerHeight-.5]},{passive:true});
  let prevStage=stage;
  function spring(x,v,target,dt){const a=K*(target-x)-C*v;v+=a*dt;x+=v*dt;return[x,v]}
  function frame(now){
    const dt=Math.min(.033,(now-last)/1000);last=now;
    if(stage!==prevStage){prevStage=stage;stageAt=now}
    const since=(now-stageAt)/1000;
    items.forEach(it=>{const P=it.poses[stage],T=[...P.p,...P.r,P.s];
      if(reduce||since<it.delay&&false){it.st.x=T.slice()}
      else if(since>=it.delay){for(let i=0;i<7;i++){const[x,v]=spring(it.st.x[i],it.st.v[i],T[i],dt);it.st.x[i]=x;it.st.v[i]=v}}
      const x=it.st.x;it.m.position.set(x[0],x[1],x[2]);it.m.rotation.set(x[3],x[4],x[5]);it.m.scale.setScalar(x[6]*SCALE)});
    idle=stage===3&&!reduce?idle+dt*.35:idle*0.94;
    const GT=gPose[stage].r;
    for(let i=0;i<3;i++){const tgt=GT[i]+(i===1?Math.sin(idle)*.5+ptr[0]*.25:0)+(i===0?ptr[1]*.12:0);
      if(reduce){g.x[i]=tgt}else{const[x,v]=spring(g.x[i],g.v[i],tgt,dt);g.x[i]=x;g.v[i]=v}}
    group.rotation.set(g.x[0],g.x[1],g.x[2]);
    const glow=stage===3?.22+Math.sin((now-t0)/700)*.06:0;mats.forEach(m=>m.emissiveIntensity+=(glow-m.emissiveIntensity)*.08);
    const r=host.getBoundingClientRect();
    if(r.bottom>0&&r.top<innerHeight)ren.render(scene,cam);
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();



/* demo */

(function(){
  const form=document.getElementById('demo-form'), job=document.getElementById('job'), biz=document.getElementById('biz');
  const out=document.getElementById('out'), title=document.getElementById('out-title'), status=document.getElementById('status'), panel=document.getElementById('out-panel'), err=document.getElementById('err');
  let kind='quote', timer=null;
  const titles={quote:'Customer quote',post:'Google post',text:'Follow-up text'};
  document.querySelectorAll('.chip').forEach(c=>c.onclick=()=>{document.querySelectorAll('.chip').forEach(x=>x.setAttribute('aria-pressed',x===c));kind=c.dataset.k;title.textContent=titles[kind]});
  document.querySelectorAll('.presets button').forEach(b=>b.onclick=()=>{job.value=b.dataset.p;err.textContent='';job.focus()});
  job.addEventListener('input',()=>err.textContent='');

  function parse(s){
    s=s.trim().replace(/\s+/g,' ');
    const m=s.match(/\bin ([A-Z][A-Za-z.]*(?: [A-Z][A-Za-z.]*)*)(?:, ?([A-Z]{2}))?/);
    const town=m?m[1]:'your area';
    let what=(m?s.slice(0,m.index):s).replace(/\s+for (a|an|the) [^,]+$/i,'').replace(/[.,\s]+$/,'');
    const who=(s.match(/for (a|an|the) ([a-z0-9\- ]+?)(?= in |$)/i)||[])[2]||'';
    what=what.charAt(0).toLowerCase()+what.slice(1);
    return {what,town,who};
  }
  function draft(){
    const {what,town,who}=parse(job.value), name=biz.value.trim()||'Our team';
    const Cap=what.charAt(0).toUpperCase()+what.slice(1);
    if(kind==='quote') return `Hi there,\n\nThanks for reaching out to ${name}. Here's our quote for the job${town!=='your area'?` in ${town}`:''}:\n${Cap}.\n\nWhat's included\n- A walkthrough to confirm the scope before we start\n- All labor and standard materials for the job\n- Cleanup when we're done, so you'd never know we were there\n\nPrice: [your rate here]\nTimeline: we can usually start within the week.\n\nReply to this email or call us to lock in a date.\n\n${name}`;
    if(kind==='post') return `${Cap} in ${town}\n\nJust finished in ${town}: ${what}${who?` for a ${who}`:''}. Jobs like this are what we do every week, and they're done right the first time.\n\nThinking about something similar? Get a quote from ${name} today.\n\n[Call now]`;
    return `Hi! It's ${name} following up on your quote${town!=='your area'?` for the job in ${town}`:''} (${what}). Any questions we can answer? We have openings next week if you'd like to get on the schedule. Just reply here.`;
  }
  function run(e){
    e&&e.preventDefault();
    if(job.value.trim().length<12){err.textContent='Describe the job in a few more words, for example what you did and the town.';job.focus();return}
    clearInterval(timer);const text=draft();
    panel.classList.remove('done');panel.classList.add('busy');status.textContent='Writing...';
    if(reduce){out.textContent=text;finish();return}
    out.textContent='';let i=0;const cur=document.createElement('span');cur.className='cursor';
    timer=setInterval(()=>{i+=Math.max(1,Math.round(text.length/180));out.textContent=text.slice(0,i);out.appendChild(cur);if(i>=text.length){clearInterval(timer);cur.remove();finish()}},16);
  }
  function finish(){panel.classList.remove('busy');panel.classList.add('done');status.textContent='Draft ready'}
  form.addEventListener('submit',run);
  out.textContent=draft();
  const copy=(btn,txt)=>{const done=()=>{btn.textContent='Copied';setTimeout(()=>btn.textContent=btn.dataset.l,1400)};btn.dataset.l=btn.textContent;
    try{navigator.clipboard.writeText(txt).then(done,()=>{sel(btn)})}catch(_){sel(btn)}};
  const sel=btn=>{const r=document.createRange();r.selectNodeContents(btn.id==='copy'?out:document.getElementById('email'));const s=getSelection();s.removeAllRanges();s.addRange(r);btn.textContent='Selected, press Ctrl+C'};
  document.getElementById('copy').onclick=e=>copy(e.currentTarget,out.textContent);
  document.getElementById('copy-mail').onclick=e=>copy(e.currentTarget,'francis@bay1cg.com');
})();
})();
