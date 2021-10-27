import React from 'react';
import './community.scss';
const Community = () => {
    return (
        <>
            <section className="community ptb" id="community">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 main-tile1 p-0"></div>
                        <div className="col-sm-6 p-0 ">
                            <div className="main-tile1 ptb20 text-center">
                                <h3 className="common ptb20">Join the ZonoSwap Community</h3>
                                <p className="white">Excited about joining us on this crypto ride? Join our official community and do follow our social channels for continuous updates and news.</p>
                                <div className="input-group mb-3 ptb20">
                                    <input type="text" className="form-control" placeholder="zonoswap@gmail.com" aria-label="Enter your email" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <a className="btn-common" href="mailto:zonoswap@gmail.com">
                                            Submit
                                        </a>
                                    </div>
                                </div>

                                <ul className="list-inline ptb20">
                                    <li className="list-inline-item">
                                        <a className="" target="_blank" href="https://t.me/zonoswap">
                                        <img src="\zono-assets\social-icons\telegram-icon.svg" className="img-fluid img" alt="" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="" target="_blank" href="https://twitter.com/ZonoSwap">
                                        <img src="\zono-assets\social-icons\twitter-icon.svg" className="img-fluid img" alt="" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="" target="_blank" href="https://www.instagram.com/zonoswap/">
                                        <img src="\zono-assets\social-icons\instagram-icon.svg" className="img-fluid img" alt="" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="" target="_blank" href="https://zonoswap.gitbook.io/zonoswap/">
                                        <img src="\zono-assets\social-icons\gitbook-icon.svg" className="img-fluid img" alt="" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="" target="_blank" href="https://www.facebook.com/Zonoswap">
                                        <img src="\zono-assets\social-icons\facebook-icon.svg" className="img-fluid img" alt="" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-3 main-tile1 p-0"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Community;
