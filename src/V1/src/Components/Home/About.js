function About() {
  return (
    <section className="about section__padding" >
      <div className="about-container">
        <div className="about-content">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but
            casual environment. The restaurant features a locally-sourced menu with daily specials.
          </p>
        </div>
        <div className="about-images">
          {/* <img src={chef || "/placeholder.svg"} alt="Chef preparing food" className="chef-image" />
          <img src={restaurant || "/placeholder.svg"} alt="Restaurant interior" className="restaurant-image" /> */}
          <img src="Images/image-4.png" alt="Chef preparing food" className="chef-image" />
        </div>
      </div>
    </section>
  )
}

export default About

