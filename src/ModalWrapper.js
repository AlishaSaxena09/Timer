import React from "react";

const ModalWrapper = ({ show, setShow, children }) => {
  return (
    <>
      <div
        onClick={() => setShow(false)}
        className={`fixed top-0 left-0 bg-black bg-opacity-25 h-full w-full ${
          show ? "translate-y-0" : "translate-y-full"
        }`}
      ></div>
      <div
        className={`absolute top-20 w-full max-w-xl rounded-md h-auto bg-white p-6 transition-transform ${
          show ? "translate-y-0" : "translate-y-full hidden"
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default ModalWrapper;
