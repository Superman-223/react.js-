
import HouseRow from "./houseRow";
import useHouses from "../hooks/useHouses"
import loadingStatus from "../helpers/loadingStatus";
import LoadingIndicator from "./loadingIncator";
const houseArray = [
  {
    id: 1,
    address: "12 Valley of Kings, Geneva",
    country: "Switzerland",
    price: 900000,
  },
  {
    id: 2,
    address: "89 Road of Forks, Bern",
    country: "Switzerland",
    price: 500000,
  },
];


const HouseList = ({selectHouse}) => {
 // const [houses, setHouses] = useState(houseArray);
//   const [counter, setCounter] = useState(0);
//   setCounter(current => counter ++);

const {houses, setHouses, loadingState} = useHouses();


if(loadingState !== loadingStatus.loaded)
   return  <LoadingIndicator loadingState ={loadingState} />
   // return null // means the component has no visual values.

  const addHouse = () => {
    setHouses([
      ...houses,
      {
        id: 3,
        address: "32 Valley Way, New York",
        country: "USA",
        price: 1000000,
      },
    ]);
  };

  return (
    <>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          Houses currently on the market
        </h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Address</th>
            <th>Country</th>
            <th>Asking Price</th>
          </tr>
        </thead>
        <tbody>
          {houses.map((h) => (
            <HouseRow key={h.id} house={h} selectHouse = {selectHouse} />
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={addHouse}>
        Add
      </button>
    </>
  );
};

export default HouseList;