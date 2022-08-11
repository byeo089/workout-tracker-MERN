import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

//each time the "WorkoutsContext" is needed, invoke "useWorkoutsContext" hooks
export const useAuthContext = () => {
	const context = useContext(AuthContext);

	if (!context) {
		throw Error(
			"useWorkoutsContext must be used inside an WorkoutsContextProvider"
		);
	}

	return context;
};
