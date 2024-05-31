import React from 'react'
import './Home.css'
import homeblog from '../assets/homeblog.jpeg'
function Home() {
    return (
        <div className="homemain container">
            <h1 className="homeheading">BlogApp</h1>
            <img src={homeblog} alt="blog image" className="homeblog"/>
            <p className="homedesc">A blog app is a software program that allows users to create and manage online blogs. These apps typically offer features for writing and editing posts, adding multimedia content like images and videos, scheduling posts, and moderating comments.</p>
            
        </div>
    )
}

export default Home
