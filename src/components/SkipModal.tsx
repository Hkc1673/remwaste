import { useRef } from "react";
import type { ISkipModalProps } from "../entities";
import { Loading } from "./Loading";
import { Modal } from "./Modal";

const SkipModal = ({
  size,
  setIsModalOpen,
  setIsVideoLoading,
  isVideoLoading,
}: ISkipModalProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClose = () => {
    setIsModalOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsVideoLoading(true);
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().catch(console.error);
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <Modal isOpen={true} onClose={handleClose}>
      <h2 className="text-xl font-bold mb-4">{size} Yard Skip Size Guide</h2>
      <div className="relative w-full">
        {isVideoLoading && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-white bg-opacity-80 transition-opacity duration-500">
            <Loading />
          </div>
        )}
        <video
          ref={videoRef}
          src={`https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes-video/${size}-yard-skip.mp4`}
          className={`w-full h-auto rounded-lg mb-4 cursor-pointer transition-all duration-700 ease-in-out transform ${
            isVideoLoading ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
          controls={false}
          autoPlay
          loop
          playsInline
          muted
          onClick={handleVideoClick}
          onCanPlayThrough={() => setIsVideoLoading(false)}
          onLoadedData={() => {
            videoRef.current?.play().catch(console.error);
          }}
        />
      </div>
    </Modal>
  );
};

export { SkipModal };
