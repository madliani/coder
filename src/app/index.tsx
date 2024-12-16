import { FluentProvider, teamsLightTheme } from "@fluentui/react-components";
import { useState } from "react";
import { CodeEditor } from "../components/CodeEditor";
import { LanguageSelector } from "../components/LanguageSelector";
import { RunButton } from "../components/RunButton";
import { server } from "../services/server";
import type { Languages } from "../types/languages";
import "./index.css";

const App = () => {
	const defaultLang: Languages = "TypeScript";
	const defaultCode = `console.log("Hello, World!");`;
	const [lang, setLang] = useState<Languages>(defaultLang);
	const [code, setCode] = useState(defaultCode);

	server();

	return (
		<FluentProvider theme={teamsLightTheme}>
			<LanguageSelector defaultLang={defaultLang} setLang={setLang} />
			<CodeEditor code={code} lang={lang} setCode={setCode} />
			<RunButton code={code} lang={lang} />
		</FluentProvider>
	);
};

export default App;
