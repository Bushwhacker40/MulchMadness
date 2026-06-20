export default function CreateAccount() {
  return (
    <form className="needs-validation" noValidate>
      <h1>Create Account</h1>
      <div className="mb-3">
        <label htmlFor="createAccountFirstName" className="form-label">
          First Name
        </label>
        <input
          type="text"
          className="form-control"
          id="createAccountFirstName"
          placeholder="John"
          required
        />
        <div className="invalid-feedback">Please enter in your first name.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="createAccountLastName" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          className="form-control"
          id="createAccountLastName"
          placeholder="Doe"
          required
        />
        <div className="invalid-feedback">Please enter in your last name.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="createAccountEmail" className="form-label">
          Email Address
        </label>
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
      <div className="mb-3">
        <label htmlFor="createAccountConfirmEmail" className="form-label">
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
      <div className="mb-3">
        <label htmlFor="createAccountPassword" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="createAccountPassword"
          placeholder="**********"
          required
        />
        <div className="invalid-feedback">Please enter in a password.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="createAccountConfirmPassword" className="form-label">
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
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="createAccountPersonType"
          id="createAccountRadioParent"
        />
        <label className="form-check-label" htmlFor="createAccountRadioParent">
          Parent
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="createAccountPersonType"
          id="createAccountRadioScout"
        />
        <label className="form-check-label" htmlFor="createAccountRadioScout">
          Scout
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="createAccountScoutId" className="form-label">
          Scout Id
        </label>
        <input
          type="text"
          className="form-control"
          id="createAccountScoutId"
          placeholder="12345"
          required
        />
      </div>
      <div role="group" aria-label="Vehicle Type">
        <p>Vehicle Type</p>
        <div className="form-check">
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
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="createAccountVehicleType"
            id="createAccountVehicleTypeSUV"
          />
          <label
            className="form-check-label"
            htmlFor="createAccountVehicleTypeSUV"
          >
            SUV
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="createAccountVehicleType"
            id="createAccountVehicleTypeTruck"
          />
          <label
            className="form-check-label"
            htmlFor="createAccountVehicleTypeTruck"
          >
            Truck
          </label>
        </div>
      </div>
      <div role="group" aria-label="Trailer Capability">
        <p>Trailer Capability</p>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="createAccountTrailer"
            id="createAccountVehicleTrailerYes"
          />
          <label className="form-check-label" htmlFor="createAccountVehicleTrailerYes">
            Yes
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="createAccountTrailer"
            id="createAccountVehicleTrailerNo"
          />
          <label className="form-check-label" htmlFor="createAccountVehicleTrailerNo">
            No
          </label>
        </div>
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="createAccountTrailerBags">Trailer Capacity Bag Count</label>
        <input className="form-control" type="number" id="createAccountTrailerBags" min={0} max={175} step={1}/>
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="createAccountBedBags">Bed Capacity Bag Count</label>
        <input className="form-control" type="number" id="createAccountBedBags" min={0} max={50} step={1} />
      </div>
    </form>
  );
}
