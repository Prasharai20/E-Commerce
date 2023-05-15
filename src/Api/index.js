import React, { useEffect, useState } from "react";

const Api = () => {
  const [row, setRow] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("hello");
    const url = "http://localhost:4000/college";
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setRow(data))
      .catch((eerr) => console.log("error"));
  }, []);

  const saveData = () => {
    console.log(name);
  };

  console.log("all data", row);
  //   console.log(name);
  return (
    <div className="justify-center item-center flex mx-auto w-[50%] flex-col bg-green-400 ">
      <div>
        {/* <h3>Form</h3> */}
        Name{" "}
        <input
          type="text"
          className="m-3 "
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br />
        Age <input type="text" className="m-3 " />
        <br />
        College <input type="text" className="m-3 " />
        <br />
        <button
          className="text-black bg-gray-300 m-3 p-2 rounded-lg"
          onClick={saveData}
        >
          submit
        </button>
      </div>
      <div>
        <table>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>College</th>
          </tr>
          {row.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.college}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Api;
