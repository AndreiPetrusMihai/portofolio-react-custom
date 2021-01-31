import React from 'react';
import '../pages.styles.scss';
import './homePage.styles.scss';


function HomePage(){

    return(
        <div className='page homepage'>
            <div className='container'>
                <div className='colorSplashContainer'>

                </div>
                <div className='textContainer'>
                    <p className='shortBio'>
                        I am currently a student at Babes-Bolyai University, year two, working towards my licentiate degree. I've been developing a growing passion towards web development and all the exciting technologies and possibilities it brings.

                        I look forward to improving my skills and meeting new people whom I can work with and learn from.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HomePage;