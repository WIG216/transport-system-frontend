import React from "react";

const ProgressBar = (props) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 6,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 20,
    marginTop: 0
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    transition: 'width 1s ease-in-out',
  }

  return (
    <div style={containerStyles}>
      <div style={{...fillerStyles}}>
       
      </div>
    </div>
  );
};

export default ProgressBar;