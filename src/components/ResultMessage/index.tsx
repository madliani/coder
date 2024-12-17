import {
	MessageBar,
	MessageBarBody,
	MessageBarTitle,
} from "@fluentui/react-components";
import type { ReactNode } from "react";

type Properties = {
	intent: "info" | "warning" | "error" | "success";
	title: string;
	children: ReactNode;
};

export const AlertMessage = ({
	intent,
	title,
	children,
}: Readonly<Properties>) => {
	return (
		<MessageBar intent={intent}>
			<MessageBarBody>
				<MessageBarTitle>{title}:</MessageBarTitle>
				{children}
			</MessageBarBody>
		</MessageBar>
	);
};
