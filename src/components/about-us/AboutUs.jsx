import React from 'react'
import './about.css'

const AboutUs = () => {
  return (
    <div className='about-us'>
        <div className="heading-about-us container">
            <h2>About Us</h2>
        </div>
        <div className='aboutus-items'>
            <div className="card">
                <div className="card-heading">
                    <h3>Profile</h3>
                </div>
                <div className="card-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit impedit inventore, similique hic est sapiente? Nisi, quas nobis harum accusantium non eveniet corrupti unde ad veniam sapiente iusto eos porro?</p>
                </div>
            </div>
            <div className="card">
                <div className="card-heading">
                    <h3>Activities</h3>
                </div>
                <div className="card-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit impedit inventore, similique hic est sapiente? Nisi, quas nobis harum accusantium non eveniet corrupti unde ad veniam sapiente iusto eos porro?</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs