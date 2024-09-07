import { web } from "./app/web.js";

const PORT = process.env.PORT || 8000
web.listen(9000, () => console.log("up and running on " + PORT))