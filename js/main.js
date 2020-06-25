(()=>{
  let yOffset=0;
  let heightNumber = 5;
  let currentScene=0;
  // 초기 각 섹션의 Layout을 설정
  const setLayout = ()=>{
    infoArr.forEach((item)=>{
      const target = item.objs.target;
      item.scrollHeight = window.innerHeight * heightNumber;
      target.style.height = `${item.scrollHeight}px`
    });
  }
  //20200625,Scroll Action을 통해 활성화될 신을 결정+스크롤 액션마다 애니메이션 실행시키는 함수
  function scrollLoop() {
    let prevScrollHeight = 0;
    for (let i = 0;i<currentScene;i++) {
      prevScrollHeight += infoArr[i].scrollHeight;
    }
    if (yOffset > prevScrollHeight + infoArr[currentScene].scrollHeight) {
      currentScene++; 
    }
    if (yOffset < prevScrollHeight) {
      if (currentScene === 0) return;
      currentScene--;
    }
  }
  
 window.addEventListener('load',()=>{
   setLayout();
 })
 window.addEventListener('resize',setLayout);
 window.addEventListener('scroll',()=>{
   yOffset = window.pageYOffset;
   scrollLoop();
 })
})();