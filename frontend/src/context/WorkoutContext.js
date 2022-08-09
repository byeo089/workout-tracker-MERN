// import createContext to make new context
import { createContext, useReducer } from "react";

//set createContext() to a variable
export const WorkoutsContext = createContext();

//create reducer function
export const workoutsReducer = (state, action) => {
	//based on the action type, do the following commands
	switch (action.type) {
		case "SET_WORKOUTS":
			return {
				workouts: action.payload,
			};
		case "CREATE_WORKOUT":
			return {
				//add the new workout and keep the previous workout
				workouts: [action.payload, ...state.workouts],
			};
		case "DELETE_WORKOUTS":
			return {
				workouts: state.workouts.filter(
					(w) => w._id !== action.payload._id
				),
			};
		default:
			return state;
	}
};

//create context provider to our application that takes children as parameters
export const WorkoutsContextProvider = ({ children }) => {
	//"dispatch" updates the "state"
	const [state, dispatch] = useReducer(workoutsReducer, {
		workouts: null,
	});

	//invoke dispatch with a "type" prop
	// dispatch({ type: "SET_WORKOUTS", payload: [{}, {}] });

	return (
		// crreate prop "value" and pass a dynamic state value
		<WorkoutsContext.Provider value={{ ...state, dispatch }}>
			{/* wrap root element in the component tree. <App/> needs to be wrapped */}
			{/* children === root component from frontend/src/components/index.js*/}
			{children}
		</WorkoutsContext.Provider>
	);
};
