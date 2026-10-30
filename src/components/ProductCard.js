function ProductCard({ name, price, image, isAdded, onAdd }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />

      <h2>{name}</h2>

      <p>
        Rp {price.toLocaleString("id-ID")}
      </p>

      <button
        className={isAdded ? "added-button" : "add-button"}
        onClick={onAdd}
      >
        {isAdded ? "Added ✓" : "Add to Cart"}
      </button>
    </div>
  );
}

export default ProductCard;