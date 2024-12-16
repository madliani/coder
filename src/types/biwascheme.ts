declare module "biwascheme" {
	class Interpreter {
		constructor(outputHandler: (output: string) => void);

		public evaluate(code: string): {
			toString(): string;
		};
	}
}
