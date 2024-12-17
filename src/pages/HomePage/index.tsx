import { useState } from "react";
import { AlertMessage } from "../../components/AlertMessage";
import { CodeEditor } from "../../components/CodeEditor";
import { LanguageSelector } from "../../components/LanguageSelector";
import { ProblemCard } from "../../components/ProblemCard";
import { RunButton } from "../../components/RunButton";
import { FluentLayout } from "../../layout/FluentLayout";
import type { Languages } from "../../types/languages";
import type { Problem } from "../../types/problem";
import type { Result } from "../../types/result";

type Properties = {
	problems: Problem[];
};

const HomePage = ({ problems }: Readonly<Properties>) => {
	const defaultLang: Languages = "typescript";
	const [lang, setLang] = useState<Languages>(defaultLang);
	const [prevLang, setPrevLang] = useState<Languages>(defaultLang);

	const defaultCode = problems[0].fun_sign[defaultLang];
	const [code, setCode] = useState<string | null>(defaultCode);

	const [result, setResult] = useState<Result | null>(null);

	return (
		<FluentLayout>
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
				<AlertMessage
					intent={result.status}
					title={result.status.toUpperCase()}
				>
					{result.output || result.error}
				</AlertMessage>
			)}
			<RunButton code={code} lang={lang} setResult={setResult} />
		</FluentLayout>
	);
};

export default HomePage;
