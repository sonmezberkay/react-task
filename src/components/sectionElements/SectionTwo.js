import { useState } from 'react';
import classes from './SectionTwo.module.css'

import minusSvg from '../../svg/minus.svg';
import plusSvg from '../../svg/plus.svg';

const SectionTwo = () => {

    const [oneIsOpen, setOneIsOpen] = useState(true);
    const [twoIsOpen, setTwoIsOpen] = useState(false);
    const [threeIsOpen, setThreeIsOpen] = useState(false);

    const detailOneOpenHandler = () => {
        setOneIsOpen(prevState => !prevState);
    };

    const detailTwoOpenHandler = () => {
        setTwoIsOpen(prevState => !prevState);
    };

    const detailThreeOpenHandler = () => {
        setThreeIsOpen(prevState => !prevState);
    };

    return (
        <section className={classes['section-two']}>
            <div className={classes.text}><h1>Lacinia quis vel eros tempor orci.</h1></div>
            <div className={classes.items}>
                <div className={classes['itemOne']}>
                    <div>
                        <p>01.</p>
                        <h2>Arcu non odio</h2>
                        {oneIsOpen && <p>Sapien nec sagittis aliquam malesuada bibendum. Tempor nec feugiat nisl pretium.</p>}
                    </div>
                    <div className={classes.icon} onClick={detailOneOpenHandler}>
                        {oneIsOpen ? <img src={minusSvg} alt='minus' /> : <img src={plusSvg} alt='minus' />}
                    </div>
                </div>
                <div className={classes['itemTwo']}>
                    <div>
                        <p>02.</p>
                        <h2>Eget gravida cum sociis</h2>
                        {twoIsOpen && <p>Second text details...</p>}
                    </div>
                    <div className={classes.icon} onClick={detailTwoOpenHandler}>
                        {twoIsOpen ? <img src={minusSvg} alt='minus' /> : <img src={plusSvg} alt='minus' />}
                    </div>
                </div>
                <div className={classes['itemThree']}>
                <div>
                        <p>03.</p>
                        <h2>Massa massa ultricies </h2>
                        {threeIsOpen && <p>Third text details...</p>}
                    </div>
                    <div className={classes.icon} onClick={detailThreeOpenHandler}>
                        {threeIsOpen ? <img src={minusSvg} alt='minus' /> : <img src={plusSvg} alt='minus' />}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionTwo;