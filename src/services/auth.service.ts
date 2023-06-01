import { UserCredential, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { firebaseApp } from "../configs/firebase";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { Account } from "../app-types/account-type";


const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)

export async function registerUser(
    firstName: string,
    lastName: string,
    email: string,
    password: string
): Promise<UserCredential> {
    try {
        //register user to firebase authentication
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        //save user profile to firestore
        await setDoc(doc(db, "users", userCredential.user.uid), {
            firstName: firstName,
            lastName: lastName,
            photoUrl: "https://codingthailand.com/site/img/nopic.png",
            role: "member",
        });
        return userCredential;
    } catch (error) {
        throw error;
    }
}

export async function login(email: string, password: string): Promise<UserCredential> {
    try {
        return await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        throw error
    }
}
export async function logout(): Promise<void> {
    try {
        return await signOut(auth)
    } catch (error) {
        throw error
    }
}

export async function getCurrentAccount(userId: string) {
    const accountRef = doc(db, "users", userId) //select * from where users
    const docSnap = await getDoc(accountRef)
    if (!docSnap.exists()) {
        return null
    }

    let accTmp = docSnap.data() as Account
    let account: Account = {
        userId: userId,
        ...accTmp
    }
    return account

}