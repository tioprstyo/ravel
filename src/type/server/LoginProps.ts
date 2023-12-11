export interface LoginDataProps {
    message: string;
    accessToken: string;
}

export interface LoginProps {
    status: string | number;
    data?: LoginDataProps
}