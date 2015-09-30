import React from 'react';

import {Layout, Flex, Fixed} from 'react-layout-pane';

var Foo = React.createClass({
  render: function() {
    return (
	    <Layout type="column">
                <Fixed className="header">
                    Fixed Header
                </Fixed>
	    </Layout>
        );
  },

});

module.exports = Foo;

