import React,{FunctionComponent} from "react";
import { useForm } from "react-hook-form";
import {Box} from "@material-ui/core"
type Inputs = {
    example: string,
    exampleRequired: string,
};
const myStyle:any = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    minHeight: "100vh",
};


const CustomLoginForm:FunctionComponent=(props)=>{
    const { register, handleSubmit,  errors } = useForm<Inputs>();
    const onSubmit = (data:any) => console.log(data);
    return(
        <Box component="span" m={1} style={myStyle}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="example" defaultValue="test" ref={register} />

                <input name="exampleRequired" ref={register({ required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
            </form>
        </Box>

    );
};
export default CustomLoginForm