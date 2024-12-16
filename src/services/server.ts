import { Response, createServer } from "miragejs";

export const server = () => {
	createServer({
		routes() {
			this.namespace = "api";

			this.post("/execute", (_, req) => {
				const fromClient = JSON.parse(req.requestBody);
				const status = Math.random() * 10 > 5 ? "success" : "fail";

				if (typeof fromClient !== "object") {
					console.error("The client request body is not object.");

					const code = 500;
					const headers = {};
					const data = { errors: ["The request body is not object."] };

					return new Response(code, headers, data);
				}

				switch (status) {
					case "success": {
						return {
							status: "success",
							output: "Hello, World!",
						};
					}

					case "fail": {
						console.error("SyntaxError: Unexpected token");

						const code = 400;
						const headers = {};
						const data = {
							status: "error",
							error: "SyntaxError: Unexpected token",
						};

						return new Response(code, headers, data);
					}
				}
			});
		},
	});
};
