import { lazy, Suspense, useState } from "react";
import _ from "lodash";

const HouseRequestsEdit = lazy(() => import("./HouseRequestsEdit"));
const HouseRequestsForm = lazy(() => import("./houseRequestsForm"));
const HouseRequestsSubmitted = lazy(() => import("./houseRequestsSubmitted"));
const HouseRequestsSubmitButton = lazy(() =>
  import("./houseRequestsSubmitButton")
);
import { PageLoader } from "../../../common/PageLoader";
function HouseRequestsBody({
  houseRequests,
  handleSubmit,
  onData,
  onError,
  register,
  control,
  errors,
  onEditHouseRequests,
  onHouseRequestDelete,
}) {
  function onError(errors) {
    console.log(errors);
  }
  const [showRequest, setShowRequest] = useState(false);
  return (
    <div className="house-request__body">
      <Suspense fallback={<PageLoader />}>
        {_.isEmpty(houseRequests) ? (
          <>
            <HouseRequestsForm
              errors={errors}
              control={control}
              register={register}
            />
            <HouseRequestsSubmitButton
              onData={onData}
              onError={onError}
              handleSubmit={handleSubmit}
            />
          </>
        ) : !showRequest ? (
          <HouseRequestsSubmitted setShowRequest={setShowRequest} />
        ) : (
          <HouseRequestsEdit
            houseRequests={houseRequests}
            onHouseRequestDelete={onHouseRequestDelete}
            onData={onData}
            onError={onError}
            handleSubmit={handleSubmit}
            register={register}
            control={control}
            errors={errors}
          />
        )}
      </Suspense>
    </div>
  );
}
export default HouseRequestsBody;
