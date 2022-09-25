import React from 'react';
import ReactPlayer from 'react-player'

const video = () => {
    return(
        <section className="video_area bg_color sec_pad">
            <div className="container">
                <div className="video_content">
                    <div className="video_info">
                        {/* <div className="ovarlay_color"></div> */}
                        {/* <video className="popup-youtube video_icon" href="https://www.youtube.com/watch?v=sU3FkzUKHXU"><i className="arrow_triangle-right"></i></video> */}
                        <ReactPlayer url='https://www.youtube.com/watch?v=Qm-9TbW_OvY' />
                    </div>
                    <img className="video_leaf" src={require('../img/new/leaf.png')} alt=""/>
                    <img className="cup" src={require('../img/new/cup.png')} alt=""/>
                </div>
            </div>
        </section>
    )
}

export default video;
