/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import ErrorPage from '../Сommon/error-handler-page/not-found-url';
import { ELP_USER_EXPERIENCE_ERRORS } from '../Сommon/error-handler-page/constants';
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
        console.log('%c' + 'Error: ' + error, 'color:black');
        console.log('%c' + 'Path: ' + componentStack, 'color:black',);
        console.log('----------------------------------------------');
    };


    render() {
        const { hasError } = this.state;
        if (hasError) {
            return <ErrorPage error={ELP_USER_EXPERIENCE_ERRORS.UNEXPECTED_BREAK} />
        }
        return this.props.children;
    }
}

export default ErrorBoundary;