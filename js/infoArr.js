  const infoArr = [{
      scrollHeight: 0,
      type: 'sticky',
      objs: {
        target: document.querySelector('#scroll-section-0'),
        messageA: document.querySelector('#scroll-section-0 .main-message.a'),
        messageB: document.querySelector('#scroll-section-0 .main-message.b'),
        messageC: document.querySelector('#scroll-section-0 .main-message.c'),
        messageD: document.querySelector('#scroll-section-0 .main-message.d'),
        canvas  : document.querySelector('#video-canvas-0'),
        context : document.querySelector('#video-canvas-0').getContext('2d'),
        videoImages :[]
      },
      values: {
        videoImageCount :300,
        imageSequence : [0,299],
        canvas_opacity :[1,0,{start:0.85,end:1}],
        messageA_opacityIn: [0, 1, {start: 0.1,end: 0.2}],
        messageB_opacityIn: [0, 1, {start: 0.3,end: 0.4}],
        messageC_opacityIn: [0, 1, {start: 0.5,end: 0.6}],
        messageD_opacityIn: [0, 1, {start: 0.7,end: 0.8}],
        messageA_translateIn: [20,0,{start:0.1, end:0.2}],
        messageB_translateIn: [20, 0, {start: 0.3,end: 0.4}],
        messageC_translateIn: [20, 0, {start: 0.5,end: 0.6}],
        messageD_translateIn: [20, 0, {start: 0.7,end: 0.8}],
        messageA_opacityOut: [1,0,{start: 0.25,end: 0.3}],
        messageB_opacityOut: [1, 0, {start: 0.45,end: 0.5}],
        messageC_opacityOut: [1, 0, {start: 0.65,end: 0.7}],
        messageD_opacityOut: [1, 0, {start: 0.85,end: 0.9}],
        messageA_translateOut:[0,-20,{start:0.25, end:0.3}],
        messageB_translateOut:[0,-20,{start:0.45, end:0.5}],
        messageC_translateOut:[0,-20,{start:0.65, end:0.7}],
        messageD_translateOut:[0,-20,{start:0.85, end:0.9}]
      }
    },
    {
      scrollHeight: 0,
      type: 'normal',
      objs: {
        target: document.querySelector('#scroll-section-1')
      }
    },
    {
      scrollHeight: 0,
      type: 'sticky',
      objs: {
        target: document.querySelector('#scroll-section-2'),
        messageA : document.querySelector('#scroll-section-2 .a'),
        messageB: document.querySelector('#scroll-section-2 .b'),
        messageC: document.querySelector('#scroll-section-2 .c'),
        pinB : document.querySelector('#scroll-section-2 .b .pin'),
        pinC: document.querySelector('#scroll-section-2 .c .pin'),
        canvas: document.querySelector('#video-canvas-1'),
        context: document.querySelector('#video-canvas-1').getContext('2d'),
        videoImages: []
      },
      values :{
        videoImageCount :960,
        imageSequence : [0,959],
        canvas_opacityIn :[0,1,{start:0,end:0.1}],
        canvas_opacityOut :[1,0,{start:0.85,end:1}],
        messageA_opacityIn: [0, 1, {start: 0.15,end: 0.25}],
        messageB_opacityIn: [0, 1, {start: 0.4,end: 0.5}],
        messageC_opacityIn: [0, 1, {start: 0.7,end: 0.8}],
        
        messageA_translateIn: [20,0,{start:0.15, end:0.25}],
        messageB_translateIn: [30, 0, {start: 0.4,end: 0.5}],
        messageC_translateIn: [30, 0, {start: 0.7,end: 0.8}],
        
        messageA_opacityOut: [1,0,{start: 0.3,end: 0.4}],
        messageB_opacityOut: [1, 0, {start: 0.55,end: 0.65}],
        messageC_opacityOut: [1, 0, {start: 0.8,end: 0.9}],

        messageA_translateOut:[0,-20,{start:0.3, end:0.4}],
        messageB_translateOut:[0,-20,{start:0.55, end:0.65}],
        messageC_translateOut:[0,-20,{start:0.8, end:0.9}],

        pinB_scaleY : [0.5,1,{start:0.5,end:0.55}],
        pinC_scaleY : [0.5,1,{start:0.72,end:0.77}],
        pinB_opacityIn :[0,1,{start:0.5,end:0.55}],
        pinC_opacityIn:[0,1,{start:0.72,end:0.77}],
        pinB_opacityOut :[1,0,{start: 0.58,end: 0.63}],
        pinC_opacityOut :[1,0,{start: 0.85,end: 0.9}]
      }
    },
    {
      scrollHeight: 0,
      type: 'sticky',
      objs: {
        target: document.querySelector('#scroll-section-3'),
        canvas: document.querySelector('.image-blend-canvas'),
        context: document.querySelector('.image-blend-canvas').getContext('2d'),
        canvasCaption : document.querySelector('.canvas-caption'),
        videoImages : []
      },
      values : {
        videoImageCount :2,
        rect1X :[0,0,{start:0,end:0}],
        rect2X :[0,0,{start:0,end:0}],
        blendHeight :[0,0,{start:0,end:0}],
        canvas_scale :[0,0,{start:0,end:0}],
        rectStartY :0,
        canvasCaption_opacity :[0,1,{start:0,end:0}],
        canvasCaption_translateY :[30,0,{start:0,end:0}]
      }
    }
  ]
