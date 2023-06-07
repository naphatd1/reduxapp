import { useEffect } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { firebaseApp } from '../configs/firebase'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../redux-toolkit/hooks'
import { selectAuthState } from '../redux-toolkit/auth/auth-slice'
import { getCurrentAccountThunk } from '../redux-toolkit/auth/auth-thunk'
import { CircularProgress } from '@mui/material'

type AdminGuardPropType = {
    children: React.ReactNode
}


const AdminGuard = (props: AdminGuardPropType) => {
    const auth = getAuth(firebaseApp)
    const navigate = useNavigate()
    const { account, isAuthLoading } = useAppSelector(selectAuthState)
    const dispatch = useAppDispatch()
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(getCurrentAccountThunk(user.uid))
            } else {
                navigate('/login')
            }
        })
        return () => unsubscribe()
    }, [])
    if (isAuthLoading === true) {
        return <CircularProgress />
    }
    if (account?.role !== "admin") {
        return <Navigate to='../permission-denied' />
    }
    return (
        <>{props.children}</>
    )
}

export default AdminGuard