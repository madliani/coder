import { FluentProvider, teamsLightTheme } from "@fluentui/react-components";
import { useState } from "react";
import { CodeEditor } from "../components/CodeEditor";
import { LanguageSelector } from "../components/LanguageSelector";
import { ProblemCard } from "../components/ProblemCard";
import { ResultMessage } from "../components/ResultMessage";
import { RunButton } from "../components/RunButton";
import problems from "../data/problems.json";
import { server } from "../services/server";
import type { Languages } from "../types/languages";
import type { Result } from "../types/result";
import "./index.css";

const App = () => {
	const defaultLang: Languages = "TypeScript";
	const defaultCode = problems[0].fun_sign;
	const [lang, setLang] = useState<Languages>(defaultLang);
	const [code, setCode] = useState(defaultCode);
	const [result, setResult] = useState<Result | null>(null);

	server();

	return (
		<FluentProvider theme={teamsLightTheme}>
			<ProblemCard {...problems[0]} />
			<LanguageSelector defaultLang={defaultLang} setLang={setLang} />
			<CodeEditor code={code} lang={lang} setCode={setCode} />
			{result && (result.output || result.error) && (
				<ResultMessage
					intent={result.status}
					msg={result.output || result.error}
				/>
			)}
			<RunButton code={code} lang={lang} setResult={setResult} />
		</FluentProvider>
	);
};

export default App;
