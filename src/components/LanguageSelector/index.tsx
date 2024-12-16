import { Select, type SelectProps, useId } from "@fluentui/react-components";
import type { AvailableLanguages } from "src/types/languages";

type Properties = {
	defaultLang: AvailableLanguages;
	setLang: (lang: AvailableLanguages) => void;
};

export const LanguageSelector = ({
	defaultLang,
	setLang,
}: Readonly<Properties>) => {
	const selectId = useId();

	const onChange: SelectProps["onChange"] = (_, data) => {
		if (data.value === "TypeScript" || data.value === "PHP") {
			setLang(data.value);
		} else {
			console.error("The language is not in the list of languages.");
		}
	};

	return (
		<>
			<label htmlFor={selectId}>Language</label>
			<Select
				id={selectId}
				onChange={onChange}
				defaultValue={defaultLang}
				size="medium"
			>
				<option>TypeScript</option>
				<option>PHP</option>
			</Select>
		</>
	);
};
