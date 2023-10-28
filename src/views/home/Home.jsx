import './Home.scss';
import { Header, Slider, Boxes, Courses, Footer } from './../../components';
import { useContext } from 'react';
import { AppContext } from './../../context/app.context';

const Home = () => {
    const { slider } = useContext(AppContext);

    return (
        <div className="home-container">
            <Header/>
            {slider && <Slider/>}
            <Boxes/>
            <Courses/>
            <Footer/>
        </div>
    )
}
export default Home;