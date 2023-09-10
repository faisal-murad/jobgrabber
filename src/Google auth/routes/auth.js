const router = require("express").Router();
const passport= require("passport");


router.get("/login/success", (req, res)=>
{
    if(req.user)
    {

    }
    else
    {
        res.status(403).json({error:true, message:"Not Authorized"})
    }

    res.status(401).json({
        error:true,
        message:"Log in failure",
    })
})

router.get("/login/failed", (req, res)=>
{
    res.status(401).json({
        error:true,
        message:"Log in failure",
    })
})

router.get(
    "/google/callback",
    passport.authenticate("google",{
        successRedirect:process.env.CLIENT_URL,
        failureRedirect:"/login/failed"
    })
)