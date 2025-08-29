export default function Home() {
  const products = [
    { id: 1, name: 'Linen Midi Dress', brand: 'Zara', price: 6990, img: 'https://picsum.photos/seed/dress/600/800' },
    { id: 2, name: 'Relaxed Cotton Shirt', brand: 'H&M', price: 2900, img: 'https://picsum.photos/seed/shirt/600/800' },
    { id: 3, name: 'High-Rise Wide Jeans', brand: 'Mango', price: 5950, img: 'https://picsum.photos/seed/jeans/600/800' },
    { id: 4, name: 'Structured Blazer', brand: 'Zara', price: 9990, img: 'https://picsum.photos/seed/blazer/600/800' },
  ];
  const money = (cents:number) => `$${(cents/100).toFixed(2)}`;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-4">
          <div className="h-9 w-9 rounded-xl bg-black text-white grid place-items-center text-sm font-bold">S</div>
          <div className="text-2xl font-bold">Seira</div>
          <input
            placeholder="Search for products, brands…"
            className="ml-auto border rounded px-3 py-2 w-1/3 hidden md:block"
          />
          <a href="#" className="text-sm">Wishlist</a>
          <a href="#" className="text-sm">Cart</a>
        </div>
        <div className="border-t">
          <div className="mx-auto max-w-7xl px-4 py-2 text-sm flex gap-6 overflow-x-auto">
            {['Men','Women','Kids','Premium','Footwear','Accessories','Beauty'].map(c =>
              <span key={c} className="whitespace-nowrap hover:text-pink-600 cursor-pointer">{c}</span>
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 mt-4">
        <div className="rounded-2xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white p-6">
          <div className="text-3xl font-extrabold">End of Season Sale</div>
          <div className="opacity-90 mt-1">Up to 60% off on Zara, H&M, Mango & more</div>
          <a href="#grid" className="mt-3 inline-block bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold">
            Shop Now
          </a>
        </div>
      </div>

      <div id="grid" className="mx-auto max-w-7xl px-4 mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map(p => (
          <div key={p.id} className="bg-white border rounded-xl overflow-hidden hover:shadow transition">
            <div className="aspect-[3/4] bg-gray-100">
              <img src={p.img} alt={p.name} className="w-full h-full object-cover"/>
            </div>
            <div className="p-3">
              <div className="text-xs text-gray-500">{p.brand}</div>
              <div className="font-semibold text-sm">{p.name}</div>
              <div className="mt-1 font-bold">{money(p.price)}</div>
              <button className="mt-2 text-xs border rounded px-2 py-1">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div>
            <div className="font-semibold mb-2">Customer Policies</div>
            <ul className="space-y-1 text-gray-600">
              <li>Terms of Use</li><li>Privacy Policy</li><li>Return Policy</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Company</div>
            <ul className="space-y-1 text-gray-600"><li>About Seira</li><li>Careers</li><li>Contact</li></ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Keep in Touch</div>
            <div className="space-x-3"><span>Instagram</span><span>Twitter</span><span>LinkedIn</span></div>
          </div>
          <div>
            <div className="font-semibold mb-2">App</div>
            <div className="space-y-2 text-gray-600"><div>iOS (coming soon)</div><div>Android (coming soon)</div></div>
          </div>
        </div>
        <div className="text-center text-xs text-gray-500 py-4">© {new Date().getFullYear()} Seira Fashion</div>
      </div>
    </div>
  );
}
