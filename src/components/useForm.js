import { useState, useEffect } from 'react';

const useForm = (callback, validate, rout) => {  
  const [values, setValues] =useState({});
  const [errors, setErrors]= useState({});  
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {     
    if (rout==="login" && Object.keys(errors).length === 2 && isSubmitting) {      
      callback();            
    }   
    if (rout==="register" && Object.keys(errors).length === 0 && isSubmitting) {      
      callback();            
    }
  }, [errors]);
   

  const handleSubmit=(event)=>{  
    if(event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true)    
  }
  

  const handleChange = (event) => {
    event.persist();    
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
        
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    isSubmitting,
  }
};

export default useForm;