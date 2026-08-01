export default function LogIn() {
  return (
    <form className="needs-validation" noValidate>
      <div className="col-md-8 mx-auto m-4">
        <h1>Login</h1>
      </div>
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-4">
            <div>
              <label htmlFor="loginEmail">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="loginEmail"
                placeholder="johndoe@email.com"
                required
              />
            </div>
            <div className="invalid-feedback">
              Please enter in a valid email address.
            </div>
          </div>
          <div className="col-4">
            <label htmlFor="loginPassword">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="loginPassword"
              placeholder="**********"
              required
            />
          </div>
          <div className="invalid-feedback">Please enter in your password.</div>
        </div>
        <div className="row justify-content-center">
          <div className="col-2 d-flex">
            <button type="submit" className="btn btn-primary flex-fill">
              Login
            </button>
          </div>
          <div className="col-2 d-flex">
            <button type="submit" className="btn btn-success flex-fill">
              Create Account
            </button>
          </div>
          <div className="col-2 d-flex">
            <button type="submit" className="btn btn-secondary flex-fill">
              Forgot Password
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
