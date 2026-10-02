import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import movie5 from "../assets/image-5.jpg"

const RegisterSchema = z.object({
  name: z.string().min(1, "Enter your full name"),
  gender: z.string().min(1, "Enter your gender"),
  age: z.number().min(1, "Enter your age"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(11, "Phone number must be at least 11 digits"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RegisterSchema),
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative py-12 px-4"
      style={{ backgroundImage: `url(${movie5})` }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Form container */}
      <div className="relative z-10 max-w-2xl mx-auto">

        <div className="text-center text-white mb-8">
          <h1 className="text-4xl font-bold mb-3">
            Create Your Account
          </h1>

          <p className="text-gray-300">
            Join us and discover movies you will love.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-10 space-y-5"
        >

          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block font-semibold text-gray-700 mb-2"
            >
              Full Name
            </label>

            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              {...register("name")}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200"
            />

            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Gender */}
          <div>
            <label
              htmlFor="gender"
              className="block font-semibold text-gray-700 mb-2"
            >
              Gender
            </label>

            <select
              id="gender"
              {...register("gender")}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200"
            >
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>

            {errors.gender && (
              <p className="text-red-500 text-sm mt-1">
                {errors.gender.message}
              </p>
            )}
          </div>

          {/* Age */}
          <div>
            <label
              htmlFor="age"
              className="block font-semibold text-gray-700 mb-2"
            >
              Age
            </label>

            <input
              id="age"
              type="number"
              placeholder="Enter your age"
              {...register("age", { valueAsNumber: true })}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200"
            />

            {errors.age && (
              <p className="text-red-500 text-sm mt-1">
                {errors.age.message}
              </p>
            )}
          </div>

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

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block font-semibold text-gray-700 mb-2"
            >
              Phone Number
            </label>

            <input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              {...register("phone")}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200"
            />

            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
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
              placeholder="Create a password"
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
            Create Account
          </button>

        </form>
      </div>
    </div>
  )
}

export default Register