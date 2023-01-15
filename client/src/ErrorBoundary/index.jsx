/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { Image, Title } from '../Сommon';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        };
    }

    static propTypes = {
        children: PropTypes.node,
    };

    static getDerivedStateFromError() {
        return { hasError: true };
      }

    componentDidCatch(error, info) {
       this.logError(error, info);

    }

    logError = (error, info) => {
        const { componentStack } = info;
        console.log('----------------------------------------------');
        console.log('%c' + 'Error: ' +  error, 'color:black');
        console.log('%c' + 'Path: ' +  componentStack, 'color:black',);
        console.log('----------------------------------------------');
    };


    render() {
        const { hasError } = this.state;
        if(hasError) {
            return (<>
            <Title>Something went wrong. Our team is already working on this problem.</Title>
            <Image height={330} width={350} url="https://img.freepik.com/free-vector/oops-404-error-with-a-broken-robot-concept-illustration_114360-5529.jpg?w=2000" />
            </>);
        }
        return this.props.children;
    }
}

export default ErrorBoundary;