import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Detail() {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9999/product/${id}`)
      .then((response) => response.json())
      .then((result) => setProductDetail(result))
      .catch((error) => console.error(error));
  }, [id]);

  const handleDelete = () => {
    const confirmDelete = window.confirm("Do you want to delete this product?");
    if (confirmDelete) {
      fetch(`http://localhost:9999/product/${id}`, {
        method: 'DELETE',
      })
        .then((response) => {
          if (response.ok) {
            window.location.href = '/';
          } else {
            alert("Failed to delete the product.");
          }
        })
        .catch((error) => console.error("Error deleting product:", error));
    }
  };

  return (
    <div>
      <Container className="mt-5">
        <Row className="align-items-center">
          <Col md={4} className="text-center">
            <img
              src={`/images/${productDetail?.image}`}
              alt={productDetail?.title}
              style={{ width: "400px", height: "400px" }}
            />
          </Col>
          <Col md={8} className="mb-4">
            <h2>Product details: {productDetail?.title || "Unnamed Product"}</h2>

            <p><strong>Id:</strong> {productDetail?.id}</p>
            <p><strong>Description:</strong> {productDetail?.description}</p>
            <p style={{ color: "blue" }}>
              <strong><del>Price: ${productDetail?.price} </del></strong>
            </p>
            <p style={{ color: "red" }}>
              <strong> Discount: {productDetail?.discountPercentage} %</strong>
            </p>
            <p style={{ color: "blue" }}>
              <strong> New Price: $
                      {Math.round(
                        productDetail?.price - (productDetail?.price * productDetail?.discountPercentage) / 100
                      )}
              </strong>
            </p>
            <p><strong>Rating:</strong> {productDetail?.rating}</p>
            <p><strong>Stock:</strong> {productDetail?.stock}</p>
            <div>
              <Link to={"/"} className="btn btn-success">
                Back to list
              </Link>
              <Button variant="danger" onClick={handleDelete}>Delete</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Detail;