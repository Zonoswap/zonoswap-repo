import React from 'react';
import './features.scss';
const Features = () => {
    return (
        <>
            <section className="main-stake ptb" id="whyus">
                <div className="container">
                    <div className="row">

                        <div className="col-sm-12">
                            <div className="main-tile1 text-center">
                                <h3 className="common ptb20">Why Choose ZonoSwap</h3>
                                <p className="white">ZonoSwap is the perfect choice if you’re looking for a DEX platform to perform all <br/> kinds of crypto tasks. Here’s why its quickly attracting a lot of attention and is making a mark in the crypto space.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row ptb20">

                        <div className="col-sm-4">
                            <div className="main-tile text-center">
                            <img src="\zono-assets\why-choose-us\icon-one.svg" className="img-fluid img" alt="" />
                                <h4 className="white  ptb20">Expanding Ecosystem</h4>
                                <p className="white ">Zono Swap is more than just a DEX platform, it’s a multifunctioning portal with all the latest crypto-related tech in one place. Having a powerful roadmap ahead, Zono Swap’s plans for the future are well sorted. We’re talking about NFT marketplace, Zono Gaming Card,on other blockchains like Ethereum etc.</p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="main-tile text-center">
                            <img src="\zono-assets\why-choose-us\icon-two.svg" className="img-fluid" alt="" />
                                <h4 className="white  ptb20">Crypto at Its Best</h4>
                                <p className="white ">Looking for a place to explore crypto at its best? With Zono Swap, you can trade, earn and win all at the same time. Another treat for your eyes is the low gas fees than other crypto exchange platforms. Moreover, its decentralized, so you have all the control on your cryptos. Also, earn and win free Zono tokens.</p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="main-tile text-center">
                            <img src="\zono-assets\why-choose-us\icon-three.svg" className="img-fluid" alt="" />
                                <h4 className="white  ptb20">Ultimate Security</h4>
                                <p className="white ">One thing that bothers crypto users is the security. In case of Zono Swap, all the smart contracts are openly visible and are verified on BSC Scan. Contracts are also verified through multi-sig, so that’s a plus point as well. Since it’s open-source, transparency is also guaranteed at its best.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features;
