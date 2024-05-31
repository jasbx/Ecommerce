import React from 'react'

const Pages = () => {
    const pageintion = [1, 2, 3];
  return (
    <div className="container text-center mt-2 mb-10">
      <div className="d-flex justify-content-center pagination-container">
        <div className="pagination-item border px-3 py-2 mx-1">Prev</div>
        {pageintion.map((page) => (
          <div key={page} className="pagination-item border px-3 py-2 mx-1">
            {page}
          </div>
        ))}
        <div className="pagination-item border px-3 py-2 mx-1">Next</div>
      </div>
    </div>
  )
}

export default Pages
