import React from 'react'

export default function Search() {
  return (
    <div className='flex flex-col md:flex-row'>
        <div className='p-7 border-b-2 md:border-r-2 md:min-h-screen'>
            <form action="" className='flex flex-col gap-8'>
                <div className='flex items-center gap-2'>
                    <label className='whitespace-nowrap font-semibold'>Search Term</label>
                    <input 
                        type="text" 
                        id='searchTerm' 
                        placeholder='Search...' 
                        className='border border-yellow-400 focus:outline-yellow-600 rounded-lg p-2 w-full'
                    />
                </div>

                <div className='flex gap-2 flex-wrap items-center'>
                    <label className='font-semibold'>Type:</label>
                    <div className='flex gap-2'>
                        <input type="checkbox" id='all' className='w-5'/>
                        <span>Rent & Sale</span>
                    </div>

                    <div className='flex gap-2'>
                        <input type="checkbox" id='rent' className='w-5'/>
                        <span>Rent</span>
                    </div>

                    <div className='flex gap-2'>
                        <input type="checkbox" id='sale' className='w-5'/>
                        <span>Sale</span>
                    </div>

                    <div className='flex gap-2'>
                        <input type="checkbox" id='offer' className='w-5'/>
                        <span>Offer</span>
                    </div>
                </div>

                <div className='flex gap-2 flex-wrap items-center'>
                    <label className='font-semibold'>Amenities:</label>
                    <div className='flex gap-2'>
                        <input type="checkbox" id='parking' className='w-5'/>
                        <span>Parking</span>
                    </div>

                    <div className='flex gap-2'>
                        <input type="checkbox" id='furnished' className='w-5'/>
                        <span>Furnished</span>
                    </div>
                </div>

                <div className='flex items-center gap-2'>
                    <label className='font-semibold'>Sort:</label>
                    <select id="sort_order" className='border rounded-lg p-1'
                    >
                        <option>Price high to low</option>
                        <option>Price low to high</option>
                        <option>Latest</option>
                        <option>Oldest</option>
                    </select>
                </div>
                <button className='bg-yellow-600 text-white font-semibold p-2 rounded-lg uppercase hover:opacity-95 cursor-pointer'>
                    Search
                </button>

                
            </form>
        </div>


        <div>
            <h1 className='text-3xl font-semibold border-b p-3 text-yellow-500 mt-5'>Listing Results</h1>
        </div>
    </div>
  )
}
