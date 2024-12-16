import { Response, createServer } from "miragejs";

export const server = () => {
	createServer({
		routes() {
			this.namespace = "api";

			this.post("/execute", (_, req) => {
				const fromClient = JSON.parse(req.requestBody);

				if (typeof fromClient !== "object") {
					console.error("The client request body is not object.");

					const code = 500;
					const headers = {};
					const data = { errors: ["The request body is not object."] };

					return new Response(code, headers, data);
				}

				return {
					status: "success",
					output: "Hello, World!",
				};
			});
		},
	});
};
