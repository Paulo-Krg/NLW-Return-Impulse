import express from "express";
import cors from "cors";
import { routes } from "./routes";
import { nextTick } from "process";

const frontEndUrl = process.env.FRONT_END_URL;
const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use(
	// cors({
	// 	origin: process.env.FRONT_END_URL,
	// })
	function (req, res, next) {
		res.setHeader("Access-Control-Allow-Credentials", "true");
		res.setHeader("Access-Control-Allow-Origin", `${frontEndUrl}`);
		// res.setHeader("Access-Control-Allow-Origin", "*");
		// another common pattern
		// res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
		res.setHeader(
			"Access-Control-Allow-Methods",
			"GET,OPTIONS,PATCH,DELETE,POST,PUT"
		);
		res.setHeader(
			"Access-Control-Allow-Headers",
			"X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
		);

		console.log(req.headers.origin);

		console.log("res: ", res);

		next();
	}
	// cors({
	// 	origin: `${frontEndUrl}`,
	// })
);
app.use(routes);

app.listen(port, () => {
	console.log(`HTTP server running on ${port}`);
});
