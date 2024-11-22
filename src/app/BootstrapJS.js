"use client";
import { useEffect } from "react";

const BootstrapJS = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return null;
};

export default BootstrapJS;