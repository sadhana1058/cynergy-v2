import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Hero } from '@components';

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Hero />
    </Layout>
);

export default IndexPage;
