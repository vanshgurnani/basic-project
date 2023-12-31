import React from 'react'

function intro() {
  return (
    <>
    <section id="title">
    <div class="row container-fluid">
      <div class="col-lg-6">
        <h1 class="heading">Come and Buy these awesome electricals products!</h1>
        <button class="btn btn-dark buy-button"><i class="bi bi-bag"></i> BUY ME! </button>
        <button class="btn btn-outline-dark contact-button"><i class="bi bi-telephone"></i> CONTACT ME! </button>
      </div>
    <div class="col-lg-6">
    <img src="css/sk1.jpg" alt="" height="200" class="rounded"/>
    <img src="css/sk2.jpg" alt="" height="200" width="200" class="rounded pic" />
    </div>
    </div>
  </section> 
    </>
  )
}

export default intro
