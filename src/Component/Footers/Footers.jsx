import React from 'react';
import './Footers.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="footer-item">
                            <h4>Contact us</h4>
                            <ul>
                                <li>ARV Park, HBlock, 42</li>
                                <li>New Noida, UP - 202001</li>
                                <li>Phone: +91 8785448345</li>
                                <li>E-mail: -business389@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="footer-item">
                            <h4>Services</h4>
                            <ul>
                                <li>snapod Buy on uus puno punovo</li>
                                <li>Bursos em sua esponjon zavő o ag og spypod</li>
                                <li>en su puno Buscos en oog os per aqua po</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="footer-item">
                            <h4>About u</h4>
                            <ul>
                                <li>We are an open and to a new Noida , UP - 202001 Address</li>
                                <li>Welcome to Snapod , a website where you can explore our services</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="footer-item">
                            <h4>Connect with us</h4>
                            <ul>
                                <li><a href="https://www.facebook.com/">Facebook</a></li>
                                <li><a href="https://www.instagram.com/">Instagram</a></li>
                                <li><a href="https://www.twitter.com/">Twitter</a></li>
                                <li><a href="https://www.linkedin.com/">LinkedIn</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;