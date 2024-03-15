import React from "react";
interface HeaderProps{
    title : string;
}

export default function Header({title}: HeaderProps) {
  return (
    <h1 className="font-semibold text-lg py-10 text-[#76ABAE]">{title}</h1>
  );
}
