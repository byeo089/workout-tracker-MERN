import { WorkoutsContext } from "../context/WorkoutContext";
import { useContext } from "react";

//each time the "WorkoutsContext" is needed, invoke "useWorkoutsContext" hooks
export const useWorkoutsContext = () => {
	const context = useContext(WorkoutsContext);

	if (!context) {
		throw Error(
			"useWorkoutsContext must be used inside an WorkoutsContextProvider"
		);
	}

	return context;
};
