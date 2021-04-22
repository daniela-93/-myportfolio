import coverImage from "../../assets/cover/me.png";
import React from 'react'

function About() {

  return (
    <section className="my-5" >

      <img src={coverImage} className="my-2" style={{ width: "20%" }} alt="cover" />
      <div className="my-2">
        <p>
          My name is Daniela Acuna. I'm originally from Victoria, Texas, but I've been in Austin almost 8 years. I'm currently employed by Accenture. I investigate financial fraud for social media company. Im recent graduate from the University of Texas Coding Bootcamp. 
      </p>
      </div>
    </section>
  )
}

export default About;
