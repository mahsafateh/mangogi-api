import express from "express";

import { login, register } from "../controllers/authentication";

export default (router: express.Router) => {
  router.post("/api/v1/auth/register", register);
  router.post("/api/v1/auth/login", login);
};
