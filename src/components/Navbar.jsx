import React from "react";
//importing images

function Navbar() {
  return (
    <div className="nav-bar">
      <div className="aastu">
        <img
          class="aastu-logo"
          src={require("/home/arsan/Documents/class/Intership-project/researchportal/src/image/aastu_log.png")}
          width="150px"
          height="150px"
          alt="aastu-logo"
        />
        <p>Addis Ababa Science and Technology University</p>
      </div>
      <div className="submit-search-container">
        <button className="submit-research-button" type="submit">
          Submit
        </button>
        <div className="search-container">
          <input className="search-bar" type="text" placeholder="Search..." />
        </div>
      </div>
    </div>
  );
}
export default Navbar;
