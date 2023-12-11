import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { isLoggedIn } from 'src/storage';
import Login from 'src/views/login';
import Register from 'src/views/register';
import Testimoni from 'src/views/testimoni';
import SearchPage from 'src/views/search';
import SearchDetail from 'src/views/search/detail';
import Home from 'src/views/home';
import { useRecoilValue } from 'recoil';

const RouteElement = () => {
    const isLogin = useRecoilValue(isLoggedIn)

    useEffect(() => {
    }, [isLogin]);

    return (
        <Routes>
            <Route
                path='/login'
                element={
                    <ProtectedRoute isAllowed={!isLogin ? true : false} redirectTo='/'>
                        <Login />
                    </ProtectedRoute>
                }
            />
            <Route
                path='/register'
                element={
                    <ProtectedRoute isAllowed={!isLogin ? true : false} redirectTo='/'>
                        <Register />
                    </ProtectedRoute>
                }
            />
            <Route
                path='/testimoni'
                element={
                    <ProtectedRoute isAllowed={isLogin ? true : false} redirectTo='/login'>
                        <Testimoni />
                    </ProtectedRoute>
                }
            />
            <Route
                path='/search'
                element={
                    <ProtectedRoute isAllowed={isLogin ? true : false} redirectTo='/login'>
                        <SearchPage />
                    </ProtectedRoute>
                }
            />
            <Route
                path='/search/detail/:id'
                element={
                    <ProtectedRoute isAllowed={isLogin ? true : false} redirectTo='/login'>
                        <SearchDetail />
                    </ProtectedRoute>
                }
            />
            <Route
                path='/'
                element={
                    <ProtectedRoute isAllowed={isLogin ? true: false} redirectTo='/login'>
                        <Home />
                    </ProtectedRoute>
                }
            />
        </Routes>
    );
}

export default RouteElement;
