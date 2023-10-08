import React from "react";

function Footer(){
    return(
        <div>
            <div className="d-flex justify-content-around">
                <div>
                    <h3>Contact Us</h3>
                    <p><a className="link-dark" href="https://www.google.com/maps/place/Greenhouse+Mall/@-1.299932,36.7828357,17.17z/data=!4m9!1m2!2m1!1sngong+road!3m5!1s0x182f109987d40207:0x35c35ad0b10f9d1e!8m2!3d-1.300497!4d36.781778!16s%2Fg%2F11c1q9kt8_?entry=ttu" target="blank"><i class="fa-solid fa-location-dot"></i>Ngong Road</a></p>
                    <p><i class="fa-solid fa-phone"></i> +254 134 765 890/ +254 784 000 555</p>
                    <p><a className="link-dark" href="https://mail.google.com/mail/u/0/#inbox"><i class="fa-regular fa-envelope"></i> Bookstore@gmail.com</a></p>
                </div>
                <div className="d-flex flex-column">
                    <p class="fs-3"><a className="link-dark" href="https://www.instagram.com/" target="blank"><i class="fa-brands fa-instagram"></i></a></p>
                    <p class="fs-3"><a className="link-dark" href="https://www.facebook.com/" target="blank"><i class="fa-brands fa-facebook"></i></a></p>
                    <p class="fs-3"><a className="link-dark" href="https://www.linkedin.com/login" target="blank"><i class="fa-brands fa-linkedin"></i></a></p>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <p>© 2023 Pata Nafuu. All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer;