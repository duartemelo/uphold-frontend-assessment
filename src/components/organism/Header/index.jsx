import React from "react";
import Button from "../../atom/Button";
import logo from "../../../assets/images/logo.svg";

function Header() {
  return (
    <header className="flex justify-between items-center p-14">
      <ul className="flex gap-8 w-[300px]">
        <li>
          <Button theme="text">Personal</Button>
        </li>
        <li>
          <Button theme="text">Business</Button>
        </li>
        <li>
          <Button theme="text">Partners</Button>
        </li>
      </ul>
      <div>
        <img src={logo} alt="Uphold Logo" />
      </div>
      <div className="w-[300px]">
        <Button className="float-right">Log in</Button>
      </div>
    </header>
  );
}

export default Header;
