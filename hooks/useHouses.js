import React, { useEffect, useState } from "react";
import loadingStatus from "../helpers/loadingStatus";
import useGetRequest from "./useGetRequest";

const useHouses = () => {
    const [houses, setHouses] = useState([]);
    const {get, loadingState} = useGetRequest("/api/houses");


    //const [loadingState, setLoadingState] = useState(loadingStatus.isLoading)
    useEffect(()=> {
        const fecthHouses = async () =>{
           const houses = await get();
           setHouses(houses);
        };
        fecthHouses();
    }, [get]);

    return {houses, setHouses, loadingState};
};

export default useHouses;