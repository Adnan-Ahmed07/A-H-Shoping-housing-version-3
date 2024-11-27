import {configureStore} from"@reduxjs/toolkit";
import itemsSice from "./itemsSlice";
import fetchStatusSlice from "./FetchStatus";
import bagSice from "./BagSlice";


const AdnanStore=configureStore({ 
  reducer: {
    items:itemsSice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    bag:bagSice.reducer,
  }
});
export default AdnanStore;