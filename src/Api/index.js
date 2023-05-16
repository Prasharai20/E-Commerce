import React, { useEffect, useState } from "react";

const Api = () => {
  const [row, setRow] = useState([]);
  const arr = [1, 2, 3, 4, 5];
  // arr[4];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [college, setCollege] = useState("");
  const [id, setId] = useState(null);
  const [btn, setBtn] = useState(true);

  useEffect(() => {
    console.log("hello");
    const url = "http://localhost:1234/college";
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setRow(data))
      .catch((eerr) => console.log("error"));
  }, []);

  const saveData = () => {
    console.log(name, college, email);
    const data = {
      name: name,
      email: email,
      college: college,
    };
    fetch("http://localhost:1234/college", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(
        (data) => window.location.reload(),
        console.log("created success fully")
      )
      .catch((err) => console.log("error"));
  };

  const deteteData = (id) => {
    // http://localhost:1234/college/1
    const check = window.confirm("are You sure delete !");
    if (check == true) {
      const url = `http://localhost:1234/college/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => window.location.reload(), alert("delete success fully"))
        .catch((eerr) => console.log("error"));
    } else {
      alert("not delete");
    }
  };

  const updatedData = () => {
    const upd = {
      name: name,
      email: email,
      college: college,
    };
    fetch(`http://localhost:1234/college/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(upd),
    })
      .then((res) => res.json())
      .then((data) => console.log("updated successfully...!"))
      .catch((err) => console.log("error"));
  };

  const editData = (id) => {
    console.log(id);
    setId(id);
    const findDta = row[id - 1];
    console.log(findDta);
    setName(findDta.name);
    setEmail(findDta.email);
    setCollege(findDta.college);
    setBtn(false);
  };
  return (
    <div className="justify-center item-center flex mx-auto w-[50%] flex-col bg-green-400 ">
      <div>
        {/* <h3>Form</h3> */}
        Name{" "}
        <input
          type="text"
          className="m-3 "
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br />
        email{" "}
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="m-3 "
        />
        <br />
        College{" "}
        <input
          type="text"
          value={college}
          onChange={(e) => setCollege(e.target.value)}
          className="m-3 "
        />
        <br />
        {btn == true ? (
          <button
            className="text-black bg-gray-300 p-2 rounded-lg"
            onClick={saveData}
          >
            save{" "}
          </button>
        ) : (
          <button
            className="text-black bg-gray-300 m-3 p-2 rounded-lg"
            onClick={updatedData}
          >
            update
          </button>
        )}
      </div>
      <div>
        <table>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Age</th>
            <th>College</th>
            <th>Action</th>
          </tr>
          {row.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.college}</td>
                <td>
                  <button onClick={() => deteteData(item.id)}>delete</button>/
                  <button onClick={() => editData(item.id)}>edit</button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Api;
