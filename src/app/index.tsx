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
	const defaultLang: Languages = "typescript";
	const [lang, setLang] = useState<Languages>(defaultLang);
	const [prevLang, setPrevLang] = useState<Languages>(defaultLang);

	const defaultCode = problems[0].fun_sign[defaultLang];
	const [code, setCode] = useState(defaultCode);

	const [result, setResult] = useState<Result | null>(null);

	server();

	return (
		<FluentProvider theme={teamsLightTheme}>
			<ProblemCard lang={lang} {...problems[0]} />
			<LanguageSelector defaultLang={defaultLang} setLang={setLang} />
			<CodeEditor
				defaultCode={defaultCode}
				code={code}
				lang={lang}
				prevLang={prevLang}
				fun_sign={problems[0].fun_sign}
				setCode={setCode}
				setPrevLang={setPrevLang}
			/>
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
