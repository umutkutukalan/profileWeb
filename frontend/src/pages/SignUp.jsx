import { useState } from "react";

const SignUp = () => {
  const [username, setUsername] = useState();
  const [mail, setMail] = useState();
  const [password, setPassword] = useState();
  const [passwordRepeat, setPasswordRepeat] = useState();

  return (
    <section className="flex justify-center items-center">
      <form className="container">
        <div className="common-padding">
          <div className="card">
            <div className="card-header">
              <div className="text-3xl">
                <h1>Sign Up</h1>
              </div>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label htmlFor={username} className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(event) => setUsername(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor={mail} className="form-label">
                  Mail
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(event) => setMail(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <labelh htmlFor={password} className="form-label">
                  Password
                </labelh>
                <input
                  type="password"
                  className="form-control"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor={passwordRepeat} className="form-label">
                  Password Repeat
                </label>
                <input
                  type="password"
                  className="form-control"
                  onChange={(event) => setPasswordRepeat(event.target.value)}
                />
              </div>
            </div>
            <div className="text-center">
              <button className="btn">Sign Up</button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default SignUp;

