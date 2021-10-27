import React from 'react';
import './faqs.scss';
const Faqs = () => {
    return (
        <>
            <section className="main-faqs ptb" id="faqs">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="inner-content text-center ptb20">
                                
                                <h3 className="common">Frequently Asked Questions</h3>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12">
                            <div className="inner-side ptb20">
                                <div id="accordion">
                                    <div className="card">
                                        <div className="card-header" id="headingOne">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    <h5>01. Will there be an NFT Marketplace? What features will it hold?</h5>
                                                </button>
                                            </h5>
                                        </div>

                                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                            <div className="card-body">
                                            Yes, an NFT Marketplace is a prominent feature of our forecasted roadmap. The NFT Ecosystem will come with the following:
                                            <ul>
                                                <li>
                                                ·   Creating Zono NFT
                                                </li>
                                                <li>
                                                ·   Trading and Staking with Zono Swap tokens
                                                </li>
                                                <li>
                                                ·   Minting
                                                </li>
                                                
                                            </ul>
                                           </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingTwo">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    <h5>02 What are the plans for liquidity?</h5>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                            <div className="card-body">
                                            About liquidity, you can add tokens to liquidity pools and receive LP tokens in rewards. It’s one way you can earn on Zono Swap
                                            Liquidity will be locked and certified by Rug Doc.<a className="" href="#"> https://rugdoc.io/</a>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingThree">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    <h5>03 How much will ZonoSwap cost in the future?</h5>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                            <div className="card-body">
                                            Although the future costs depend on the market, our extensive marketing plans are sure to boost the price. Late 2021 will also mark the listing of Zono Coin on major exchanges like PancakeSwap and CEX exchanges like Bitmart and KuCoin. Moreover, due to the limited supply of the coin, its value and ultimately price is bound to increase.
                                           </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingfour">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                                                    <h5>04 Will you be expanding in the future?</h5>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapsefour" className="collapse" aria-labelledby="headingfour" data-parent="#accordion">
                                            <div className="card-body">
                                            Yes, we do have plans to expand our ecosystem by moving towards much famous blockchains like Ethereum and Polygon (Matic), etc. Apart from that, we’ll also be expanding to more services and users as well.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingfive">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
                                                    <h5>05 Are there any plans for Prizes and Lottery?</h5>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapsefive" className="collapse" aria-labelledby="headingfive" data-parent="#accordion">
                                            <div className="card-body">
                                            Prizes are our most prominent feature, you’ll get to earn free tokens at different stages. For example, you’ll get free Zono Swap tokens on every trade and by staking LP tokens in farms. We’ll also be adding Zono Swap lottery in the later phases of the project.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Faqs;
