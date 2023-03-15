function TogglerBtn({position}) {
    return (
        <div className="toggler-btn">
            <i className={`fas fa-angle-${position || "down"}`}></i>
        </div>
    )
}

export default TogglerBtn