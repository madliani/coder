import { AlertMessage } from "../../components/ResultMessage";

type Properties = {
	msg: string;
};

export const ErrorPage = ({ msg }: Readonly<Properties>) => {
	return (
		<AlertMessage intent="error" title="404:">
			{msg}
		</AlertMessage>
	);
};
