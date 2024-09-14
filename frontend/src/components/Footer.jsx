import React from "react";

const date = new Date().getFullYear();

function Footer() {
  return <> &copy; Dominic Noack - {date}</>;
}

export default Footer;
