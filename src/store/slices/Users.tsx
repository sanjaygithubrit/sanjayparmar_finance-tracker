import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface userslicetype {
   name:string;
   email:string;
   password:string|Number;
   id:any;
    }

const initialState:userslicetype[] = [{
name:"sanjay",
email:"sanjayparmar1650@gmail.com",
password:"123456",
id:1,
}]

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {

    addUser(state:userslicetype[], action: PayloadAction<any>){
        // console.log(action.payload,"state");
      const registerdata = action.payload;
   
        // console.log(registerdata);
      state.push(registerdata);
    //   console.log(state,"statte");
    },

   
  },
});

export default usersSlice.reducer;

export const {
    addUser
} = usersSlice.actions;
