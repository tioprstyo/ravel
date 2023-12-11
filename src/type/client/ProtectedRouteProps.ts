import { ReactElement } from 'react';

export interface ProtectedRouteProps {
    isAllowed: boolean;
    redirectTo: string;
    children: ReactElement
}