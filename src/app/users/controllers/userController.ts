import { Request, Response } from "express";
import { UserService } from "../services/userService";
import { makeCreateUserSchema } from "../schemas/createUserSchema";

export class UserController {
    constructor(private service: UserService ) {};

    async createUser(req: Request, res: Response) {
        const { body: user, file } = req;
        
        try {
            await makeCreateUserSchema().validate(user);

        } catch (err: any) {
            return res.status(400).json({
                errors: err.errors,
            });
        };

        const payload = { ...user, photo: {
            filename: file?.filename,
            mimetype: file?.mimetype,
        }
            
        }
        const newUser = await this.service.createUser(payload);
        
        if('error' in newUser ) {
            return res.status(newUser.status).json(newUser);
        };

        return res.status(201).json(newUser);
    };
};