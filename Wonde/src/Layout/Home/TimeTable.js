import './TimeTable.css';
import picture1 from '../../Asset/ControlSchool/TimesTablesRockStars-FI1@2x.webp';
const TimeTable = (props) => {
    const title =props.title;
    return ( 
        <div className="time-table">
           <div>
           <h3>
            <q>we love working with Wonde.Both our Costomer and TTRockStars are treaded
                really well.The team at Wonde have excellent technical support and ticketing system 
                in place which are managed realy well
            </q>
            </h3>
            <p>Times Tables Rock Stars</p>
            <div>{title}</div>
           </div>
            
            <img src={picture1}></img>
        </div>
     );
}
 
export default TimeTable;