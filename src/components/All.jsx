export default function Products() {
  const products = [
    { id: 1, name: "Running Shoes", price: "$89" },
    { id: 2, name: "Sports Jacket", price: "$129" },
    { id: 3, name: "Training Shorts", price: "$49" },
  ];

  return (
    <section className="py-10 px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((p) => (
        <div
          key={p.id}
          className="bg-white shadow-lg p-6 rounded-xl text-center"
        >
          <img
            src={`https://via.placeholder.com/250?text=${p.name}`}
            alt={p.name}
            className="mx-auto mb-4 rounded"
          />
          <h3 className="text-xl font-semibold">{p.name}</h3>
          <p className="text-gray-600 mb-4">{p.price}</p>
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
            Add to Cart
          </button>
        </div>
      ))}
    </section>
  );
}
