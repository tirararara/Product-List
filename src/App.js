import { useState } from "react";
import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      name: "Sneakers",
      price: 250000,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    },
    {
      id: 2,
      name: "Headphones",
      price: 180000,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    },
    {
      id: 3,
      name: "Backpack",
      price: 120000,
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
    },
    {
      id: 4,
      name: "Watch",
      price: 300000,
      image:
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600",
    },
  ];

  const [cart, setCart] = useState([]);

  // Menambahkan produk ke keranjang
  function addToCart(product) {
    const alreadyAdded = cart.find(
      (item) => item.id === product.id
    );

    if (!alreadyAdded) {
      setCart([...cart, product]);
    }
  }

  // Menghapus produk dari keranjang
  function removeFromCart(id) {
    const newCart = cart.filter(
      (item) => item.id !== id
    );

    setCart(newCart);
  }

  return (
    <div className="app">

      {/* Navbar */}
      <header className="navbar">
        <h1>🛍️ Product List</h1>

        <div className="cart-count">
          🛒 Cart: {cart.length}
        </div>
      </header>


      {/* Konten utama */}
      <main className="container">

        {/* Daftar produk */}
        <section className="products-section">

          <h2>Our Products</h2>

          <p className="subtitle">
            Pilih produk favoritmu dan tambahkan ke keranjang!
          </p>

          <div className="product-grid">

            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                image={product.image}

                isAdded={cart.some(
                  (item) => item.id === product.id
                )}

                onAdd={() => addToCart(product)}
              />
            ))}

          </div>

        </section>


        {/* Keranjang */}
        <section className="cart-section">

          <h2>🛒 Keranjang</h2>

          {cart.length === 0 ? (

            <p className="empty-cart">
              Keranjang masih kosong.
            </p>

          ) : (

            <div>

              {cart.map((item) => (

                <div
                  className="cart-item"
                  key={item.id}
                >

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div className="cart-info">

                    <h3>{item.name}</h3>

                    <p>
                      Rp {item.price.toLocaleString("id-ID")}
                    </p>

                  </div>

                  <button
                    className="remove-button"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>

                </div>

              ))}


              <div className="total">

                <strong>
                  Total Produk
                </strong>

                <strong>
                  {cart.length} item
                </strong>

              </div>


              <button className="checkout-button">
                Checkout
              </button>

            </div>

          )}

        </section>

      </main>

    </div>
  );
}

export default App;