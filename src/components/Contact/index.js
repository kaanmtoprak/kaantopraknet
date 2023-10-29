import React, { useRef } from 'react'
import './contact.scss';
import { useFormik } from 'formik';
import {validationSchema} from '../../utilities/validation'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const form = useRef();
    const {handleSubmit,handleChange,errors,values,handleBlur,submitCount,handleReset} = useFormik({
        initialValues:{
            name:"",
            email:"",
            subject:"",
            message:""
        },
        validationSchema,
        onSubmit : (values) => {
            emailjs.sendForm(process.env.REACT_APP_MAIL_TEMPLATE, process.env.REACT_APP_MAIL_TEMPLATE, form.current, process.env.REACT_APP_MAIL_KEY)
            .then((result) => {
                console.log(result.text);
                toast.success('Your message has been sent successfully.')


            }, (error) => {
                console.log(error.text);
                toast.error('There is an error, please try later.')
            });
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
        <form ref={form} autoComplete="off" onSubmit={handleSubmit} className='contact__form'>
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
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
        />
    </div>
  )
}

export default Contact