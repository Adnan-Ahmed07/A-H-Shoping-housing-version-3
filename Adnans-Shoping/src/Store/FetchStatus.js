// import { createSlice} from"@reduxjs/toolkit";

// const fetchStatusSlice=createSlice({
//   name:'fetchStatus',
//   initialState:{ 
//     fetchDone:false,//false mane pending and true mane done
//     currentFething:false,
//   },
//   reducers:{ 
//     markFetchDone:(state)=>{ 
//       return state.fetchDone=true;
     
//     },
//     markFetchingStarted:(state)=>{ 
//        return state.currentFething=true;
       
//     },
//     markFetchFinish:(state)=>{ 
//       return state.currentFething=false;
      
//     }
//   }
// });
// export const fetchStatusAction=fetchStatusSlice.actions;
// export default fetchStatusSlice;

import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: 'fetchStatus',
  initialState: { 
    fetchDone: false, // false means pending, and true means done
    currentFetching: false,
  },
  reducers: { 
    markFetchDone: (state) => { 
      state.fetchDone = true; // modify state directly without returning
    },
    markFetchingStarted: (state) => { 
      state.currentFetching = true; // modify state directly
    },
    markFetchFinish: (state) => { 
      state.currentFetching = false; // modify state directly
    }
  }
});

export const fetchStatusAction = fetchStatusSlice.actions;
export default fetchStatusSlice;


