import { javascript } from "@codemirror/lang-javascript";
import { php } from "@codemirror/lang-php";
import CodeMirror from "@uiw/react-codemirror";
import { useCallback, useEffect } from "react";
import type { Languages } from "../../types/languages";
import type { ProblemFunctionSign } from "../../types/problem";
import "./index.css";

type Properties = {
	defaultCode: string;
	code: string;
	lang: Languages;
	prevLang: Languages;
	fun_sign: ProblemFunctionSign;
	setCode: (code: string) => void;
	setPrevLang: (lang: Languages) => void;
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
	prevLang,
	fun_sign,
	setCode,
	setPrevLang,
}: Readonly<Properties>) => {
	const onChange = useCallback(
		(text: string) => {
			console.log("Text: ", text);

			setCode(text);
		},
		[setCode],
	);

	useEffect(() => {
		if (code === defaultCode || (code === "" && lang !== prevLang)) {
			setCode(fun_sign[lang]);
			setPrevLang(lang);

			return;
		}
	}, [code, lang, prevLang, defaultCode, fun_sign, setCode, setPrevLang]);

	return (
		<CodeMirror
			value={code}
			height="200px"
			extensions={chooseExtensions(lang)}
			onChange={onChange}
			className="code-editor__code-mirror"
		/>
	);
};
