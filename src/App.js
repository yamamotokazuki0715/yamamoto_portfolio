import logo from './logo.svg';
import './App.css';
import CommonCss from './Modules/CSS/common.module.css';

import Header from './Components/Parts/Header';
import Footer from './Components/Parts/Footer';

import Top from './Components/Pages/Top';
import Work01 from './Components/Pages/Work01';
import NotFound from './Components/Pages/NotFound';

function App() {
    return (
    <>
        <Header />
        <div id={CommonCss.wrap}>
            <Top />
        </div>
        <Footer />
    </>
    );
}

export default App;
