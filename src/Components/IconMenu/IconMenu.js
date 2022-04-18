import React from "react";
import { useNavigate } from "react-router-dom";

export default function IconMenu() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/menu");
  }
  return (
    <div className="text-icon">
      <svg
        onClick={handleClick}
        width="36"
        height="23"
        viewBox="0 0 36 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="36" height="3" fill="currentColor" />
        <rect y="10" width="36" height="3" fill="currentColor" />
        <rect y="20" width="36" height="3" fill="currentColor" />
      </svg>
    </div>
  );
}
