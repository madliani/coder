import {
	Label,
	Select,
	type SelectProps,
	useId,
} from "@fluentui/react-components";
import type { Languages } from "../../types/languages";
import "./index.css";

type Properties = {
	defaultLang: Languages;
	setLang: (lang: Languages) => void;
};

export const LanguageSelector = ({
	defaultLang,
	setLang,
}: Readonly<Properties>) => {
	const selectId = useId();

	const onChange: SelectProps["onChange"] = (_, data) => {
		if (data.value === "typescript" || data.value === "php") {
			setLang(data.value);
		} else {
			console.error("The language is not in the list of languages.");
		}
	};

	return (
		<div className="language-selector__container">
			<Label htmlFor={selectId} weight="semibold">
				Language:
			</Label>
			<Select
				id={selectId}
				onChange={onChange}
				defaultValue={defaultLang}
				size="medium"
			>
				<option value="typescript">TypeScript</option>
				<option value="php">PHP</option>
			</Select>
		</div>
	);
};
