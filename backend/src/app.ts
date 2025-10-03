import express from "express";
import cors from "cors";
import usersRouter from "./routes/user.routes";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/users", usersRouter);

export default app;
