import Express, { Response, Request } from "express";
import "dotenv/config";
import { MongoDbConnection } from "./dbConfig/db-connection";
import { UserController } from "./modules/user-module/user.controller";

async function main() {
  const expressApp = Express();
  const port = process.env.PORT ?? 4002;

  try {
    new MongoDbConnection();

    expressApp.use("/health", (req: Request, res: Response) => {
      res.send("Health Check Success");
    });

    expressApp.use("/api/users", new UserController().getUserRouters());
    expressApp.listen(port, () => {
      console.log(`Server Running on PORT-${port}`);
    });
  } catch (err) {
    console.error("Failed to connect Mongo DB", err);
  }
}

main();
