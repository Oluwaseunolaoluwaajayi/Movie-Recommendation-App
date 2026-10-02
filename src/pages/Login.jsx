import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import movie5 from "../assets/image-5.jpg"

const LoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative flex items-center justify-center px-4 py-12"
      style={{ backgroundImage: `url(${movie5})` }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Login content */}
      <div className="relative z-10 w-full max-w-md">

        <div className="text-center text-white mb-8">
          <h1 className="text-4xl font-bold mb-3">
            Welcome Back
          </h1>

          <p className="text-gray-300">
            Login to continue exploring movies.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 space-y-6"
        >

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block font-semibold text-gray-700 mb-2"
            >
              Email Address
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              {...register("email")}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200"
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block font-semibold text-gray-700 mb-2"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              {...register("password")}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200"
            />

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-300 transition duration-300"
          >
            Login
          </button>

        </form>
      </div>
    </div>
  )
}

export default Login