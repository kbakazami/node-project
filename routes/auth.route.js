import {signin, signup} from "../controllers/auth.controller.js";
import verifyRegister from "../middleware/verifyRegister.js";

export default function userRoute (app) {
    app.use(function (req, res, next) {
        res.header(
            'Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-Type, Accept'
        );
        next();
    });

    app.post('/api/auth/register',
        verifyRegister,
        signup
    );

    app.post('/api/auth/login', signin);
}