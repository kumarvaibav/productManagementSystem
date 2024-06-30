import axios from "axios";
import { useEffect, useState } from "react";

export default function GetPage() {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:8080/product-service/list")
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setProduct([]);
      });
  }, []);
  return (
    <div className="container mt-3">
      <h1 style={{textAlign:'center'}}>Product List</h1>
      {error && <div className="mt-3 text-danger" style={{fontSize:'40px'}}>{error}</div>}

      {product.length > 0 ? (
        <table className="table table-dark table-hover mt-4" style={{fontSize:'23px'}}>
          <thead>
            <tr>
              <th>Product Id</th>
              <th>Product Name</th>
              <th>Product Brand</th>
              <th>Product Price</th>
            </tr>
          </thead>
          <tbody>
            {product.map((item) => (
              <tr key={item.pid}>
                <td>{item.pid}.</td>
                <td>{item.name}</td>
                <td>{item.brand}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        !error && <p className="text-info" style={{fontSize:'40px',textAlign:'center'}}>Please enter at least the first record!</p>
      )}
    </div>
  );
}
