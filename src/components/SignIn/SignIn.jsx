import React from 'react';

const SignIn = ({onRouteChange}) => {
//   constructor(props) {
//     super(props);
//     this.state = {
//       signInEmail: '',
//       signInPassword: '',
//     };
//   }

//   onEmailChange = event => {
//     this.setState({ signInEmail: event.target.value });
//   };

//   onPasswordChange = event => {
//     this.setState({ signInPassword: event.target.value });
//   };

//   onSubmitSignIn = () => {  
//  this.state.signInEmail,
//   this.state.signInPassword
   
//       .then(response => response.json())
//       .then(user => {
//         if (user.id) {
//           this.props.loadUser(user)
//           this.props.onRouteChange('home');
//         }
//       })
//   };

 
    // const { onRouteChange } = this.props;
    return (
      <article className="center br3 ba shadow-5 b--white-10 mv4 w-100 w-50-m w-25-l mw6 formColor">
        <main className="pa4 white-80 center">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 center">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                </label>
                <input
                  className="white b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib"
                  type="email"
                  name="email-address"
                  id="email-address"
                  // onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Password
                </label>
                <input
                  className="white b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib "
                  type="password"
                  name="password"
                  id="password"
                  // onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="center">
              <input
                onClick={() => onRouteChange('home')}
                className=" white b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib "
                type="submit"
                value="Sign in"
              />
            </div>
            <div className="lh-copy mt3 center">
              <p
                onClick={() => onRouteChange('register')}
                className="f6 link dim white db pointer">
                Register
              </p>
            </div>
          </div>
        </main>
      </article>
    );
  }


export default SignIn;
