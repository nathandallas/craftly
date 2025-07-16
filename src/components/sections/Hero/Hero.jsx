import Button from "../../common/Buttons";

export default function Hero() {
  return (
    <section className="hero">
      <h1>Handmade Finds, Just For You</h1>
      <p className="subtitle">Shop unique vintage & bespoke goods while supporting global artisans</p>
      <div className="cta-buttons">
        <Button variant="primary">Explore</Button>
        <Button variant="outline">Start Selling</Button>
      </div>
    </section>
  );
}
