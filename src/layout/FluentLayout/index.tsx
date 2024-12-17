import { FluentProvider, teamsLightTheme } from "@fluentui/react-components";
import type { ReactNode } from "react";
import "./index.css";

type Properties = {
	children: ReactNode;
};

export const FluentLayout = ({ children }: Readonly<Properties>) => {
	return (
		<FluentProvider
			theme={teamsLightTheme}
			className="fluent-layout__fluent-provider"
		>
			{children}
		</FluentProvider>
	);
};
