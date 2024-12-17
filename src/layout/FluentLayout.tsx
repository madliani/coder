import { FluentProvider, teamsLightTheme } from "@fluentui/react-components";
import type { ReactNode } from "react";

type Properties = {
	children: ReactNode;
};

export const FluentLayout = ({ children }: Readonly<Properties>) => {
	return <FluentProvider theme={teamsLightTheme}>{children}</FluentProvider>;
};
