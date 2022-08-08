import { useEffect, useState } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
	const [workouts, setWorkouts] = useState(null);

	//fetch data
	useEffect(() => {
		const fetchWorkouts = async () => {
			//remove the localhost and add it under the proxy prop in package.json
			const response = await fetch("/api/workouts");
			const json = await response.json();

			//if response is ok, then...
			if (response.ok) {
				//update local states
				setWorkouts(json);
			}
		};

		fetchWorkouts();
	}, []);

	return (
		<div className="home">
			<div className="workouts">
				{workouts &&
					workouts.map((workout) => (
						<WorkoutDetails key={workout._id} workout={workout} />
					))}
			</div>
			<WorkoutForm />
		</div>
	);
};

export default Home;
