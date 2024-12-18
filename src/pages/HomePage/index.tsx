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
import "./index.css";

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
	const [isClosed, setIsClosed] = useState(false);
	const isHidden = !(
		result !== null &&
		(result.output !== undefined || result.error !== undefined) &&
		!isClosed
	);

	const onClose = () => setIsClosed(true);
	const onRun = (result: Result) => {
		setResult(result);
		setIsClosed(false);
	};

	return (
		<FluentLayout>
			<header className="homepage__header">
				{!isHidden && (
					<AlertMessage
						intent={result.status}
						title={result.status.toUpperCase()}
						onClose={onClose}
					>
						{result.output || result.error}
					</AlertMessage>
				)}
				<LanguageSelector defaultLang={defaultLang} setLang={setLang} />
			</header>
			<main className="homepage__main">
				<ProblemCard lang={lang} {...problems[0]} />
				<CodeEditor
					defaultCode={defaultCode}
					code={code}
					lang={lang}
					prevLang={prevLang}
					fun_sign={problems[0].fun_sign}
					setCode={setCode}
					setPrevLang={setPrevLang}
				/>
			</main>
			<footer className="homepage__footer">
				<RunButton code={code} lang={lang} onRun={onRun} />
			</footer>
		</FluentLayout>
	);
};

export default HomePage;
