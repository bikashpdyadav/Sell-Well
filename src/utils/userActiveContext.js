import { createContext } from "react";

const userActiveContext = createContext({
    isActive: false,
});

export default userActiveContext;