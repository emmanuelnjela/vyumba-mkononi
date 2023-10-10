import { useContext } from "react";
import HousesContext from "../../context/housesContext";
import HouseCards from "../common/houseCards/HouseCards";
import HomeSearchBar from "./homeSearchBar";
import Pagination from "../common/pagination";

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
