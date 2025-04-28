
export interface TSubject {
    _id: string;
    name: string;
    gradeLevel: string;
    category: string;
    description?: string;
}

export interface IUser {
    email: string;
    password: string;
    name: string;
    role: 'admin' | 'student' | 'tutor';
    hasShop: boolean;
    clientInfo: {
       device: 'pc' | 'mobile';
       browser: string;
       ipAddress: string;
       pcName?: string;
       os?: string;
       userAgent?: string;
    };
    lastLogin: Date;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
 }