import jwt from "jsonwebtoken";
import "dotenv/config";

export const createToken = async (user) => {
  const payload = {
    id: user.id,
    version: user.tokenVersion,
    username: user.username,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    algorithm: "HS256",
    expiresIn: "15m",
  });
  return token;
};

export const verifyToken = async (token) => {
  const payload = jwt.verify(token, process.env.JWT_SECRET, {
    algorithms: ["HS256"],
  });
  return payload;
};
