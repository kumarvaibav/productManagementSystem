import axios from "axios";
import { useState } from "react";

export default function PutPage() {
  const [formData, setFormData] = useState({
    pid: "",
    name: "",
    brand: "",
    price: "",
  });

  const [resp, setResp] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8080/product-service/update?pid=${formData.pid}`, {
        pid: formData.pid,
        name: formData.name,
        brand: formData.brand,
        price: formData.price,
      })
      .then((response) => {
        console.log("Product updated successfully:", response.data);
        setFormData({
          pid: "",
          name: "",
          brand: "",
          price: "",
        });
        setResp(response.data);
      })
      .catch((error) => {
        console.error("There was an error updating the product!", error);
      });
  };

  return (
    <div className="container mt-3">
      <h1>Update Product</h1>
      <form onSubmit={submitForm}>
        <div className="mb-3 mt-3">
          <label className="w-100">Product ID:</label>
          <input
            type="text"
            name="pid"
            className="form-control"
            value={formData.pid}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="w-100">Edit Product Name:</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="w-100">Edit Product Brand:</label>
          <input
            type="text"
            name="brand"
            className="form-control"
            value={formData.brand}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="w-100">Edit Product Price:</label>
          <input
            type="number"
            name="price"
            className="form-control"
            value={formData.price}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-warning">
          Update Product
        </button>
      </form>

      {resp && (
        <div
          style={{ fontSize: "30px" }}
          className="alert alert-info alert-dismissible mt-2"
        >
          <button className="btn-close" data-bs-dismiss="alert"></button>
          Product Record has been updated successfully!
        </div>
      )}
    </div>
  );
}
