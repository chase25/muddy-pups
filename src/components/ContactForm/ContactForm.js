import React, { Component } from 'react';
import './form.js';
import './ContactForm.css';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    console.log('errorred');
    const msg = {
      to: 'ffloyd2000@gmail.com',
      from: 'info@muddy-pups.co.uk',
      subject: 'Sending with SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };

    sgMail.send(msg);
  }
  render() {
    return (
      <section className="ContactForm" id="contact">
        <div className="inner">
          <h2>Contact us</h2>
          <form onSubmit={this.handleSubmit}>
            <fieldset>
              <legend>To contact us please fill in the form below:</legend>
              <div className="formRow">
                <div className="labelCol">
                  <label htmlFor="yourName">Name:</label>
                </div>
                <div className="inputCol">
                  <input type="text" name="yourName" id="yourName" placeholder="Your name" />
                </div>
              </div>
              <div className="formRow">
                <div className="labelCol">
                  <label htmlFor="yourTel">Your telephone number:</label>
                </div>
                <div className="inputCol">
                  <input type="text" name="yourTel" id="yourTel" placeholder="Your telephone number" />
                </div>
              </div>
              <div className="formRow">
                <div className="labelCol">
                  <label htmlFor="yourEmail">Your email address:</label>
                </div>
                <div className="inputCol">
                  <input type="text" name="yourEmail" id="yourEmail" placeholder="Your email address" />
                </div>
              </div>
              <div className="formRow">
                <div className="labelCol">
                  <label htmlFor="yourMessage">Your message:</label>
                </div>
                <div className="inputCol">
                  <textarea name="yourMessage" id="yourMessage" placeholder="Your message"></textarea>
                </div>
              </div>
              <div className="formRow">
                <div className="labelCol">
                  <label htmlFor="yourDog">Your dog:</label>
                </div>
                <div className="inputCol">
                  <input type="file" name="yourDog" id="yourDog" placeholder="Your dog" />
                </div>
              </div>
              <div className="buttonRow">
                <button type="reset" className="buttonReset">Reset</button>
                <button type="submit" className="buttonSubmit">Submit</button>
              </div>
            </fieldset>
          </form>
        </div>
      </section>
    )
  }
}

export default ContactForm;
