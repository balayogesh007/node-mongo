import { Request, Response, Router } from "express";
import { UserService } from "./user.service";


export class UserController {
    private readonly route: Router;
    private readonly userService;

    constructor(){
        this.route = Router()
        this.userService = new UserService();
        this.UserRoutePath();
    }
    private UserRoutePath() {
        this.route.post('/create', this.createUser);
        this.route.get('/:id', this.getUserDetailById)
    }

    public getUserRouters() {
        return this.route;
      }

    private async createUser(req: Request, res: Response){
        try {
            const createUser = await this.userService.createUser(req?.body);
            if (createUser) {
                res.status(201).json({message: 'User created Successfully.'})
            } else {
                res.status(400).json({message: 'Failed to create user'})
            }
        } catch (error) {
            res.status(500).json({message: 'Internal Server Error'})
        }
    }

    private async getUserDetailById(req: Request, res: Response){
        try {
            const id = req?.params?.id;
            const userData = await this.userService.getUserDetailById(id);
            if (userData){
                res.status(200).json(userData);
            } else {
                res.status(404).json({message: 'User not found'});
            }
        } catch (error) {
            res.status(400).json({message: ''})
        }
    }
}