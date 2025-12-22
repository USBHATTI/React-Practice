import { useForm } from "react-hook-form"
import './App.css'

function App() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm()

   async function onsubmit(data){
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("Submitted ",data);
  }

  

  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <div>
        <label>First Name : </label>
      <input type="text" {...register('firstname',{pattern:{
      value: /^[A-Za-z]+$/i,
      message: "Only alphabets are allowed"
      }})}/>
      {errors.firstname && <p>{errors.firstname.message}</p>}
      </div>
      <br />
      <div>
        <label>Last Name : </label>
      <input type="text" {...register('lastname',{required: true, maxLength:{value:6, message:"max length atmost 6"}, minLength:3})}/>
      {errors.lastname && <p>{errors.lastname.message}</p>}
      </div>
      <br />
      <input type="submit" disabled={isSubmitting} value={isSubmitting ? "Submitting": "Submit"}/>

    </form>
    
  )
}

export default App
