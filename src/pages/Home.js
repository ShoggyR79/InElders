import React, { Component } from 'react';
import Members from './Members';
function Home() {
    return (
        <div className="row ">
            <div className="medium-12 columns">
                <section id="service" class="section-padding">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4 col-sm-4">
                                <h2 class="ser-title">About us</h2>
                                <hr class="botm-line" />
                                <p>WE ARE HERE FOR YOU-THE ELDERS. We cherish every momment of seeing you feeling happy and hoping to making a small universe for your own in this website. We aim to assist the elders in selfcare of mental wellness, to get rid of anxiety disorder and depression during this pandemic.</p>
                            </div>
                            <div class="col-md-4 col-sm-4">
                                <div class="service-info">
                                    <div class="icon">
                                        <i class="fa fa-stethoscope"></i>
                                    </div>
                                    <div class="icon-info">
                                        <h4>24 Hour Support</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                                <div class="service-info">
                                    <div class="icon">
                                        <i class="fa fa-ambulance"></i>
                                    </div>
                                    <div class="icon-info">
                                        <h4>Emergency Services</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-4">
                                <div class="service-info">
                                    <div class="icon">
                                        <i class="fa fa-user-md"></i>
                                    </div>
                                    <div class="icon-info">
                                        <h4>Medical Counseling</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                                <div class="service-info">
                                    <div class="icon">
                                        <i class="fa fa-medkit"></i>
                                    </div>
                                    <div class="icon-info">
                                        <h4>Premium Healthcare</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="about" class="section-padding">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-3 col-sm-4 col-xs-12">
                                <div class="section-title">
                                    <h2 class="head-title lg-line"> Our mission</h2>
                                    <hr class="botm-line" />
                                    <p class="sec-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</p>
                                    <a href="" className={{ color: '#0cb8b6', paddingTop: '10px' }}>Know more..</a>
                                </div>
                            </div>
                            <div class="col-md-9 col-sm-8 col-xs-12">
                                <div className={{ visibility: 'visible' }} class="col-sm-9 more-features-box">
                                    <div class="more-features-box-text">
                                        <div class="more-features-box-text-icon"> <i class="fa fa-angle-right" aria-hidden="true"></i> </div>
                                        <div class="more-features-box-text-description">
                                            <h3>It's something important you want to know.</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et. Ut wisi enim ad minim veniam, quis nostrud.</p>
                                        </div>
                                    </div>
                                    <div class="more-features-box-text">
                                        <div class="more-features-box-text-icon"> <i class="fa fa-angle-right" aria-hidden="true"></i> </div>
                                        <div class="more-features-box-text-description">
                                            <h3>It's something important you want to know.</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et. Ut wisi enim ad minim veniam, quis nostrud.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Members />
        </div>
    );
}
export default Home;
