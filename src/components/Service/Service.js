import React from 'react';
import SeoTitle from '../Title/SeoTitle';
import Fade from 'react-reveal/Fade';
import Mailchimp from 'react-mailchimp-form'

const Service = () => {
    return(
        <React.Fragment>
            <section id="inspiration" className="seo_service_area sec_pad">
                <div className="container">
                    <SeoTitle Title='The Goal' TitleP='Using open data and AI, schoolless analyzes all industries. It helps many people develop a new skill set to learn a new profession or grow in their current job by suggesting the right skills to learn or develop. In addition, you will save valuable time thanks to a dedicated, tailor-made learning plan. It will help you to avoid learning skills you will not use in your job!'/>
                    <div className="row seo_service_info">
                        {/* <Fade bottom duration={500}>
                            <div className="col-lg-4 col-md-6">
                                <div className="seo_service_item">
                                    <img src={require('../../img/seo/icon1.png')} alt=""/>
                                    <a href=".#">
                                        <h4>Step 1</h4>
                                    </a>
                                    <p></p>
                                    <a href=".#"><i className="arrow_right"></i></a>
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom duration={700} >
                            <div className="col-lg-4 col-md-6">
                                <div className="seo_service_item">
                                    <img src={require('../../img/seo/icon2.png')} alt=""/>
                                    <a href=".#">
                                        <h4>Step 2</h4>
                                    </a>
                                    <p>Twit cras excuse my French matie boy grub it's all gone to pot off his nut butty horse play blow off pardon you hanky panky.!</p>
                                    <a href=".#"><i className="arrow_right"></i></a>
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom duration={1000}>
                            <div className="col-lg-4 col-md-6">
                                <div className="seo_service_item">
                                    <img src={require('../../img/seo/icon5.png')} alt=""/>
                                    <a href=".#">
                                        <h4>Step 3</h4>
                                    </a>
                                    <p>Twit cras excuse my French matie boy grub it's all gone to pot off his nut butty horse play blow off pardon you hanky panky.!</p>
                                    <a href=".#"><i className="arrow_right"></i></a>
                                </div>
                            </div>
                        </Fade> */}
                        {/* <div className="col-lg-12 text-center mt_40">
                            <a href=".#" className="seo_btn seo_btn_one btn_hover">All Features</a>
                        </div> */}
                    </div>
                </div>
                {/* <div className='blur'/>
                <div className='modal-container'>
                <div className='subscribe-popup'>
                <Mailchimp
                    action="https://gmail.us17.list-manage.com/subscribe/post?u=9008ba6ddb844a5084f6e1d7e&amp;id=29ad4515c9"
                    fields={[
                    {
                        name: 'EMAIL',
                        placeholder: 'Email',
                        type: 'email',
                        required: true
                    }
                ]}
                />  
                </div>
            </div> */}
            </section>
            <section id="features" className="seo_features_one sec_pad">
                <div className="container">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-6">
                            <div className="seo_features_img">
                                {/* <div className="round_circle"></div>
                                <div className="round_circle two"></div> */}
                                <img src={require('../../img/skills_diagram.png')} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <Fade bottom cascade>
                                <div className="seo_features_content">
                                    <h2>Artificial Intelligence will help you shape your skills to achieve your goals</h2>
                                    <p>With AI, we Analyze thousands of open profiles working in your industry and generate nodes of useful skills to learn</p>
                                    <h4>Such structure will let you:</h4>
                                    <div className="media seo_features_item">
                                        <div className="icon"><img src={require('../../img/seo/icon4.png')} alt=""/></div>
                                        <div className="media-body">
                                            <h3>Quickly enter any profession</h3>
                                            <p>You will be able to see the necessary skills in your chosen profession</p>
                                        </div>
                                    </div>
                                    <div className="media seo_features_item">
                                        <div className="icon two"><img src={require('../../img/seo/icon3.png')} alt=""/></div>
                                        <div className="media-body">
                                            <h3>Skills you need to learn to grow up</h3>
                                            <p>Find out skills that help you to progress in your work</p>
                                        </div>
                                    </div>
                                    <div className="media seo_features_item">
                                        <div className="icon three"><img src={require('../../img/seo/icon2.png')} alt=""/></div>
                                        <div className="media-body">
                                            <h3>Quick switch to another profession with better conditions</h3>
                                            <p>Explore which professions require a similar set of skills you have and which of these professions are most interesting for you</p>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
            <section className="seo_features_one sec_pad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="seo_features_img seo_features_img_two">
                                <div className="round_circle"></div>
                                <div className="round_circle two"></div>
                                <img src={require('../../img/dashboard3.png')} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                            <Fade bottom cascade>
                                <div className="seo_features_content">
                                    <h2 className="wow fadeInUp">Check out our dashboard to find all information about your dream job</h2>
                                    {/* <h6 className="wow fadeInUp">Based on anilized open data from different resources we are going to centralize all professional markets related information in one place:</h6> */}
                                    <p className="wow fadeInUp">We collect and analyze all related information about professional markets in one place</p>
                                    <div className="media seo_features_item">
                                        <div className="icon"><img src={require('../../img/pos/icon2.png')} alt=""/></div>
                                        <div className="media-body">
                                            <h3>Is the profession in high demand?</h3>
                                            <p>Check the trends and demand in the global career market</p>
                                        </div>
                                    </div>
                                    <div className="media seo_features_item">
                                        <div className="icon"><img src={require('../../img/seo/icon4.png')} alt=""/></div>
                                        <div className="media-body">
                                            <h3>How fast will your salary grow?</h3>
                                            <p>Set your salary expectations right! You can see visualized average salaries depending on region and years of experience</p>
                                        </div>
                                    </div>
                                    <div className="media seo_features_item">
                                        <div className="icon"><img src={require('../../img/pos/statistics.png')} alt=""/></div>
                                        <div className="media-body">
                                            <h3>Is my salary matching my skills and experience?</h3>
                                            <p>On Dashboard, You can compare your salary to the average salary of other specialists with the same years of experience</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
            <section className="seo_features_one sec_pad">
                <div className="container">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-6">
                            <div className="seo_features_img">
                                {/* <div className="round_circle"></div>
                                <div className="round_circle two"></div> */}
                                <img src={require('../../img/online_edu.png')} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <Fade bottom cascade>
                                <div className="seo_features_content">
                                    <h2>On Schoolless, You can share your preferable way to learn skills or find & follow someone's path</h2>
                                    <p>Find the most suitable way to explore needed skills</p>
                                    <div className="media seo_features_item">
                                        <div className="icon"><img src={require('../../img/seo/icon4.png')} alt=""/></div>
                                        <div className="media-body">
                                            <h3>All education sources are splited by types</h3>
                                            <p>Find the most suitable way to learn in the education section! It can be a book, online course, offline lessons in your region, or anything else, explore!</p>
                                        </div>
                                    </div>
                                    <div className="media seo_features_item">
                                        <div className="icon two"><img src={require('../../img/seo/icon3.png')} alt=""/></div>
                                        <div className="media-body">
                                            <h3>All courses will have a list of covered skill</h3>
                                            <p>Every source contains a list of covered skills. Keep focus and select the source that matches the skills you are looking for the best</p>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Service;
