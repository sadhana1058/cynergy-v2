import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Hero, Events } from '@components';

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Hero />
        <Events />
    </Layout>
);

export default IndexPage;
