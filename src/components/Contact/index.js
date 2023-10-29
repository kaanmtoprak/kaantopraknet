import React from 'react'
import './contact.scss';
import { useFormik } from 'formik';
import {validationSchema} from '../../utilities/validation'

const Contact = () => {
    const {handleSubmit,handleChange,errors,values,handleBlur,submitCount,handleReset} = useFormik({
        initialValues:{
            name:"",
            email:"",
            subject:"",
            message:""
        },
        validationSchema,
        onSubmit : (values) => {
            handleReset({
                name:"",
                email:"",
                subject:"",
                message:""
            });
            
        }
    })

  return (
    <div className='contact'>
        <form autoComplete="off" onSubmit={handleSubmit} className='contact__form'>
            <div className='contact__form__input-group'>
                <input onChange={handleChange} onBlur={handleBlur} value={values.name} name='name' placeholder='Name'/>
                {submitCount > 0 && errors.name && (<small>{errors.name}</small>)}
            </div>
            <div className='contact__form__input-group'>
                <input onChange={handleChange} onBlur={handleBlur} value={values.email} name='email' placeholder='Email'/>
                {submitCount > 0 && errors.email && (<small>{errors.email}</small>)}
            </div>
            <div className='contact__form__input-group'>
                <input onChange={handleChange} onBlur={handleBlur} value={values.subject}  name='subject' placeholder='Subject'/>
                {submitCount > 0 && errors.subject && (<small>{errors.subject}</small>)}
            </div>            
            <div className='contact__form__input-group'>
                <textarea onChange={handleChange} onBlur={handleBlur} value={values.message} name="message" cols="30" rows="10" placeholder='Message'></textarea>
                {submitCount > 0 && errors.message && (<small>{errors.message}</small>)}
            </div> 
            <button type='submit' >Send</button>
        </form>
    </div>
  )
}

export default Contact