import { createSlice} from"@reduxjs/toolkit";

const bagSice=createSlice({
  name:"bag ",
  initialState:[],
  reducers:{ 
    addToBag:(state,action)=>{ 
      
      state.push(action.payload);
    },
    removeFromBag:(state,action)=>{ 
      
      return state.filter(bagItemId=> bagItemId !==action.payload );
    }
  }
});
export const bagSiceAction=bagSice.actions;
export default bagSice;

