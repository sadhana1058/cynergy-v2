import React, { Component } from 'react';
import styled from 'styled-components';
import { ts18l, ts18r, colors } from '@design/theme';

const StyledQuote = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Text = styled.div`
    ${ts18l}
    font-style: italic;
    text-align: center;
`;
const Author = styled.div`
${ts18r}
color: ${colors.main};
`;

class Quote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            author: '',
        };
    }
    async componentDidMount() {
        await fetch('https://programming-quotes-api.herokuapp.com/quotes/random')
            .then(response => response.json())
            .then(data => {
                if (data && data['en']) {
                    this.setState({
                        text: data['en'],
                        author: data.author,
                    });
                }
            })
            .catch(error => {
                console.log(error);
            });
    }
    render() {
        return (
            <StyledQuote>
                <Text>{this.state.text}</Text>
                <Author>~ {this.state.author}</Author>
            </StyledQuote>
        );
    }
}

export default Quote;
