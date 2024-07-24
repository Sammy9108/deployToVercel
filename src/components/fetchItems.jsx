import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ItemsActions } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

const FetchItmes = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;

    console.log("strted");
    dispatch(fetchStatusActions.markFetchingStarted());
    fetch("/items.json", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        console.log("done", items);

        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingFinished());
        dispatch(ItemsActions.addInitialItems(items));
      });
    return () => {
      console.log("end");

      controller.abort();
    };
  }, [fetchStatus]);

  return <></>;
};

export default FetchItmes;
