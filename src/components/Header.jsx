export function Header() {
  return (
    <header
      class="bg-gradient-to-br from-purple-600 via-blue-500 to-purple-700 text-white p-6 pt-7 pb-7 rounded-b-3xl overflow-hidden relative"
      aria-label="App header"
    >
      <div class="flex justify-between items-center gap-3">
        <div>
          <h1 class="text-2xl sm:text-3xl font-bold leading-tight tracking-tight">
            Good Morning, Samuel Walker!
          </h1>
        </div>
        <button
          class="w-10 h-10 sm:w-11 sm:h-11 bg-white/15 rounded-full flex items-center justify-center focus:outline-none"
          aria-label="Profile"
        >
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            class="w-full h-full rounded-full object-cover"
          />
        </button>
      </div>

      <div class="flex items-center gap-2 sm:gap-2.5 bg-white text-gray-800 p-3 rounded-xl w-[92%] max-w-3xl mt-4 shadow-md">
        <span class="text-lg text-gray-500">🔎</span>
        <input
          type="search"
          placeholder="Search"
          aria-label="Search"
          class="flex-1 border-none outline-none text-base py-1"
        />
        <button
          class="text-lg text-gray-500 bg-transparent border-none px-1 py-1 cursor-pointer"
          aria-label="Open filters"
        >
          ≡
        </button>
      </div>
    </header>
  );
}
