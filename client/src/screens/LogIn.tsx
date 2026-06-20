export default function LogIn() {
  return (
    <form className="needs-validation" noValidate>
      <h1>Login</h1>
      <div className="mb-3">
        <label htmlFor="loginEmail" className="form-label">
          Email Address
        </label>
        <input
          type="email"
          className="form-control"
          id="loginEmail"
          placeholder="johndoe@email.com"
          required
        />
        <div className="invalid-feedback">
          Please enter in a valid email address.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="loginPassword" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="loginPassword"
          placeholder="**********"
          required
        />
        <div className="invalid-feedback">Please enter in your password.</div>
      </div>
      <button type="submit" className="btn btn-primary mb-3">
        Login
      </button>
      <button type="submit" className="btn btn-secondary mb-3">Forgot Password</button>
      <button type="submit" className="btn btn-secondary mb-3">
        Create Account
      </button>
    </form>
  );
}
