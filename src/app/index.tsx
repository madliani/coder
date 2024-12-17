import { FluentProvider, teamsLightTheme } from "@fluentui/react-components";
import { useState } from "react";
import { CodeEditor } from "../components/CodeEditor";
import { LanguageSelector } from "../components/LanguageSelector";
import { ProblemCard } from "../components/ProblemCard";
import { RunButton } from "../components/RunButton";
import { server } from "../services/server";
import type { Languages } from "../types/languages";
import "./index.css";

const App = () => {
	const defaultLang: Languages = "TypeScript";
	const defaultCode = "function longest_substr(str: string): string {}";
	const problem_number = Math.floor(Math.random() * 100);
	const [lang, setLang] = useState<Languages>(defaultLang);
	const [code, setCode] = useState(defaultCode);

	server();

	return (
		<FluentProvider theme={teamsLightTheme}>
			<ProblemCard
				num={problem_number}
				title="Longest Substring Without Repeating Characters"
				difficulty="Medium"
				description="Given a string 's', find the length of the longest substring without repeating characters."
				examples={[
					`
					Input: s = "abcabcbb"
					Output: 3
					Explanation: The answer is "abc", with the length of 3.
					`,
				]}
				constraints={[
					"0 <= s.length <= 5 * 10^4",
					"'s' consists of English letters, digits, symbols, and spaces.",
				]}
				fun_sign={defaultCode}
				notes={[
					"You may assume that the input string is non-empty.",
					"The solution should have a time complexity of O(n), where n is the length of the string.",
				]}
			/>
			<LanguageSelector defaultLang={defaultLang} setLang={setLang} />
			<CodeEditor code={code} lang={lang} setCode={setCode} />
			<RunButton code={code} lang={lang} />
		</FluentProvider>
	);
};

export default App;
