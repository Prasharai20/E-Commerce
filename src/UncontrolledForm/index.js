import React, { useRef, useState } from "react";

const UncontrolledForm = () => {
  const [data, setData] = useState("");

  const nameRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setData(nameRef.current.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        ref={nameRef}
        onChange={handleSubmit}
      />
      {/* <button onClick={handleSubmit}>Submit</button> */}
      <p>{data}</p>
    </div>
  );
};

export default UncontrolledForm;
