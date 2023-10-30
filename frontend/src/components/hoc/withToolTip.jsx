import { useState } from "react";

import ToolTip from "./helpers/toolTip.jsx";

function withToolTip(Content) {
  const WithToolTop = ({ btnText, ...props }) => {
    const [showToolTip, setShowToolTip] = useState(false);
    const handleShowToolTip = (e) => {
      setShowToolTip(true);
    };
    const handleHideToolTip = (e) => {
      setShowToolTip(false);
    };

    return (
      <div className="with-tool-tip">
        {showToolTip && <ToolTip tipText={btnText} />}
        <Content
          onShowToolTip={handleShowToolTip}
          onHideToolTip={handleHideToolTip}
          {...props}
        />
      </div>
    );
  };
  return WithToolTop;
}

export default withToolTip;
