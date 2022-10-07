import { useState } from 'react';
import classes from './SubscribeSection.module.css';


const SubscribeSection = () => {

    const [inputValue, setInputValue] = useState();

    const submitHandler = () => {
        setInputValue('');
    };


    return (
        <section className={classes['section-subscribe']}>
            <h2>Subscribe to our newsletter</h2>
            <div className={classes.input}>
                <input placeholder='Company e-mail address' value={inputValue} />
                <button onClick={submitHandler} className='btn'>Subscribe</button>
            </div>
            <p>Chupa chups gummi bears shortbread candy</p>
        </section>
    );
};

export default SubscribeSection;