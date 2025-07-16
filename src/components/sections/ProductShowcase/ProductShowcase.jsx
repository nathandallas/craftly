import ProductCard from "../../common/ProductCard";
import Button from "../../common/Buttons";

export default function ProductShowcase() {
  return (
    <section className="product-showcase">
      <h2>Curated Picks</h2>
      <p className="subtitle">Popular with our community</p>
      <div className="products-grid">
        {/* {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))} */}
        <ProductCard />
      </div>
      <Button variant="secondary">View More</Button>
    </section>
  );
}
