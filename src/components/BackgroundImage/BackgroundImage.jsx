import React from 'react';
import './SignIn.css';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: '',
    };
  }

  onEmailChange = e => {
    e.preventDefault();
    this.setState({ signInEmail: e.target.value });
  };

  onPasswordChange = e => {
    e.preventDefault();
    this.setState({ signInPassword: e.target.value });
  };

  onSubmitSignIn = () => {
    console.log(this.state);
    this.props.onRouteChange('home');
  };

  render() {
    const { onRouteChange } = this.props;
    return (
      <article className="center br3 ba shadow-5 b--white-10 mv4 w-100 w-50-m w-25-l mw6 formColor ">
        <main className="pa4 white-80 center">
          <form className="measure ">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 center">Sign In</legend>
              <div className="mt3 ">
                <label className="db fw6 lh-copy f6 tc" htmlFor="email-address">
                  Email
                </label>
                <input
                  onChange={this.onEmailChange}
                  className=" b--near-white pa2 input-reset white ba bg-transparent   w-100"
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
                  onChange={this.onPasswordChange}
                  className=" b--near-white pa2 input-reset white ba bg-transparent   w-100"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
            </fieldset>
            <div className="center">
              <input
                onClick={this.onSubmitSignIn}
                className=" white b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib "
                type="submit"
                value="Sign in"
              />
            </div>
            <div className="lh-copy mt3 center">
              <p
                onClick={() => onRouteChange('register')}
                className="f6 link dim white db pointer"
              >
                Register
              </p>
            </div>
          </form>
        </main>
      </article>
    );
  }
}

export default SignIn;
