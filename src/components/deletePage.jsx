import axios from "axios";
import { useEffect, useState } from "react";

export default function DeletePage() {
  const [response, setResponse] = useState(null);
  const [search, setSearch] = useState("");
  const[error,setError]=useState(null);
  const Deletepid = (e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:8080/product-service/delete/byid?pid=${search}`)
      .then((res) => {
        console.log(res);
        setSearch("");
        setError(null);
        setResponse(res.data);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
        setResponse(null);
        
      });
  };

  return (
    <div className="container mt-3">
      <h1>Delete Product Record</h1>
      <form onSubmit={Deletepid}>
        <div className="mb-3 mt-3">
          <label className="w-100">Enter the Product Id:</label>
          <input
            type="number"
            value={search}
            className="form-control"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-danger">
          Delete Product
        </button>
      </form>

      {response && (
        <div
          style={{ fontSize: "30px" }}
          className="alert alert-info alert-dismissible mt-2"
        >
          <button className="btn-close" data-bs-dismiss="alert"></button>
          Product Record with id: {response.pid} has been deleted successfully!
        </div>
      )}

      {error && (
        <div
        style={{ fontSize: "30px" }}
        className="alert alert-danger alert-dismissible mt-2"
        >
        <button className="btn-close" data-bs-dismiss="alert"></button>
        Product Record with id: {search} does not exists</div>
      )}

      {/* {response && (
            <div>
              <p>{JSON.stringify(response)}</p>
            </div>
          )} */}
    </div>
  );
}
