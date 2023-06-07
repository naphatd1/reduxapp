import { UserCredential, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { firebaseApp } from "../configs/firebase";
import { doc, getDoc, getFirestore, setDoc, updateDoc } from "firebase/firestore";
import { Account } from "../app-types/account-type";
import { getDownloadURL, getStorage, ref, uploadString } from "firebase/storage";
import { getBase64 } from "../utils/img-to-base64";


const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)
const storage = getStorage(firebaseApp);

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
//update Account
export async function updateAccount(userId: string, acc: Account): Promise<void> {
    await updateDoc(doc(db, "users", userId), {
      firstName: acc.firstName,
      lastName: acc.lastName
    });
  }
  
  //upload image to storage
export async function uploadImageAndUpdatePhotoURL(userId: string, picture: FileList) {

    const base64Image = await getBase64(picture);
  
    const storageRef = ref(storage, 'user/' + userId + '/avatar');
  
    //upload base64 data url string
    await uploadString(storageRef, base64Image, "data_url");
  
    //get image url from server (storage)
    const imageUrl = await getDownloadURL(storageRef);
  
    //update photo_url
    await updateDoc(doc(db, "users", userId), {
      photoUrl: imageUrl
    })
  
  }