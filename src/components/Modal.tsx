import { createPortal } from "react-dom";
import type { IModalProps } from "../entities";

const Modal = ({ isOpen, onClose, children }: IModalProps) => {
    if (!isOpen) return null;

    const modalRoot = document.getElementById("modal-root");
    if (!modalRoot) return null;

    return createPortal(
        <div
            className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-lg p-8 min-h-max max-w-2xl w-full relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-1 right-4 text-gray-700 hover:text-gray-900 text-3xl font-bold hover:cursor-pointer hover:scale-110 transition-transform"
                >
                    &times;
                </button>
                {children}
            </div>
        </div>,
        modalRoot
    );
};

export { Modal };
