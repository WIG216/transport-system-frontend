import React from "react";

const ProgressBar = (props) => {
  const { bgcolor, completed, title } = props;

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
    <div className="relative pt-1">
      <div className="flex mb-2 items-center justify-between">
        <div>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200">
            {title}
          </span>
        </div>
        <div className="text-right">
          <span className="text-xs font-semibold inline-block text-pink-600">

          </span>
        </div>
      </div>
      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
        <div style={completed} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
      </div>
    </div>
    // <div style={containerStyles}>
    //   <div style={{...fillerStyles}}>

    //   </div>
    // </div>
  );
};

export default ProgressBar;