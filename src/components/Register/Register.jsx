import React from 'react';

const Register = ({ onRouteChange }) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: '',
  //     email: '',
  //     password: '',
  //   };
  // }
  // onNameChange = event => {
  //   this.setState({ name: event.target.value });
  // };

  // onEmailChange = event => {
  //   this.setState({ email: event.target.value });
  // };

  // onPasswordChange = event => {
  //   this.setState({ password: event.target.value });
  // };

  // onSubmitSignIn = () => {

  //   // this.state.name,
  //   //   this.state.email,
  //   //   this.state.password,

  //     this.props.onRouteChange('home');
  // }

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
                // onChange={this.onNameChange}
                className="white b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib "
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
                // onChange={this.onEmailChange}
                className="white b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib "
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
                // onChange={this.onPasswordChange}
                className="white b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib "
                type="password"
                name="password"
                id="password"
              />
            </div>
          </fieldset>
          <div className="center">
            <input
              // onClick={this.onSubmitSignIn}
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
