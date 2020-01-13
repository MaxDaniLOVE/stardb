import React from "react";

import './RowBlock.css'

const RowBlock = ({leftblock, rightBlock}) => {
  return (
    <div className="person-wrapper">
      {leftblock}
      {rightBlock}
    </div>
  )
}

export default RowBlock;