import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

const plants = [
  // Air Purifying Plants
  {
    id: 1,
    category: "Air Purifying Plants",
    name: "Snake Plant",
    price: 18,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 2,
    category: "Air Purifying Plants",
    name: "Peace Lily",
    price: 22,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 3,
    category: "Air Purifying Plants",
    name: "Spider Plant",
    price: 15,
    image:
      "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 4,
    category: "Air Purifying Plants",
    name: "Areca Palm",
    price: 28,
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 5,
    category: "Air Purifying Plants",
    name: "Boston Fern",
    price: 20,
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 6,
    category: "Air Purifying Plants",
    name: "Rubber Plant",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80"
  },

  // Aromatic Plants
  {
    id: 7,
    category: "Aromatic Plants",
    name: "Lavender",
    price: 16,
    image:
      "https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 8,
    category: "Aromatic Plants",
    name: "Mint",
    price: 12,
    image:
      "https://images.unsplash.com/photo-1628557044797-f21a177c37ec?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 9,
    category: "Aromatic Plants",
    name: "Rosemary",
    price: 14,
    image:
      "https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 10,
    category: "Aromatic Plants",
    name: "Basil",
    price: 13,
    image:
      "https://images.unsplash.com/photo-1618375569909-3c8616cf7733?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 11,
    category: "Aromatic Plants",
    name: "Thyme",
    price: 11,
    image:
      "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 12,
    category: "Aromatic Plants",
    name: "Lemongrass",
    price: 17,
    image:
      "https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&w=500&q=80"
  },

  // Decorative Plants
  {
    id: 13,
    category: "Decorative Plants",
    name: "Monstera",
    price: 30,
    image:
      "https://images.unsplash.com/photo-1614594575600-3e9e7a7e4e0d?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 14,
    category: "Decorative Plants",
    name: "Fiddle Leaf Fig",
    price: 35,
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 15,
    category: "Decorative Plants",
    name: "Calathea",
    price: 27,
    image:
      "https://images.unsplash.com/photo-1614594575600-3e9e7a7e4e0d?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 16,
    category: "Decorative Plants",
    name: "Philodendron",
    price: 24,
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 17,
    category: "Decorative Plants",
    name: "ZZ Plant",
    price: 26,
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae2c27?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 18,
    category: "Decorative Plants",
    name: "Pothos",
    price: 19,
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=500&q=80"
  }
];

function ProductList({
  onHomeClick,
  onCartClick,
  totalItems
}) {
  const dispatch = useDispatch();

  const cart = useSelector(
    (state) => state.cart.items
  );

  const categories = [
    "Air Purifying Plants",
    "Aromatic Plants",
    "Decorative Plants"
  ];

  const isInCart = (id) =>
    cart.some((item) => item.id === id);

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">

        <h2 onClick={onHomeClick}>
          Paradise Nursery
        </h2>

        <div className="nav-links">

          <button onClick={onHomeClick}>
            Home
          </button>

          <button>
            Plants
          </button>

          <button onClick={onCartClick}>
            🛒 Cart
            <span className="cart-count">
              {totalItems}
            </span>
          </button>

        </div>
      </nav>

      {/* Plant Listing */}
      <main
        style={{
          padding: "30px",
          maxWidth: "1300px",
          margin: "auto"
        }}
      >

        <h1
          style={{
            textAlign: "center",
            marginBottom: "40px"
          }}
        >
          Our Plants
        </h1>

        {categories.map((category) => {

          const categoryPlants = plants.filter(
            (plant) => plant.category === category
          );

          return (
            <section
              key={category}
              style={{
                marginBottom: "50px"
              }}
            >

              <h2
                style={{
                  marginBottom: "20px",
                  color: "#2e7d32"
                }}
              >
                {category}
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "25px"
                }}
              >

                {categoryPlants.map((plant) => (

                  <article
                    key={plant.id}
                    style={{
                      background: "white",
                      borderRadius: "12px",
                      padding: "15px",
                      boxShadow:
                        "0 3px 12px rgba(0,0,0,0.12)"
                    }}
                  >

                    <img
                      src={plant.image}
                      alt={plant.name}
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                        borderRadius: "8px"
                      }}
                    />

                    <h3
                      style={{
                        marginTop: "15px"
                      }}
                    >
                      {plant.name}
                    </h3>

                    <p
                      style={{
                        margin: "10px 0",
                        fontWeight: "bold"
                      }}
                    >
                      ${plant.price}
                    </p>

                    <button
                      onClick={() =>
                        dispatch(addItem(plant))
                      }
                      disabled={isInCart(plant.id)}
                      style={{
                        width: "100%",
                        padding: "10px",
                        border: "none",
                        borderRadius: "6px",
                        background:
                          isInCart(plant.id)
                            ? "#9e9e9e"
                            : "#2e7d32",
                        color: "white",
                        fontWeight: "bold"
                      }}
                    >
                      {isInCart(plant.id)
                        ? "Added to Cart"
                        : "Add to Cart"}
                    </button>

                  </article>

                ))}

              </div>
            </section>
          );
        })}

      </main>
    </div>
  );
}

export default ProductList;
