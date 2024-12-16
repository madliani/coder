import { Button } from "@fluentui/react-components";
import { useCallback } from "react";
import type { Languages } from "src/types/languages";
import "./index.css";

type Properties = {
	code: string;
	lang: Languages;
};

export const RunButton = ({ code, lang }: Readonly<Properties>) => {
	const onClick = useCallback(
		() =>
			fetch("/api/execute", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					language: lang.toLowerCase(),
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
		[code, lang],
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
