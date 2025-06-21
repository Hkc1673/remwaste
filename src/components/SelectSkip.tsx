import { useEffect, useState } from "react";
import type { ISelectSkipProps, ISkip } from "../entities";
import { useSkips } from "../services";
import { Loading } from "./Loading";
import { SkipCard } from "./SkipCard";
import { SkipModal } from "./SkipModal.tsx";

const SelectSkip = ({ setSelectedActionItem, selectedActionItem }: ISelectSkipProps)  => {

    const { getSkips, loading, skips } = useSkips();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isVideoLoading, setIsVideoLoading] = useState(true);
    const [selectedVideoSize, setSelectedVideoSize] = useState<number | null>(null);

    useEffect(() => {
        getSkips();
    }, []);

    const handleSelect = (skip: ISkip) => {
        if( selectedActionItem?.id === skip?.id) {
            setSelectedActionItem(null);
            return setSelectedActionItem(null)
        }
        setSelectedActionItem(skip);
        setSelectedActionItem(skip);
    };

    const handleOpenVideoModal = (event: React.MouseEvent, size: number) => {
        event.stopPropagation();
        setSelectedVideoSize(size);
        setIsModalOpen(true);
        setIsVideoLoading(true);
    };

    if (loading) {
        return <Loading message="Skips loading" />;
    }

    if (!skips || skips.length === 0) {
        return <p>No skips available.</p>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {skips.map((skip) => (
                <SkipCard
                    skip={skip}
                    key={skip.id}
                    onSelect={handleSelect}
                    isSelected={selectedActionItem?.id === skip.id}
                    handleOpenVideoModal={handleOpenVideoModal}
                />
            ))}
            {
                isModalOpen && <SkipModal
                    size={selectedVideoSize}
                    setIsModalOpen={setIsModalOpen}
                    setIsVideoLoading={setIsVideoLoading}
                    isVideoLoading={isVideoLoading}
                />
            }
        </div>
    );
};

export { SelectSkip };