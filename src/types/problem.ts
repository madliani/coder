export type ProblemFunctionSign = {
	typescript: string;
	php: string;
};

export type Problem = {
	num: number;
	title: string;
	difficulty: string;
	desc: string;
	examples: string[];
	constraints: string[];
	fun_sign: ProblemFunctionSign;
	notes: string[];
};
