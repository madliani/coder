import {
	Label,
	Select,
	type SelectProps,
	useId,
} from "@fluentui/react-components";
import type { Languages } from "src/types/languages";

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
		if (data.value === "TypeScript" || data.value === "PHP") {
			setLang(data.value);
		} else {
			console.error("The language is not in the list of languages.");
		}
	};

	return (
		<>
			<Label htmlFor={selectId} weight="semibold">
				Language:
			</Label>
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
