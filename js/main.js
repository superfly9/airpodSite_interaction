(()=>{
  let yOffset=0;
  let heightNumber = 5;
  let currentScene=0;
  let prevTotalScrollHeight=0;
  let rafState;
  let rafId;
  let acc = 0.1;
  let delayedYOffset = 0;
  let enterToNewScene;

  //20200625,Scroll Action을 통해 활성화될 신을 결정+스크롤 액션마다 애니메이션 실행시키는 함수
  const scrollLoop = () => {
    enterToNewScene = false;
    prevTotalScrollHeight = 0;
    for (let i = 0; i < currentScene; i++) {
      prevTotalScrollHeight += infoArr[i].scrollHeight;
    }
    /*페이지 로드 후 이미지 로드 완료 전까지 setLayout이 다 실행되기 전에 스크롤발생해서 scrollLoop실행되면
    167이 실행되서 infoArr[currentScene].scrollHeight가 초기값인 0으로만 뜨는 현상 발생
    로드가 다 된 후 스크롤 되게 해야할듯
    */
  if (delayedYOffset > prevTotalScrollHeight + infoArr[currentScene].scrollHeight) {
    currentScene++;
    enterToNewScene = true;
    document.body.setAttribute('id', `show-scene-${currentScene}`);
    }
    if (delayedYOffset < prevTotalScrollHeight) {
      if (currentScene === 0) return;
      currentScene--;
      enterToNewScene = true;
      document.body.setAttribute('id', `show-scene-${currentScene}`);
    }
    //enterToNewScene true된 후 다시 false되야
    if (enterToNewScene) return;
    playAnimation(currentScene,yOffset, prevTotalScrollHeight);
  }
  const checkMenu =(yOffset)=>{
    if (yOffset>44) {
      document.body.classList.add('local-nav-sticky');
    } else {
      document.body.classList.remove('local-nav-sticky');
    }
  }
  const loop = () => {
    const objs = infoArr[currentScene].objs;
    const values = infoArr[currentScene].values;
    const currentPageYOffset = yOffset - prevTotalScrollHeight;
    delayedYOffset =  delayedYOffset + (yOffset - delayedYOffset) * acc;
    if (!enterToNewScene) {
      if (currentScene===0 || currentScene===2) {
        const scene1_CanvasImageIndex = Math.floor(calcValue(values.imageSequence, currentPageYOffset, currentScene));
        if (objs.videoImages[scene1_CanvasImageIndex]) {
          objs.context.drawImage(objs.videoImages[scene1_CanvasImageIndex], 0, 0);
        }
      }
    }
    rafId = requestAnimationFrame(loop);
    if (Math.abs(yOffset  - delayedYOffset)<1) {
      cancelAnimationFrame(rafId);
      rafState = false;
    } 
  }
  window.addEventListener('load',()=>{
    setLayout(heightNumber);
    infoArr[0].objs.context.drawImage(infoArr[0].objs.videoImages[0],0,0);
    infoArr[2].objs.context.drawImage(infoArr[2].objs.videoImages[0],0,0);
    window.addEventListener('scroll',()=>{
      yOffset = window.pageYOffset;
      scrollLoop();
      checkMenu(yOffset);
      if (!rafState) {
        rafId =requestAnimationFrame(loop);
        rafState = true;
      }
    })
    window.addEventListener('resize',()=>{
      if (window.innerWidth > 900) {
        setLayout();
        infoArr[3].values.rectStartY = 0;
      }
    });
    //핸드폰의 화면의 회전될 때만 layOut다시 구성
    window.addEventListener('orientationchange',()=>{
      setTimeout(setLayout,500);
    });
  })
  setCanvas();
})();