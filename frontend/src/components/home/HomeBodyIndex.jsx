import { useContext } from "react";

import HousesContext from "../../context/housesContext.jsx";
import HouseCards from "../common/houseCards/HouseCards.jsx";
import HomeSearchBar from "./homeSearchBar.jsx";
import Pagination from "../common/pagination.jsx";

export function HomeBodyIndex() {
  const housesContext = useContext(HousesContext);
  return (
    <>
      <HomeSearchBar />
      <Pagination
          items={housesContext.all}
          itemsPerPage={4}
          RenderItems={HouseCards}
          houseCardsTitle="ZILIZOWEKWA HIVI KARIBUNI"
          layoutClass="grid-container"
        />
    </>
  );
}
