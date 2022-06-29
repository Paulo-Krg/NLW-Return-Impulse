import express from "express";
import cors from "cors";
import { routes } from "./routes";

const frontEndUrl = process.env.FRONT_END_URL;
const port = process.env.PORT;

const app = express();
app.use(
	cors({
		origin: `${frontEndUrl}`,
	})
);
app.use(express.json());
app.use(routes);

app.listen(port, () => {
	console.log(`HTTP server running on ${port}`);
});
