import React from "react";
import adventureDaylightGirl from "./adventureDaylightGirl.jpg";

const Home = () => (
  <div>
    <h2>Body Header</h2>
    <p>Body Text</p>
    <ul>
      <li>List Item</li>
      <li>List Item</li>
    </ul>
    <blockquote>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel nisl
      vehicula, ultrices ipsum vel, faucibus est. Nullam posuere fermentum augue
      ut mollis. Maecenas sollicitudin vitae neque eu efficitur. In ultricies
      ante quis urna malesuada rutrum. Fusce magna libero, sagittis non lorem
      quis, bibendum lobortis ligula. Donec sagittis condimentum lorem ac
      placerat.
    </blockquote>
    <div className="stretch-image">
      <img src={adventureDaylightGirl} alt="Adventure Daylight Girl" />
    </div>
    <p>
      Mauris viverra, orci et tempus dapibus, augue urna euismod leo, et pretium
      orci urna non ex. Vestibulum ut nibh rutrum, ornare dolor ut, dictum
      sapien. Suspendisse posuere vitae sapien id venenatis. Maecenas posuere
      accumsan nulla, eget scelerisque lectus consectetur in. Nam blandit, dolor
      id sodales tempor, libero ante tempus sapien, a maximus turpis lectus quis
      lorem. Aliquam sed est vel felis sodales vehicula vitae ac tellus.
      Suspendisse dignissim est eleifend fringilla blandit. Morbi eu hendrerit
      sem. Nullam fermentum porta auctor. Nulla iaculis lectus nec justo
      vulputate maximus. Nulla facilisi. In mollis vestibulum purus, at porta mi
      blandit vitae. Suspendisse venenatis tempor nibh eu luctus. Duis bibendum
      felis bibendum, molestie eros eget, tincidunt nibh.
    </p>
    <p>
      Sed tristique, sem eu sodales viverra, risus metus vulputate massa, a
      vehicula nibh ligula vel massa. In gravida, mi sit amet pharetra gravida,
      est lectus porta quam, ac convallis metus turpis nec dolor. Vestibulum id
      risus a arcu porttitor elementum. Sed eleifend elementum ante non
      bibendum. Mauris pulvinar, lectus et sollicitudin ornare, odio nisi semper
      leo, eu feugiat sem tortor at nulla. Duis vitae augue at ligula tristique
      imperdiet id et est. Aliquam erat volutpat. Ut pulvinar venenatis luctus.
      Mauris dignissim dictum nisi.
    </p>
  </div>
);

export default Home;
