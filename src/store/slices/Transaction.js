import { createSlice } from "@reduxjs/toolkit";

 const initialState =[{
    id:1,
    transactiondate: "2023-05-02",
    month: "May 2023",
    transactiontype: "Personal Expense",
    fromaccount: "Real Living",
    toaccount: "Full Circle",
    amount: "6000",
    receipt: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMASURBVHgB7VZPTxNBFH8zs9vSEkJRJF4wFBUKF9ujJ8s3KF/AlES4+hHAbwA3Q6uCVw/wDejdA8XEUIxJm+gBaAmlJm3D7s7zzcbittt/YhcP8jvN7Lx577c7v/ntA/jfwf4oOo7anUdf71tg6TpDvXWZo//i9EKvwIfJWr8p+yYwuvRpWmiBxxzchZtIADMk8Hwp9fALDIqAKq5rQ/P2xBLHIC4rbYtzHpCSTaqxQPn5JB3J98qtQR/QuD9sF0Dt4+nb6ZNusSPPD7/7/eIpMjFDR/YNMszsFs+hByjhXcZZALg8Pk13L67w4/3cmeTWmaSjGnmQG+0V35OA7tMC9kBiBfqFlJWmvX9D4DrgwI1+Y10iHH9xGGeMrdIwDoNFBhFfldJzmY4EJlaOEhS0A16CsWRxc3bbRSCU3A/pemCfhlPgKVjZMKrh8lasrGZXGhDCH/e+uAKGBB9KNGZXBOjco3BDoGsdchG4WeC/JvAbjiMQuyTJAngNqqFpsOUiUEzNZI3LWkzdVfAASOpXuY1gLXb8eq7gIqCg+4ZXTRO2hMCwlLAxiC/SKGwOV8OmWV/3VYMvnevNGkAZpU5jz7L4qmXhenEzEqbNC4C4jQjZplgiJ6VctNfdRNV8Q62VUrNjjcKaFsxLxHhHAvTWB2B7ASaJSH5iJbfDGEwZJqyV0pGYMVwbU0lVYcFx4ezN/K6yVjUGC5conR1TTEXChlFbYxKm7i3n9sjgzmnfGmMYIuc7cNZs6gc4YtbpzvTWZBgsoVMPRImyrEpvDXjAkRXq9Xq5EafGOh+ieDOu14JPJpZzcexgakzKTEcCwgcZy4JOiBKhKBlWAgTpRQSfhZKHJNh6WdOD74huginyEuncOwO5LDQRag0YXz46Zw6jGCxYuUiacD5xGREVz4JHwDa5XQR+CdETtAqwLQFS6i54RaBFgPazdoHq6sCgOyIGWfKVWOvjtj8jcsIlUvLAvgTdHuUVi9CWVxeo/pC2U5/ArnUryIgKyKHQ2gfewomfTes99hIEuf0AAAAASUVORK5CYII=",
    notes: "personal Expense",
  }]

const transactionSlice = createSlice({
  name: "transaction",
  initialState ,
  reducers: {

    addtransactiondata(state, action) {
        console.log(action.payload,"state");
      const adddata = action.payload;
    //   console.log(state);
    //   console.log(adddata,"first");
    //   const len = state.reduce(sum => sum + 1, 0);
      
    //   console.log(len);
    //   console.log(adddata,"ade");
    //   const addid = state[len-1].id 
    //   console.log(addid,"addidd");
    //   adddata.id = addid+1;
    //   state[len-1].id = len ;
      state.push(adddata);
      console.log(state,"statte");
    },

    edittransactiondata(state, action) {
      const editdata = action.payload.data;
      const editid = action.payload.id;
      let index = state.findIndex((x) => x.id === editid);

      state.splice(index, 1, editdata);
    },

    deletetransactiondata(state, action) {

    }
  },
});

export default transactionSlice.reducer;

export const {
  addtransactiondata,
  edittransactiondata,
  deletetransactiondata,
} = transactionSlice.actions;
