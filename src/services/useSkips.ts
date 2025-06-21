import { useState } from "react";
import type { ISkip } from "../entities";

const useSkips = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [skips, setSkips] = useState<Array<ISkip>>([]);
    const [error, setError] = useState<string | null>(null);

    const getSkips = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft');
            const data:ISkip[] = await response?.json();
            setSkips(data);
            setError(null);
        } catch (error) {
            setError(`Error fetching skips: ${error instanceof Error ? error.message : 'Unknown error'}`);
            setSkips([]);
        } finally {
            setLoading(false);
        }
    }

    return {
        loading,
        skips,
        error,
        getSkips
    }
}

export { useSkips };