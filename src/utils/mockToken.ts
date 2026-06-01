import dotenv from "dotenv";
dotenv.config();

import jwt from "jsonwebtoken";

const token = jwt.sign(
  { id: "test-user" },
  process.env.ACCESS_JWT_SECRET as string,
);

console.log(token);
