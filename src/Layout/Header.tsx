import Button,{ButtonProps} from "@material-ui/core/Button"
import { render } from "@testing-library/react"
import React ,{Component, FunctionComponent} from "react"
import AppBar from '../component/CustomAppBar'
import CustomAppBar from "../component/CustomAppBar";
import { Toolbar } from "@material-ui/core";

const HeaderLayout :FunctionComponent<{}>=(props)=>{

    return (
        <CustomAppBar appBarProps={{position: "fixed"}}>
            
        </CustomAppBar>
    );
};

export default HeaderLayout;

