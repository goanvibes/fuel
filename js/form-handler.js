
document.addEventListener('DOMContentLoaded',()=>{
 const form=document.querySelector('#projectForm');
 form?.addEventListener('submit',e=>{
   e.preventDefault();
   const data=new FormData(form);
   const msg=`Hi Fuelerz, I want to start a project.%0A%0AName: ${encodeURIComponent(data.get('name')||'')}%0ABusiness: ${encodeURIComponent(data.get('business')||'')}%0AService: ${encodeURIComponent(data.get('service')||'')}%0APhone: ${encodeURIComponent(data.get('phone')||'')}%0ADetails: ${encodeURIComponent(data.get('details')||'')}`;
   window.open(`https://wa.me/917722011476?text=${msg}`,'_blank');
 });
});
