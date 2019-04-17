import express from "express";
import path from "path";
// import morgan from "morgan";
import bodyParser from "body-parser";
import routes from "./routes";

const app = express();

// app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", routes);

if (process.env.NODE_ENV === "production") {
  // express will serve up production assets
  // like main.js file, or main.css file
  app.use(express.static("client/build"));

  // express will serve up the index.html file
  // if it doesn't recognize the route
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server running at localhost:${port}`));
