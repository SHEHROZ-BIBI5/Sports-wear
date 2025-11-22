import { Link } from "react-router-dom";
export default function Contact() {
  return (
    <>
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="text-gray-600 mb-6">Have questions? Reach out anytime.</p>
        <form className="max-w-md mx-auto flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <textarea
            placeholder="Your Message"
            className="border p-3 rounded h-32 focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <button className="bg-black text-white py-3 rounded hover:bg-accent hover:text-black transition">
            Send Message
          </button>
        </form>
      </section>
      {/* Contact & Catalogs Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h4 className="text-2xl font-bold text-center mb-6 text-red-700">
              CONTACT US
            </h4>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name*"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-700"
                />
                <input
                  type="email"
                  placeholder="Your Email*"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-700"
                />
              </div>
              <input
                type="text"
                placeholder="Your Country*"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-700"
              />
              <input
                type="tel"
                placeholder="Your Contact Number*"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-700"
              />
              <textarea
                placeholder="Enter Your Message"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-700"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-red-700 text-white py-3 rounded-lg font-bold hover:bg-red-800 transition"
              >
                Submit Message
              </button>
            </form>
          </div>

          {/* Catalogs & Links */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-center mb-4 text-gray-800">
                <a
                  href="https://janleticsports.com/catalogs/"
                  className="hover:text-red-700"
                >
                  CATALOGS
                </a>
              </h4>
              <ul className="space-y-3">
                {[
                  {
                    text: "Sportswear Catalog",
                    link: "https://janleticsports.com/3d-flip-book/sportswear-catalog-janletic-sports-sialkot-pakistan/",
                  },
                  {
                    text: "Activewear Catalog",
                    link: "https://janleticsports.com/3d-flip-book/activewear-catalog-janletic-sports-sialkot-pakistan/",
                  },
                  {
                    text: "Casual wear Catalog",
                    link: "https://janleticsports.com/3d-flip-book/casual-wear-catalog-janletic-sports-sialkot-pakistan/",
                  },
                  {
                    text: "Gloves Catalog",
                    link: "https://janleticsports.com/3d-flip-book/gloves-catalog-janletic-sports-sialkot-pakistan/",
                  },
                  {
                    text: "Accessories Catalog",
                    link: "https://janleticsports.com/3d-flip-book/accessories-catalog-janletic-sports-sialkot-pakistan/",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-red-700">→</span>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-red-700 font-medium"
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-center mb-4 text-gray-800">
                OTHER CATEGORIES
              </h4>
              <ul className="space-y-3">
                {[
                  { text: "Sportswear", link: "/sportswear" },
                  { text: "Activewear", link: "/activewear" },
                  { text: "Casual wear", link: "/casual-wear" },
                  { text: "Gloves", link: "/gloves" },
                  { text: "Accessories", link: "/accessories" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-red-700">→</span>
                    <Link
                      to={item.link}
                      className="text-gray-700 hover:text-red-700 font-medium"
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
