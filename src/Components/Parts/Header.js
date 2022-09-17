import HeaderCss from '../../Modules/CSS/HeaderCss.module.css';

function Header () {
    return(
    <>
        <header className={HeaderCss.pcHeader}>
            <div className={HeaderCss.pcHeaderLeft}>
                <h1 className={HeaderCss.pcHeaderLogo}>Yamamoto Kazuki's PortFolio</h1>
            </div>
            <div className={HeaderCss.pcHeaderRight}></div>
        </header>
    </>
    );
};

export default Header;
