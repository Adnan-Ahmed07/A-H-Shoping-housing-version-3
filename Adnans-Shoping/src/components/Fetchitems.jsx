import { useEffect } from "react";
import{useSelector,useDispatch}from "react-redux";
import { itemsAction } from "../Store/itemsSlice";
import { fetchStatusAction } from "../Store/FetchStatus";

const FetchItems=()=>{ 
  const fetchStatus= useSelector((store)=>store.fetchStatus);
 const dispatch=useDispatch();
 
  useEffect(()=>{ 
    if(fetchStatus.fetchDone)return;
   
    const controller=new AbortController();
    const signal=controller.signal;
    dispatch(fetchStatusAction.markFetchingStarted());
    fetch("https://a-h-version-3-website-default-rtdb.firebaseio.com/.json",{signal})
    .then(res => res.json())
    
    .then(({items})=>{
      dispatch(fetchStatusAction.markFetchDone());
     dispatch(fetchStatusAction.markFetchFinish());
      dispatch(itemsAction.addInitialItems(items[0]));
      
    });
    return ()=>{
      
      controller.abort();
    }
  },[fetchStatus]);


  return(
    <>
   
    </>
  );
}
export default FetchItems;


