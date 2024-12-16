import { FluentProvider, teamsLightTheme } from "@fluentui/react-components";
import { useState } from "react";
import type { AvailableLanguages } from "src/types/languages";
import { CodeEditor } from "../components/CodeEditor";
import { LanguageSelector } from "../components/LanguageSelector";
import { RunButton } from "../components/RunButton";
import "./index.css";

const App = () => {
	const defaultLang = "TypeScript";
	const [lang, setLang] = useState<AvailableLanguages>(defaultLang);

	return (
		<FluentProvider theme={teamsLightTheme}>
			<LanguageSelector defaultLang={defaultLang} setLang={setLang} />
			<CodeEditor lang={lang} />
			<RunButton />
		</FluentProvider>
	);
};

export default App;
