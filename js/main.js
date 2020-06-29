(()=>{
  let yOffset=0;
  let heightNumber = 5;
  let currentScene=0;
  let prevTotalScrollHeight=0;
  
  // 20200626 이미지를 담고 있는 배열 생성
  const setCanvas = ()=>{
    let image;
    for (let i=0;i<infoArr[0].values.videoImageCount;i++) {
      image =new Image();
      image.src = `../video/001/IMG_${6726+i}.JPG`;
      infoArr[0].objs.videoImages.push(image);
    }
    for (let i=0;i<infoArr[2].values.videoImageCount;i++) {
      image =new Image();
      image.src = `../video/002/IMG_${7027+i}.JPG`;
      infoArr[2].objs.videoImages.push(image);
    }
    for (let i=0;i<infoArr[3].values.videoImageCount;i++) {
      image =new Image();
      image.src = `../images/blend-image-${i+1}.jpg`;
      infoArr[3].objs.videoImages.push(image);
    }
  }
  
  //20200625 초기 각 섹션의 Layout을 설정,패이지 로드시 몇번째 섹션에 있는지 체크해주는 역할
  const setLayout = ()=>{
    
    infoArr.forEach((item)=>{
      const target = item.objs.target;
      switch (item.type) {
        case 'sticky':
          item.scrollHeight = window.innerHeight * heightNumber;
          break;
        default:
          item.scrollHeight = target.clientHeight;
      }
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
    //20200626 캔버스를 화면 크기에 맞춰 축소시켜주고 가운데로 위치 조정해줌
    const canvasRatio = window.innerHeight/infoArr[0].objs.canvas.height;
    infoArr[0].objs.canvas.style.transform = `translate(-50%,-50%) scale(${canvasRatio})`;
    infoArr[2].objs.canvas.style.transform = `translate(-50%,-50%) scale(${canvasRatio})`;
    document.body.setAttribute('id',`show-scene-${currentScene}`)
}
  //20200625 애니메이션 효과/현재 섹션에서 스크롤의 높이를 받는다
  //섹션 넘버가 큰->작은 녀석이 될 때 scrollRatio값이 음수기에 scrollLoop에 enterToNewScene변수 추가


  //20200625 애니메이션 종류/해당 섹션의 스크롤 비율 따라 다른 애니메이션을 실행시키는 함수,scrollLoop 실행시마다 같이 실행
  const playAnimation =(yOffset,prevTotalScrollHeight)=>{
    const objs = infoArr[currentScene].objs;
    const values = infoArr[currentScene].values;
    const currentPageYOffset = yOffset - prevTotalScrollHeight;
    const sectionScrollRatio = currentPageYOffset / infoArr[currentScene].scrollHeight;
    switch (currentScene) {
      case 0:
        const scene1_CanvasImageIndex=Math.floor(calcValue(values.imageSequence,currentPageYOffset,currentScene));
        objs.context.drawImage(objs.videoImages[scene1_CanvasImageIndex],0,0);
        objs.canvas.style.opacity = calcValue(values.canvas_opacity,currentPageYOffset,currentScene);
        //sectionScrollRatio / target / value / refactoring위한 변수들
        if (sectionScrollRatio < 0.22) {
          objs.messageA.style.opacity = calcValue(values.messageA_opacityIn, currentPageYOffset,currentScene);
          objs.messageA.style.transform = `translateY(${calcValue(values.messageA_translateIn, currentPageYOffset,currentScene)}%)`;
        } else {
          objs.messageA.style.opacity = calcValue(values.messageA_opacityOut, currentPageYOffset,currentScene);
          objs.messageA.style.transform = `translateY(${calcValue(values.messageA_translateOut, currentPageYOffset,currentScene)}%)`;
        }
        if (sectionScrollRatio <0.42) {
          objs.messageB.style.opacity = calcValue(values.messageB_opacityIn, currentPageYOffset,currentScene);
          objs.messageB.style.transform = `translateY(${calcValue(values.messageB_translateIn, currentPageYOffset,currentScene)}%)`;
        } else {
          objs.messageB.style.opacity = calcValue(values.messageB_opacityOut, currentPageYOffset,currentScene);
          objs.messageB.style.transform = `translateY(${calcValue(values.messageB_translateOut, currentPageYOffset,currentScene)}%)`;
        }
        if (sectionScrollRatio < 0.62) {
          objs.messageC.style.opacity = calcValue(values.messageC_opacityIn, currentPageYOffset,currentScene);
          objs.messageC.style.transform = `translateY(${calcValue(values.messageC_translateIn, currentPageYOffset,currentScene)}%)`;
        } else {
          objs.messageC.style.opacity = calcValue(values.messageC_opacityOut, currentPageYOffset,currentScene);
          objs.messageC.style.transform = `translateY(${calcValue(values.messageC_translateOut, currentPageYOffset,currentScene)}%)`;
        }
        if (sectionScrollRatio < 0.82) {
          objs.messageD.style.opacity = calcValue(values.messageD_opacityIn, currentPageYOffset,currentScene);
          objs.messageD.style.transform = `translateY(${calcValue(values.messageD_translateIn, currentPageYOffset,currentScene)}%)`;
        } else {
          objs.messageD.style.opacity = calcValue(values.messageD_opacityOut, currentPageYOffset,currentScene);
          objs.messageD.style.transform = `translateY(${calcValue(values.messageD_translateOut, currentPageYOffset,currentScene)}%)`;
        }
        break;
      case 2:
          const scene3_CanvasImageIndex = Math.floor(calcValue(values.imageSequence,currentPageYOffset,currentScene));
          objs.context.drawImage(objs.videoImages[scene3_CanvasImageIndex],0,0);

          if (sectionScrollRatio < 0.25) {
            objs.canvas.style.opacity = calcValue(values.canvas_opacityIn,currentPageYOffset,currentScene);
            objs.messageA.style.opacity = calcValue(values.messageA_opacityIn, currentPageYOffset,currentScene);
            objs.messageA.style.transform = `translateY(${calcValue(values.messageA_translateIn, currentPageYOffset,currentScene)}%)`;
          } else {
            objs.messageA.style.opacity = calcValue(values.messageA_opacityOut, currentPageYOffset,currentScene);
            objs.messageA.style.transform = `translateY(${calcValue(values.messageA_translateOut, currentPageYOffset,currentScene)}%)`;
          }
          if (sectionScrollRatio < 0.38) {
            objs.messageB.style.opacity = calcValue(values.messageB_opacityIn, currentPageYOffset,currentScene);
            objs.messageB.style.transform = `translateY(${calcValue(values.messageB_translateIn, currentPageYOffset,currentScene)}%)`;
          } else {
            objs.messageB.style.opacity = calcValue(values.messageB_opacityOut, currentPageYOffset,currentScene);
            objs.messageB.style.transform = `translateY(${calcValue(values.messageB_translateOut, currentPageYOffset,currentScene)}%)`;
          }
          if (sectionScrollRatio < 0.68) {
            objs.messageC.style.opacity = calcValue(values.messageC_opacityIn, currentPageYOffset,currentScene);
            objs.messageC.style.transform = `translateY(${calcValue(values.messageC_translateIn, currentPageYOffset,currentScene)}%)`;
          } else {
            objs.canvas.style.opacity = calcValue(values.canvas_opacityOut, currentPageYOffset,currentScene);
            objs.messageC.style.opacity = calcValue(values.messageC_opacityOut, currentPageYOffset,currentScene);
            objs.messageC.style.transform = `translateY(${calcValue(values.messageC_translateOut, currentPageYOffset,currentScene)}%)`;
          }
        break;
      case 3:
        const scrollHeight =infoArr[currentScene].scrollHeight;
				const widthRatio = window.innerWidth / objs.canvas.width;
				const heightRatio = window.innerHeight / objs.canvas.height;
				let canvasScaleRatio;

				if (widthRatio <= heightRatio) {
					// 캔버스보다 브라우저 창이 홀쭉한 경우
          canvasScaleRatio = heightRatio;
          // console.log('decied HeightRatio', widthRatio, heightRatio)
				} else {
					// 캔버스보다 브라우저 창이 납작한 경우
          canvasScaleRatio = widthRatio;
          // console.log('decied WidthRatio',widthRatio,heightRatio)
        }
        //풀스크린시 widthRatio > heightRatio (0.75 > 0.63)임

        objs.canvas.style.transform = `scale(${heightRatio})`;
				objs.context.drawImage(objs.videoImages[0], 0, 0);
				objs.context.fillStyle = 'white';

        // 캔버스 사이즈에 맞춰 가정한 innerWidth와 innerHeight
				const recalculatedInnerWidth = document.body.offsetWidth / canvasScaleRatio;
        const recalculatedInnerHeight = window.innerHeight / canvasScaleRatio;
        const whiteRectWidth = recalculatedInnerWidth * 0.15;
        	if (!values.rectStartY) {
        	  values.rectStartY = objs.canvas.offsetTop + (objs.canvas.height - objs.canvas.height * canvasScaleRatio) / 2;
        	  values.rect1X[2].start = (window.innerHeight / 2) / scrollHeight;
        	  values.rect2X[2].start = (window.innerHeight / 2) / scrollHeight;
        	  values.rect1X[2].end = values.rectStartY / scrollHeight;
            values.rect2X[2].end = values.rectStartY / scrollHeight;
        	}
        values.rect1X[0] = (objs.canvas.width -recalculatedInnerWidth)/2;
        values.rect1X[1] = values.rect1X[0] - whiteRectWidth;
        values.rect2X[0] = values.rect1X[0] + recalculatedInnerWidth - whiteRectWidth;
        values.rect2X[1] = values.rect2X[0] + whiteRectWidth;
        objs.context.fillRect(
				  parseInt(calcValue(values.rect1X, currentPageYOffset,currentScene)),
				  0,
				  parseInt(whiteRectWidth),
				  objs.canvas.height
				);
				objs.context.fillRect(
				  parseInt(calcValue(values.rect2X, currentPageYOffset,currentScene)),
				  0,
				  parseInt(whiteRectWidth),
				  objs.canvas.height
				);
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
    /*페이지 로드 후 이미지 로드 완료 전까지 setLayout이 다 실행되기 전에 스크롤발생해서 scrollLoop실행되면
      167이 실행되서 infoArr[currentScene].scrollHeight가 초기값인 0으로만 뜨는 현상 발생
      로드가 다 된 후 스크롤 되게 해야할듯
    */
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
  setCanvas();
  window.addEventListener('load',()=>{
    setLayout();
    infoArr[0].objs.context.drawImage(infoArr[0].objs.videoImages[0],0,0);
    infoArr[2].objs.context.drawImage(infoArr[2].objs.videoImages[0],0,0);
 })
 window.addEventListener('resize',setLayout);
 window.addEventListener('scroll',()=>{
   yOffset = window.pageYOffset;
   scrollLoop();
 })
})();