import UserLayout from "@/layouts/userLayout";
import ShareInfo from "@/pages/ShareInfo";
import useUserStore from "@/stores/userStore";
import {lazy, Suspense } from "react";
const Home = lazy( () => import('../pages/Home'))
const Friends = lazy( () => import('../pages/Friends'))
const Profile = lazy( () => import('../pages/Profile'))
const Login = lazy( () => import('../pages/Login'))
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router";
// import Friends from "@/pages/Friends";
// import Home from "@/pages/Home";
// import Login from "@/pages/Login";
// import Profile from "@/pages/Profile";


const commonPath = [
    {
        path: '/share',
        Component: ShareInfo
    }
]

const guestRouter = createBrowserRouter([
    {
        path: '/',
        Component: Login
    },
    {
        path: '*',
        element: <Navigate to='/' />
    },
    ...commonPath
])

const userRouter = createBrowserRouter([
    {
        path: '/',
        Component: UserLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'friends',
                Component: Friends
            },
            {
                path: 'profile',
                Component: Profile
            },
            {
                path: '*',
                element: <Navigate to='/' />,
            },
            ...commonPath
        ]
    }
])

function AppRouter() {
    // const user = null //user not login
    // const user = { email: 'andy@ggg.mail' }
    const user = useUserStore(state => state.user)
    const finalRouter = user ? userRouter : guestRouter
    return (
        <Suspense fallback={<span className="loading loading-dots loading-md"></span>}>
            <RouterProvider key={user?.id} router={finalRouter} />
        </Suspense>
    )
}

export default AppRouter