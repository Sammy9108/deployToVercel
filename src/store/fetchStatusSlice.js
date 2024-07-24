import { createSlice} from "@reduxjs/toolkit"

const fetchStatusSlice=createSlice({
   name:'fetchStatus',
   initialState:{
      fetchDone:false, //false-pending; true-done
      currentlyFetching:false,
   },
   reducers:{
      markFetchDone:(s)=>{
         s.fetchDone=true;
      },
      markFetchingStarted:(s)=>{
         s.currentlyFetching=true;
      },
      markFetchingFinished:(s)=>{
         s.currentlyFetching=false;
      },
   }
});

export const fetchStatusActions=fetchStatusSlice.actions;

export default fetchStatusSlice;
