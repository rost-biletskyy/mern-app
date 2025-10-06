import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger";
import usersRouter from "./routes/user.routes";
//test
const app = express();

//middleware
app.use(cors());

app.use(express.json());

//swaggeer
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//routes
app.use("/users", usersRouter);

export default app;
