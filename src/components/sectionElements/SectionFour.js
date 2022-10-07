import classes from './SectionFour.module.css';
import { Link } from 'react-router-dom';

const SectionFour = ({ circle, scissors, android, checkBall }) => {

    return (
        <section className={classes['section-four']}>
            <div className={classes.head}>
                <h1>Massa tempor nec feugiat nisl pretium fusce</h1>
            </div>
            <div className={classes.mid}>
                <p>Pellentesque <strong>habitant</strong> morbi tristique senectus et netus et malesuada. <strong>Ipsum faucibus vitae</strong> aliquet nec ullamcorper sit amet risus nullam. 
                    Dictum varius duis at consectetur <strong>lorem donec</strong> massa sapien. Massa tempor nec feugiat nisl pretium fusce.        
                </p>
                <p>Elit scelerisque mauris pellentesque?</p>
            </div>
            <div className={classes.bottom}>
                    <Link to='/'><img src={circle} alt="svg" /></Link>
                    <Link to='/'><img src={scissors} alt="svg" /></Link>
                    <Link to='/'><img src={android} alt="svg" /></Link>
                    <Link to='/'><img src={checkBall} alt="svg" /></Link>
            </div>
        </section>
    );
}

export default SectionFour;