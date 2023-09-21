import "./App.css";
import Grandpa from "./components/Grandpa/Grandpa";
import HookForm from "./components/HookForm/HookForm";
import RefForm from "./components/RefForm/RefForm";
import ReusableForm from "./components/ReusableForm/ReusableForm";
import SimpleForm from "./components/SimpleForm/SimpleForm";
import StateFulForm from "./components/SimpleForm/StateFullForm/StateFulForm";

function App() {
  const handleSignUpSubmit = (data) => {
    console.log("sign up data", data);
  };

  const handleUpdateProfile = (data) => {
    console.log("Profile update Data", data);
  };
  return (
    <>
      <h1>Form Master</h1>
      <Grandpa />
      {/* <SimpleForm /> */}
      {/* <StateFulForm /> */}
      {/* <RefForm /> */}
      {/* <HookForm /> */}
      {/*  <ReusableForm formTitle={"Sign Up"} handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>please sign up right now</p>
        </div>
      </ReusableForm>

      <ReusableForm
        formTitle={"Profile Update"}
        handleSubmit={handleUpdateProfile}
        submitBtnText="Update">
        <div>
          <h2>Update Up</h2>
          <p>Always keep your profile updated </p>
        </div>
      </ReusableForm> */}
    </>
  );
}

export default App;
