import './Home.css';
import Transfrom from './Transfrom';
import Pic from '../../Asset/home-hero-visual.webp';
import ControlSchool from './ControlSchool';
import TimeTable from './TimeTable';
import SchoolOperate from './SchoolOperate';
const Home = () => {
    return ( 
      <>
       <div className="home">
          <section className="container">
              <article>
                 <h1><strong>School data, simplified</strong></h1>
                 <p>A power full easy to use digital solution to transfirm <br/>how you manage School data</p>
              </article>
              <article>
                <button className="btn btn-primary">Contact Us </button> <button className="btn" id='btn'>How it works</button>
              </article>
              <img src={Pic} alt='Picture of the app'/>
          </section>
       </div>
        <Transfrom/>
          <ControlSchool />
          <TimeTable/>
          <SchoolOperate/>
       </>
     );
}
 
export default Home;