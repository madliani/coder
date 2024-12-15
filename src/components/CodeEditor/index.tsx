import { javascript } from "@codemirror/lang-javascript";
import CodeMirror from "@uiw/react-codemirror";
import { useCallback, useState } from "react";

export const CodeEditor = () => {
	const [code, setCode] = useState("console.log('Hello, World!');");

	const onChange = useCallback((text: string) => {
		console.log("Text: ", text);

		setCode(text);
	}, []);

	return (
		<CodeMirror
			value={code}
			height="200px"
			extensions={[javascript({ jsx: true })]}
			onChange={onChange}
		/>
	);
};
