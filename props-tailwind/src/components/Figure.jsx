import React from 'react'

function Figure({cardName , about , founder , abtfounder , img}) {
  return (
    
    <figure className="md:flex  rounded-xl p-8 md:p-0 bg-amber-200 mb-6">
        <img className='h-52 w-70 mt-24 ml-5 mb-24 mr-5 border-double border-4 border-purple-500 rounded-xl bg-amber-200' src={img} alt="car" />
  
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4 text-4xl text-purple-800 bg-amber-200">
  <h1>{cardName}</h1>

    <blockquote>
      <p className="text-lg font-medium text-purple-800">{about}
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-purple-800 text-xl">
      {founder}
      </div>
      <div className="  text-purple-800 text-sm">
      {abtfounder}
      </div>
    </figcaption>
  </div>
</figure>
  )
}

export default Figure
