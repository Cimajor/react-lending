import React, {useState} from 'react';
import StudySlider from '../components/StudySlider';
import SeoTitle from '../components/Title/SeoTitle';
import Testimonial from '../components/Testimonial/Testimonial';
import Fade from 'react-reveal/Fade'
import emailjs from '@emailjs/browser';

const Subscribe = (props) => {
        let [questionTest, setQuestionText] = useState("")
        let [email, setQuestionEmail] = useState("")

        const sendQuestion = (event) => {
            event.preventDefault();
            const contactParams = {
                form_name: "Contacted",
                form_email: email,
                message: questionTest
            };

            const data = {
                service_id: 'service_avdjfsf',
                template_id: 'template_grvit3i',
                user_id: 'user_HS7JdFxlVNng9yo2PCzKq',
                template_params: contactParams,
                accessToken: '1d90c0519421dc5eee2e1c539e9b5b0c'
            }

            fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer 1d90c0519421dc5eee2e1c539e9b5b0c',
            },
            body: JSON.stringify(data)
        })        
        .then((result) => {
            console.log(result.statusText);
        }, (error) => {
            console.log(error.statusText);
        });
        

        // event.target.reset();

            // emailjs.send('service_avdjfsf','template_grvit3i', 'user_HS7JdFxlVNng9yo2PCzKq', contactParams, '1d90c0519421dc5eee2e1c539e9b5b0c')
	        //     .then((response) => {
	        //     console.log('SUCCESS!', response.status, response.text);
	        // }, (err) => {
	        //     console.log('FAILED...', err);
	        // });
        }

        let FooterData = props.FooterData;
        return(
            <React.Fragment>
                <section className="seo_subscribe_area">
                    <div className="overlay_img"></div>
                    <div className="cloud_img"><img src={require('../img/seo/cloud.png')} alt=""/></div>
                    <div className="container">
                        <SeoTitle Title="Contact Us" TitleP="Please leave your contacts us, and we will contact you back as fast as possible"/>
                        <form action="#" onSubmit={sendQuestion} className="row seo_subscribe_form">
                            <div className="input-group col-lg-5 col-md-5 col-sm-6">
                                <input type="text" onChange={evt => setQuestionText(evt.target.value)} name="website" id="website" placeholder="Question" className="form-control"/>
                            </div>
                            <div className="input-group col-lg-5 col-md-4 col-sm-6">
                                <input type="email" onChange={evt => setQuestionEmail(evt.target.value)} name="email" id="emails" placeholder="Email" className="form-control"/>
                            </div>
                            <div className="input-group col-lg-2 col-md-3 col-sm-12">
                                <input type="submit" disabled={(email.length === 0 || questionTest.length === 0)} name="submit" value="Check" className="check-btn"/>
                            </div>
                        </form>
                    </div>
                </section>
                <section className="case_studies_area sec_pad">
                    <div className="container">
                        <SeoTitle Title="Our case studies" TitleP="The full monty burke posh excuse my French Richard cheeky bobby spiffing crikey Why gormless, pear shaped.!"/>
                        <StudySlider/>
                    </div>
                </section>
                {/* <section className="seo_fact_area sec_pad">
                    <div className="home_bubble">
                        <div className="bubble b_one"></div>
                        <div className="bubble b_three"></div>
                        <div className="bubble b_four"></div>
                        <div className="bubble b_six"></div>
                        <div className="triangle b_eight" data-parallax='{"x": 120, "y": -10}'><img src="img/seo/triangle_one.png" alt=""/></div>
                    </div>
                    <div className="container">
                        <SeoTitle Title='Over 1200+ completed work & Still counting.'/>
                        <div className="seo_fact_info">
                            <div className="seo_fact_item">
                                <div className="text">
                                    <div className="counter one">693</div>
                                    <p>Happy Clients</p>
                                </div>
                            </div>
                            <div className="seo_fact_item">
                                <div className="text">
                                    <div className="counter two">276</div>
                                    <p>Projects</p>
                                </div>
                            </div>
                            <div className="seo_fact_item">
                                <div className="text">
                                    <div className="counter three">102</div>
                                    <p>SEO Winners</p>
                                </div>
                            </div>
                            <div className="seo_fact_item last">
                                <div className="text">
                                    <div className="counter four">93</div>
                                    <p>Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                <Testimonial tClass="testimonial_area sec_pad" FooterData={FooterData}/>
                <section className="seo_call_to_action_area sec_pad">
                    <div className="container">
                        <div className="seo_call_action_text">
                            <h2>Ready to get started?<br/> lt's fast, free and very easy!</h2>
                            <a href="/" className="about_btn">Get a free Estimate</a>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
}

export default Subscribe;