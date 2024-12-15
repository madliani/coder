import {
	Button,
	FluentProvider,
	teamsLightTheme,
} from "@fluentui/react-components";
import { CodeEditor } from "../components/CodeEditor";
import "./index.css";

const App = () => {
	return (
		<FluentProvider theme={teamsLightTheme}>
			<CodeEditor />
			<Button appearance="primary">I am a button.</Button>
		</FluentProvider>
	);
};

export default App;
