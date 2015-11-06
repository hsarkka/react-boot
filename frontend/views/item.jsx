var React = require('react');
var Layout = require('./layout');


var Index = React.createClass({
    propTypes: {
        item: React.PropTypes.object
    },

    render: function () {
        return (
            <Layout title={this.props.title}>
                <h1>{this.props.item.name}</h1>
            </Layout>
        );
    }
});

module.exports = Index;
