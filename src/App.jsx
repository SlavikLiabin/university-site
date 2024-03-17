import About from "./Components/About/About"
import Campus from "./Components/Campus/Campus"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import Programs from "./Components/Programs/Programs"
import Testimonials from "./Components/Testimonials/Testimonials"
import Title from "./Components/Title/Title"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our PROGRAM' title='What we offer'/>
        <Programs/>
        <About/>
        <Title subTitle='Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subTitle='Testimonials' title='What Student Says'/>
        <Testimonials/>
      </div>
    </div>
  )
}

export default App