declare module "biwascheme" {
	class Interpreter {
		constructor(outputHandler: (error: string) => void);

		public evaluate(code: string): {
			toString(): string;
		};
	}
}
