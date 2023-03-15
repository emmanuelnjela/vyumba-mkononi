function ToolTip({ tipText }) {

  return (
    <div className={`tool-tip`}>
      <p className="tool-tip__text">{tipText}</p>
    </div>
  );
}

export default ToolTip;
