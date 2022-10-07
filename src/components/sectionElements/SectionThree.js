import classes from './SectionThree.module.css';
import UpperQuote from '../../svg/upperQuote.svg';
import LowerQuote from '../../svg/lowerQuote.svg';

const SectionThree = ({ logo }) => {

    return (
        <section className={classes['section-three']}>
            <div className={classes.row}><p>.</p></div>
            <div className={classes.head}>
                <h2>Bibendum at varius vel pharetra vel turpis nunc eget lorem.</h2>
            </div>
            <div className={classes.testimonial}>
                <div><img src={UpperQuote} alt='quote' /></div>
                <p>Aliquam purus sit amet luctus venenatis lectus magna. Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Tortor vitae purus faucibus ornare. Neque viverra justo nec ultrices. Nisl nunc mi ipsum faucibus. Tristique risus nec feugiat in fermentum. Elit duis tristique sollicitudin nibh sit amet commodo nulla.</p>
                <p>Faucibus Vitae, Office Assistant<span><img src={LowerQuote} alt='quote' /></span></p>
                <img src={logo} alt='invision' />
            </div>
        </section>
    );
}

export default SectionThree;