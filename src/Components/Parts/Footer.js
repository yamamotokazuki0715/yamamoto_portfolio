import FooterCss from '../../Modules/CSS/FooterCss.module.css';

import {Link} from 'react-router-dom';

function Footer () {
    return (
        <>
            <footer className={FooterCss.pcFooter}>
                <p className={FooterCss.Copyright}>&copy; 2022 Yamamoto Kazuki</p>
            </footer>
        </>
    );
};

export default Footer;
