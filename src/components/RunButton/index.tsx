import { Button } from "@fluentui/react-components";
import { useCallback } from "react";
import "./index.css";

type Properties = {
	code: string;
};

export const RunButton = ({ code }: Readonly<Properties>) => {
	const onClick = useCallback(
		() =>
			fetch("/api/execute", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					language: "typescript",
					code,
				}),
			})
				.then((response) => response.json())
				.then((json) => console.log(json))
				.catch((error) =>
					console.error(
						`POST request error when clicking the execute button: ${error}.`,
					),
				),
		[code],
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
