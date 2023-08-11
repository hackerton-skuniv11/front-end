import classes from '../css/Content.module.css';
import pic from '../../img/짱구.jpg'
import { useNavigate } from 'react-router-dom';

function Content() {
    const navi = useNavigate();
    const clickHandler = () => {
        navi('/BreakingNews/1');
    }

    return (
        <div className={classes.container} onClick={clickHandler}>
            <div className={classes.intro}>
                <div className={classes.region}>
                    <h3>중계 2동 상황</h3>
                    <div className={classes.regiontime}>
                        <p className={classes.regioninfo}>중계2동</p>
                        <p className={classes.timeinfo}>8:00</p>
                    </div>
                </div>
                <div>
                    <p>물난리 ㅠㅠ</p>
                </div>
            </div>
            <div className={classes.pic}>
                <img src={pic} />
            </div>
        </div>
    );

}

export default Content;