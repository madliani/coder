import { Select, type SelectProps, useId } from "@fluentui/react-components";

export const LanguageSelector = (props: SelectProps) => {
	const selectId = useId();

	return (
		<>
			<label htmlFor={selectId}>Language</label>
			<Select id={selectId} defaultValue="TypeScript" size="medium" {...props}>
				<option>TypeScript</option>
				<option>PHP</option>
			</Select>
		</>
	);
};
