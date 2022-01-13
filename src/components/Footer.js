/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import arrow from './../assets/arrow.svg';

function Footer() {
    const gallery = css`

        color: yellow;
        padding: 60px;
        gap: 20px;

        .footer__item1 {
            display: flex;
            flex-direction: row;
            justify-content: center;
            gap: 15px;
            color: #8e8e8e;
            font-size: 12px;
            margin-bottom: 20px;
        }

        .footer__item1 div a {
            color: #8e8e8e;
        }

        .footer__item2 {
            display: flex;
            flex-direction: row;
            justify-content: center;
            gap: 15px;
            color: #8e8e8e;
            font-size: 12px;
        }

        .langselector {
            transform: rotate(180deg);
            width: 12px;
            height: 12px;
        }
    `;

    return (
        <footer css={gallery}>
            <div className="footer__item1">
                <div><a href="#">Meta</a></div>
                <div><a href="#">About</a></div>
                <div><a href="#">Blog</a></div>
                <div><a href="#">Jobs</a></div>
                <div><a href="#">Help</a></div>
                <div><a href="#">API</a></div>
                <div><a href="#">Privacy</a></div>
                <div><a href="#">Terms</a></div>
                <div><a href="#">Top Accounts</a></div>
                <div><a href="#">Hashtags</a></div>
                <div><a href="#">Locations</a></div>
                <div><a href="#">Instagram Lite</a></div>
            </div>
            <div className="footer__item2">
                <div>English <img src={arrow} className="langselector" /></div>
                <div>© 2022 Instagram from Meta</div>
            </div>
        </footer>
    );
}

export default Footer;