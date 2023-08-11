import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addComment } from '../../../redux/comment';
import { showComment } from '../../../redux/show';
import classes from '../css/Write.module.css';

import idpic from '../../img/아이디사진.png';
import pwdpic from '../..//img/비밀번호사진.png';

function Write(props) {
    const [name, setname] = useState();
    const [pwd, setPwd] = useState();
    const [text, setText] = useState();
    const comment = useSelector(state => state.comment)
    const dispatch = useDispatch();

    const getIdHandler = (e) => {
        setname(e.target.value);
    };

    const getPwdHandler = (e) => {
        setPwd(e.target.value);
    };

    const getTextHandler = (e) => {
        setText(e.target.value);
    };




    const sbmHandler = (e) => {
        const newcomment = {
            index: Math.random(),
            id: name,
            content: text
        }
        e.preventDefault();
        dispatch(addComment(newcomment))
        dispatch(showComment());
        console.log(comment);
    };

    return (
        <div className={classes.container}>
            <form className={classes.form}

            >
                <div className={classes.input}>
                    <label htmlFor='name'><img src={idpic} className={classes.writeimg} /></label>
                    <input
                        type='text'
                        id='name'
                        placeholder='이름'
                        onChange={getIdHandler}
                    />
                </div>
                <div className={classes.input}>
                    <label htmlFor='pwd'><img src={pwdpic} className={classes.writeimg} /></label>
                    <input
                        type='password'
                        id='pwd'
                        placeholder='비밀번호'
                        onChange={getPwdHandler}
                    />
                </div>
                <div className={classes.input}>
                    <label htmlFor='content'></label>
                    <textarea
                        type='text'
                        id='content'
                        rows='10'
                        cols='33'
                        placeholder='내용을 입력해주세요.'
                        onChange={getTextHandler}
                    />
                </div>
                <div className={classes.sbmbtncontainer}>
                    <button onClick={sbmHandler} className={classes.sbmbtn}
                    >게시</button>
                </div>
            </form>
        </div>
    );
}

export default Write;