import {
	Link,
	MessageBar,
	MessageBarBody,
	MessageBarTitle,
} from "@fluentui/react-components";
import type { ReactNode } from "react";
import "./index.css";

type Properties = {
	intent: "info" | "warning" | "error" | "success";
	children: ReactNode;
	title?: string;
	onClose?: () => void;
};

export const AlertMessage = ({
	intent,
	title,
	children,
	onClose,
}: Readonly<Properties>) => {
	return (
		<MessageBar intent={intent} className="alert-message__message-bar">
			<MessageBarBody>
				{title !== undefined && <MessageBarTitle>{title}:</MessageBarTitle>}
				{children}
			</MessageBarBody>
			{onClose && <Link onClick={onClose}>Close</Link>}
		</MessageBar>
	);
};
