import {
	MessageBar,
	MessageBarBody,
	MessageBarTitle,
} from "@fluentui/react-components";

type Properties = {
	intent: "info" | "warning" | "error" | "success";
	msg: string;
};

export const ResultMessage = ({ intent, msg }: Readonly<Properties>) => {
	return (
		<MessageBar intent={intent}>
			<MessageBarBody>
				<MessageBarTitle>{intent.toLocaleUpperCase()}:</MessageBarTitle>
				{msg}
			</MessageBarBody>
		</MessageBar>
	);
};
