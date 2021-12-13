import React, { Component } from 'react';
import lajupic from '../pic/lajupic.jpg'

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={lajupic} alt="Akra Davidson Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>I am a passionate programmer with an unending desire to learn, I am a great team player and
               with my level of diligence and determination I will see every project to completion.
            </p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>Akra Davidson</span><br />
						   <span>+2348129534228</span><br />
                     <span>davidsonakra@gmail.com</span>
					   </p>
               </div>
               <div className="columns download">
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
