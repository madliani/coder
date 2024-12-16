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
	const [lang, setLang] = useState<Languages>(defaultLang);
	const [code, setCode] = useState("console.log('Hello, World!');");

	server();

	return (
		<FluentProvider theme={teamsLightTheme}>
			<LanguageSelector defaultLang={defaultLang} setLang={setLang} />
			<CodeEditor code={code} lang={lang} setCode={setCode} />
			<RunButton code={code} />
		</FluentProvider>
	);
};

export default App;
