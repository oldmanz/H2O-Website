import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// import { Link } from "gatsby";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// From Index.  Add to pages.
import "assets/scss/material-kit-react.scss?v=1.4.0";
import 'typeface-roboto';
import 'typeface-roboto-slab';

import { graphql } from "gatsby"

// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import SectionCategories from "./Sections/SectionCategories.jsx";


import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

class Components extends React.Component {
  render() {
    const { classes, data, ...rest } = this.props;
    const pageData = data.graphCmsPage
    return (
      <div>
        <Header
          brand="H2O Indiana"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 500,
            color: "white"
          }}
          {...rest}
        />
        <Parallax image={pageData.backgroundImage.url}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>{pageData.title}</h1>
                  <h3 className={classes.subtitle}>
                    {pageData.content[0]}
                  </h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
          <SectionCategories />
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(componentsStyle)(Components);


export const query = graphql`
query ($id: String!){
  graphCmsPage(id: {eq: $id}) {
    backgroundImage {
      url
    }
    content
    contentImages {
      url
    }
    id
    pageName
    pageTemplate
    title
    slug
  }
}
`