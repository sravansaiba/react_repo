import { useEffect, useState, createContext } from "react";
import featureFlagDataServiceCall from "../data";

export const FeatureFlagContext = createContext(null);

// eslint-disable-next-line react/prop-types
export default function FeatureFlagGlobalState({ children }) {
    const [enableFlags, setEnableFlags] = useState({});

    async function fetchData() {
        try {
            const res = await featureFlagDataServiceCall();
            setEnableFlags(res);
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }

    useEffect(() => {
        fetchData();
        console.log("Fetched enableFlags:", enableFlags);  // Debugging log
    }, []);

    return (
        <FeatureFlagContext.Provider value={{ enableFlags }}>
            {children}
        </FeatureFlagContext.Provider>
    );
}
