export default function CreateOrder() {
  return (
    <form
      className="needs-validation container justify-content-center"
      noValidate
    >
      <div className="col-md-8 mx-auto m-4">
        <h1>Create Order</h1>
      </div>
      <div>
        <h4>Delivery Information</h4>
        <div>
          <label htmlFor="customerName">Customer Name</label>
          <input
            type="text"
            className="form-control"
            id="customerName"
            placeholder="John Smith"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="customerPhone">Phone Number</label>
          <input
            type="text"
            className="form-control"
            id="customerPhone"
            placeholder="(123) 456-7890"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="customerAddress">Address</label>
          <input
            type="text"
            className="form-control"
            id="customerAddress"
            placeholder="123"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="customerStreet">Street</label>
          <input
            type="text"
            className="form-control"
            id="customerStreet"
            placeholder="Example St."
            required
          ></input>
        </div>
        <div>
          <label htmlFor="customerCity">City</label>
          <input
            type="text"
            className="form-control"
            id="customerCity"
            placeholder="Bettendorf"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="customerState">State</label>
          <select className="form-select">
            <option selected>State</option>
            <option value="IL">IL</option>
            <option value="IA">IA</option>
          </select>
        </div>
        <div>
          <label htmlFor="customerZipCode">Zip Code</label>
          <input
            type="text"
            className="form-control"
            id="customerZipCode"
            placeholder="52807"
            required
          ></input>
        </div>
      </div>
      <div>
        <h4>Order Information</h4>
        <p>Note: Order quantity must be more than 10 bags.</p>
      </div>
      <div className="input-group mb-3">
        <span id="orderGrandTotal">Grand Total</span>
        <input type="text" className="form-control" readOnly></input>
      </div>
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="mulch">Mulch</th>
              <th scope="quantity">Quantity</th>
              <th scope="service">Service</th>
              <th scope="total">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Black</td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  id="mulchBlackQty"
                ></input>
              </td>
              <td>
                <select className="form-select">
                  <option value="drop" selected>
                    Drop
                  </option>
                  <option value="spread">Spread</option>
                </select>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  id="mulchBlackTotal"
                  readOnly
                ></input>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Brown</td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  id="mulchBrownQty"
                ></input>
              </td>
              <td>
                <select className="form-select">
                  <option value="drop" selected>
                    Drop
                  </option>
                  <option value="spread">Spread</option>
                </select>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  id="mulchBrownTotal"
                  readOnly
                ></input>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Hardwood</td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  id="mulchHardwoodQty"
                ></input>
              </td>
              <td>
                <select className="form-select">
                  <option value="drop" selected>
                    Drop
                  </option>
                  <option value="spread">Spread</option>
                </select>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  id="mulchHardwoodTotal"
                  readOnly
                ></input>
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Red</td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  id="mulchRedQty"
                ></input>
              </td>
              <td>
                <select className="form-select">
                  <option value="drop" selected>
                    Drop
                  </option>
                  <option value="spread">Spread</option>
                </select>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  id="mulchRedTotal"
                  readOnly
                ></input>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <label htmlFor="deliveryNotes">Delivery Notes</label>
        <input type="text" className="form-control" id="deliveryNotes" placeholder="Leave on North side of driveway."></input>
      </div>
              <div className="col-2 d-flex">
          <button type="submit" className="btn btn-primary flex-fill">
            Submit
          </button>
        </div>
    </form>
  );
}
