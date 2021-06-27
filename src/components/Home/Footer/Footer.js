import React from "react";
import "./Footer.css";
import Facebook from "../../../Images/Facebook_f_logo_(2019).svg";
import Instagram from "../../../Images/ins.jpg";
import Twitter from "../../../Images/twitter2.png"
const Footer = () => {
  return (
    <footer class="page-footer container pt-4">
      <div class="container-fluid  text-center text-md-left">
        <div class="row">
          <div class="col-md-6 mt-md-0 mt-3 text-secondary">
            <h5 class="text-uppercase">Quick Links</h5><br></br>
            <p class='text-lg font-weight-bold'>F.A.Q.S</p>
            <p class='text-lg font-weight-bold'>Support</p>
            <p class='text-lg font-weight-bold'>Sitemap</p>
            <p class='text-lg font-weight-bold'>Community</p>
          </div>
          <hr class="clearfix d-md-none pb-3"></hr>
          <div class="col-md-3 mb-md-0 mb-3">
            <h5 class="text-uppercase text-white mr-3">subscribe</h5>

            <ul class="list-unstyled mt-5">
              <li>
                <a href="https://www.facebook.com/"><img src={Facebook} style={{width: '40px',float: 'left',padding:'5px'}}  alt="facebook"></img></a>
              </li>
              <li>
                <a href="https://www.instagram.com/"><img src={Instagram} style={{width: '40px',float: 'left',padding:'5px'}}  alt="instagram"></img></a>
              </li>
              <li>
                <a href="https://twitter.com/"><img src={Twitter} style={{width: '40px',padding:'5px'}}  alt="twitter"></img></a>
              </li>
               
            </ul>
          </div>
          <div class="col-md-3 mb-md-0 mb-3 ">
            <h5 class="text-uppercase text-white ">contact us</h5><br></br>

            <ul class="list-unstyled">
              <li>
                <a href="#!" class="text-lg text-white font-weight-bold text-decoration-none">Comilla, Bangladesh</a>
              </li><br></br>
              <li>
                <a href="#!" class="text-lg text-white font-weight-bold text-decoration-none">shahriarshafi@gmail.com</a>
              </li><br></br>
              <li>
                <a href="#!" class="text-lg text-white text-decoration-none font-weight-bold">+88-01782265619</a>
              </li>
            </ul>
          </div>
         
        </div>
      </div>
      <div class="footer-copyright text-center text-white py-3">
            © 2021 Copyright:
            <a href="https://www.facebook.com/shahriarrubaiyat.shafi" class="text-blue hover:text-blue text-decoration-none">Shahriar Rubiat</a>
          </div>
    </footer>
  );
};

export default Footer;
