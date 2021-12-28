import React, { useState } from 'react';
import './navbar.scss';
import { useWeb3React } from '@web3-react/core'
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
// import $ from "jquery";
// import WalletConnectProvider from "@walletconnect/web3-provider";
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
//  Create WalletConnect Provider
// const provider = new WalletConnectProvider({
//     infuraId: "27e484dcd9e3efcfd25a83a78777cdf1",
// });
const Navbar = () => {

    const { account } = useWeb3React();
    // console.log("account",account)
    const { login, logout } = useAuth();
    const connectwallet = () => {
        window.$("#exampleModalLong").modal('show');
    }
    const connectMetamask = () => {
        localStorage.setItem("connectorId", "injected")
        if (account) {
            logout()
        } else {
            login("injected")
        }
    }

    const trustWallet = async () => {
        localStorage.setItem("connectorId", "walletconnect")
        if (account) {
            logout()
        } else {
            login("walletconnect")
        }
    }

    return (
        <section className="main-navbar">
            <div className="container">
                <nav className="navbar ptb20 navbar-expand-lg">
                    <a className="navbar-brand" href="/">
                        <img src="\zono-assets\header\logo.png" className="img-fluid" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <div class="style-bar"></div>
                        <div class="style-bar"></div>
                        <div class="style-bar"></div>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            {/* <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <img src="\ebirdy\top-nav\home-icon.svg" className="img-fluid" alt="" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <img src="\ebirdy\top-nav\chart-icon.svg" className="img-fluid" alt="" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <img src="\ebirdy\top-nav\reddit-icon.svg" className="img-fluid" alt="" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <img src="\ebirdy\top-nav\twitter-icon.svg" className="img-fluid" alt="" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <img src="\ebirdy\top-nav\telegram-icon.svg" className="img-fluid" alt="" />
                                </a>
                            </li> */}
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                        <HashLink className="nav-link" to="#banner">
                                    HOME
                                </HashLink>
                                <HashLink className="nav-link" to="#aboutus">
                                    ABOUT US
                                </HashLink>
                                <HashLink className="nav-link" to="#whyus">
                                    WHY US
                                </HashLink>
                                <HashLink className="nav-link" to="#roadmap">
                                    ROADMAP
                                </HashLink>
                                {/* <HashLink className="nav-link" to="#faqs">
                                    FAQS
                                </HashLink> */}
                                <HashLink className="nav-link" to="#community">
                                    COMMUNITY
                                </HashLink>
                                <a className="nav-link" href='https://github.com/solidproof/smart-contract-audits/blob/main/SmartContract_Audit_Solidproof_ZONOSwap.pdf' target="_blank">
                                    SMART CONTRACT AUDIT
                                </a>
                                <a className="nav-link" href='https://github.com/solidproof/kyc-certificates/blob/main/KYC_Certificate_Zono_Swap.png' target="_blank">
                                    KYC AUDIT
                                </a>
                        </form>
                    </div>
                </nav>
            </div>
        </section>
    )
}

export default Navbar;
