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

	server();

	useEffect(() => {
		fetch("/api/problems", {
			method: "GET",
		})
			.then((response) => response.json())
			.then((problems) => setProblems(problems))
			.catch((error) =>
				console.error(`The error when loading problems: ${error}`),
			);
	}, []);

	if (problems && problems.length === 0) {
		return (
			<FluentLayout>
				<ErrorPage msg="Problems don't exist." />
			</FluentLayout>
		);
	}

	return (
		<FluentLayout>
			{problems ? <HomePage problems={problems} /> : <Spinner />}
		</FluentLayout>
	);
};

export default App;
