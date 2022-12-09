import RenderResult from "next/dist/server/render-result";
import { useCallback, useState } from "react"
import loadingStatus from "../helpers/loadingStatus"

const useGetRequest = (url) => {
    const [loadingState, setLoadingState]=  useState(loadingStatus.isLoading);

    const get = useCallback(async() => {
        setLoadingState(loadingStatus.isLoading);
        try{
            const response = await fetch("/api/houses");
            const result = await response.json();
            setLoadingState(loadingStatus.loaded);
            return result;
        }catch{
            setLoadingState(loadingStatus.hasErrored);
        }
    }, [url]);
    return {get, loadingState};
}

export default useGetRequest;