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

const Sections = () => {

    const sectionOneAsset = '/assests/section-1__asset.png';
    const invision = '/assests/invision.png';

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