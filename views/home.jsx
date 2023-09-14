const React = require('react')
const Def = require('./default')


function home () {
    return (
      <Def>
          <main>
          <h1>REST-Rant</h1>
              <div className= 'h-50 d-inline-block'>
      <img className= 'img-fluid' src="/images/home-img.jpg" alt="Fancy drink and food dish" />
      </div>
      <div>
        <a href="https://unsplash.com/@sharonchen">Photo by Sharon Chen</a> on <a href="https://unsplash.com/">Unsplash</a>
      </div>
              
      <a href="/places"><button className="btn btn-primary">Places Page</button></a>
          </main>
      </Def>
    )
  }  

module.exports = home
