import { FluentProvider, teamsLightTheme } from "@fluentui/react-components";
import { useState } from "react";
import { CodeEditor } from "../components/CodeEditor";
import { LanguageSelector } from "../components/LanguageSelector";
import { ProblemCard } from "../components/ProblemCard";
import { RunButton } from "../components/RunButton";
import problems from "../data/problems.json";
import { server } from "../services/server";
import type { Languages } from "../types/languages";
import "./index.css";

const App = () => {
	const defaultLang: Languages = "TypeScript";
	const defaultCode = problems[0].fun_sign;
	const [lang, setLang] = useState<Languages>(defaultLang);
	const [code, setCode] = useState(defaultCode);

	server();

	return (
		<FluentProvider theme={teamsLightTheme}>
			<ProblemCard {...problems[0]} />
			<LanguageSelector defaultLang={defaultLang} setLang={setLang} />
			<CodeEditor code={code} lang={lang} setCode={setCode} />
			<RunButton code={code} lang={lang} />
		</FluentProvider>
	);
};

export default App;
