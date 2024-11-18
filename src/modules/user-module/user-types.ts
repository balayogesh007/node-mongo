

export interface CreateUserInput {
    firstname: string,
    lastname: string,
    username: string,
    emailId: string,
    password: string,
    createdBy?: string,
    updatedBy?: string,
    deletedBy?: string,
    deletedOn?: Date
} 