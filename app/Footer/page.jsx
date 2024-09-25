"use client";
import React, { useState } from "react";
import "./Footer.css";

import { Autocomplete, TextField } from "@mui/material";
export default function Page() {
  const [top100Films, settop100Films] = useState(["Giza","Cairo"])

  return (
    <footer className="footer w-100 text-white text-center text-lg-left text-white text-center text-lg-start">
      <div className="container p-4">
        <div className="row mt-4">
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Opening hours</h5>
            <form action="">
            <Autocomplete
            id="SearchEngine"
      className="w-100"
key={90909}
  options={top100Films}
  renderInput={(params) => <TextField {...params} label="Search here" />}
/>
            </form>
          </div>
        </div>
      </div>

      <div className="text-center p-3">
      
        © 2024 Copyright:
        <a className="text-white" href="https://www.linkedin.com/in/sameh-salih-02179b271/">
          SamehELkhayat.com
        </a>
      </div>
    </footer>
  );
}
