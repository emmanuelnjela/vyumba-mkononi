import { useContext } from "react"
import TextArea from "../../common/textArea"
import AddHouseInfoContext from "../../../context/addHouseInfo"

function DescriptionTextArea() {
    const {houseInfo, onAddHouseInfo} = useContext(AddHouseInfoContext)

    return (
        <TextArea name="description" value={houseInfo?.description} onTextArea={onAddHouseInfo} />
    )
}

export default DescriptionTextArea