const playAnimation = (currentScene,yOffset, prevTotalScrollHeight) => {
  const objs = infoArr[currentScene].objs;
  const values = infoArr[currentScene].values;
  const currentPageYOffset = yOffset - prevTotalScrollHeight;
  let scrollHeight = infoArr[currentScene].scrollHeight;
  const sectionScrollRatio = currentPageYOffset / scrollHeight;
  switch (currentScene) {
    case 0:
      objs.canvas.style.opacity = calcValue(values.canvas_opacity, currentPageYOffset, currentScene);
      //sectionScrollRatio / target / value / refactoring위한 변수들
      if (sectionScrollRatio < 0.22) {
        objs.messageA.style.opacity = calcValue(values.messageA_opacityIn, currentPageYOffset, currentScene);
        objs.messageA.style.transform = `translateY(${calcValue(values.messageA_translateIn, currentPageYOffset,currentScene)}%)`;
      } else {
        objs.messageA.style.opacity = calcValue(values.messageA_opacityOut, currentPageYOffset, currentScene);
        objs.messageA.style.transform = `translateY(${calcValue(values.messageA_translateOut, currentPageYOffset,currentScene)}%)`;
      }
      if (sectionScrollRatio < 0.42) {
        objs.messageB.style.opacity = calcValue(values.messageB_opacityIn, currentPageYOffset, currentScene);
        objs.messageB.style.transform = `translateY(${calcValue(values.messageB_translateIn, currentPageYOffset,currentScene)}%)`;
      } else {
        objs.messageB.style.opacity = calcValue(values.messageB_opacityOut, currentPageYOffset, currentScene);
        objs.messageB.style.transform = `translateY(${calcValue(values.messageB_translateOut, currentPageYOffset,currentScene)}%)`;
      }
      if (sectionScrollRatio < 0.62) {
        objs.messageC.style.opacity = calcValue(values.messageC_opacityIn, currentPageYOffset, currentScene);
        objs.messageC.style.transform = `translateY(${calcValue(values.messageC_translateIn, currentPageYOffset,currentScene)}%)`;
      } else {
        objs.messageC.style.opacity = calcValue(values.messageC_opacityOut, currentPageYOffset, currentScene);
        objs.messageC.style.transform = `translateY(${calcValue(values.messageC_translateOut, currentPageYOffset,currentScene)}%)`;
      }
      if (sectionScrollRatio < 0.82) {
        objs.messageD.style.opacity = calcValue(values.messageD_opacityIn, currentPageYOffset, currentScene);
        objs.messageD.style.transform = `translateY(${calcValue(values.messageD_translateIn, currentPageYOffset,currentScene)}%)`;
      } else {
        objs.messageD.style.opacity = calcValue(values.messageD_opacityOut, currentPageYOffset, currentScene);
        objs.messageD.style.transform = `translateY(${calcValue(values.messageD_translateOut, currentPageYOffset,currentScene)}%)`;
      }
      break;
    case 2:
      if (sectionScrollRatio < 0.25) {
        objs.canvas.style.opacity = calcValue(values.canvas_opacityIn, currentPageYOffset, currentScene);
        objs.messageA.style.opacity = calcValue(values.messageA_opacityIn, currentPageYOffset, currentScene);
        objs.messageA.style.transform = `translateY(${calcValue(values.messageA_translateIn, currentPageYOffset,currentScene)}%)`;
      } else {
        objs.messageA.style.opacity = calcValue(values.messageA_opacityOut, currentPageYOffset, currentScene);
        objs.messageA.style.transform = `translateY(${calcValue(values.messageA_translateOut, currentPageYOffset,currentScene)}%)`;
      }
      if (sectionScrollRatio < 0.38) {
        objs.messageB.style.opacity = calcValue(values.messageB_opacityIn, currentPageYOffset, currentScene);
        objs.messageB.style.transform = `translateY(${calcValue(values.messageB_translateIn, currentPageYOffset,currentScene)}%)`;
      } else {
        objs.messageB.style.opacity = calcValue(values.messageB_opacityOut, currentPageYOffset, currentScene);
        objs.messageB.style.transform = `translateY(${calcValue(values.messageB_translateOut, currentPageYOffset,currentScene)}%)`;
      }
      if (sectionScrollRatio < 0.68) {
        objs.messageC.style.opacity = calcValue(values.messageC_opacityIn, currentPageYOffset, currentScene);
        objs.messageC.style.transform = `translateY(${calcValue(values.messageC_translateIn, currentPageYOffset,currentScene)}%)`;
      } else {
        objs.canvas.style.opacity = calcValue(values.canvas_opacityOut, currentPageYOffset, currentScene);
        objs.messageC.style.opacity = calcValue(values.messageC_opacityOut, currentPageYOffset, currentScene);
        objs.messageC.style.transform = `translateY(${calcValue(values.messageC_translateOut, currentPageYOffset,currentScene)}%)`;
      }
      //2번이 끝나갈때쯤 캔버스 그려주기
      if (sectionScrollRatio > 0.9) {
        const objs = infoArr[3].objs;
        const values = infoArr[3].values;
        const widthRatio = window.innerWidth / objs.canvas.width;
        const heightRatio = window.innerHeight / objs.canvas.height;

        let canvasScaleRatio;
        if (widthRatio <= heightRatio) {
          canvasScaleRatio = heightRatio;
        } else {
          canvasScaleRatio = widthRatio;
        }
        objs.canvas.style.transform = `scale(${canvasScaleRatio})`;
        objs.context.fillStyle = 'white';
        objs.context.drawImage(objs.videoImages[0], 0, 0);
        const recalculatedInnerWidth = document.body.offsetWidth / canvasScaleRatio;
        const whiteRectWidth = recalculatedInnerWidth * 0.15;
        values.rect1X[0] = (objs.canvas.width - recalculatedInnerWidth) / 2;
        values.rect1X[1] = values.rect1X[0] - whiteRectWidth;
        values.rect2X[0] = values.rect1X[0] + recalculatedInnerWidth - whiteRectWidth;
        values.rect2X[1] = values.rect2X[0] + whiteRectWidth;
        objs.context.fillRect(
          parseInt(values.rect1X[0]),
          0,
          parseInt(whiteRectWidth),
          objs.canvas.height
        );
        objs.context.fillRect(
          parseInt(values.rect2X[0]),
          0,
          parseInt(whiteRectWidth),
          objs.canvas.height
        );

      }
      break;
    case 3:
      const widthRatio = window.innerWidth / objs.canvas.width;
      const heightRatio = window.innerHeight / objs.canvas.height;

      let canvasScaleRatio;

      if (widthRatio <= heightRatio) {
        // 캔버스보다 브라우저 창이 홀쭉한 경우
        canvasScaleRatio = heightRatio;
      } else {
        // 캔버스보다 브라우저 창이 납작한 경우
        canvasScaleRatio = widthRatio;
      }
      //풀스크린시 widthRatio > heightRatio (0.75 > 0.63)임

      objs.canvas.style.transform = `scale(${canvasScaleRatio})`;
      objs.context.drawImage(objs.videoImages[0], 0, 0);
      console.log(objs.videoImages[0]);
      objs.context.fillStyle = 'white';

      // 캔버스 사이즈에 맞춰 가정한 innerWidth와 innerHeight
      const recalculatedInnerWidth = innerWidth / canvasScaleRatio;
      const whiteRectWidth = recalculatedInnerWidth * 0.15;
      // alert(`${document.body.offsetWidth}vs${recalculatedInnerWidth}vs${whiteRectWidth} ${widthRatio} ${heightRatio}`);
      // FullScrenn  :   1425 , 1900, 285 , 0.75 , 0.63
      if (!values.rectStartY) {
        values.rectStartY = objs.canvas.offsetTop + (objs.canvas.height - objs.canvas.height * canvasScaleRatio) / 2;
        values.rect1X[2].start = (window.innerHeight / 2) / scrollHeight;
        values.rect2X[2].start = (window.innerHeight / 2) / scrollHeight;
        values.rect1X[2].end = values.rectStartY / scrollHeight;
        values.rect2X[2].end = values.rectStartY / scrollHeight;
      }
      values.rect1X[0] = (objs.canvas.width - recalculatedInnerWidth) / 2;
      values.rect1X[1] = values.rect1X[0] - whiteRectWidth;
      values.rect2X[0] = values.rect1X[0] + recalculatedInnerWidth - whiteRectWidth;
      values.rect2X[1] = values.rect2X[0] + whiteRectWidth;
      // alert(`${values.rect1X} ${values.rect2X}`);
      //fullScren 1X =>10,-275 2x=>1625,1910

      objs.context.fillRect(
        parseInt(calcValue(values.rect1X, currentPageYOffset, currentScene)),
        0,
        parseInt(whiteRectWidth),
        objs.canvas.height
      );
      objs.context.fillRect(
        parseInt(calcValue(values.rect2X, currentPageYOffset, currentScene)),
        0,
        parseInt(whiteRectWidth),
        objs.canvas.height
      );
      if (sectionScrollRatio < values.rect2X[2].end && values.rect2X[2].end > 0) {
        objs.canvas.classList.remove('sticky');
      } else {
        values.blendHeight[0] = 0;
        values.blendHeight[1] = objs.canvas.height;
        values.blendHeight[2].start = values.rect1X[2].end;
        values.blendHeight[2].end = values.blendHeight[2].start + 0.2;
        const blendHeight = calcValue(values.blendHeight, currentPageYOffset, currentScene);
        // console.log(blendHeight,'blendHeight',values.blendHeight)
        //blendHeight = [0,1080,{start :0.22 ,end:0.42}]
        objs.context.drawImage(objs.videoImages[1],
          0, objs.canvas.height - blendHeight, objs.canvas.width, blendHeight,
          0, objs.canvas.height - blendHeight, objs.canvas.width, blendHeight
        );
        objs.canvas.classList.add('sticky');
        objs.canvas.style.top = `-${(objs.canvas.height - objs.canvas.height* canvasScaleRatio)/2}px`
      }
      if (sectionScrollRatio > values.blendHeight[2].end && values.blendHeight[2].end > 0) {
        values.canvas_scale[0] = canvasScaleRatio;
        values.canvas_scale[1] = document.body.offsetWidth / (objs.canvas.width * 1.5);
        values.canvas_scale[2].start = values.blendHeight[2].end;
        values.canvas_scale[2].end = values.canvas_scale[2].start + 0.2;
        objs.canvas.style.transform = `scale(${calcValue(values.canvas_scale,currentPageYOffset,currentScene)})`;
        objs.canvas.style.marginTop = 0;
      }
      if (sectionScrollRatio > values.canvas_scale[2].end &&
        values.canvas_scale[2].end > 0) {
        objs.canvas.classList.remove('sticky');
        objs.canvas.style.marginTop = `${scrollHeight * 0.4}px`
        values.canvasCaption_opacity[2].start = values.canvas_scale[2].end;
        values.canvasCaption_opacity[2].end = values.canvasCaption_opacity[2].start + 0.1;
        objs.canvasCaption.style.opacity = calcValue(values.canvasCaption_opacity, currentPageYOffset, currentScene);

        values.canvasCaption_translateY[2].start = values.canvasCaption_opacity[2].start;
        values.canvasCaption_translateY[2].end = values.canvasCaption_opacity[2].end;
        objs.canvasCaption.style.transform = `translateY(${calcValue(values.canvasCaption_translateY, currentPageYOffset, currentScene)}%)`;
      }
      break;

  }
}