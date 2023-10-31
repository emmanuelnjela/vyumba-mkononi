import { useState, useEffect, useContext, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";
import _ from "lodash";

import UsersContext from "../../../context/usersContext.jsx";
import HouseRequestsBody from "./houseRequestsBody/HouseRequestsBody.jsx";
import HouseRequestsHeader from "./houseRequestsHeader.jsx";
import HouseRequestsNavigator from "./houseRequestsNavigator.jsx";
import HousesInfoSelectContext from "../../../context/houseInfoSelectContext.jsx";

function HouseRequests() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const [houseRequests, setHouseRequests] = useState([]);
  const location = useLocation();
  const houseRequestsUrl = "http://localhost:3001/houseRequests";
  const { currentUser } = useContext(UsersContext);
  const { minReasePriceItems, maxReasePriceItems, roomTypeItems } = useContext(
    HousesInfoSelectContext
  );
  const isAddModeRef = useRef(true);

  useEffect(() => {
    axios
      .get(houseRequestsUrl, {
        withCredentials: true,
      })
      .then((respond) => {
        // console.log(respond);
        const { houseRequests: houseRequestsInDB, message } = respond?.data;
        if (message) throw new Error(message);
        if (currentUser._id !== houseRequestsInDB[0]?.ownerId) return;

        setHouseRequests(
          houseRequestsInDB.sort((a, b) => {
            const aDate = new Date(a.DateOfCreation);
            const bDate = new Date(b.DateOfCreation);

            return bDate - aDate; // Compare the dates directly
          })
        );
        console.log(houseRequestsInDB);
        // console.log(houseRequestsInDB[0].map(({label, value}) => ["minReasePerMonth", "maxReasePerMonth", "roomType"].includes(label) ? ))
        const houseRequestInDB = houseRequestsInDB[0];
        reset({
          location: houseRequestInDB?.location,
          description: houseRequestInDB?.description,
          minReasePerMonth: minReasePriceItems.find(
            (item) => item.value === houseRequestInDB?.minReasePerMonth
          ),
          maxReasePerMonth: maxReasePriceItems.find(
            (item) => item.value === houseRequestInDB?.maxReasePerMonth
          ),
          roomType: roomTypeItems.find(
            (item) => item.value === houseRequestInDB?.roomType
          ),
          whatsapp: houseRequestInDB?.whatsapp,
          phone: houseRequestInDB?.phone,
        });
      })
      .catch((error) => console.log(error.message));
  }, [location.pathname]);

  async function onData(houseRequestInfo) {
    console.log(houseRequestInfo);
    // delete add update
    try {
      houseRequestInfo.roomType = houseRequestInfo.roomType?.value;
      // houseRequestInfo.minReaseLength = houseRequestInfo.minReaseLength?.value;
      houseRequestInfo.minReasePerMonth =
        houseRequestInfo.minReasePerMonth?.value;
      houseRequestInfo.maxReasePerMonth =
        houseRequestInfo.maxReasePerMonth?.value;

      if (isAddModeRef.current) {
        console.log(houseRequestInfo);
        const respond = await axios.post(
          houseRequestsUrl,
          { houseRequestInfo },
          {
            withCredentials: true,
          }
        );
        const { message, houseRequest } = respond.data;
        if (message) throw new Error(message);
        setHouseRequests([...houseRequests, houseRequest]);
        toast("Ombi lako limetumwa kikamilifu!");
      }
      console.log(houseRequestInfo);
      const respond = await axios.put(
        houseRequestsUrl,
        {
          id: houseRequests[0]?._id,
          dataElements: Object.entries(houseRequestInfo).map(
            ([name, value]) => {
              return { name, value };
            }
          ),
        },
        { withCredentials: true }
      );
      const { message, updatedHouseRequest } = respond.data;
      console.log(updatedHouseRequest);
      if (message) throw new Error(message);
      setHouseRequests(
        houseRequests.map((h) =>
          h._id == updatedHouseRequest ? updatedHouseRequest : h
        )
      );
      toast("Ombi lako limedalishwa kikamilifu!");
    } catch (error) {
      console.log(error);
    }
    // reset({ ...data });
  }
  const onError = (err) => console.log(err);

  useEffect(() => {
    console.log(houseRequests);
    if (
      !_.isEmpty(houseRequests) ||
      houseRequests[0]?.ownerId == currentUser._id
    ) {
      isAddModeRef.current = false;
    }
  }, [houseRequests, houseRequests[0]]);

  const handleHouseRequestDelete = async (houseRequestId) => {
    try {
      await axios.delete(`${houseRequestsUrl}/${houseRequestId}`, {
        withCredentials: true,
      });
      setHouseRequests(
        houseRequests.filter(
          (houseRequest) => houseRequest._id !== houseRequestId
        )
      );
      reset({
        location: "",
        description: "",
        maxReasePerMonth: "",
        minReasePerMonth: "",
        roomType: "",
        whatsapp: "",
        phone: "",
      });
      toast("Ombi lako limefutwa kikamilifu!");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="house-requests w-95 w-md-60 m-auto">
      <HouseRequestsHeader houseRequests={houseRequests} />
      <HouseRequestsBody
        houseRequests={houseRequests}
        handleSubmit={handleSubmit}
        onHouseRequestDelete={handleHouseRequestDelete}
        onData={onData}
        onError={onError}
        register={register}
        control={control}
        errors={errors}
      />
      <HouseRequestsNavigator />
    </div>
  );
}

export default HouseRequests;
