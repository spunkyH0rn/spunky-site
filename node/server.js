import "dotenv/config"; // loads variables from .env file
import express from "express";
const {PORT = 8885} = process.env;

const app = express();

app.use(express.static("public"));

// parse post params sent in body in json format
app.use(express.json());

app.set('trust proxy', true);

// set the view engine to ejs
app.set('view engine', 'ejs');

/* User-facing endpoints */
// home page
app.get('/', function(req, res) {
  res.render('pages/index');
});
/* End User-facing endpoints */


app.listen(PORT, () => {
	console.log(`Server listening at http://localhost:${PORT}/`);
});
