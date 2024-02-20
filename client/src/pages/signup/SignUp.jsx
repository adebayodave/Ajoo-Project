import React from "react";
import "./signup.css";

const SignUp = () => {
  return (
    <div id="signup">
      <div class="register">
        <form>
          <table>
            <h1>Registration</h1>
            <tr>
              <td>first name</td>
              <td>
                <input type="text" placeholder="first name" />
              </td>
            </tr>
            <tr>
              <td>last name</td>
              <td>
                <input type="text" placeholder="last name" />
              </td>
            </tr>
            <tr>
              <td>Email address</td>
              <td>
                <input type="text" placeholder="email addresss" />
              </td>
            </tr>
            <tr>
              <td>contact number</td>
              <td>
                <input type="text" placeholder="phone number" />
              </td>
            </tr>
          </table>
          <Link to={'/signup'}>create</Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
