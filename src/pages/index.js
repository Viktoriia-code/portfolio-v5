import * as React from "react";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <About />
    <Experience />
    <Skills />
    <Projects />
    <Footer />
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
