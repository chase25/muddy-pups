import React, { Component } from 'react';
import './PuppyPacks.css';

class PuppyPacks extends Component {
  render() {
    return (
      <section className="PuppyPacks" id="PuppyPacks">
        <div className="inner">
          <h2>Puppy Grooming</h2>
          <p>At Muddy Pups we are more than happy to introduce puppies to being groomed and love nothing more than being able to sneak a quick cuddle too.</p>
          <p>To prevent your puppy picking up any unwanted illnesses as a precaution we will not accept any puppies who have not yet had their second injection.</p>
          <h3>What we do</h3>
          <p><strong>1st visit</strong> - This visit is more of a 30 minute introduction to the groomers, we provide a little clean up but will not bath your puppy as it is more of a gradual introduction to get them used to the environment.</p>
          <p><strong>2nd visit</strong> - On the second visit we introduce your puppy to being bathed and using the dryer, as the dryer itself can easily scare your pup we don&apos;t do anything on this visit other than a wash and dry.</p>
          <p><strong>3rd visit</strong> - Lets be honest and say this is where the magic begins to happen, we combine visits 1 and 2 and return to you a wonderfully cuddly and sparkly puppy for your family to love and adore.</p>
          <p>So that your puppy doesn&apos;t forget the lessons learned we recommend that you leave it no longer than a month between visits.</p>
        </div>
      </section>
    )
  }
}

export default PuppyPacks;
