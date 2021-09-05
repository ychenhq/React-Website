import React from 'react';
import { Button } from '../ButtonElement';
import Image from '../../images/svg-4.svg';
import { Column2, ImgWrap, InfoContainer, InfoWrapper, InfoRow, Column1, Img, TextWrapper, TopLine, Heading, Subtitle, BtnWrap } from './infoElement';

const InfoSection = ({ lightBg, id, imgStart, topLine, lightText, headline, description, darkText, buttonLabel, alt, primary, dark, dark2, img }) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button
                                        smooth={true}
                                        duration={true}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0} to='home'>{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={Image} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>

    )
}

export default InfoSection
