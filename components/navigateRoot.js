import React from "react";
export const navRef=React.createRef();
export const navigate=(name,param)=>{
  navRef.current && navRef.current.navigate(name,param);
}
