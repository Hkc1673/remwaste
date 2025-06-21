import type { ReactNode } from "react";
import type { IStepViewProps, StepKey } from "../entities";
import { SelectSkip } from "./SelectSkip";

const StepView = ({ step, setSelectedActionItem, selectedActionItem}: IStepViewProps) => {
    const currentView: Record<StepKey, ReactNode> = {
        '1': <div>Postcode Step</div>,
        '2': <div>Waste Type Step</div>,
        '3': <SelectSkip setSelectedActionItem={setSelectedActionItem} selectedActionItem={selectedActionItem} />,
        '4': <div>Permit Check Step</div>,
        '5': <div>Choose Date Step</div>,
        '6': <div>Payment Step</div>,
    };

    return <div className={'flex justify-center w-full mt-6'}>{currentView[step]}</div>;
};

export { StepView };