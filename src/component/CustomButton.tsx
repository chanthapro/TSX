import Buttons, { ButtonProps } from '@material-ui/core/Button'
import React, { FunctionComponent } from 'react'

const CustomButton: FunctionComponent<ButtonProps> = (props) => {
    return (
        <Buttons {...props} />
    );
};

export default CustomButton