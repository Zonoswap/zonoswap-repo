import React from 'react';
import './about.scss';
const About = () => {
    return (
        <>
            <section className="main-about ptb">
                <div className="container">
                <div className="row">
                        <div className="col-sm-6">
                            <div className="inner-img text-center">
                            <img src="\zono-assets\about-us\about-us.png" className="img-fluid" alt="" />
                           </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="inner-content  ptb">
                                <h6 className="common">About ZonoSwap</h6>
                                <h2 className="white ptb20  ">About ZonoSwap</h2>
                                <p className=" white">Zono Swap is a powerful decentralized exchange platform on Binance Smart Chain with the main aim to facilitate the crypto users all around. Providing the best blockchain and crypto solutions, Zono Swap is an ever-expanding crypto portal. Talk of crypto trading, staking, lending/borrowing, an all-in-one NFT marketplace and a lot more crypto tech, Zono Swap has the ability to cater all your crypto needs.</p>
                                <p className="ptb20 white">Here at Zono Swap, we have a diligent team of professionals who’s always working to create new and latest crypto products and constantly revise or update the previous ones. Come join us in this crypto journey as together we can create wonders.</p>
                               
                             
                            
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default About;
