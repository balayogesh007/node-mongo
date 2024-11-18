import User from "../../models/user-model/user-model";
import { CreateUserInput } from "./user-types";

export class UserService {
    async createUser(userInput: CreateUserInput) {
        try {
            const user = await User.create(userInput);
            return user;
        } catch (error) {
            console.error('Failed to create user', error);
        }
    }

    async getUserDetailById(id: string) {
        return User.findById(id);
    }
}