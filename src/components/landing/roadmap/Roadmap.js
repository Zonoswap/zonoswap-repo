import React from 'react';
import './roadmap.scss';
const Roadmap = () => {
    return (
        <>
            <section className="main-rewards  ptb" id="roadmap">
                <div className="container">
                    <div className="row">

                        <div className="col-sm-12 text-center">
                            <h3 className="common">ZonoSwap Roadmap</h3>
                            {/* <p className="white ptb20">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque <br/> laudantium, totam rem aperiam quasi architecto beatae vitae dicta sunt explicabo.</p> */}
                            <img src="\zono-assets\zono-roadmap\zono-loadmap.jpg" className="img-fluid d-none  d-sm-block d-md-block d-lg-block d-xl-block" alt="" />
                            <img src="\zono-assets\zono-roadmap\roadmapmobile.jpg" className="img-fluid d-block d-sm-none d-md-none d-lg-none d-xl-none" alt="" />
                        </div>
                    </div>
                </div> 
            </section>
        </>
    )
}

export default Roadmap;
