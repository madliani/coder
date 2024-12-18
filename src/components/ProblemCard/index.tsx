import { Card, Text } from "@fluentui/react-components";
import { List, ListItem } from "@fluentui/react-list-preview";
import type { Languages } from "../../types/languages";
import type { Problem } from "../../types/problem";
import "./index.css";

type Properties = {
	lang: Languages;
	orientation?: "vertical" | "horizontal";
	size?: "small" | "medium" | "large";
	appearance?: "filled" | "filled-alternative" | "outline" | "subtle";
} & Problem;

export const ProblemCard = ({
	lang,
	orientation,
	size,
	appearance,
	num,
	title,
	difficulty,
	desc,
	examples,
	constraints,
	fun_sign,
	notes,
}: Readonly<Properties>) => {
	return (
		<Card
			orientation={orientation}
			size={size}
			appearance={appearance}
			className="problem-card__card"
		>
			<Text weight="bold">
				{num}. {title}
			</Text>
			<Text weight="bold">
				Difficulty: {<Text weight="regular">{difficulty}</Text>}
			</Text>
			<Text>{desc}</Text>
			<Text weight="bold">Examples:</Text>
			<List>
				{examples.map((example, idx) => (
					<ListItem key={example}>
						{idx + 1}. <code>{example}</code>
					</ListItem>
				))}
			</List>
			<Text weight="bold">Constraints:</Text>
			<List>
				{constraints.map((constraint, idx) => (
					<ListItem key={constraint}>
						{idx + 1}. {constraint}
					</ListItem>
				))}
			</List>
			<Text weight="bold">Function Signature:</Text>
			<code>{fun_sign[lang]}</code>
			<Text weight="bold">Notes:</Text>
			<List>
				{notes.map((note, idx) => (
					<ListItem key={note}>
						{idx + 1}. {note}
					</ListItem>
				))}
			</List>
		</Card>
	);
};
