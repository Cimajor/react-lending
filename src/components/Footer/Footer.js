import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import Reveal from 'react-reveal/Reveal'
import Mailchimp from 'react-mailchimp-form'
class Footer extends Component {
    render(){
        let FooterData = this.props.FooterData;
        return(
            <footer className="new_footer_area bg_color" id="contact-us">
                <div className="new_footer_top">
                    <div className="container">
                        <div className="row">
                            {
                                FooterData.CompanyWidget.map(widget=>{
                                    return(
                                        <Reveal effect="fadeInLeft" duration={500} key={1}>
                                            <div className="col-lg-3 col-md-6" >
                                                <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s">
                                                    <h3 className="f-title f_600 t_color f_size_18">{widget.title}</h3>
                                                    <p>{widget.description}</p>
                                                    {/* <form action="#" className="f_subscribe_two mailchimp" method="post">
                                                        <input type="text" name="EMAIL" className="form-control memail" placeholder="Email"/>
                                                        <button className="btn btn_get btn_get_two" type="submit">Subscribe</button>
                                                        <p className="mchimp-errmessage" style={{display: "none"}}></p>
                                                        <p className="mchimp-sucmessage" style={{display: "none"}}></p>
                                                    </form> */}
                    <Mailchimp
                    action="https://gmail.us17.list-manage.com/subscribe/post?u=9008ba6ddb844a5084f6e1d7e&amp;id=29ad4515c9"
                    fields={[
                    {
                        name: 'EMAIL',
                        placeholder: 'Your Email',
                        type: 'email',
                        required: true
                    }
                    ]}
                    className='subscription-form'
                    />  
                                                </div>
                                            </div>
                                        </Reveal>
                                    )
                                })
                            }
                            {/* {
                                FooterData.AboutWidget.map(widget=>{
                                    return(
                                        <Reveal effect="fadeInLeft" duration={500} key={widget.id}>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s">
                                                <h3 className="f-title f_600 t_color f_size_18">{widget.title}</h3>
                                                <ul className="list-unstyled f_list">
                                                    {
                                                        widget.menuItems.map(item =>{
                                                            return(
                                                                <li key={item.id}><Link to="/">{item.text}</Link></li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                        </Reveal>
                                    )
                                })
                            } */}
                            {
                                FooterData.SocialLinks.map(widget=>{
                                    return(
                                        <>
                                        <Reveal effect="fadeInLeft" duration={500} key={widget.id}>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s">

                                                <h3 className="f-title f_600 t_color f_size_18">{widget.title}</h3>
                                                <div className="f_social_icon">
                                                    {
                                                        widget.menuItems.map(item =>{
                                                            return(
                                                                <a href={item.url} key={item.id}> 
                                                                    <i className={item.icon}>
                                                                    </i>
                                                                </a>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        </Reveal>
                                        </>
                                    )
                                })
                            }
                        </div>
                        
                    </div>
                    <div className="footer_bg">
                        <div className="footer_bg_one"></div>
                        <div className="footer_bg_two"></div>
                    </div>
                </div>
                <div className="footer_bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-sm-7">
                                <p className="mb-0 f_400">{FooterData.copywrite}</p>
                            </div>
                            <div className="col-lg-6 col-sm-5 text-right">
                                <p>Made with <i className="icon_heart"></i> <a href="/#">from Ukraine</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer;