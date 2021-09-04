import React, { Component } from 'react';
import { Link } from 'react-router-dom';
function Banner_Profile() {
    return (
        <div className="row ">
            <div className="medium-12 columns">
                <section id="banner-pro" class="banner">
                    <div class="bg-color-journal">
                        <nav class="navbar navbar-default navbar-fixed-top">
                            <div class="container">
                                <div class="col-md-12">
                                    <div class="navbar-header">
                                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                        </button>
                                        <a class="navbar-brand" href="#"><img src="img/logo.png" class="img-responsive" style={{ width: '140px', marginTop: '-16px' }} /></a>
                                    </div>
                                    <div class="collapse navbar-collapse navbar-right" id="myNavbar">
                                        <ul class="nav navbar-nav">
                                            <li class=""><a href="/">Home</a></li>
                                            <li class=""><a href="/Journal">The Journal</a></li>
                                            <li class=""><a href="/Checklist">Daily Checklist</a></li>
                                            <li class=""><a href="#testimonial">Mood State</a></li>
                                            <li class="active"><a href="/Profile">Your account</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </nav>
                        <div class="container">
                            <div class="row">
                                <div class="banner-info">
                                    <div class="banner-logo text-center">
                                        <img src="img/logo.png" class="img-responsive" />
                                    </div>
                                    <div class="banner-text text-center">
                                        <h1 class="white">Your Profile</h1>
                                        <h3 class="white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <br />tempor incididunt ut labore et dolore magna aliqua.</h3>
                                    </div>
                                    <div class="overlay-detail text-center">
                                        <a href="#service"><i class="fa fa-angle-down"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
export default Banner_Profile;