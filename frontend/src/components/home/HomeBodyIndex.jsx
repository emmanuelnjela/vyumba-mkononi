import { useContext } from "react";
import HousesContext from "../../context/housesContext";
import HouseCards from "../common/houseCards/HouseCards";
import HomeSearchBar from "./homeSearchBar";

export function HomeBodyIndex() {
  const housesContext = useContext(HousesContext);
  return (
    <>
      <HomeSearchBar />
      <HouseCards
        houses={housesContext.all}
        houseCardsTitle="ZILIZOWEKWA HIVI KARIBUNI"
        layoutClass="grid-container"
      />
    </>
  );
}
