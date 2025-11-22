export default function Products() {
  const items = [
    { id: 1, name: "Running Shoes", price: "$89" },
    { id: 2, name: "Sports Jacket", price: "$119" },
    { id: 3, name: "Yoga Pants", price: "$59" },
    { id: 4, name: "Training Shorts", price: "$39" },
  ];

  return (
    <section className="p-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
      {items.map((p) => (
        <div
          key={p.id}
          className="bg-white shadow-md rounded-xl text-center p-6 hover:shadow-xl transition"
        >
          <img
            src={`https://via.placeholder.com/300x200?text=${p.name}`}
            alt={p.name}
            className="rounded-lg mb-4 mx-auto"
          />
          <h3 className="text-xl font-semibold">{p.name}</h3>
          <p className="text-gray-600">{p.price}</p>
          <button className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-accent hover:text-black">
            Add to Cart
          </button>
        </div>
      ))}
    </section>
  );
}
