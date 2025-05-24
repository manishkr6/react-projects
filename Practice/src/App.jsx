import React, { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");

  const submitHandel = (e) => {
    console.log(username);
    e.preventDefault();
    setUsername("");
  };

  return (
    <div className="m-3">
      <form
        className="flex flex-col gap-3"
        onClick={(e) => {
          submitHandel(e);
        }}
      >
        <input
          value={username}
          onChange={(e) => {ha
            setUsername(e.target.value);
          }}
          className="w-80 border-none py-3 px-10 rounded-md mr-4"
          type="text"
          placeholder="enter you name"
        />
        <button className="w-36 bg-blue-700 py-3 px-5 rounded-lg text-white font-bold text-2xs">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
