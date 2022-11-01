import React from 'react'
import './App.css'
const App = () => {
  return (
    <div className='container'>
        <header className='header'>
          <div className="cop">
        <p className='element'>WISHLIST</p>
        <img  className ="headimage"src="./path-1.png" alt="" />
        </div>
        <div className="cop">
        <p className='element'>CART</p>
        
        <img className ="headimage"src="./count.png" alt="" />
        </div>
        <div className="cop">
        <img className='headimage win' src="./profile2.png" alt="" />
        <p className='element'>Thrinath</p>
        <img  className ="headimage"src="./arrow.png" alt="" />
        </div>
          </header> 
<nav className='navbar'>
   <div className="em kraya">
    <img src="./kay.png" alt="notloaded" />
   </div> 
   <div className="em">
    <p className='paraelement'>PHONE</p>
    <p className='paraelement'>REFRIGRATOR</p>
    <p className='paraelement'>TELIVISION</p>
    <p className='paraelement'>LAPTOP</p>
    <p className='paraelement'>WASHING MACHINE</p>
    <p className='paraelement'>DOWNLOADS</p>
    </div>
   <div className=" em ">
    <img src="./search.png" alt="" />
    <div className="em3">
    <input placeholder='search for products' className ="no-outline" type="text" />
    <hr className='line'/>
    </div>
    </div> 
</nav>
<p className='dummy'>HOME / MOBILES</p>
<section className='wholecard'>
<div className="part">
<div className="card">
<div className="col1">
 <img className='sideimage' src="./Image 1.png" alt="" />
 <img className='sideimage' src="./Image 2.png" alt="" />
 <img className='sideimage' src="./Image 6.png" alt="" />
 <img className='sideimage' src="./Image 4.png" alt="" />
 <img className='sideimage' src="./Image 5.png" alt="" />
 <img className='sideimage' src="./Image 3.png"alt="" />
</div>
<div className="col">
  <img src="./Image 7.png" alt="" />
</div>
<div className="col">
<img src="./path@2x.png" alt="" />
</div>
</div>
<div className="card2">
<button className='but'>Add to cart</button>
<button className='but'>Buy now</button>
</div>
</div>
<div className="part">
<div className="heb">
  <p>Product Code</p>
  <h3>ODE349879</h3>
</div>
<div className="heb">
  <p>HONOR 8 PRO (Midnight Black, 128GB)<br/>(6GB RAM)</p>
</div>
<div className="heb">
  <img src="./ico.png" alt="" />
  <img src="./ico.png" alt="" />
  <img src="./ico.png" alt="" />
  <img src="./ico.png" alt="" />
  <img src="./icowhi.png" alt="" />
  <p>(9,303)</p>
</div>
<div className="heb">
  <p>$<b>99.99</b></p>
  <p><s>$149.99</s> 30% off<br/></p>
</div>
<p className='heb'>In stock</p>
<div className="heb coldis">
  <div className="dip">
  <p>Color <b>Sapphire Blue</b></p></div>
  <div className=" circle ">
  <span class="dot circle blue"></span>
  <span class="dot circle black"></span>
  <span class="dot circle"></span>
  </div>
</div>

<div className="heb">
  <div className="compress">
  <div className="dip">
    <p>Storage <b>32GB</b></p>
    </div>
    <div className="dip">
    <button className='firstbtn'>64GB</button>
    <button className='secondbtn'>128GB</button>
    </div>
    </div>
    <div className="compress">
  <div className="dip">
    <p>RAM <b>4GB</b></p>
    </div>
    <div className="dip">
    <button className='firstbtn'>2GB</button>
    <button className='secondbtn'>4GB</button>
    </div>
    </div>
</div>
<b className='compress'> +  PRODUCT DETAILS</b>
</div>
  </section>
  

         </div>
  )
}

export default App