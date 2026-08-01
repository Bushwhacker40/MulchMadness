export default function CreateAccount() {
  return (
    <form className="needs-validation" noValidate>
      <div className="col-md-8 mx-auto m-4">
        <h1>Create Account</h1>
      </div>
      <div className="container">
        <div className="row mb-4">
          <div className="col">
            <div className="row mb-4">
              <div className="col">
                <div>
                  <label htmlFor="createAccountFirstName">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="createAccountFirstName"
                    placeholder="John"
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter in your first name.
                  </div>
                </div>
              </div>

              <div className="col">
                <div>
                  <label htmlFor="createAccountLastName">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="createAccountLastName"
                    placeholder="Doe"
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter in your last name.
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col">
                <div>
                  <label htmlFor="createAccountEmail">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="createAccountEmail"
                    placeholder="johndoe@email.com"
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter in your email address.
                  </div>
                </div>
              </div>
              <div className="col">
                <div>
                  <label htmlFor="createAccountConfirmEmail">
                    Confirm Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="createAccountConfirmEmail"
                    placeholder="johndoe@email.com"
                    required
                  />
                  <div className="invalid-feedback">
                    Please confirm your email address.
                  </div>
                </div>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col">
                <div>
                  <label htmlFor="createAccountPassword">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="createAccountPassword"
                    placeholder="**********"
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter in a password.
                  </div>
                </div>
              </div>
              <div className="col">
                <div>
                  <label htmlFor="createAccountConfirmPassword">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="createAccountConfirmPassword"
                    placeholder="**********"
                    required
                  />
                  <div className="invalid-feedback">
                    Please confirm your passwords match.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row mb-4">
              <div className="col">
                <div>
                  <label htmlFor="createAccountScoutId">Scout Id</label>
                  <input
                    type="text"
                    className="form-control"
                    id="createAccountScoutId"
                    placeholder="12345"
                    required
                  />
                </div>
              </div>

              <div className="col">
                <fieldset>
                  <legend className="mb-1 fs-6">Person Type</legend>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="createAccountPersonType"
                      id="createAccountRadioAdult"
                    />
                    <label htmlFor="createAccountRadioAdult">Adult</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="createAccountPersonType"
                      id="createAccountRadioScout"
                    />
                    <label htmlFor="createAccountRadioScout">Scout</label>
                  </div>
                </fieldset>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col">
                <fieldset>
                  <legend className="mb-1 fs-6">Vehicle Type</legend>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="createAccountVehicleType"
                      id="createAccountVehicleTypeSedan"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="createAccountVehicleTypeSedan"
                    >
                      Sedan
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="createAccountVehicleType"
                      id="createAccountVehicleTypeSUV"
                    />
                    <label htmlFor="createAccountVehicleTypeSUV">SUV</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="createAccountVehicleType"
                      id="createAccountVehicleTypeTruck"
                    />
                    <label htmlFor="createAccountVehicleTypeTruck">Truck</label>
                  </div>
                </fieldset>
              </div>
              <div className="col">
                <fieldset>
                  <legend className="mb-1 fs-6">Trailer Capability</legend>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="createAccountTrailer"
                      id="createAccountVehicleTrailerYes"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="createAccountVehicleTrailerYes"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="createAccountTrailer"
                      id="createAccountVehicleTrailerNo"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="createAccountVehicleTrailerNo"
                    >
                      No
                    </label>
                  </div>
                </fieldset>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div>
                  <label htmlFor="createAccountTrailerBags">
                    Trailer Capacity Bag Count (ea)
                  </label>
                  <input
                    className="form-control"
                    type="number"
                    id="createAccountTrailerBags"
                    min={0}
                    max={175}
                    step={1}
                  />
                </div>
              </div>

              <div className="col">
                <div>
                  <label htmlFor="createAccountBedBags">
                    Bed Capacity Bag Count (ea)
                  </label>
                  <input
                    className="form-control"
                    type="number"
                    id="createAccountBedBags"
                    min={0}
                    max={50}
                    step={1}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-2 d-flex">
              <button type="submit" className="btn btn-primary flex-fill">
                Create Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
