import { steps } from '../constant';
import { ReactSVG } from 'react-svg';
import type { IStepIndicatorProps, StepKey } from "../entities";

const StepIndicator = ({
    currentStep,
    onStepChange
} : IStepIndicatorProps) => {
    return (
        <div className="flex flex-row justify-evenly text-sm font-semibold sticky top-0 z-10 w-full max-w-5xl mx-auto p-2 bg-gray-50 rounded-xl shadow-md">
            {steps.map((step, i) => {
                const isDisabled = step.key > currentStep;
                const isLast = i === steps.length - 1;

                return (
                    <div key={step.key} className="flex items-center gap-2">
                        <button
                            className="flex items-center gap-1 text-green-500 hover:text-green-700 hover:cursor-pointer disabled:text-gray-400 disabled:cursor-not-allowed"
                            onClick={() => onStepChange(step.key as StepKey)}
                            disabled={isDisabled}
                        >
                            <ReactSVG src={`src/assets/icons/${step.icon}.svg`} />
                            <span className="hidden md:inline">{step.label}</span>
                        </button>
                        <div className={'text-gray-400'}>
                            {!isLast && (
                                <ReactSVG src={`src/assets/icons/chevronRight.svg`} />
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export { StepIndicator };