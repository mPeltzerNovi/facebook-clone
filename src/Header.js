import React from 'react';
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import {DirectionsWalk} from "@material-ui/icons";
import {DirectionsBike} from "@material-ui/icons";
import {LocationCity} from "@material-ui/icons";
import {FilterHdr} from "@material-ui/icons";
import {LocalDining} from "@material-ui/icons";
import {Avatar, IconButton} from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <img
                    src="https://upload.wikimedia.org/wikipedia/en/8/8c/Facebook_Home_logo_old.svg" alt=""
                />
                <div className="header_input">
                    <SearchIcon />
                    <input placeholder="Search Facebook" type="text" />
                </div>
            </div>


            <div className="header_center">
                <div className="header_option
                header_option--active">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header_option">
                    <DirectionsBike fontSize="large" />
                </div>
                <div className="header_option">
                    <LocationCity fontSize="large" />
                </div>
                <div className="header_option">
                    <FilterHdr fontSize="large" />
                </div>
                <div className="header_option">
                    <LocalDining fontSize="large" />
                </div>
                <div className="header_option">
                    <DirectionsWalk fontSize="large" />
                </div>

            </div>

            <div className="header_right">
                <div className="header_info">
                    <Avatar />
                    <h4>Vera den D</h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    );
}

export default Header;