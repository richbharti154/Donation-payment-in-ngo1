import React from 'react'


export default function programme(){
  return(
    <section className={style.program1}>
            <div className={style.programContainer}>
                <h6 className={style.programme}>Programme</h6>
                <div className={style.boxcontainer}>
                    <div className={style.box} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <div className={`${style.cardImage} ${hovered ? style.zoom : ''}`} src={src} alt={alt}></div>
                        <div className={style.programmetitle}>Education to every child</div>
                        <div className={style.donationCount}>Donation Goal:<span>$9845</span></div>
                        <button className={style.button1} onClick={handleDonate}>Donate Now</button>
                    </div>
                   
                </div>
            </div>
        </section>
    )
}





