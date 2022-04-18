import React from "react";
import { useNavigate } from "react-router-dom";

export default function Logo() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/main");
  }
  return (
    <svg onClick={handleClick}
      width="53"
      height="35"
      viewBox="0 0 53 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.1011 3.00415L28.7968 11.6237L15.0055 28.7369C12.6253 31.6904 8.30141 32.1552 5.34787 29.775C2.39432 27.3947 1.92955 23.0709 4.30978 20.1173L18.1011 3.00415Z"
        fill="#7165DF"
      />
      <path
        d="M39.0917 25.7976C36.7807 28.8056 32.4688 29.3706 29.4608 27.0596C26.4528 24.7485 25.8878 20.4366 28.1988 17.4286L37.4048 5.44643C39.7158 2.43844 44.0277 1.87346 47.0357 4.1845C50.0437 6.49554 50.6087 10.8075 48.2977 13.8154L39.0917 25.7976Z"
        fill="#2088F8"
      />
      <path
        d="M10.2778 14.0117L18.1398 2.74731L37.5355 16.2845C40.6461 18.4555 41.4077 22.7371 39.2367 25.8477C37.0657 28.9582 32.7842 29.7199 29.6736 27.5489L10.2778 14.0117Z"
        fill="#7165DF"
      />
    </svg>
  );
}
