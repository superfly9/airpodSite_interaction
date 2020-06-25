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
    let sectionHeight = infoArr[currentScene].scrollHeight
    let scrollRatio = currentPageYOffset / sectionHeight;
    if (values.length === 3) {
      let animationStart = sectionHeight * values[2].start;
      let animationEnd = sectionHeight * values[2].end;
      let animationHeight =animationEnd - animationStart;
      if (currentPageYOffset>=animationStart && currentPageYOffset <=animationEnd) {
        result = (currentPageYOffset-animationStart)/animationHeight * (values[1]-values[0])+values[0];
      } else if (currentPageYOffset<animationStart) {
        result = values[0];
      } else {
        console.log(scrollRatio)
        result = values[1];
      }
    } else {
      result = scrollRatio * (values[1]-values[0]) +values[0];
    }
    return result;
  }

  //20200625 애니메이션 종류/해당 섹션의 스크롤 비율 따라 다른 애니메이션을 실행시키는 함수,scrollLoop 실행시마다 같이 실행
  const playAnimation =(yOffset,prevTotalScrollHeight)=>{
    const objs = infoArr[currentScene].objs;
    const values = infoArr[currentScene].values;
    const currentPageYOffset = yOffset - prevTotalScrollHeight;
    const sectionScrollRatio = currentPageYOffset / infoArr[currentScene].scrollHeight;
    switch (currentScene) {
      case 0:
        const messageA_opacityIn=calcValue(values.messageA_opacityIn,currentPageYOffset);
        const messageA_opacityOut=calcValue(values.messageA_opacityOut,currentPageYOffset);
        if (sectionScrollRatio < 0.22) {
          objs.messageA.style.opacity = messageA_opacityIn;
        } else {
          // console.log(sectionScrollRatio, 'Check!', objs.messageA.style.opacity )
          objs.messageA.style.opacity =messageA_opacityOut;
        } 
        break;
      case 1:
        break;
      case 2:
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