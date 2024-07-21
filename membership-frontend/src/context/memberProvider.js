import { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const MemberContext = createContext();

const MemberProvider = ({ children }) => {
    const [user,setUser] = useState();
    const history = useHistory();

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        setUser(userInfo);

        if (!userInfo) {
        history.push("/");
        }
    }, [history]);

    return (
        <MemberContext.Provider
        value={{user,setUser}}>
        {children}
        </MemberContext.Provider>
  );
};

export const MemberState = () => {
  return useContext(MemberContext);
};

export default MemberProvider;
