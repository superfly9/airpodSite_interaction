  //20200625 초기 각 섹션의 Layout을 설정,패이지 로드시 몇번째 섹션에 있는지 체크해주는 역할
  const setLayout = (heightNumber) => {

    infoArr.forEach((item) => {
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

    let initialTotalScroll = 0;
    for (let i = 0; i < infoArr.length; i++) {
      initialTotalScroll += infoArr[i].scrollHeight;
      // 해당 섹션까지의 높이합이 현재 스크롤의 위치보다 크다면 해당섹션의 현재 섹션으로 결정
      if (initialTotalScroll > window.pageYOffset) {
        currentScene = i;
        break;
      }
    }
    //20200626 캔버스를 화면 크기에 맞춰 축소시켜주고 가운데로 위치 조정해줌
    const canvasRatio = window.innerHeight / infoArr[0].objs.canvas.height;
    infoArr[0].objs.canvas.style.transform = `translate(-50%,-50%) scale(${canvasRatio})`;
    infoArr[2].objs.canvas.style.transform = `translate(-50%,-50%) scale(${canvasRatio})`;
    document.body.setAttribute('id', `show-scene-${currentScene}`)
  }