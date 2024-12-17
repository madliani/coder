import { javascript } from "@codemirror/lang-javascript";
import { php } from "@codemirror/lang-php";
import CodeMirror from "@uiw/react-codemirror";
import { useCallback, useEffect } from "react";
import type { Languages } from "src/types/languages";
import type { ProblemFunctionSign } from "src/types/problem";

type Properties = {
	defaultCode: string;
	code: string;
	lang: Languages;
	fun_sign: ProblemFunctionSign;
	setCode: (code: string) => void;
};

const chooseExtensions = (lang: Languages) => {
	switch (lang) {
		case "typescript": {
			return [javascript({ jsx: false, typescript: true })];
		}

		case "php": {
			return [php()];
		}
	}
};

export const CodeEditor = ({
	defaultCode,
	code,
	lang,
	fun_sign,
	setCode,
}: Readonly<Properties>) => {
	const extensions = chooseExtensions(lang);

	const onChange = useCallback(
		(text: string) => {
			console.log("Text: ", text);

			setCode(text);
		},
		[setCode],
	);

	useEffect(() => {
		if (code === defaultCode) {
			setCode(fun_sign[lang]);
		}
	});

	return (
		<CodeMirror
			value={code}
			height="200px"
			extensions={extensions}
			onChange={onChange}
		/>
	);
};
