export enum UserRoles {
    ADMIN = 'admin',
    USER = 'user'
}

export const jwtConstants = {
    secret: process.env.JWT_SECRET || '53cr37K3y'
}