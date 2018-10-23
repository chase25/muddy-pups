import React, { Component } from 'react';
import Accordion from '../Accordion/Accordion';
import './FAQs.css';
import questions from './FAQs.json'

class FAQs extends Component {
  render() {
		return (
      <section className="FAQs" id="faqs">
        <div className="inner">
  				{
  					questions.map((questions, index) => (
              <Accordion heading={questions.heading} content={questions.content} key={index} />
  					))
  				}
        </div>
      </section>
		)
	}
}

export default FAQs;
