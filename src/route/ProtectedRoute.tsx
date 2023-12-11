import { Navigate, Outlet } from "react-router-dom";
import { ProtectedRouteProps } from 'src/type';

const ProtectedRoute = ({ isAllowed, redirectTo, children }: ProtectedRouteProps) => {
    if (!isAllowed) {
        return <Navigate to={redirectTo} />
    }
    return children ? children : <Outlet />
}

export default ProtectedRoute;