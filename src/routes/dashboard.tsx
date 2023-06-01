import { RouteObject } from "react-router"
import DHome from "../pages/dashboard/d-home"
import DLeave from "../pages/dashboard/d-leave"
import DmangeLeave from "../pages/dashboard/d-manage-leave"
import DLayout from "../pages/dashboard/d-layout"


const routeDashboard: RouteObject[] = [
    {
        path: '/dashboard',
        // element: <DLayout />,
        // element: <AuthGuard />,
        element: <DLayout />,
        children: [
            {
                path: '',
                element: <DHome />
            },
            {
                path: 'request-for-leave',
                element: <DLeave />
            },
            {
                path: 'manage-leave',
                element: <DmangeLeave />
            },
        ]
    }
]


export default routeDashboard