import React, { useState } from "react";
import axios from "axios";

export default function PostPage() {
  const [formData, setFormData] = useState({
    pid: "",
    name: "",
    brand: "",
    price: "",
  });
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/product-service/add", {
        pid: formData.pid,
        name: formData.name,
        brand: formData.brand,
        price: parseFloat(formData.price),
      })
      .then((res) => {
        console.log(res);
        setResponse(res.data);
        setFormData({
          pid: "",
          name: "",
          brand: "",
          price: "",
        });
        setError(null);
      })
      .catch((err) => {
        console.log(err);
        setResponse(null);
        setError(err.message);
      });
  };
  return (
    <div className="container mt-3">
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 mt-3">
          <label className="w-100">
            Enter Product ID:
            <input
              type="number"
              name="pid"
              className="form-control"
              value={formData.pid}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="mb-3">
          <label className="w-100">
            Enter Product Name:
            <input
              type="text"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="mb-3">
          <label className="w-100">
            Enter Product Brand:
            <input
              type="text"
              name="brand"
              className="form-control"
              value={formData.brand}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="mb-3">
          <label className="w-100">
            Enter Product Price:
            <input
              type="number"
              name="price"
              className="form-control"
              value={formData.price}
              onChange={handleChange}
            />
          </label>
        </div>

        <button type="submit" className="btn btn-success">
          Add Product
        </button>
      </form>

      {error && (
        <div className="mt-3 text-danger" style={{ fontSize: "40px" }}>
          {error}
        </div>
      )}
      {response && (
        <div
          style={{ fontSize: "30px" }}
          className="alert alert-info alert-dismissible mt-2"
        >
          <button className="btn-close" data-bs-dismiss="alert"></button>{" "}
          Product Record has been inserted successfully!
        </div>
      )}
      {/* {error && <p>Error:{error}</p>} */}
      {/* {response && (
        <div>
          <h2>Product Added</h2>
          <p>Pid: {response.pid}</p>
          <p>Name: {response.name}</p>
          <p>Brand: {response.brand}</p>
          <p>Price: {response.price}</p>
        </div>
      )} */}
    </div>
  );
}
