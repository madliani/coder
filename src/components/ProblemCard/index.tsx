import { Card, Text } from "@fluentui/react-components";
import { List, ListItem } from "@fluentui/react-list-preview";
import type { Difficulty } from "src/types/difficulty";

type Properties = {
	num: number;
	title: string;
	difficulty: Difficulty;
	description: string;
	examples: string[];
	constraints: string[];
	fun_sign: string;
	notes: string[];
};

export const ProblemCard = ({
	num,
	title,
	difficulty,
	description,
	examples,
	constraints,
	fun_sign,
	notes,
}: Readonly<Properties>) => {
	return (
		<Card>
			<Text weight="bold">
				{num}. {title}
			</Text>
			<Text weight="bold">
				Difficulty: {<Text weight="regular">{difficulty}</Text>}
			</Text>
			<Text>{description}</Text>
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
			<code>{fun_sign}</code>
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
