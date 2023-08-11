import { useLocation, useNavigate } from 'react-router-dom';

import classes from '../css/Content.module.css';
import pic1 from '../../img/실시간 재난 속보.png';
import pic2 from '../../img/대피소1 2.png';
import pic3 from '../../img/안전행동요령.png';

function Content() {
    const nav = useNavigate();
    const changePageHandler = () => {
        nav('/breakingnews')
    };

    return (
        <div className={classes.container}>
            <div
                className={classes.contentbox}
                onClick={changePageHandler}
            >
                <div className={classes.textbox}>
                    <p className={classes.title}>실시간 재난 상황</p>
                    <p className={classes.intro}>시민들이 알려주는 실시간 상황</p>
                </div>
                <img src={pic1} />
            </div>

            <div className={classes.contentbox}>
                <div className={classes.textbox}>
                    <p className={classes.title}>대피소 찾기</p>
                    <p className={classes.intro}>가까운 대피 시설은??</p>
                </div>
                <img src={pic2} />
            </div>
            <div className={classes.contentbox}>
                <div className={classes.textbox}>
                    <p className={classes.title}>안전 행동 요령</p>
                    <p className={classes.intro}>우리 스스로 안전을 지키는 법!</p>
                </div>
                <img src={pic3} />
            </div>
        </div >
    );
}

export default Content