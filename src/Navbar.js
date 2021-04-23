import React from "react";
import "./Navbar.css";
import Table from "./Table"

function Navbar() {
  return (
    <>
      {/* header */}
      <div className="title">
        <img
          className="rounded-top"
          src="https://coddets.com/wp-content/uploads/2020/04/wp4059913-1024x640.jpg"
          width="80%"
          height="500"
        />
      </div>
      {/* scoreboard */}
      <div className="container d-flex">
        <div className="scoreboard">
          <div className="left__side">
            <div className="players">
              <p className="text__fade">Players </p>
              <span> &nbsp;</span> 34
            </div>
            <div className="highest__points">
              <p className="text__fade">Highest Points </p> <span> &nbsp;</span>{" "}
              13
            </div>
          </div>
          <div className="right__side">ScoreBoard</div>
        </div>
      </div>

      {/* table */}
      <Table />
    </>
  );
}

export default Navbar;
