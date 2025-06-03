import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";
import "./Intro.css";
import { useRef, useState } from "react";
export default function Intro() {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef();
  const handlePlayVideo = () => {
    setPlayVideo((prevState) => !prevState);
    if (playVideo) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };
  return (
    <div className="app__video">
      <video src={meal} ref={videoRef} type="video/mp4" loop controls={false} />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handlePlayVideo}
        >
          {playVideo ? (
            <BsPauseFill color="#ffff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#ffff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
}
