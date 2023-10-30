import { useContext } from "react";

import TextArea from "../../common/textArea.jsx";
import AddHouseInfoContext from "../../../context/addHouseInfo.jsx";

function DescriptionTextArea() {
    const {houseInfo, onAddHouseInfo} = useContext(AddHouseInfoContext)

    return (
        <TextArea name="description" value={houseInfo?.description} onTextArea={onAddHouseInfo} />
    )
}

export default DescriptionTextArea