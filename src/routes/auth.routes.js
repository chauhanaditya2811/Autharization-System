import express from "express";
import * as authcontroller from  "../controllers/auth.controller.js"


const authRouter = express.Router();

/**
 * post /api/auth/register
 */
authRouter.post("/register",authcontroller.register)

/**
 * post /api/auth/login
 */
authRouter.post("/login", authcontroller.login)

/**
 * get /api/auth/get_me
 */
authRouter.get("/get-me",authcontroller.getMe)

/**
 * get /api/auth/refresh-Token
 */
authRouter.get("/refresh-token" , authcontroller.refreshToken)

/**
 * get /api/auth/logout 
 */

authRouter.get("/logout", authcontroller.logout)  

/**
 * get/api/auth/logout-all
 */
authRouter.get("/logout-all", authcontroller.logoutAll)


export default authRouter;