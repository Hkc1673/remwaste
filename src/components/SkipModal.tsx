import { useRef } from 'react';
import type { ISkipModalProps } from "../entities";
import { Loading } from "./Loading";

const SkipModal = ({
    size,
    setIsModalOpen,
    setIsVideoLoading,
    isVideoLoading
} : ISkipModalProps) => {

    const videoRef = useRef<HTMLVideoElement>(null);

    const handleCloseVideoModal = () => {
        setIsModalOpen(false);
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
        setIsVideoLoading(true);
    };

    const handleVideoClickInModal = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play().catch(error => {
                    console.error("Error attempting to play video:", error);
                });
            } else {
                videoRef.current.pause();
            }
        }
    };

    return (
        <>
            <div
                className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50 p-4"
                onClick={handleCloseVideoModal}
            >
                <div
                    className="bg-white rounded-lg p-8 min-h-max max-w-2xl w-full relative"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        onClick={handleCloseVideoModal}
                        className="absolute top-1 right-4 text-gray-700 hover:text-gray-900 text-3xl font-bold hover:cursor-pointer hover:scale-110 transition-transform"
                    >
                        &times;
                    </button>
                    <h2 className="text-xl font-bold mb-4">{size} Yard Skip Size Guide</h2>
                    { isVideoLoading && <Loading/> }
                    <video
                        ref={videoRef}
                        src={`https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes-video/${size}-yard-skip.mp4`}
                        className="w-full h-auto rounded-lg mb-4 cursor-pointer"
                        controls={false}
                        autoPlay
                        loop
                        playsInline
                        muted
                        onClick={handleVideoClickInModal}
                        onCanPlayThrough={() => setIsVideoLoading(false)}
                        onLoadedData={() => {
                            if (videoRef.current) {
                                videoRef.current.play().catch(error => {
                                    console.error("Autoplay prevented:", error);
                                });
                            }
                        }}
                    ></video>
                </div>
            </div>
        </>
    );
};

export { SkipModal };