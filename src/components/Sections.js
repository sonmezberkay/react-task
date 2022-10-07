import { Fragment } from 'react';
import SectionOne from './sectionElements/SectionOne';
import SectionTwo from './sectionElements/SectionTwo';
import SectionThree from './sectionElements/SectionThree';
import SectionFour from './sectionElements/SectionFour';

import circleSvg from '../svg/circle.svg';
import android from '../svg/android.svg';
import scissors from '../svg/scissors.svg';
import checkBall from '../svg/checkBall.svg';
import SubscribeSection from './sectionElements/SubscribeSection';

// import sectionOneAsset from '../svg/photo.svg';
// import invision from '../svg/logo.svg';

const Sections = () => {

    const sectionOneAsset = 'assets/photo.png';
    const invision = 'assets/invision.png';

    console.log(sectionOneAsset);

    return (
        <Fragment>
            <SectionOne image={sectionOneAsset} />
            <SectionTwo />
            <SectionThree logo={invision} />
            <SectionFour circle={circleSvg} scissors={scissors} android={android} checkBall={checkBall} />
            <SubscribeSection />
        </Fragment>
    );
};

export default Sections;