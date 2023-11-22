import { useRef, useState } from "react";
import "./App.css";

import Webcam from "react-webcam";

import { createFaceLandmarker, predictWebcam } from "./helpers/modelHelpers";

function App() {
  const webcamRef = useRef();
  const [faceFeatures, setFaceFeatures] = useState({ mouth: 0, eyeLeft: 0, eyeRight: 0 });

  const mouthCSS = {
    height: faceFeatures.mouth * 200,
    border: "10px solid white",
    width: 300,
  };
  const eyeLeftCSS = {
    height: (1 - faceFeatures.eyeLeft) * 100,
    border: "10px solid white",
    width: 100,
  };
  const eyeRightCSS = {
    height: (1 - faceFeatures.eyeRight) * 100,
    border: "10px solid white",
    width: 100,
  };

  const handleResults = (results) => {
    const mouth = results?.faceBlendshapes[0]?.categories[25]?.score;
    // const mouth = results?.faceBlendshapes[0]?.categories[27]?.score;
    const eyeLeft = results?.faceBlendshapes[0]?.categories[9]?.score;
    const eyeRight = results?.faceBlendshapes[0]?.categories[10]?.score;

    setFaceFeatures({ mouth, eyeLeft, eyeRight });
  };

  const handleWebcam = () => {
    console.log(webcamRef.current);
    createFaceLandmarker().then((faceLandmarker) =>
      predictWebcam(faceLandmarker, webcamRef.current.video, handleResults)
    );
  };

  return (
    <>
      <header>
        <h1>Super VTuber of destiny</h1>
      </header>
      <main>
        <section className="Avatar" style={{ margin: "5em" }}>
          <div style={eyeLeftCSS}></div>
          <div style={eyeRightCSS}></div>
          <div style={mouthCSS}></div>
        </section>
        <section className="Webcam">
          <Webcam
            ref={webcamRef}
            style={{ width: "100%", height: "auto" }}
            onUserMedia={handleWebcam}
          />
        </section>
      </main>
    </>
  );
}

export default App;
