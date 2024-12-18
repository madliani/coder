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
	title: string;
	children: ReactNode;
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
				<MessageBarTitle>{title}:</MessageBarTitle>
				{children}
			</MessageBarBody>
			{onClose && <Link onClick={onClose}>Close</Link>}
		</MessageBar>
	);
};
