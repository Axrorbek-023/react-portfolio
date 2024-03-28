import React from 'react'
import './Header.css'
import oy from '../../img/oy.png'

function Header({mode, setMode}) {
  return (
    <section className={mode == true ? 'light' : 'dark'}>
        <div className="container">
            <button onClick={()=> setMode(!mode)} className='victor__btn'>
                <img src={oy} alt="" />
            </button>
            <nav class="nav">
                  <div class="victor__box">
                      <a href="#" class="logo">
                          <img src="./img/logo.svg" alt="" />
                      </a>
                      <div class="box2">
                          <h1>Axrorbek Tojidinov</h1>
                          <p>frontend o'quvchisi</p>
                          <img src="./img/img.png"alt="" />
                      </div>
                  </div>
            </nav>

            <div class="work">
                <div>   
                    <p>7</p>
                    <p class="work1">Years of work experience</p>
                </div>
                <div>
                    <p>50+</p>
                    <p class="work2">Completed
                        projects</p>
                </div>
                <div>
                    <p>20+</p>
                    <p class="work3">Satisfied
                        customers</p>
                </div>
            </div>

            <div class="control"> 
                <button class="btn1">Download CV</button>
                <button class="btn2">Contact me</button>
            </div>

            <div class="portfolio">
                <input class="inp1" type="text" placeholder="Portfolio" />
                <input class="inp2" type="text" placeholder="Skills" />
            </div>
        </div>
    </section>
  )
}

export default Header