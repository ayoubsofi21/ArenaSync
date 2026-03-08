export function Header({ query, setQuery }) {
  return (
    <header
      className="bg-gradient-to-br from-purple-600 via-blue-500 to-purple-700 text-white rounded-b-3xl relative overflow-hidden"
      aria-label="App header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Top section */}
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">
            Good Morning, Samuel Walker!
          </h1>

          <button
            className="w-10 h-10 sm:w-11 sm:h-11 bg-white/20 rounded-full flex items-center justify-center"
            aria-label="Profile"
          >
            <img
              src="GVCF.jpg"
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
          </button>
        </div>

        {/* Search */}
        <div className="flex items-center gap-3 bg-white text-gray-800 p-3 rounded-xl w-full mt-6 shadow-md ">
          <span className="text-gray-500 text-lg">🔎</span>

          <input
            type="search"
            placeholder="Search tournaments..."
            aria-label="Search"
            className="flex-1 outline-none text-sm sm:text-base"
          />

          <button className="text-gray-500 text-lg" aria-label="Open filters">
            ≡
          </button>
        </div>
      </div>
    </header>
  );
}
