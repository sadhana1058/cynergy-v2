import React from 'react';
import styled from 'styled-components';
import { eventCardsInfo, eventsTitle } from '@config';
import { Section, ts40r, tsm18r, ts50b, ts36b, ts16r, tsm12r, colors } from '@design/theme';
import { media } from '@design/media';

const EventsSection = styled(Section)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    min-height: 100vh;
`;

const SectionTitle = styled.div`
    ${ts50b},
    margin-bottom: 30px;
`;

const EventCardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 45vh;
    margin-top: 60px;
`;

const InfoContainer = styled.div`
    position: absolute;
    ${({ reverse }) => (reverse ? 'left: 0;' : 'right: 0;')}

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: ${({ reverse }) => (reverse ? 'flex-start;' : 'flex-end;')}

    width: 60%;
    height: 100%;
`;

const ImageContainer = styled.div`
    position: absolute;
    ${({ reverse }) => (reverse ? 'right: 0;' : 'left: 0;')}

    display: flex;
    justify-content: center;
    align-items: center;

    width: 50%;
    height: 100%;
`;

const EventTitle = styled.div`
    ${ts40r}
    ${media.tablet`${ts40r}`};
    ${media.phone`${ts40r}`};
    ${media.tiny`${ts36b}`};
    ${media.desktop``};
`;

const EventDescription = styled.div`
    ${tsm18r}
    ${media.tablet`${tsm18r}`};
    ${media.phone`${ts16r}`};
    ${media.tiny`${tsm12r}`};
    background-color: ${colors.main};
    margin: ${({ reverse }) => (reverse ? '20px 20px 20px 0px' : '20px 0px 20px 20px')};
    padding: 15px;
`;

const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
`;

const EventCard = ({ title, description, image, reverse }) => {
    // reversed: Image on the right, info on the left.
    // non reversed: Image on the left, info on the right.
    return (
        <EventCardContainer>
            <ImageContainer reverse={reverse}>
                <Image src={image} alt={title} />
            </ImageContainer>
            <InfoContainer reverse={reverse}>
                <EventTitle>{title}</EventTitle>
                <EventDescription reverse={reverse}>{description}</EventDescription>
            </InfoContainer>
        </EventCardContainer>
    );
};

const Events = () => {
    return (
        <EventsSection id="events">
            <SectionTitle>{eventsTitle}</SectionTitle>
            {eventCardsInfo.map((info, index) => (
                <EventCard key={index} title={info.title} description={info.description} image={info.image} reverse={index % 2 === 0 ? false : true} />
            ))}
        </EventsSection>
    );
};

export default Events;
