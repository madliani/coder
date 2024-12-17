import { Spinner } from "@fluentui/react-components";
import { useEffect, useState } from "react";
import { FluentLayout } from "../layout/FluentLayout";
import { ErrorPage } from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import { server } from "../services/server";
import type { Problem } from "../types/problem";
import "./index.css";

const App = () => {
	const [problems, setProblems] = useState<Problem[] | null>(null);
	const [problemLoading, setProblemLoading] = useState(true);

	server();

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
		return (
			<FluentLayout>
				<Spinner size="large" />
			</FluentLayout>
		);
	}

	if (problems && !problemLoading && problems.length === 0) {
		return (
			<FluentLayout>
				<ErrorPage msg="Problems don't exist." />
			</FluentLayout>
		);
	}

	return (
		<FluentLayout>
			<HomePage problems={problems} />
		</FluentLayout>
	);
};

export default App;
