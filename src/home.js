import React, { Component } from "react";
import forest_illustration from './pictures/forest_illustration_transparent.png';
import forest_illustration_mobile from './pictures/forest_illustration_mobile_transparent.png';
import { Box } from '@material-ui/core';

class Home extends Component {
  render() {
    return (
<Box>
      <Box className="homecontent">
        <h2 className="homeh2">Webdesigner & Front-end Developer</h2>

        <p>I design websites and code them in a beautifull way</p>
      </Box>

      <Box className="footer">
    <img className="footerimg" src={forest_illustration} alt="" />
    <img className="footerimg_mobile" src={forest_illustration_mobile} alt="" />
      </Box>

</Box>
    );
  }
}

export default Home;
