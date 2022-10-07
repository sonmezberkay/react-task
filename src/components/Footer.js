import styles from './Footer.module.css';

import facebook from '../svg/facebook.svg';
import twitter from '../svg/twitter.svg';
import linkedin from '../svg/linkedIn.svg';
import m from '../svg/m.svg';
import github from '../svg/github.svg';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';


const Footer = () => {


    return (
        <section className={styles.footer}>
            <div className={styles['upper-footer']}>
                <div className={styles.outer}>
                        <div className={styles.list}>
                            <ul>
                                <li>Products</li>
                                <li>Tiramisu chocolate</li>
                                <li>Pastry tart</li>
                                <li>Pllipop brownie</li>
                            </ul>
                            <ul>
                                <li>Collaboration</li>
                                <li>Tiramisu chocolate</li>
                                <li>Pastry tart</li>
                                <li>Pllipop brownie</li>
                            </ul>
                        </div>
                        <div className={styles['right-footer']}>
                            <div className={styles.logos}>
                                <img src={twitter} alt='logo' />
                                <img src={facebook} alt='logo' />
                                <img src={linkedin} alt='logo' />
                                <img src={m} alt='logo' />
                                <img src={github} alt='logo' />
                            </div>
                        </div>
                </div>
            </div>
            <hr className={styles.line} />
            <div className={styles['lower-footer']}>
                <p>© 2003 - 2022 Carrot cake sweet pie Sp. z o.o. All rights reserved.</p>
                <NavLink to='/'>Legal</NavLink>
                <NavLink to='/'>Privacy Policy</NavLink>
                <p>Proud to be Open Source</p>
            </div>
        </section>
    );
};

export default Footer;