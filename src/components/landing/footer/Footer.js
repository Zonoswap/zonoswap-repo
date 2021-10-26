import React from 'react';
import './footer.scss';
const Footer = () => {
    return (
        <>
            <section className="main-footer ptb">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-2">
                            <div className="inner-logo">
                                <a className="" href="/">
                                    <img src="\zono-assets\header\logo.png" alt="" className="img-fluid" />
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <div className="inner-icon text-center">
                                {/* <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <a className=""  target="_blank">
                                        HOME
                                        </a>

                                    </li>
                                    <li className="list-inline-item">
                                        <a className="" target="_blank">
                                        ABOUT US
                                        </a>

                                    </li>
                                    <li className="list-inline-item">
                                        <a className="" target="_blank">
                                        WHY US
                                        </a>

                                    </li>
                                    <li className="list-inline-item">
                                        <a className=""  target="_blank">
                                       ROADMAP
                                        </a>

                                    </li>
                                    <li className="list-inline-item">
                                        <a className=""  target="_blank">
                                        TEAM
                                        </a>

                                    </li>
                                    <li className="list-inline-item">
                                        <a className=""  target="_blank">
                                        FAQS
                                        </a>

                                    </li>
                                </ul> */}
                            </div>
                        </div>

                        <div className="col-sm-2 text-right">
                            <div className="inner-logo">
                                <a className="white" >
                                    BACK TO TOP
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="rights ptb20">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-10">
                            <div className="inner-rights">
                                <p className="white">© 2021 ZonoSwap, All Rights Reserved</p>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="inner-rights text-right">
                                <a className="white">Term & Conditions</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer;
