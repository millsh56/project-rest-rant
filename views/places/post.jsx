const React = require('react')
const Def = require('../default')

function Post(place) {
  return (
    <Def>
      <main>
        <h1>{place.name} Page</h1>
        <p>
          Located in {place.city}, {place.state}
        </p>
        <img src={place.img} alt={place.name} />

        <a href={`/places/${place.id}/edit`}><button>Edit</button></a>

        <form action={`/places/${place.id}?_method=DELETE`} method="POST">
          <input type='submit' value="DELETE" />
        </form>
      </main>
    </Def>
  )
}



module.exports = Post