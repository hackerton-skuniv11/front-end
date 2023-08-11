import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import classes from './css/BreakingNews.module.css';
import Main from '../breakingnews/components/Main';
import Report from '../components/Report';


function BreakingNews() {
    let showReport = useSelector(state => state.show.reportshow);

    return (
        <div className={classes.container}>
            <Main />
            <Link
                to='/writebreakingnews'
                className={classes.writebtn}
            >
                <p>글쓰기</p>
            </Link>
            {showReport ? <Report /> : undefined}
        </div>
    );
}

export default BreakingNews;