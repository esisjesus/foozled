export const validateAuth = (obj) => {
    if(!obj.email.includes('@')){
        return 'This is not a valid email address' 
    }else if(obj.password.length < 6){
        return 'Password must have at least 6 characters'
    }else{
        null
    }
}



