const express = require("express");
const indexRouter = require("./routes/index");
const port = process.env.PORT || 3010;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/", indexRouter);

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});

