import { FluentProvider, teamsLightTheme } from "@fluentui/react-components";
import { useState } from "react";
import { CodeEditor } from "../components/CodeEditor";
import { LanguageSelector } from "../components/LanguageSelector";
import { RunButton } from "../components/RunButton";
import type { Languages } from "../types/languages";
import "./index.css";

const App = () => {
	const defaultLang: Languages = "TypeScript";
	const [lang, setLang] = useState<Languages>(defaultLang);

	return (
		<FluentProvider theme={teamsLightTheme}>
			<LanguageSelector defaultLang={defaultLang} setLang={setLang} />
			<CodeEditor lang={lang} />
			<RunButton />
		</FluentProvider>
	);
};

export default App;
