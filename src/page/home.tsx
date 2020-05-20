import React, { FunctionComponent, useState } from 'react'
import { Container, ButtonProps } from '@material-ui/core';
import Headers from '../Layout/Header'
import Buttons from '../component/CustomButton'
import CustomAppBar from '../component/CustomAppBar';



const Home: FunctionComponent<{}> = (props) => {

    return (
        <Headers children="hello" ></Headers>
    );

};

export default Home