import React,{FunctionComponent} from "react";
import CustomLoginForm from "../../component/LoginForm";
import {Container} from "@material-ui/core";


const Login:FunctionComponent<{}>=(props)=>{
  return(

      <Container>
          <CustomLoginForm>
                      hello
          </CustomLoginForm>
      </Container>


  );
};
export default Login