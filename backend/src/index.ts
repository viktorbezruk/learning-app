import express, { Application } from "express";
import cors from "cors";
import learningRoutes from "./routes/learningRoutes";

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

app.use("/api/learning-content", learningRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
