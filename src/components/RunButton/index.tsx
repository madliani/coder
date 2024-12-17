import { Button } from "@fluentui/react-components";
import { useCallback, useState } from "react";
import type { Languages } from "src/types/languages";
import type { Result } from "../../types/result";
import "./index.css";

type Properties = {
	code: string;
	lang: Languages;
	setResult: (result: Result) => void;
};

export const RunButton = ({ code, lang, setResult }: Readonly<Properties>) => {
	const [reqLoading, setReqLoading] = useState(false);

	const onClick = useCallback(() => {
		setReqLoading(true);

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
			.then((result) => setResult(result))
			.catch((error) =>
				console.error(
					`POST request error when clicking the execute button: ${error}.`,
				),
			)
			.finally(() => setReqLoading(false));
	}, [code, lang, setResult]);

	return (
		<>
			<Button
				appearance="primary"
				className="run-button__button"
				onClick={onClick}
				disabled={reqLoading}
			>
				Run
			</Button>
		</>
	);
};
