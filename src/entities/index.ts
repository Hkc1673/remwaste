import type { ReactNode } from "react";

export type StepKey = '1' | '2' | '3' | '4' | '5' | '6';

export interface IStepViewProps {
    step: StepKey;
    setSelectedActionItem: (item: ISkip | null) => void;
    selectedActionItem?: ISkip | null;
}

export interface IStepIndicatorProps {
    currentStep: string;
    onStepChange: (step: StepKey) => void;
}

export interface IActionFooterProps {
    onBack: () => void;
    onContinue: () => void;
    step: string;
    selectedActionItem?: ISkip | null;
}

export interface ILoadingProps {
    message?: string;
}

export interface ISkipCardProps {
    skip: ISkip,
    onSelect: (skip: ISkip) => void;
    isSelected: boolean;
    handleOpenVideoModal: (event: React.MouseEvent, size:number) => void;
}

export interface ISelectSkipProps {
    setSelectedActionItem: (item: ISkip | null) => void;
    selectedActionItem?: ISkip | null;
}

export interface ISkipModalProps {
    size: number | null;
    setIsModalOpen: (isOpen: boolean) => void;
    setIsVideoLoading: (isLoading: boolean) => void;
    isVideoLoading: boolean;
}

export interface IModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

export interface ISkip {
    id: number;
    size: number;
    hire_period_days: number;
    transport_cost: number | null;
    per_tonne_cost: number | null;
    price_before_vat: number;
    vat: number;
    postcode: string;
    area: string;
    forbidden: boolean;
    created_at: string;
    updated_at: string;
    allowed_on_road: boolean;
    allows_heavy_waste: boolean;
}