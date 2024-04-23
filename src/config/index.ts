import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.resolve(__dirname, `../../.env${process.env.NODE_ENV
    ? "." + process.env.NODE_ENV?.trim()
    : ""}`),
});

export const authConfig = {
  secret: String(process.env.TOKEN_SECRET),
  saltRounds: Number(process.env.TOKEN_SALT),
  expires: String(process.env.TOKEN_EXPIRES_IN),
};

export const serverConfig = {
  port: String(process.env.PORT),
}