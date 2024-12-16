import BiwaScheme, { type Interpreter } from "biwascheme";

export const Scheme = class {
	scheme: Interpreter;
	output: string;

	constructor() {
		this.scheme = new BiwaScheme.Interpreter((output: string) => {
			throw new Error(output);
		});
	}

	public run(code: string) {
		return this.scheme.evaluate(code);
	}
};
