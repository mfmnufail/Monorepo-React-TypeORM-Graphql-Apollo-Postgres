import { createConnection } from "typeorm";
import { Outlet } from "../entity/Outlet";

export const connectDb = async (retries = 5) => {
  while (retries) {
    try {
      await createConnection(
        {type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "3663",
        database: "outlet-pos",
        entities: [
         Outlet
      ]
      
      }
      );
      break;
    } catch (err) {
      console.log(err);
      retries -= 1;
      console.log(`retries left: ${retries}`);
      // wait 5 seconds
      await new Promise(res => setTimeout(res, 5000));
    }

    
  }
};