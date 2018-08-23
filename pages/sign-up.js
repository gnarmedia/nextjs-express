import Link from 'next/link'

import Input from '../components/Input/Input'

const SignUp = () => (
  <section className="is-fullheight">
    <div className="hero-body">
      <div className="container has-text-centered">
        <div className="column is-4 is-offset-4">
          <h3 className="title has-text-grey">Sign Up</h3>
          {/* <p className="subtitle has-text-grey">Please login to proceed.</p> */}
          <div className="box">
            <figure className="avatar">
              <img src="https://placehold.it/128x128" />
            </figure>
            <form>
              <Input placeholder="Email address" />
              <Input placeholder="A password" type="password" />
              <Input placeholder="Confirm password" type="password" />
              <button className="button is-block is-info is-large is-fullwidth">Login</button>
            </form>
          </div>
          <p className="has-text-grey">
            <Link href="/sign-in">Sign In</Link>
            {/* <a href="../">Need Help?</a> */}
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default SignUp