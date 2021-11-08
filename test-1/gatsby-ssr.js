/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it

const React = require('react')

exports.onRenderBody = ({ setHeadComponents }) => {
  // if (process.env.NODE_ENV === `production`) {
    // ADDS GOOGLE OPTIMIZE CODE
    setHeadComponents([
      <script
        src="https://cdn.optimizely.com/js/20888160542.js"
      ></script>,
      <script
        dangerouslySetInnerHTML={{
          __html: `
         optimizely = window.optimizely || [];
         console.log(optimizely.get('visitor_id'));
         `
        }}
      ></script>
    ]);
  // }
}