import './SchoolOperate.css';
import photo from '../../Asset/photo.jpg';
const SchoolOperate = () => {
    return ( <div className="school ">
                <h1>We're changing how schools operates</h1>
                <div>
                    <img src={photo}></img>
                    <div className='cardd'>
                        <h1>Creative Innovative solutions that work</h1>
                        <p>It’s our driving passion to create powerful products and 
                            services that enhance and support schools in delivering 
                            continuity of education. We are a diverse group of thinkers, 
                            creators, technologists and innovators always exploring how to drive
                             the EdTech sector forward.
                        </p>
                        {/* <div className='footer'>
                            <button className='btn btn-primary'>our Story</button>
                            <a href='www.google.com'>Join us</a>
                        </div> */}
                    </div>
                </div>
               </div> 
     );
}
 
export default SchoolOperate;