import { useLocation } from "react-router-dom"

function HouseFooterRoomType({roomType}) {
    const roomTypeNames = {apartment: "nyumba nzima", single: "chumba kimoja", double: "chumba, sebure", self: "chumba self"}
    const location = useLocation()
    if(location.pathname === "/home/my_posts") return
    return (
        <p className="text--secondary mt-auto">{roomTypeNames[roomType]} <i className={`fas fa-${roomType === 'apartment' ? 'house' : 'bed'} text--primary`}></i></p>
    )
}

export default HouseFooterRoomType