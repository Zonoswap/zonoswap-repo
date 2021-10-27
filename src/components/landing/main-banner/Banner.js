/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './banner.scss';
import { useWeb3React } from '@web3-react/core'
import useApprove from '../../../hooks/useApprove';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Banner = () => {

    const { account } = useWeb3React();
    const { Approve } = useApprove()
    const [minted, setMinted] = useState(false);
    const [inProcess, setInProcess] = useState(false);

    const appoved = async (e) => {
        if (account) {
            try {
                e.preventDefault();
                setInProcess(true)
                const tx = await Approve()
                if (tx) {
                    toast.success('Successfully Approved', {
                        position: "top-right",
                        autoClose: 2000,
                    });
                    setMinted(true)
                }
                setInProcess(false)
                window.$("#exampleModalLong2").modal('hide');

            }
            catch (err) {
                console.log(err)
                toast.error(err.message, {
                    position: "top-right",
                    autoClose: 2000,
                });
                setInProcess(false)
            }
        }
        else {
            window.$("#exampleModalLong2").modal('hide');
            toast.error('Please Connect to wallet', {
                position: "top-right",
                autoClose: 2000,
            });
        }
    }


    return (
        <>
            <section className="main-banner ptb" id="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="inner-content  ptb">

                                <h2 className="white"> The Powerful All-Inclusive Decentralized Crypto Exchange Platform</h2>
                                <p className="ptb20 white">Explore the crypto world with the leading digital crypto trading platform along with an ever-growing community.</p>
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <a className="btn-common" href="https://zonoswap.com/#/swap" target="_blank">Buy ZONOSWAP</a>
                                    </li>
                                    
                                </ul>
                            
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="inner-img text-center">
                            <img src="\zono-assets\header\header-image.png" className="img-fluid" alt="" />
                           </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner;
