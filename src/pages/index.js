import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Hero, About } from '@components';

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Hero />
        <About />
    </Layout>
);

export default IndexPage;
