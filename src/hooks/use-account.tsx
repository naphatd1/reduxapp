import toast from "react-hot-toast";
import { selectAuthState } from "../redux-toolkit/auth/auth-slice"
import { useAppSelector } from "../redux-toolkit/hooks"
import { logout } from "../services/auth.service";
import { useNavigate } from "react-router-dom";


export const useAccount = () => {
    const navigate = useNavigate()
    const { account } = useAppSelector(selectAuthState)
    const handleLogout = async () => {
        await logout()
        navigate('/')
        toast.success('logout success')
    };
    return { account, handleLogout }
}