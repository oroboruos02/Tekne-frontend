import React, { useRef } from "react";

export const RefContext = React.createContext();

// eslint-disable-next-line react/prop-types
export default function RefProvider({children}) {

    const assemblyRef = useRef();
    const supplyRef = useRef();
    const communicationsRef = useRef();
    const mountingRef = useRef();
    const cablingRef = useRef();
    const maintenanceRef = useRef();
    const serviceSix = useRef();
    const moreServices = useRef();
    const controlRef = useRef();
    const instrumentationRef = useRef();
    const areasRef = useRef();
    const saleRef = useRef();

    return(
        <RefContext.Provider value={{
            assemblyRef,
            supplyRef,
            communicationsRef,
            mountingRef,
            cablingRef,
            maintenanceRef,
            serviceSix,
            moreServices,
            controlRef,
            instrumentationRef,
            areasRef,
            saleRef
        }}>
            {children}
        </RefContext.Provider>
    )
}