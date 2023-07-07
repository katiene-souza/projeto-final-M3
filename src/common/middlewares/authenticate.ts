import { NextFunction, Request, Response } from "express";
import JWT from "jsonwebtoken";

export class Authenticate {
    static async execute(req: Request, res: Response, next: NextFunction) {
        
        const { authorization = null } = req.headers;
        if(!authorization){
            return res.status(401).json({ error:'token not defined' });
        };

        const [, token] = authorization.split(" ");

        try {
            JWT.verify(token, process.env.SECRET_KEY as string);
        } catch(err: any) {
            return res.status(401).json({ error: 'Invalid token' });
        };

       /*  const data = JWT.decode(token) as { id: string }; 
        req.user = { id: data.id }; */
        next();
    };
};