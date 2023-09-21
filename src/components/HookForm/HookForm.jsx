import useInputState from "../../hooks/useInputState";

const HookForm = () => {
  //   const [name, handleNameChange] = useInputState("Rojoni");
  const emailState = useInputState("rojoni@sojono.com");
  const handleSubmit = (e) => {
    console.log("form Data", emailState.value);
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/*   <input
          value={name}
          onChange={handleNameChange}
          type="text"
          name="name"
        /> */}
        <br />
        <input {...emailState} type="email" name="email" />
        <br />
        <input type="password" name="password" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default HookForm;
