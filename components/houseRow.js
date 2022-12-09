import currencyFormatter from "../helpers/currencyFormatter.js";
import React from "react";
const HouseRow = ({ house, selectHouse }) => {

  return (
    <tr onClick={() => selectHouse(house)}>
      <td>{house.address}</td>
      <td>{house.country}</td>
      {house.price && (
      <td className={`${house.price >= 500000 ? "text-primary": "" }`}>{currencyFormatter.format(house.price)}</td>
      )}
    </tr>
  );
};

// To cache items
///const HouseRowMem = React.memo(HouseRow);

export default HouseRow;
//export { HouseRowMem };