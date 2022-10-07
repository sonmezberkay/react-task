import classes from './SectionOne.module.css'
import { Link } from 'react-router-dom';

const SectionOne = ({ image }) => {

    return (
        <section className={classes['section-one']}>
            <div className={classes['left-box']}>
                <div className={classes['left-box__header']}>
                    <h1><span>Duis aute irure</span> dolor in reprehenderit</h1>
                </div>
                <div className={classes['left-box__text']}>
                    <p>Nam at lectus urna duis convallis. Id semper risus in hendrerit gravida rutrum quisque non tellus. Elit eget gravida cum sociis natoque. Ultrices neque ornare aenean euismod elementum nisi quis eleifend. Arcu felis bibendum ut tristique et egestas. </p>
                </div>
                <Link className={classes.discover} to='/discover'>Discover Now</Link>
            </div>
            <div className={classes['right-box']}>
                <img src={image} alt='section-one'/>
            </div>
        </section>
    );
};

export default SectionOne;