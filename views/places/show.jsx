const React = require('react')
const Def = require('../default')

function Show(data) {
  return (
    <Def>
      <main>
        <h1>{data.place.name} Page</h1>
        <div className='col-md-8'>
          <div><h2>Rating</h2>
            <p>Not yet rated!</p></div>
          <div><img src={data.place.pic} alt={data.place.name} /></div>
          <div><h2>Description</h2>
            <p>
              Located in {data.place.city}, {data.place.state}. Cuisine type: {data.place.cuisines}
            </p></div>
          <div><h2>Comments</h2>
            <p>No comments yet!</p></div>
        </div>

        <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
  Edit
</a>     

<form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
  <button type="submit" className="btn btn-danger">
    Delete
  </button>
</form> 

      </main>
    </Def>
  )
}



module.exports = Show


