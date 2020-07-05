//20200625,Scroll Action을 통해 활성화될 신을 결정+스크롤 액션마다 애니메이션 실행시키는 함수
const scrollLoop = (prevTotalScrollHeight, currentScene,yOffset,playAnimation) => {
  let enterToNewScene = false;
  prevTotalScrollHeight = 0;
  for (let i = 0; i < currentScene; i++) {
    prevTotalScrollHeight += infoArr[i].scrollHeight;
  }
  /*페이지 로드 후 이미지 로드 완료 전까지 setLayout이 다 실행되기 전에 스크롤발생해서 scrollLoop실행되면
  167이 실행되서 infoArr[currentScene].scrollHeight가 초기값인 0으로만 뜨는 현상 발생
  로드가 다 된 후 스크롤 되게 해야할듯
  */
 if (yOffset > prevTotalScrollHeight + infoArr[currentScene].scrollHeight) {
   currentScene++;
   enterToNewScene = true;
   document.body.setAttribute('id', `show-scene-${currentScene}`);
  }
  if (yOffset < prevTotalScrollHeight) {
    if (currentScene === 0) return;
    currentScene--;
    enterToNewScene = true;
    document.body.setAttribute('id', `show-scene-${currentScene}`);
  }
  console.log(prevTotalScrollHeight,currentScene,playAnimation,enterToNewScene)
  if (enterToNewScene) return;
  playAnimation(yOffset, prevTotalScrollHeight);
}