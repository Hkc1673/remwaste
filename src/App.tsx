import './App.css'
import { useState } from "react";
import { ActionFooter, StepIndicator, StepView } from "./components";
import type { ISkip, StepKey } from "./entities";

const App = ()=>  {

    const [ step, setStep ] = useState<StepKey>('3');
    const [ selectedActionItem, setSelectedActionItem ] = useState<ISkip | null>();

    const onBack = () => {
        if (step === '1') return;
        setStep((prevStep) => {
            const prev = parseInt(prevStep) - 1;
            return prev.toString() as StepKey;
        });
    }

    const onContinue = () => {
        if (step === '6') return;
        setStep((prevStep) => {
            const next = parseInt(prevStep) + 1;
            return next.toString() as StepKey;
        });
    }

    const onStepChange = (newStep: StepKey) => {
        setStep(newStep);
    }

  return (
      <div className="flex flex-col items-center relative pb-24">
          <StepIndicator
              currentStep={step}
              onStepChange={onStepChange}
          />
          <StepView
              step={step}
              setSelectedActionItem={setSelectedActionItem}
              selectedActionItem={selectedActionItem}
          />
          <ActionFooter
              onBack={onBack}
              onContinue={onContinue}
              step={step}
              selectedActionItem={selectedActionItem}
          />
      </div>
  )
}

export default App
