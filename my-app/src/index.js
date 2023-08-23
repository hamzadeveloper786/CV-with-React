import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
import image from'./cv.jpeg'
<style>
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;200;300;400;500;600;700&family=Open+Sans:wght@300;500;600;700;800&display=swap');
</style>
function Hi() {
  return <div>
    <div class="container">
      <img src={image} alt="Pic" width="200px" height="250px"/>
    <h1>Ameer Hamza</h1>
    <p>ABC Building Street 4 XYZ Area Karachi Sindh</p>
    <p><b> Contact: +92 333 3737701</b></p>
    <p><b>E-mail: hamzadeveloper012@gmail.com</b></p>
  </div>
<h2>Objective</h2>
<p>	Creative and forward-thinking Front End Developer creates cutting-edge ebsites and applications for high-profile clients with challenging demands and visions. Skilled project manager, team leader and analytical problem-solver with top-notch organizational, schedulling and code verification skills. Expertise in, HTML, CSS and JAVASCRIPT scripting.</p>
<h2>Personal Information</h2>
<table>
    <tr>
        <td>Father Name:</td>
        <td>Abdul Rasheed</td>
    </tr>
    <tr>
        <td> Gender:</td>
        <td>Male</td>
    </tr>
    <tr>
        <td>Date of Birth:</td>
        <td> 03-08-2005</td>
    </tr>
    <tr>
        <td>Nationality:</td>
        <td>Pakistani</td>
    </tr>
    <tr>
        <td>Religion:</td>
        <td>Islam</td>
    </tr>
    <tr>
        <td>Martial Status:</td>
        <td>Single</td>
    </tr>
</table>
<h2>Skils</h2>
<ul>
  <li>Frontend Developer</li>
  <li>AJAX</li>
  <li>ES6</li>
  <li>Git Hub</li>
  <li>Problem Solving</li>
</ul>
<h2>Educational Profile</h2>
<ol>
    <li>Matriculation from Oxford Grammar Secondary School</li>
</ol>
<h2>Languages</h2>
<ol>
    <li>English</li>
    <li>Urdu</li>
</ol>
<h2>Reference</h2>
<p>Will be furnished on your demand.</p>
<h2>For Connected With Me!</h2>
<p><b><a href="https://github.com/hamzadeveloper786/">GitHub</a></b></p>
<p><b><a href="https://www.linkedin.com/in/ameer-hamza-8a34ba27b">LinkedIn</a></b></p>
<p><b><a href="https://wa.me/+923333737701?text=I'm%hiring%you%as%a%Frontend%Developer.">Whatsapp</a></b></p>
</div>
}
ReactDOM.render(<Hi/>, document.querySelector('#root'));