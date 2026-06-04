
document.addEventListener('DOMContentLoaded',()=>{
 const sidebar=document.querySelector('.sidebar'), overlay=document.querySelector('.sidebar-overlay');
 const openBtn=document.querySelector('.sidebar-toggle'), closeBtn=document.querySelector('.close-sidebar');
 const open=()=>{sidebar?.classList.add('open');overlay?.classList.add('active');document.body.classList.add('menu-open')};
 const close=()=>{sidebar?.classList.remove('open');overlay?.classList.remove('active');document.body.classList.remove('menu-open')};
 openBtn?.addEventListener('click',open); closeBtn?.addEventListener('click',close); overlay?.addEventListener('click',close);
 document.querySelectorAll('.sidebar a').forEach(a=>a.addEventListener('click',close));
 document.querySelectorAll('.currentYear').forEach(s=>s.textContent=new Date().getFullYear());
 const nav=document.querySelector('.navbar');
 window.addEventListener('scroll',()=>nav?.classList.toggle('scrolled',window.scrollY>25),{passive:true});
 const io=new IntersectionObserver((entries)=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('appear')}),{threshold:.12});
 document.querySelectorAll('.reveal, section').forEach(el=>io.observe(el));
 document.querySelectorAll('.tilt').forEach(card=>{
   card.addEventListener('mousemove',e=>{ if(matchMedia('(max-width: 900px)').matches)return; const r=card.getBoundingClientRect(); const x=(e.clientX-r.left)/r.width-.5; const y=(e.clientY-r.top)/r.height-.5; card.style.transform=`translateY(-10px) rotateX(${-y*5}deg) rotateY(${x*5}deg)`; });
   card.addEventListener('mouseleave',()=>card.style.transform='');
 });
});
