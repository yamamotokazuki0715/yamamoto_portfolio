import NotFoundCss from '../../Modules/CSS/NotFoundCss.module.css';

import {Link} from 'react-router-dom';

function NotFound () {
    return (
        <>
            <div id={NotFoundCss.NotFoundArea}>
                <span id={NotFoundCss.NotFoundMsg}>404 NotFound</span>
            </div>
        </>
    );
};

export default NotFound;
