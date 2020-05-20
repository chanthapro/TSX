
import React ,{ FunctionComponent} from "react"

import CustomAppBar from "../component/CustomAppBar";


const HeaderLayout :FunctionComponent<{}>=(props)=>{

    return (
        <CustomAppBar appBarProps={{position: "fixed"}}>
            
        </CustomAppBar>
    );
};

export default HeaderLayout;

