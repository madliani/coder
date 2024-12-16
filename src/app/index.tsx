import {
	Button,
	FluentProvider,
	teamsLightTheme,
} from "@fluentui/react-components";
import { useState } from "react";
import type { AvailableLanguages } from "src/types/languages";
import { CodeEditor } from "../components/CodeEditor";
import { LanguageSelector } from "../components/LanguageSelector";
import "./index.css";

const App = () => {
	const defaultLang = "TypeScript";
	const [lang, setLang] = useState<AvailableLanguages>(defaultLang);

	return (
		<FluentProvider theme={teamsLightTheme}>
			<LanguageSelector defaultLang={defaultLang} setLang={setLang} />
			<CodeEditor lang={lang} />
			<Button appearance="primary" className="app__run-button">
				I am a button.
			</Button>
		</FluentProvider>
	);
};

export default App;
