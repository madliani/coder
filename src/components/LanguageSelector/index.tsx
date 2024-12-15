import { Select, type SelectProps, useId } from "@fluentui/react-components";
import { useState } from "react";

export const LanguageSelector = () => {
	const defaultLanguage = "TypeScript";
	const selectId = useId();
	const [language, setLanguage] = useState(defaultLanguage);

	const onChange: SelectProps["onChange"] = (_, data) => {
		setLanguage(data.value);
	};

	return (
		<>
			<label htmlFor={selectId}>Language</label>
			<Select
				id={selectId}
				onChange={onChange}
				value={language}
				defaultValue={defaultLanguage}
				size="medium"
			>
				<option>TypeScript</option>
				<option>PHP</option>
			</Select>
		</>
	);
};
