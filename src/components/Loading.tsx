import type { ILoadingProps } from "../entities";

const Loading = ({ message } : ILoadingProps) => {

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            {message && <p className="text-blue-600 text-sm font-medium">{message}</p>}
        </div>
    );
};

export { Loading };