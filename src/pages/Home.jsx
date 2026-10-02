import movie5 from "../assets/image-5.jpg"

const Home = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${movie5})` }}
    >

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center text-center px-6">

        <div className="max-w-3xl text-white">

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Movie Recommendation App
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Discover and explore your favorite movies.
          </p>

          <div className="flex flex-row gap-3 justify-center">

  <a
    href="/movies"
    className="bg-yellow-400 text-black px-5 sm:px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition duration-300 whitespace-nowrap"
  >
    Explore Movies
  </a>

  <a
    href="/register"
    className="border border-white px-5 sm:px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition duration-300 whitespace-nowrap"
  >
    Create Account
  </a>

</div>

        </div>

      </div>
    </div>
  )
}

export default Home