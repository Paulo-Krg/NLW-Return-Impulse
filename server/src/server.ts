import express from "express";
import cors from "cors";
import { routes } from "./routes";

const baseUrl = process.env.SERVERBASEURL || "https://localhost:";
const port = process.env.PORT || "3333";

const app = express();
app.use(
	cors({
		origin: `${baseUrl}${port}`,
	})
);
app.use(express.json());
app.use(routes);

app.listen(port, () => {
	console.log(`HTTP server running on ${baseUrl}${port}`);
});
