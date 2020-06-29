  const calcValue = (values, currentPageYOffset,currentScene) => {
    let result;
    let sectionHeight = infoArr[currentScene].scrollHeight;
    let scrollRatio = currentPageYOffset / sectionHeight;
    if (values.length === 3) {
      let animationStart = sectionHeight * values[2].start;
      let animationEnd = sectionHeight * values[2].end;
      let animationHeight = animationEnd - animationStart;
      if (currentPageYOffset >= animationStart && currentPageYOffset <= animationEnd) {
        result = (currentPageYOffset - animationStart) / animationHeight * (values[1] - values[0]) + values[0];
      } else if (currentPageYOffset < animationStart) {
        result = values[0];
      } else {
        result = values[1];
      }
    } else {
      result = scrollRatio * (values[1] - values[0]) + values[0];
    }
    return result;
  }