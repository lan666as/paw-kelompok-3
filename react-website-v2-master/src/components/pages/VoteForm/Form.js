import React, { useState } from 'react';
import FormChoose from './FormChoose';
import { FormSuccess } from './FormSuccess';

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <div>
            {!isSubmitted ? <FormChoose submitForm={submitForm} /> : <FormSuccess />}
        </div>
    );
};

export default Form
