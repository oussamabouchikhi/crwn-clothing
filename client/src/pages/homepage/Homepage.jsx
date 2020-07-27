import React, { Profiler } from 'react';

import Directory from '../../components/directory/Directory';

import {HomePageContainer} from './homepage-styles';

const Homepage = () => (
    <HomePageContainer>
        <Profiler
            id='directory'
            onRender={(id, phase, actualDuration) => {
                console.log({id, phase, actualDuration});
            }}
        >
            <Directory />
        </Profiler>
    </HomePageContainer>
);

export default Homepage;