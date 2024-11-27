import { createSlice} from"@reduxjs/toolkit";

const itemsSice=createSlice({
  name:"items",
  initialState:[],
  reducers:{ 
    addInitialItems:(state,action)=>{ 
      
      return action.payload;
    }
  }
});
export const itemsAction=itemsSice.actions;
export default itemsSice;

