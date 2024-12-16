import { javascript } from "@codemirror/lang-javascript";
import { php } from "@codemirror/lang-php";
import CodeMirror from "@uiw/react-codemirror";
import { useCallback } from "react";
import type { Languages } from "src/types/languages";

type Properties = {
	code: string;
	lang: Languages;
	setCode: (code: string) => void;
};

const chooseExtensions = (lang: Languages) => {
	switch (lang) {
		case "TypeScript": {
			return [javascript({ jsx: false, typescript: true })];
		}

		case "PHP": {
			return [php()];
		}
	}
};

export const CodeEditor = ({ code, lang, setCode }: Readonly<Properties>) => {
	const onChange = useCallback(
		(text: string) => {
			console.log("Text: ", text);

			setCode(text);
		},
		[setCode],
	);

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
