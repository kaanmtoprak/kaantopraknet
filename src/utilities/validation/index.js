import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(30, 'Too Long!')
      .required('Please enter a name!'),
    email: Yup.string().email('Please enter a valid email!').required('Required'),
    subject: Yup.string()
      .min(1, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Please enter a subject'),
    message: Yup.string()
      .min(15, 'Too Short!')
      .max(150, 'Too Long!')
      .required('Please enter a message!'),

  });

  export {validationSchema}