import React from 'react';

const Register = ({ onRouteChange }) => {
  return (
    <article className="center br3 ba shadow-5 b--white-10 mv4 w-100 w-50-m w-25-l mw6 ">
      <main className="pa4 white-80 center">
        <form className="measure ">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 center">Register</legend>
            <div className="mt3 ">
              <label className="db fw6 lh-copy f6 tc" htmlFor="name">
               Name
              </label>
              <input
                className="pa2 input-reset ba bg-transparent b--near-white hover-bg-white hover-white w-100 "
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className="mt3 ">
              <label className="db fw6 lh-copy f6 tc" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent b--near-white hover-bg-white hover-white w-100 "
                type="email"
                name="email-address"
                id="email-address"
              />
            </div>
            <div className="mv3 ">
              <label className="db fw6 lh-copy f6 tc" htmlFor="password">
                Password
              </label>
              <input
                className=" b--near-white pa2 input-reset white ba bg-transparent  hover-bg-whitehover-white w-100"
                type="password"
                name="password"
                id="password"
              />
            </div>
          </fieldset>
          <div className="center">
            <input
              onClick={() => onRouteChange('home')}
              className=" white b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib "
              type="submit"
              value="Register"
            />
          </div>
        </form>
      </main>
    </article>
  );
};

export default Register;
