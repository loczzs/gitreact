import React from "react";
import useCount from "./useCount";
import useForm from "./useForm";
import useWindowSize from "./useWindowSize";
import useRequest from "./useRequest";

const CustomHooks = () => {
  // const [count, setCount] = useState(0);
  // const handleIncrease = () => {
  //   setCount(count + 1);
  // };
  // const handleDecrease = () => {
  //   setCount(count - 1);
  // };
  const { count, handleDecrease, handleIncrease } = useCount();

  // const [values, setValues] = useState({ username: "", password: "" });
  // const handleChange = (evt) => {
  //   const { name, value } = evt.target;
  //   setValues({ ...values, [name]: value });
  // };
  const { values, handleChange } = useForm({ username: "", password: "" });

  const { width } = useWindowSize();
  const { data: users } = useRequest({
    url: "https://jsonplaceholder.typicode.com/users",
    method: "GET",
  });
  // console.log(users);

  const { data: todos } = useRequest({
    url: "https://jsonplaceholder.typicode.com/todos",
    method: "GET",
  }, [count]);
  // console.log(todos);
  

  return (
    <div>
      <h1>CustomHooks</h1>

      {width < 768 ? <p>Mobile nè</p> : <p>Desktop nè</p>}

      <p>Count: {count}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Increase</button>

      <br />
      <br />

      <p>
        Username: {values.username} - Password: {values.password}
      </p>
      <input
        type="text"
        value={values.username}
        name="username"
        onChange={handleChange}
      />
      <input
        type="password"
        value={values.password}
        name="password"
        onChange={handleChange}
      />
    </div>
  );
};

export default CustomHooks;