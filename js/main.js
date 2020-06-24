(()=>{
  let yOffset=0;
  let previousTotalScroll=0;
  

  const setLayout = ()=>{

  }

  const scrollAction=()=>{

  }

 window.addEventListener('load',()=>{
   setLayout();
 })
 window.addEventListener('resize',setLayout);
 window.addEventListener('scroll',()=>{
   scrollAction();
 })
})();