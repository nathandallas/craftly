import CategoryCard from "../../common/CategoryCard";

export default function CategoryShowcase() {
  return (
    <section className="category-showcase">
      <h2>Shop by Category</h2>
      <div className="categories-grid">
        {/* {categories.map((category) => (
          <CategoryCard 
            key={category.id} 
            image={category.image}
            icon={category.icon}
            title={category.name}
          />
        ))} */}
        <CategoryCard />
      </div>
    </section>
  );
}
