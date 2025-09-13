import React, { useContext } from 'react'
import saman from '../context/ItemsContext'
import { Link } from 'react-router-dom'

const Products = () => {
  const { addtocart, vastu } = useContext(saman)
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-black flex flex-wrap gap-16 items-center justify-center p-8">
      {vastu.map((data) => (
        <div
          key={data.id}
          className="w-72 h-96 p-5 border border-slate-700 rounded-3xl bg-slate-900/80 flex flex-col items-center justify-between shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_10px_rgba(148,163,184,0.4)]"
        >
          <Link to={`/${data.category}/${data.id}`} className="w-full flex justify-center">
            <img
              src={data.imgSrc}
              alt={data.title}
              className="w-40 h-44 border-2 border-yellow-400 rounded-xl bg-white p-2 object-contain transition-transform duration-200 hover:scale-110 shadow"
            />
          </Link>
          <h1 className="w-full text-center mt-6 text-white font-semibold text-lg truncate">{data.title}</h1>
          <h1 className="w-full text-center text-yellow-400 font-bold text-xl mt-2 mb-2">₹ {data.price}</h1>
          <button
            onClick={() => addtocart(data.id, data.title, data.price, data.imgSrc)}
            className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 border-none rounded-xl px-5 py-2 mt-2 text-white font-semibold shadow-md transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437m0 0L7.5 15.75A2.25 2.25 0 009.683 18h4.634a2.25 2.25 0 002.183-1.813l1.285-7.713a1.125 1.125 0 00-1.107-1.312H6.272m0 0L5.25 4.5m1.022 1.272h13.478" />
            </svg>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  )
}

export default Products
