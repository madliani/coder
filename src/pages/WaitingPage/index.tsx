import { Spinner } from "@fluentui/react-components";
import { FluentLayout } from "../../layout/FluentLayout";

export const WaitingPage = () => {
	return (
		<FluentLayout>
			<Spinner size="large" />
		</FluentLayout>
	);
};
