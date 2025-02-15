import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Index() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");

  useEffect(() => {
    fetch("http://localhost:9999/product")
      .then((response) => response.json())
      .then((result) => setProducts(result))
      .catch((err) => console.error(err));

    fetch("http://localhost:9999/category")
      .then((response) => response.json())
      .then((result) => setCategories(result))
      .catch((err) => console.error(err));

    fetch("http://localhost:9999/brand")
      .then((response) => response.json())
      .then((result) => setBrands(result))
      .catch((err) => console.error(err));
  }, []);

  const filteredProducts = products.filter(
    (p) =>
      (!selectedCategory || p.category == selectedCategory) &&
      (!selectedBrand || p.brand == selectedBrand)
  );

  return (
    <Container>
      <Row>
        <h1 className="text-center">List of Products</h1>
        <Col md={3}>
          <Row>
            <h3>Categories</h3>
            {categories?.map((c) => (
              <Form.Check
                key={c.id}
                type="radio"
                name="category"
                label={c.name}
                id={`category-${c.id}`}
                onChange={() => setSelectedCategory(c.id)}
              />
            ))}
          </Row>
          <br />
          <Row>
            <h3>Brands</h3>
            {brands?.map((b) => (
              <Form.Check
                key={b.id}
                type="radio"
                name="brand"
                label={b.name}
                id={`brand-${b.id}`}
                onChange={() => setSelectedBrand(b.id)}
              />
            ))}
          </Row>
        </Col>
        <Col md={9}>
          <Row>
            {filteredProducts.map((p) => (
              <Col key={p.id} md={3} className="mb-4">
                <div
                  className="card p-3 shadow-sm"
                  style={{
                    borderRadius: "12px",
                    transition: "transform 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1.0)")
                  }
                >
                  <div className="text-center mb-3">
                    <img
                      src={`/images/${p.image}`}
                      alt={p.title}
                      className="img-fluid"
                      style={{
                        height: "150px",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                    <h5 className="mt-2">{p.title}</h5>
                  </div>

                  <div className="mb-3">
                    <p className="mb-1">
                      <strong>Brand:</strong>{" "}
                      {brands.find((b) => b.id == p.brand)?.name || "-"}
                    </p>
                    <p>
                      <strong>Category:</strong>{" "}
                      {categories.find((c) => c.id == p.category)?.name || "-"}
                    </p>
                  </div>

                  <div className="text-center mb-3">
                    <p
                      className="mb-1"
                      style={{ color: "#888", textDecoration: "line-through" }}
                    >
                      Price: ${p.price}
                    </p>
                    <p
                      className="mb-1"
                      style={{ color: "red", fontWeight: "bold" }}
                    >
                      Discount: {p.discountPercentage}%
                    </p>
                    <p
                      className="mb-0"
                      style={{ color: "blue", fontWeight: "bold" }}
                    >
                      New Price: $
                      {Math.round(
                        p.price - (p.price * p.discountPercentage) / 100
                      )}
                    </p>
                  </div>

                  <div className="text-center">
                    <Link to={`/product/${p.id}`}>
                      <Button variant="success">View details</Button>
                    </Link>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Index;
