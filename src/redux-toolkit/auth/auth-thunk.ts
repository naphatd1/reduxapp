import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCurrentAccount, updateAccount, uploadImageAndUpdatePhotoURL } from "../../services/auth.service";
import { Account } from "../../app-types/account-type";


export const getCurrentAccountThunk = createAsyncThunk(
    "auth/getCurrentAccountThunk",
    async (userId: string) => {
        try {
            const account = await getCurrentAccount(userId)
            return account
        } catch (error) {
            throw error
        }
    }
)

export type argsUpdateAccountType = {
    userId?: string,
    acc?: Account,
    picture?: any
  }

export const updateAccountThunk = createAsyncThunk(
    "auth/updateAccountThunk",
    async (args: argsUpdateAccountType) => {
      try {
        const { userId, acc, picture } = args;
        
        if (picture.length > 0) {
          await updateAccount(userId!, acc!);
          await uploadImageAndUpdatePhotoURL(userId!, picture);
        } else {
          await updateAccount(userId!, acc!);
        }
  
      } catch (error: any) {
        throw error;
      }
    }
  );