import express from "express";
import path from "path";
import posts from "./routes/posts.js";
import exp from "constants";

const port = process.env.PORT || 8000;

const app = express();

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// setup static folder
// app.use(express.static(path.join(__dirname, 'public')))

//Routes
app.use("/api/posts", posts);

app.listen(port, () => console.log(`Server running on port ${port}`));
