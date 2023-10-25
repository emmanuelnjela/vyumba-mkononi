import { useState, useEffect, useContext, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";
import _ from "lodash";

import UsersContext from "../../../context/usersContext";

import HouseRequestsBody from "./houseRequestsBody/HouseRequestsBody";
import HouseRequestsHeader from "./HouseRequestsHeader";
import HouseRequestsNavigator from "./HouseRequestsNavigator";

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
  const houseRequestsUrl = "https://vyumbamkononi.onrender.com/houseRequests";
  const { currentUser } = useContext(UsersContext);
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

            return (
              bDate.getMonth() - aDate.getMonth() &&
              bDate.getDate() - aDate.getDate() &&
              bDate.getHours() - aDate.getHours() &&
              bDate.getMinutes() - aDate.getMinutes() &&
              bDate.getSeconds() - aDate.getSeconds()
            );
          })
        );
        console.log(houseRequestsInDB);
        reset({
          location: houseRequestsInDB[0]?.location,
          description: houseRequestsInDB[0]?.description,
          maxReasePerMonth: { label: houseRequestsInDB[0]?.maxReasePerMonth },
          minReasePerMonth: { label: houseRequestsInDB[0]?.minReasePerMonth },
          roomType: { label: houseRequestsInDB[0]?.roomType },
          whatsapp: houseRequestsInDB[0]?.whatsapp,
          phone: houseRequestsInDB[0]?.phone,
        });
      })
      .catch((error) => console.log(error.message));
  }, [location.pathname]);

  async function onData(houseRequestInfo) {
    // delete add update
    try {
      houseRequestInfo.roomType = houseRequestInfo.roomType?.value;
      houseRequestInfo.minReaseLength = houseRequestInfo.minReaseLength?.value;
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
        { houseRequestInfo },
        { withCredentials: true }
      );
      const { message, houseRequest } = respond.data;
      console.log(houseRequest);
      if (message) throw new Error(message);
      setHouseRequests([...houseRequests, houseRequest]);
      toast("Ombi lako limedalishwa kikamilifu!");
    } catch (error) {
      console.log(error.message);
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
