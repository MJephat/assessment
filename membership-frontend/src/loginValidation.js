function Validation(values){
    let error = {}
    

    if(values.id_number === ""){
        error.id_number = "Id number must not be empty"
    }

    // else if(!id_number_pattern.test(values.id_number)){
    //     error.id_number = "Id number Didn't match"
    // } 
    else{
        error.id_number = ""
    }

    if(values.password === ""){
        error.password = "Password should not be empty"
    }
    // else if(!password_pattern.test(values.password)){
    //     error.password = "Password didn't match"
    // }
    else{
        error.password = ""
    }
    return error;

}
export default Validation;