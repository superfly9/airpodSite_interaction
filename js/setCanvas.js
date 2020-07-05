  const setCanvas = () => {
    let image;
    for (let i = 0; i < infoArr[0].values.videoImageCount; i++) {
      image = new Image();
      image.src = `../video/001/IMG_${6726+i}.JPG`;
      infoArr[0].objs.videoImages.push(image);
    }
    for (let i = 0; i < infoArr[2].values.videoImageCount; i++) {
      image = new Image();
      image.src = `../video/002/IMG_${7027+i}.JPG`;
      infoArr[2].objs.videoImages.push(image);
    }
    for (let i = 0; i < infoArr[3].values.videoImageCount; i++) {
      image = new Image();
      image.src = `../images/blend-image-${i+1}.jpg`;
      infoArr[3].objs.videoImages.push(image);
    }
  }