export default function validate(values) {
    let errors = {};
    if(!values.name){
      errors.name='The field must be filled in';     
    }    
    if (!values.email) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password must be 6 or more characters';
    }
    if(!values.confirm){
      errors.confirm='The field must be filled in';     
    }
    else if(values.confirm.length!==values.password.length){
      errors.confirm="password and confirm fields must be the same"
    }
    return errors;
  };