import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg';
import { ServicesContainer, ServicesH1, ServicesH2, ServicesWrapper, ServicesIcon, ServicesP, ServicesCard } from './ServiceElement';

const Services = () => {
    return (
        <>
            <ServicesContainer id='services'>
                <ServicesH1>Our Services</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1} />
                        <ServicesH2>Reduce Expenses</ServicesH2>
                        <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2} />
                        <ServicesH2>Virtual Offices</ServicesH2>
                        <ServicesP>You can access our platform anytime anywhere.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3} />
                        <ServicesH2>Premium Benefits</ServicesH2>
                        <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}

export default Services
