import { FaceLandmarker, FilesetResolver, DrawingUtils } from "@mediapipe/tasks-vision";
// const  = vision;

export const createFaceLandmarker = async () => {
  const filesetResolver = await FilesetResolver.forVisionTasks(
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm"
  );
  const faceLandmarker = await FaceLandmarker.createFromOptions(filesetResolver, {
    baseOptions: {
      modelAssetPath: `https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task`,
      delegate: "GPU",
    },
    outputFaceBlendshapes: true,
    runningMode: "VIDEO",
    numFaces: 1,
  });

  return faceLandmarker;
};

let lastVideoTime = -1;
let results = undefined;

export const predictWebcam = (faceLandmarker, video, handleResults) => {
  let startTimeMs = performance.now();
  if (lastVideoTime !== video.currentTime) {
    lastVideoTime = video.currentTime;
    results = faceLandmarker.detectForVideo(video, startTimeMs);

    // console.log(results);
    handleResults(results);
  }

  window.requestAnimationFrame(() => predictWebcam(faceLandmarker, video, handleResults));
};
