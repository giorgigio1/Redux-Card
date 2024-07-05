import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SocialNetworks {
  instagram: string;
  facebook: string;
  twitter: string;
  discord: string;
}

interface UserState {
  name: string;
  surname: string;
  picture: string;
  socialNetworks: SocialNetworks;
}

const initialState: UserState = {
  name: "",
  surname: "",
  picture: "",
  socialNetworks: {
    instagram: "",
    facebook: "",
    twitter: "",
    discord: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<UserState>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setUserInfo } = userSlice.actions;

export default userSlice.reducer;
