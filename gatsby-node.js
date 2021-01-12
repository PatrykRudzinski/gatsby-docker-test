/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */


// TODO:
// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions;
//
//   return new Promise((resolve, reject) => {
//     graphql(`
//       query ExampleQuery {
//         blogArticles {
//           edges {
//             node {
//               slug
//             }
//           }
//         }
//       }
//     `).then(({data}) => {
//       data.blogArticles.edges.map(({ node }) => {
//         createPage({
//           path: `article/${node.slug}`,
//           component: path.resolve('./src/templates/blogArticle.jsx'),
//           context: {
//             slug: node.slug,
//           },
//         });
//       });
//       resolve();
//     });
//   });
// };
