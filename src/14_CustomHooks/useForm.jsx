import {useState} from 'react'
// có thể nhận params như function
// vd useForm({username:"",email:""})
//=> defaultvalues = {username:"",email:""}
const useForm = (defaultValues) => {
    const[values,setValues] = useState(defaultValues)
    // const [values, setValues] = useState({ username: "", password: "" });
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setValues({ ...values, [name]: value });
      };
  return {values,handleChange}
}

export default useForm