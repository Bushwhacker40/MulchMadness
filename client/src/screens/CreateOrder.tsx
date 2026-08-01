export default function CreateOrder() {
  return (
    <form className="needs-validation" noValidate>
      <div className="col-md-8 mx-auto m-4">
        <h1>Create Order</h1>
      </div>
      <div className="container">
          <div className="row">
            <div className="col-6">
              <div>
                <h4>Delivery Information</h4>
                <div className="container">
                  <div className="row mb-4">
                    <div className="col">
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
                    </div>
                    <div className="col">
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
                    </div>
                  </div>
                  <div className="row  mb-4">
                    <div className="col">
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
                    </div>
                    <div className="col">
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
                    </div>
                    <div className="col">
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
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-3">
                      <div>
                        <label htmlFor="customerState">State</label>
                        <select className="form-select">
                          <option selected>State</option>
                          <option value="IL">IL</option>
                          <option value="IA">IA</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-3">
                      <div>
                        <label htmlFor="customerZipCode">Zip Code</label>
                        <input
                          type="number"
                          className="form-control"
                          id="customerZipCode"
                          placeholder="52807"
                          required
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="vr"></div>
            <div className="col-5">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <h4>Order Information</h4>
                    <p>
                      <strong>Note:</strong> Minimum order of 10 bags.
                    </p>
                  </div>
                  <div
                    className="input-group mb-3"
                    ms-auto
                    style={{ maxWidth: "45%" }}
                  >
                    <span className="input-group-text" id="orderGrandTotal">
                      Grand Total: $
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      readOnly
                    ></input>
                  </div>
                </div>
              </div>

              <div>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th style={{ width: "5%" }} scope="col">
                        #
                      </th>
                      <th style={{ width: "15%" }} scope="mulch">
                        Mulch
                      </th>
                      <th style={{ width: "10%" }} scope="quantity">
                        Quantity
                      </th>
                      <th style={{ width: "20%" }} scope="service">
                        Service
                      </th>
                      <th style={{ width: "15%" }} scope="total">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Black</td>
                      <td>
                        <input
                          type="number"
                          className="form-control text-end"
                          id="mulchBlackQty"
                          min="0"
                          defaultValue="0"
                        ></input>
                      </td>
                      <td>
                        <select className="form-select">
                          <option value="drop">Drop</option>
                          <option value="spread">Spread</option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="number"
                          className="form-control text-end"
                          id="mulchBlackTotal"
                          defaultValue="0"
                          readOnly
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Brown</td>
                      <td>
                        <input
                          type="number"
                          className="form-control text-end"
                          id="mulchBrownQty"
                          min="0"
                          defaultValue="0"
                        ></input>
                      </td>
                      <td>
                        <select className="form-select">
                          <option value="drop">Drop</option>
                          <option value="spread">Spread</option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="number"
                          className="form-control text-end"
                          id="mulchBrownTotal"
                          defaultValue="0"
                          readOnly
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Hardwood</td>
                      <td>
                        <input
                          type="number"
                          className="form-control text-end"
                          id="mulchHardwoodQty"
                          min="0"
                          defaultValue="0"
                        ></input>
                      </td>
                      <td>
                        <select className="form-select">
                          <option value="drop">Drop</option>
                          <option value="spread">Spread</option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="number"
                          className="form-control text-end"
                          id="mulchHardwoodTotal"
                          defaultValue="0"
                          readOnly
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>Red</td>
                      <td>
                        <input
                          type="number"
                          className="form-control text-end"
                          id="mulchRedQty"
                          min="0"
                          defaultValue="0"
                        ></input>
                      </td>
                      <td>
                        <select className="form-select">
                          <option value="drop">Drop</option>
                          <option value="spread">Spread</option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="number"
                          className="form-control text-end"
                          id="mulchRedTotal"
                          defaultValue="0"
                          readOnly
                        ></input>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <label htmlFor="deliveryNotes">Delivery Notes</label>
              <textarea
                className="form-control mb-4"
                id="deliveryNotes"
                placeholder="Leave on North side of driveway."
                rows={4}
              ></textarea>
            </div>
          </div>
          <div className="row">
            <div className="col-2 d-flex mx-auto">
              <button type="submit" className="btn btn-primary flex-fill">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
