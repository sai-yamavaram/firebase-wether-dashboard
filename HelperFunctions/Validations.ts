export const validateEmail = (text: string) => {
    // let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    // let reg = new RegExp('/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w\\w+)+$/');
    let reg = new RegExp('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$');

    return reg.test(text);

}

export const validatePassword = (pass:string)=>{
    let reg = new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*?[#?!@$%^&*-]).{8,32}$")
    // let reg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})$")
    // let reg = new RegExp("^(?=.*[0-9])"
    //     + "(?=.*[a-z])(?=.*[A-Z])"
    //     + "(?=.*[@#$%^&+=])"
    //     + "(?=\\S+$).{8,20}$")
    // let reg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
    // let reg = new RegExp("^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$")
    return reg.test(pass);
}


