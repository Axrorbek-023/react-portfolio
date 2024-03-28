import React from 'react'
import './Project.css'
import photo_bir from '../../img/photo_bir.png'
import photo_ikki from '../../img/photo_ikki.png'
import photo_uch from '../../img/photo_uch.png'
import photo_tort from '../../img/photo_tort.png'
import photo_besh from '../../img/photo_besh.png'
import photo_olti from '../../img/photo_olti.png'

function Project(mode) {
  return (
    <section className={mode == true ? 'light' : 'dark'}>
        <div class="container">
            <ul class="project__list">
                <li class="project__item">
                    <img src={photo_bir} alt="" />
                </li>
                <li class="project__item">
                    <img src={photo_ikki} alt="" />
                </li>
                <li class="project__item">
                    <img src={photo_uch} alt="" />
                </li>
                <li class="project__item">
                    <img src={photo_tort} alt="" />
                </li>
                <li class="project__item">
                    <img src={photo_besh} alt="" />
                </li>
                <li class="project__item">
                    <img src={photo_olti} alt="" />
                </li>
            </ul>
        </div>
        <h2 class="alvarado">© Victor Alvarado. 2022 All rigths reserved</h2>
    </section>
  )
}

export default Project