/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import search from "./Image/icons-searcch.png";

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const Header = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [id, setId] =  useState(0)

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <div className="container">
        <div className="my-5">
          <nav class="navbar navbar-expand-lg navbar-light">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <form class="form-inline d-flex align-items-center justify-content-center my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{
                  width: "367px",
                  padding: "0.9rem 1.5rem",
                  background: "#dde7f2",
                }} 
              />
              <img
                style={{ marginLeft: "-30px" }}  
                src={search}
                alt=""
                height={20}
                width={20}
              />
            </form>
            <div class="collapse navbar-collapse  " id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto " style={{ background: "#dde7f2" }}> 
                <li class="nav-item active d-flex align-items-center">

                  <a
                    class="nav-link   d-flex align-items-center"
                    style={{ padding: "1px 31px", color: "#000" }}
                    role="button"
                    onClick={handleOpen}
                  >
                    <span className="me-2 d-flex align-items-center" style={{ fontSize: "27px", fontWeight: "500" }}>
                      +
                    </span>{" "}
                    Add Task
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="mb-5 d-flex justify-content-center">
            <h1 style={{color:'#6c757d'}}>ADD TASK</h1>
          </div>
        <TextField id="outlined-basic"   style={{width:'301px'}} variant="outlined" placeholder="Add Title" />
          <Typography id="modal-modal-description" className="mt-3" sx={{ mt: 2 }}>
          <button type="button" onClick={(e) => setOpen(false)} class="btn btn-outline-secondary">Add Task</button>
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default Header;
