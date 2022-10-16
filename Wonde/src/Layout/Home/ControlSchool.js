import "./ControlSchool.css";
import picture1 from "../../Asset/ControlSchool/home-data-450x348@2x.webp";
import picture2 from "../../Asset/ControlSchool/home-security-450x348@2x.webp";
const ControlSchool = () => {
    return ( 
        <main className="controlSchool">
             <h2>Wonde help control all of your School data</h2>
             <div>
                 <div className="cardd">
                    <img src={picture2} ></img>
                    <div className="para">
                    <h3>Have total confidence in the security and reliablity of your School technology</h3>
                      <p>Wonde gfyurgyu yhgfyurg yhrfgyr rhfgyur urfgurg jrgvfur rjfgur rufgurg rufgr ufur  rugu urfur rufurhf urhfur 
                        yuegfyrg rufgurg uirhf uhrh jrfhu ucurgc ujgviurg gvuer jrgurg rjfgur 
                      </p>
                      <button className="btn btn-outline-primary">Learn more</button>
                    </div>
                 </div>
                 <div className="cardd">
                    <img src={picture1} ></img>
                    <div className="para">
                    <h3>Have total confidence in the security and reliablity of  technology</h3>
                    <p>Wonde gfyurgyu yhgfyurg yhrfgyr rhfgyur urfgurg jrgvfur rjfgur rufgurg rufgr ufur  rugu urfur rufurhf urhfur 
                       yuegfyrg rufgurg uirhf uhrh jrfhu ucurgc ujgviurg gvuer jrgurg rjfgur 
                    </p>
                    <button className="btn btn-outline-primary">Learn about security</button>
                    </div>

                 </div>
             </div>
        </main>
     );
}
 
export default ControlSchool;