import { useState, useEffect } from 'react';
import axios from'axios';

const url='http://localhost:8000/docs#/default/create_suara_suara_post';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    nim: '',
    nama: '',
    pilihan: ''
    
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
      
    });

    
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    axios.post(url, {
      nim:values.nim,
      nama:values.nama,
      pilihan:parseInt(values.pilihan),
      
    })
      .then(res => {console.log(res.values)})
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;