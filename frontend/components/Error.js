var React = require('react');
var Layout = require('./layout');


var Index = React.createClass({
    propTypes: {
        error: React.PropTypes.object
    },

    render: function () {
        return (
            <Layout title='Error'>
                <h1>Error</h1>
                {this.props.error.message}
            </Layout>
        );
    }
});

module.exports = Index;
