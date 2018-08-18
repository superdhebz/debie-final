// me.js

import React, { Component } from 'react';
import img from './logo1.JPG';
import heroimg from './bags-beauty-blonde-hair-994197.jpg';

export default class me extends Component {

    render() {
        return (
            <div>
                <div class="row">   
                    <div class="col-sm-4" align="center">
                    <h2>
                        <br/>
                        <br/>
                        <img src={img} style={{width: '150px', height: '150px'}}/>
                        <h1 class="headerfont" align="center">PURE App - USER IS LOGGED IN</h1>
                        <br/>
                        <p align="center">Your easiest way to get the latest deals from your favorite choice of  
                        <span id="entertainment"> entertainment</span>, 
                        <span id="food"> food</span>, 
                        <span id="clothing"> clothing</span>, and 
                        <span id="more"> more!</span></p>
                        </h2>   
                        <br/> 
                    </div>

                    <div class="col-sm-8" align="center">
                        <img src={heroimg} style={{width: '800px', height: '500px'}}/>
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-3"></div>
                        <div class="col-sm-7">
                            <h2>with PURE, you can:</h2>
                            <ul class="benefitslist">
                                <li>Pick your interests and get personalized recommendations tailored for you!</li>
                                <li>Save time by not having to visit each store to find what you need.</li>
                                <li>Be in the know with the latest entertainment in cinemas near you.</li>
                                <li>Get latest deals that are tailored for you!</li>
                            </ul>
                        </div>  
                </div>
            </div>
        );
    }
}
/*
<p className="lead">
<button onClick={this.Register} className="btn btn-lg btn-secondary">REGISTER NOW</button>
</p>  
*/

