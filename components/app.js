import { useState } from "react";
import Banner from "./banner";
import House from "./house";
import HouseList from "./houseList";

const jsx = <div> Titre </div>
const App = () => {
    const [selectedHouse, setSelectedHouse] = useState();

    const setSelectedHouseWrapper = (house) => {

        setSelectedHouse(house);
    }

    return (
        <div>
            {jsx}
            <Banner headerText="Other Test here" />
            <Banner headerText="Providing houses all over the world" />
            {selectedHouse ? <House house={selectedHouse} /> : <HouseList selectHouse = {setSelectedHouseWrapper} />}
        </div>
    );
};
export default App;