import React, { useState } from 'react'
import { Videos } from '../assets/data'
import Products from '../components/Products'

const Home = () => {
  const [film] = useState(Videos)
  const filterdata = film.filter((chani) => chani.category === "mobiles")
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-black flex flex-col items-center justify-start">
      {/* Video Section */}
      <div className="w-full flex flex-col items-center justify-center py-6 sm:py-10 px-2">
        {filterdata.map((data) => (
          <div key={data.name} className="flex items-center justify-center w-full">
            <video
              src={data.url}
              autoPlay
              loop
              muted
              className="rounded-2xl sm:rounded-3xl shadow-2xl border-4 border-yellow-400 w-full max-w-full sm:max-w-5xl object-cover"
            ></video>
          </div>
        ))}
      </div>
      {/* Products Section */}
      <div className="w-full flex justify-center">
        <Products />
      </div>
    </div>
  )
}

export default Home
