import React, {createContext, useContext} from "react";

const ToastContext = createContext();

export function useToast() {
    return useContext(ToastContext);
} 
