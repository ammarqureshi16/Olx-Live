import { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button";

function SignUp() {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailValue = (e) => {
    const inp = e.target.value;
    setEmail(inp);
  };

  const passwordValue = (e) => {
    const inp = e.target.value;
    setPassword(inp);
  };

  const singup = () => {
    // console.log(email)
    // console.log(password)
    if (email === "" && password === "") {
      alert("Enter Values");
    } else {
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userPassword", password);
      history.push("/");
    }
  };
  return (
    //   Main Start
    <div>
      {/* Card main div start */}
      <div className="main-Div">
        {/* Card div start */}
        <div className="card-Div">
          {/* Heading Div Start */}
          <div className="heading-div">
            <h1 className="login-headin">Sign Up</h1>
          </div>
          {/* Heading Div Close */}

          {/* Full Name input div start */}
          <div>
            <input
              onChange={emailValue}
              className="full-name-input"
              type="text"
              placeholder="Full Name :"
            />
          </div>
          {/* Full Name input close */}

          {/* Email input div start */}
          <div>
            <input 
            className="email-input" 
            type="email" 
            placeholder="Email :" />
          </div>
          {/* Email input div close */}

          {/* Password input div start */}
          <div>
            <input
              onChange={passwordValue}
              className="password-input"
              placeholder="Password :"
              type="password"
            />
          </div>
          {/* Password input div close */}

          {/* Confrom password div start */}
          <div>
            <input
              type="password"
              className="confirm-password"
              placeholder="Confrom Password :"
            />
          </div>
          {/* Confrom password div close */}
          <div>
              <button onClick={singup} className="signup-button">
                  Sing Up
              </button>
          </div>
        </div>
        {/* Card div close */}
      </div>
      {/* Card main div close */}
    </div>
    // Main Div Close
  );
}
export default SignUp;
