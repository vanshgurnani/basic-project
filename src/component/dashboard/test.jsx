import React from 'react'

function test() {
  return (
    <>
    <section ID="testo">
    <br/>
  <h2 class="text-black">Testmonials</h2>

  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" interval="2000" >
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" class="active" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" class="active" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="css/c1.png" height="100" class="t2" alt=""/>
    <h3 class="t3 text-black">Vansh</h3>
    <p>Best electricals items in Jaipur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur itaque ipsam laboriosam nulla,<br/> eaque quis sequi ipsum dolorum aliquam deleniti delectus voluptatum <br/> dolores voluptatem repellat iusto id sed velit suscipit.</p>
      </div>
      <div class="carousel-item">
        <img src="css/c1.png" height="100" class="t2" alt=""/>
    <h3 class="t3 text-black">Yash</h3>
    <p>Good Quality of Material provided here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dicta similique, architecto <br/> ad totam molestiae repellat est quam ullam explicabo, asperiores cumque <br/> a beatae voluptates quaerat corrupti saepe nostrum enim.</p>
      </div>
      <div class="carousel-item">
        <img src="css/c1.png" height="100" class="t2" alt=""/>
    <h3 class="t3 text-black">Suresh</h3>
    <p>Fantastic desgin also available here for electric <br/> items and more advance lights & Fans are also provided here</p>
    </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  </section> 
    </>
  )
}

export default test
