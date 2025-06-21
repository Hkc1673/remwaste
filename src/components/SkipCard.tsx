import type { ISkipCardProps } from "../entities";

const SkipCard = ({
    skip,
    onSelect,
    isSelected,
    handleOpenVideoModal
} : ISkipCardProps) => {

    const handleSelect = () => {
        onSelect?.(skip);
    };

    return (
        <div
            className={`relative w-full cursor-pointer rounded-lg p-2 transition hover:shadow-xl ${
                isSelected
                    ? "border-blue-600 shadow-lg bg-blue-50"
                    : "border-gray-200 bg-white"
            }`}
            onClick={handleSelect}
        >
            <img
                src={`https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${skip?.size}-yard-skip.jpg`}
                alt={`${skip?.size} Yard Skip`}
                className="object-fit rounded-lg mb-4 h-44 w-full"
            />
            <div
                className="absolute h-44 inset-0 bg-transparent flex items-center justify-center rounded-lg cursor-pointer text-white text-lg font-bold opacity-0 hover:opacity-100 transition-opacity"
                onClick={(e) => handleOpenVideoModal(e, skip?.size)}
            >
                Click for size guide
            </div>
            <div className="flex justify-between items-center mb-1">
                <h3 className="text-lg font-semibold">{skip?.size} Yard Skip</h3>
                {
                    isSelected &&
                    <img
                        width="28"
                        height="28"
                        src="https://img.icons8.com/emoji/48/check-mark-emoji.png"
                        alt="check-mark-emoji"
                    />
                }
            </div>
            <div className={'flex gap-1 items-center'}>
                <p className="text-sm font-bold text-blue-600">£{skip?.price_before_vat}</p>
                <p className="text-sm text-gray-500">{skip?.hire_period_days} day hire period</p>
            </div>
            {
                (skip?.allowed_on_road || skip?.allows_heavy_waste) && (
                    <div className="absolute flex flex-col top-3 left-5 gap-1 bg-blue-500 rounded-lg px-2 py-1 text-xs text-white mt-2">
                        {skip?.allowed_on_road && (
                            <p className={'flex gap-1'}>
                                <img
                                    width="15"
                                    height="15"
                                    src="https://img.icons8.com/fluency/48/verified-account--v1.png"
                                    alt="verified-account--v1"
                                />
                                Allowed On Road
                            </p>

                        )}
                        {skip?.allows_heavy_waste && (
                            <p className={'flex gap-1'}>
                                <img
                                    width="15"
                                    height="15"
                                    src="https://img.icons8.com/fluency/48/verified-account--v1.png"
                                    alt="verified-account--v1"
                                />
                                Allowed Heavy Waste
                            </p>
                        )}
                    </div>
                )
            }
        </div>
    );
};

export { SkipCard };