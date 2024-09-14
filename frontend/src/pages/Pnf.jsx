import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Pnf() {
  const [countDown, setCountDown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    if (countDown > 0) {
      setTimeout(() => {
        setCountDown(countDown - 1);
      }, 1000);
    } else {
      navigate("/");
    }
  }, [countDown]);

  return (
    <div className="flex justify-center items-center h-full">
      <h1>Page not found, redirecting in {countDown} ...</h1>
    </div>
  );
}

export default Pnf;
