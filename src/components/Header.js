import React from "react";

const Header = ({ changeHandler, submitHandler, searchTerm }) => {
  return (
    <div className="header">
      <form onSubmit={submitHandler} id="form">
        <input
          type="text"
          id="search"
          class="search"
          placeholder="search"
          value={searchTerm}
          onChange={changeHandler}
        />
      </form>
    </div>
  );
};

export default Header;
