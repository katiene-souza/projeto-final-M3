import { Request, Response } from "express";
import { makeCreateLoginSchema } from "../schemas/createLoginSchema";
import { AuthService } from "../services/AuthService";

export class AuthController {
    constructor(private service: AuthService) {};

    async login(req: Request, res: Response) {
        const {body: user} = req;

        try {
            await makeCreateLoginSchema().validate(user);
        }catch(err: any) {
            return res.status(400).json({
                errors: err.errors
            });
        };

        const result = await this.service.login(user) as any;
        if('error' in result) {
            return res.status(result.status).json(result);
        };

        return res.status(200).json(result);
    };
};

