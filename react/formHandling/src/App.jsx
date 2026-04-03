import { useForm } from "react-hook-form";
import './App.css';

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name")} type="text" />
          <input {...register("email")} type="email" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}

export default App;