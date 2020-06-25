(()=>{
  let yOffset=0;
  let heightNumber = 5;
  let currentScene=0;
  let prevTotalScrollHeight=0;
  //20200625 초기 각 섹션의 Layout을 설정,패이지 로드시 몇번째 섹션에 있는지 체크해주는 역할
  
  const setLayout = ()=>{
    
    infoArr.forEach((item)=>{
      const target = item.objs.target;
      item.scrollHeight = window.innerHeight * heightNumber;
      target.style.height = `${item.scrollHeight}px`
    });
    
    yOffset=window.pageYOffset;
    let initialToTalScroll = 0;
    for (let i=0;i<infoArr.length;i++) {
      initialToTalScroll+=infoArr[i].scrollHeight;
      // 해당 섹션까지의 높이합이 현재 스크롤의 위치보다 크다면 해당섹션의 현재 섹션으로 결정
      if (initialToTalScroll>yOffset) {
        currentScene = i;
        break;
      }
    }
    document.body.setAttribute('id',`show-scene-${currentScene}`)
}
  //20200625 애니메이션 효과/현재 섹션에서 스크롤의 높이를 받는다
  //섹션 넘버가 큰->작은 녀석이 될 때 scrollRatio값이 음수기에 scrollLoop에 enterToNewScene변수 추가
  const calcValue =(values,currentPageYOffset)=>{
    let result;
    let scrollRatio = currentPageYOffset / infoArr[currentScene].scrollHeight;
    
    return result;
  }

  //20200625 애니메이션 종류/해당 섹션의 스크롤 비율 따라 다른 애니메이션을 실행시키는 함수,scrollLoop 실행시마다 같이 실행
  const playAnimation =(yOffset,prevTotalScrollHeight)=>{
    const objs = infoArr[currentScene].objs;
    const values = infoArr[currentScene].values;
    const currentPageYOffset = yOffset - prevTotalScrollHeight
    switch (currentScene) {
      case 0:
        calcValue(values,currentPageYOffset);
        break;
      case 1:
        calcValue(values, currentPageYOffset);
        break;
      case 2:
        calcValue(values, currentPageYOffset);
        break;
      case 3:
        break;
    }
  }
  //20200625,Scroll Action을 통해 활성화될 신을 결정+스크롤 액션마다 애니메이션 실행시키는 함수
  function scrollLoop() {
    let enterToNewScene = false;
    prevTotalScrollHeight = 0;
    for (let i = 0;i<currentScene;i++) {
      prevTotalScrollHeight += infoArr[i].scrollHeight;
    }
    if (yOffset > prevTotalScrollHeight + infoArr[currentScene].scrollHeight) {
      currentScene++; 
      enterToNewScene=true;
      document.body.setAttribute('id',`show-scene-${currentScene}`);
    }
    if (yOffset < prevTotalScrollHeight) {
      if (currentScene === 0) return;
      currentScene--;
      enterToNewScene=true;
      document.body.setAttribute('id', `show-scene-${currentScene}`);
    }
    if (enterToNewScene) return;
    playAnimation(yOffset,prevTotalScrollHeight);
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