const exposeLoginStatus = (req,res,next) => {

    if(req.session.currentUser){
        res.locals.isLoggedIn = true;
        res.locals.currentUser = req.session.currentUser
    }else{
        res.locals.isLoggedIn = false;
        res.locals.currentUser = null;
    }
    next();
}

module.exports = exposeLoginStatus;
