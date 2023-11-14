import "dotenv/config";
import connectDB from "./db/index.js";
import { app } from "./app.js";

connectDB()
    .then(() => {
        try {
            app.listen(process.env.PORT || 8000, () => {
                `⚙️ Server is running on port: ${process.env.PORT || 8000}`;
            });
        } catch (error) {
            app.on("error", (err) => {
                console.log(`Server can't be run, Error: ${err}`);
            });
        }
    })
    .catch((err) => {
        console.log(`MONGODB Connection failed!! ERROR: ${err}`);
    });
