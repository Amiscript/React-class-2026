
import React from 'react'
import Button from '../utils.jsx/Button'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <section className="flex flex-col items-center justify-center text-center py-20 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Welcome to MyApp
        </h2>
        <p className="text-gray-600 max-w-xl mb-6">
          Build modern web applications with React and Tailwind CSS quickly and efficiently.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-6 px-6 pb-20">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold mb-2">Fast Development</h3>
          <p className="text-gray-600">Use Tailwind utility classes to build UI faster.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold mb-2">Responsive Design</h3>
          <p className="text-gray-600">Looks great on all devices with minimal effort.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold mb-2">Reusable Components</h3>
          <p className="text-gray-600">Create scalable and maintainable components.</p>
        </div>
      </section>

    </div>
  )
}
