import React from 'react';
import styled from 'styled-components';
import { eventCardsInfo } from '@config';
import { Section, ts40r, tsm18r, ts50b, colors } from '@design/theme';

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
    border: 3px solid #720073;
    color: #720073;
`;

const EventTitle = styled.div`
    ${ts40r}
`;

const EventDescription = styled.div`
    ${tsm18r}
    background-color: ${colors.main};
    margin: ${({ reverse }) => (reverse ? '20px 20px 20px 0px' : '20px 0px 20px 20px')};
    padding: 15px;
`;

const EventCard = ({ title, description, reverse }) => {
    // reversed: Image on the right, info on the left.
    // non reversed: Image on the left, info on the right.
    return (
        <EventCardContainer>
            <ImageContainer reverse={reverse}>Image goes here</ImageContainer>
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
            <SectionTitle>Events</SectionTitle>
            {eventCardsInfo.map((info, index) => (
                <EventCard title={info.title} description={info.description} reverse={index % 2 === 0 ? false : true} />
            ))}
        </EventsSection>
    );
};

export default Events;
