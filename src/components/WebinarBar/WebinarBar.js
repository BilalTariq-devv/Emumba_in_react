import React from 'react'
import "../WebinarBar/webinarBar.scss";

function WebinarBar() {
    return (
        <div className="watch-webinar">
            <div className="genAI-description">
                <div className="emumba-aws-logo">
                    <img className="emumba-img" src="/images/emumbalogo.png" alt="" />
                    <img className="aws-img" src="/images/aws_logo-removebg-preview.png" alt="" />
                </div>
                <div>
                    <h1>Dive into Amazon Q:<br />
                    Explore GenAI for Developers &amp; Businesses</h1><br />
                    <p>Dive into the powerful world of Generative AI and discover how Emumba and AWS are optimising developer productivity, fine-tuning operations, and uplifting customer experiences.</p><br />
                    <h4>Fast track your GenAI adoption with industry insights, real-world customer success stories, and the power of Amazon Q.</h4>
                </div>
            </div>
            <div className="webinar-img-container">
                <img className="webinar-img" src="/images/webinar play img.png" alt="" />
            </div>
        </div>
    )
}

export default WebinarBar
