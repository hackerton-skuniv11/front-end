import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showComment } from '../../../redux/show';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import pic1 from '../../img/짱구.jpg';
import pic2 from '../../img/카메라 사진.jpg';
import pic3 from '../../img/실시간 재난 속보.png'
import classes from '../css/Content.module.css';
import 'swiper/css';
import 'swiper/css/pagination';
import Write from './Write';



function Content({ showHandler }) {
    const commentDummy = useSelector((state) => state.comment);
    const dispatch = useDispatch();
    const [comment, setComment] = useState(commentDummy);


    return (
        <div className={classes.container}>
            <div className={classes.box}>
                <div className={classes.region}>
                    <h3>중계 2동 현재상황</h3>
                </div>
                <div className={classes.region2}>
                    <p>노원구 중계 2동</p>
                </div>
                <div className={classes.swipercon}>
                    <Swiper
                        pagination={true}
                        modules={[Pagination]}
                    >
                        <SwiperSlide className={classes.swiperslide}>
                            <img src={pic1} className={classes.contentimg} />
                        </SwiperSlide>
                        <SwiperSlide className={classes.swiperslide}>
                            <img src={pic2} className={classes.contentimg} />
                        </SwiperSlide>
                        <SwiperSlide className={classes.swiperslide}>
                            <img src={pic3} className={classes.contentimg} />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className={classes.text}>
                    <p>지금 물난리 났네요 조심하세요!</p>
                </div>
                <div>
                    <div className={classes.commentline}>
                        <p>댓글</p>
                    </div>
                    {
                        comment.map((content) => <div key={content.id} className={classes.comment}>
                            <p className={classes.commentid}>{content.id}</p>
                            <p className={classes.commentcontent}>{content.content}</p>
                        </div>
                        )
                    }

                </div>
                <div >
                    <button className={classes.writebtn} onClick={() => dispatch(showComment())}>댓글 쓰기</button>
                </div>
            </div>
        </div>
    );
}

export default Content;