import { configureStore }    from '@reduxjs/toolkit'

import transactionSlice from "./slices/Transaction"


 export const store = configureStore({

    reducer:{

        transactions: transactionSlice

    },
});

// export default store;