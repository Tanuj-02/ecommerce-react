import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import saman from '../context/ItemsContext'

const Details = () => {
    const { id } = useParams()
    const { vastu, addtocart } = useContext(saman)

    const filterdata = vastu.filter((chani) => chani.id == `${id}`)
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-black py-10">
            {filterdata.map((data) => (
                <div
                    key={data.id}
                    className="w-full max-w-3xl flex flex-col md:flex-row items-center gap-10 rounded-3xl border border-slate-700 bg-slate-900/90 shadow-2xl p-8"
                >
                    <img
                        src={data.imgSrc}
                        alt={data.title}
                        className="w-72 h-72 rounded-3xl border-4 border-yellow-400 bg-white object-contain shadow-lg"
                    />
                    <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                        <h1 className="text-3xl font-bold text-yellow-300 mb-4">{data.title}</h1>
                        <p className="text-lg text-slate-200 mb-6">{data.description}</p>
                        <h2 className="text-2xl font-bold text-yellow-400 mb-8">₹ {data.price}</h2>
                        <button
                            onClick={() => addtocart(data.id, data.title, data.price, data.imgSrc)}
                            className="bg-orange-500 hover:bg-orange-600 border-none rounded-xl px-8 py-3 text-white font-semibold shadow-lg transition-colors duration-200"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Details
