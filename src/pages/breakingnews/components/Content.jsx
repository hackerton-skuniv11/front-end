import classes from '../css/Content.module.css';
import pic from '../../img/짱구.jpg'
import { useNavigate } from 'react-router-dom';

function Content({ content, img, time }) {
    const navi = useNavigate();
    const clickHandler = () => {
        navi('/BreakingNews/1');
    }

    return (
        <div className={classes.container} onClick={clickHandler}>
            <div className={classes.intro}>
                <div className={classes.region}>
                    <h3>중계2동</h3>
                    <div className={classes.regiontime}>
                        <p className={classes.regioninfo}>중계2동</p>
                        <p className={classes.timeinfo}>{time}</p>
                    </div>
                </div>
                <div>
                    <p>{content}</p>
                </div>
            </div>
            <div className={classes.pic}>
                <img src={`${img}`} />
            </div>
        </div>
    );

}

export default Content;