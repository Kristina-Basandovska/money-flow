import React from "react";
import IconMenu from "../IconMenu/IconMenu";
import Logo from "../Logo/Logo";

export default function Header() {
  return (
    <div className='sm:container  mx-auto h-20 px-12 py-5 flex justify-between items-center'>
      <IconMenu />
      <Logo />
    </div>
  );
}
