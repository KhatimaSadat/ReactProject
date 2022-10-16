import './Transform.css';
import Pic1 from '../../Asset/Transform/home-im-app@2x.webp';
import Pic2 from '../../Asset/Transform/home-im-partner@2x.webp';
import Pic3 from '../../Asset/Transform/home-im-school@2x.webp';
const Transform = () => {
    return ( 
        <main className='transform'>
           <section className='first'>
           <article >
                <h2><strong>25,000+</strong></h2>
                <p>Schools trust Wendo </p>
             </article>
             <article>   
                <h2><strong>60+</strong></h2>
                <p>Countries supoorted by Wendo </p>
                
                
             </article>
             <article >
               <h2><strong>400+</strong></h2>
                <p>Apps integreted with  Wendo</p>
            </article>
             <article> 
                <h2><strong>35 million</strong></h2>
                <p>Individual data managed </p>
            </article>
           </section>
           <section className='second'>
              <article>
                <p><strong>Transforming how data is<br/> maintained, managed &amp; accessed</strong></p>
              </article>
              <article className='cardd'>
              <figure>
                <img src={Pic3} alt='Photo of School'></img>
                <figcaption>
                    <h2>I’m a School</h2>
                    <p>I want a simple, secure solution to <br/> managing our data.</p>
                    <button className='btn btn-outline-primary'>Learn more</button>
                </figcaption>
              </figure>
              <figure>
                <img src={Pic1} alt='Photo of School'></img>
                <figcaption>
                    <h2>I’m an App</h2>
                    <p>I’m ready to excite &amp; support schools<br/> with valuable solutions.</p>
                    <button className='btn btn-outline-primary' >Learn more</button>
                </figcaption>
              </figure>
              <figure>
                <img src={Pic2} alt='Photo of School'></img>
                <figcaption>
                    <h2>I’m a Partner</h2>
                    <p>I need to offer schools a <br/> comprehensive portfolio of secure,<br/> reliable products.</p>
                    <button className='btn btn-outline-primary' >Learn more</button>
                    
                </figcaption>
              </figure>
              </article>
           </section>
        </main>
     );
}
 
export default Transform;