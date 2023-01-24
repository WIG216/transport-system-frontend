import React from "react";
import { useNavigate } from "react-router-dom";

export const Logo = () => {

  const navigate = useNavigate();
      
        const navigatetoHome = () => {
          navigate("/");
        };

  return (
    <a href="" onClick={navigatetoHome} class="flex items-center">
      <span class="self-center text-xl font-semibold whitespace-nowrap text-white">
        Transport.com
      </span>
    </a>
  );
};
