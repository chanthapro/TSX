import React,{FunctionComponent} from "react";
import { useForm } from "react-hook-form";

type Inputs = {
    example: string,
    exampleRequired: string,
};

const CustomLoginForm:FunctionComponent=(props)=>{
    const { register, handleSubmit, watch, errors } = useForm<Inputs>();
    const onSubmit = (data:any) => console.log(data);
    return(
    <form onSubmit={handleSubmit(onSubmit)}>
        <input name="example" defaultValue="test" ref={register} />

        <input name="exampleRequired" ref={register({ required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
        </form>
    );
};
export default CustomLoginForm