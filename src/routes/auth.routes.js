import express from "express";
import * as authcontroller from  "../controllers/auth.controller.js"


const authRouter = express.Router();

/**
 * post /api/auth/register
 */
authRouter.post("/register",authcontroller.register);

/**
 * get /api/auth/get_me
 */
authRouter.get("/get-me",authcontroller.getMe)

/**
 * get /api/auth/refresh-Token
 */
authRouter.get("/refresh-token" , authcontroller.refreshToken)

/**
 * get /api/aut/logout 
 */

authRouter.get("/logout", authcontroller.logout)  


export default authRouter;