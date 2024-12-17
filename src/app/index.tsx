import { useEffect, useState } from "react";
import { ErrorPage } from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import { WaitingPage } from "../pages/WaitingPage";
import type { Problem } from "../types/problem";
import "./index.css";

const App = () => {
	const [problems, setProblems] = useState<Problem[] | null>(null);
	const [problemLoading, setProblemLoading] = useState(true);

	useEffect(() => {
		fetch("/api/problems", {
			method: "GET",
		})
			.then((response) => response.json())
			.then((problems) => setProblems(problems))
			.catch((error) =>
				console.error(`The error when loading problems: ${error}`),
			)
			.finally(() => setProblemLoading(false));
	}, []);

	if (!problems && problemLoading) {
		return <WaitingPage />;
	}

	if (problems && !problemLoading && problems.length === 0) {
		return <ErrorPage msg="Problems don't exist." />;
	}

	return <HomePage problems={problems} />;
};

export default App;
