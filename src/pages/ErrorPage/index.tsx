import { AlertMessage } from "../../components/AlertMessage";
import { FluentLayout } from "../../layout/FluentLayout";

type Properties = {
	msg: string;
};

export const ErrorPage = ({ msg }: Readonly<Properties>) => {
	return (
		<FluentLayout>
			<AlertMessage intent="error" title="404:">
				{msg}
			</AlertMessage>
		</FluentLayout>
	);
};
