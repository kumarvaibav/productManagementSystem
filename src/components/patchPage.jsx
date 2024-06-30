// import React, { useState } from "react";
// import axios from "axios";

// export default function PatchPage() {
//   const [formData, setFormData] = useState({
//     pid: "",
//     name: "",
//     brand: "",
//     price: "",
//   });

//   const [resp, setResp] = useState(null);
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { pid, name, brand, price } = formData;
//     const data = {};

//     if (pid) data.pid = pid;
//     if (name) data.name = name;
//     if (brand) data.brand = brand;
//     if (price) data.price = parseInt(price, 10);

//     try {
//       const response = await axios.patch(
//         `http://localhost:8080/product-service/pupdate?pid=${pid}`,
//         data
//       );
//       setFormData({
//         pid: "",
//         name: "",
//         brand: "",
//         price: "",
//       });
//       setResp(response.data);
//       console.log("Product updated:", response.data);
//     } catch (error) {
//       console.error("There was an error updating the product!", error);
//     }
//   };

//   return (
//     <div className="container mt-3">
//       <h1>Update Product</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3 mt-3">
//           <label className="w-100">Product ID</label>
//           <input
//             type="number"
//             name="pid"
//             className="form-control"
//             value={formData.pid}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label className="w-100">Product Name</label>
//           <input
//             type="text"
//             name="name"
//             className="form-control"
//             value={formData.name}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-3">
//           <label className="w-100">Brand Name</label>
//           <input
//             type="text"
//             name="brand"
//             className="form-control"
//             value={formData.brand}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-3">
//           <label className="w-100">Product Price</label>
//           <input
//             type="number"
//             name="price"
//             className="form-control"
//             value={formData.price}
//             onChange={handleChange}
//           />
//         </div>
//         <button type="submit" className="btn btn-warning">
//           Update Product
//         </button>
//       </form>

//       {resp && (
//         <div
//           style={{ fontSize: "40px" }}
//           className="alert alert-info alert-dismissible mt-2"
//         >
//           <button className="btn-close" data-bs-dismiss="alert"></button>
//           Product Record has been updated successfully!
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useState } from "react";
import axios from "axios";

export default function PatchPage() {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { pid, name, brand, price } = formData;
    const data = {};

    if (name) data.name = name;
    if (brand) data.brand = brand;
    if (price) data.price = parseInt(price, 10);

    try {
      const response = await axios.patch(
        `http://localhost:8080/product-service/pupdate?pid=${pid}`,
        data
      );
      setFormData({
        pid: "",
        name: "",
        brand: "",
        price: "",
      });
      setResp(response.data);
      console.log("Product updated:", response.data);
    } catch (error) {
      console.error("There was an error updating the product!", error);
    }
  };

  return (
    <div className="container mt-3">
      <h1>Update Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 mt-3">
          <label className="w-100">Product ID</label>
          <input
            type="number"
            name="pid"
            className="form-control"
            value={formData.pid}
            onChange={handleChange}
            required
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
