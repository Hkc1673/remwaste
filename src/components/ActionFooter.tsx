import type { IActionFooterProps } from "../entities";

const ActionFooter = ({
    onBack,
    onContinue,
    step,
    selectedActionItem,
} : IActionFooterProps ) => {

    const isFirstStep = step === '1';
    const isLastStep = step === '6';

    return (
        <div className="fixed bottom-5 right-5 w-full flex justify-end gap-4 items-center">
            <button
                onClick={onBack}
                className="bg-red-500 text-white py-2 px-4 rounded-xl min-w-[100px] font-bold hover:bg-red-700 hover:cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-400"
                disabled={isFirstStep}
            >
                Back
            </button>
            <button
                onClick={onContinue}
                className="bg-green-500 text-white py-2 px-4 rounded-xl min-w-[100px] font-bold hover:bg-green-700 hover:cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-400"
                disabled={isLastStep || (step === '3' && !selectedActionItem?.id)}
            >
                Continue
            </button>
        </div>
    );
};

export { ActionFooter };