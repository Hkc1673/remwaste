import { useRef } from "react";
import type { ISkipModalProps } from "../entities";
import { Loading } from "./Loading";
import { Modal } from "./Modal";

const SkipModal = ({
    size,
    setIsModalOpen,
    setIsVideoLoading,
    isVideoLoading
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
            {isVideoLoading && <Loading />}
            <video
                ref={videoRef}
                src={`https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes-video/${size}-yard-skip.mp4`}
                className="w-full h-auto rounded-lg mb-4 cursor-pointer"
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
        </Modal>
    );
};

export { SkipModal };