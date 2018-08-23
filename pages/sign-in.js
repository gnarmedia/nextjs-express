import { Component } from 'react'
import fetch from 'isomorphic-unfetch'

import Input from '../components/Input/Input'
import Button from '../components/Button/Button'
import A from '../components/A/A'

class SignIn extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    emailAddress: '',
    password: ''
  }

  async handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.target)
    const data = {
      email: formData.get('email'),
      password: formData.get('password')
    }

    let res
    let resJson
    // let data

    try {
      res = await fetch('/sign-in',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        })
      // resJson = await res.json()
    }
    catch (e) {
      console.log(e)
    }

    console.log(res)
  }

  render() {
    return (
      <section className="is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-grey">Sign In</h3>
              {/* <p className="subtitle has-text-grey">Please login to proceed.</p> */}
              <div className="box">
                <figure className="avatar">
                  <img src="https://placehold.it/128x128" />
                </figure>
                <form onSubmit={this.handleSubmit}>
                  <Input name="email" placeholder="Your Email address" />
                  <Input name="password" placeholder="Your password" type="password" />
                  <A href="/forgot-password">Forgot Password</A>
                  <div className="field">
                    <label className="checkbox">
                      <input type="checkbox" />{' '}
                      Remember me
                    </label>
                  </div>
                  <Button text="Sign In" />
                </form>
              </div>
              <p className="has-text-grey">
                <A href="/sign-up">Sign Up</A>
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default SignIn