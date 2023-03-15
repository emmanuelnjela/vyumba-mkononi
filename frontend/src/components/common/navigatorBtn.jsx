function NavigatorBtn({position}) {
    return (
        <div className="navigator-btn">
            <i className={`fas fa-angle-${position || "down"}`}></i>
        </div>
    )
}

export default NavigatorBtn