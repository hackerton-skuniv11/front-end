import { useRef, useState } from 'react';

import classes from '../css/Input.module.css';
import photo from '../../img/카메라 사진.jpg';

function Input() {
    const imgRef = useRef();
    const [imgFile, setImgFile] = useState('');

    const saveImgFileHandler = (e) => {
        if (imgRef.current.files.length > 3) {
            alert('3개만 가능합니다.');
            return;
        } else {
            let fileArr = e.target.files;
            let fileURls = [];
            let file;
            for (let i = 0; i < 3; i++) {
                file = fileArr[i];

                const reader = new FileReader();
                reader.onloadend = () => {
                    fileURls[i] = reader.result;
                    setImgFile([...fileURls]);
                };
                reader.readAsDataURL(file);
                console.log(fileURls);
            }
        };
    };

    const submitHandler = (event) => {
        console.log(imgFile);
        event.preventDefault();
    };

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <h1>글쓰기</h1>
            </div>
            <form onSubmit={submitHandler}>
                <div className={classes.inputtitle}>
                    <label htmlFor='title'>제목</label>
                    <input type='text' id='title' />
                </div>
                <div className={classes.inputtitle}>
                    <label htmlFor='title'>위치</label>
                    <input type='text' id='title' />
                </div>
                <div className={classes.inputtitle}>
                    <label htmlFor='title'>내용을 입력해주세요</label>
                    <textarea id='title' rows='10' cols='33'></textarea>
                </div>
                <div className={classes.inputphoto}>
                    <label htmlFor='photo' className={classes.up} >
                        {
                            imgFile ?
                                <div className={classes.imgprecon}>
                                    {imgFile.map((img, id) => (
                                        <img src={img} key={id} className={classes.imgpre1} />
                                    ))}
                                </div>
                                :
                                <img src={photo} className={classes.imgpre} />
                        }
                    </label>
                    <input
                        type='file'
                        id='photo'
                        accept='image/*'
                        ref={imgRef}
                        onChange={saveImgFileHandler}
                        className={classes.photo}
                        multiple
                    />
                    <button className={classes.submitBtn}>완료</button>
                </div>

            </form>
        </div>
    );
}

export default Input;