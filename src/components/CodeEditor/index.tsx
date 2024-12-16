import { javascript } from "@codemirror/lang-javascript";
import { php } from "@codemirror/lang-php";
import CodeMirror from "@uiw/react-codemirror";
import { useCallback, useState } from "react";
import type { AvailableLanguages } from "src/types/languages";

type Properties = {
	lang: AvailableLanguages;
};

const chooseExtensions = (lang: AvailableLanguages) => {
	switch (lang) {
		case "TypeScript": {
			return [javascript({ jsx: false, typescript: true })];
		}

		case "PHP": {
			return [php()];
		}
	}
};

export const CodeEditor = ({ lang }: Readonly<Properties>) => {
	const [code, setCode] = useState("console.log('Hello, World!');");

	const onChange = useCallback((text: string) => {
		console.log("Text: ", text);

		setCode(text);
	}, []);

	const extensions = chooseExtensions(lang);

	return (
		<CodeMirror
			value={code}
			height="200px"
			extensions={extensions}
			onChange={onChange}
		/>
	);
};
