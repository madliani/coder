import { Button } from "@fluentui/react-components";
import { useCallback } from "react";
import "./index.css";

export const RunButton = () => {
	const onClick = useCallback(
		() =>
			fetch("/api/execute", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					language: "typescript",
					code: `console.log("Hello, World!")`,
				}),
			})
				.then((response) => response.json())
				.then((json) => console.log(json))
				.catch((error) =>
					console.error(
						`POST request error when clicking the execute button: ${error}.`,
					),
				),
		[],
	);

	return (
		<Button
			appearance="primary"
			className="run-button__button"
			onClick={onClick}
		>
			Run
		</Button>
	);
};
