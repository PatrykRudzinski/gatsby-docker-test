import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';

const blogArticle = ({data}) => (
  <b>blogArticle</b>
);

blogArticle.defaultProps = {};

blogArticle.propTypes = {};

export default blogArticle;
//
// export const query = graphql`
//     query BlogPost($slug: String!) {
//         blogPost(slug: {eq: $slug}) {
//
//         }
//     }`