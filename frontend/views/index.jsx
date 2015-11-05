var React = require('react');
var Layout = require('./layout');

var Item = React.createClass({
    propTypes: {
        title: React.PropTypes.string
    },

    render: function () {
        return (
            <div>{this.props.title}</div>
        );
    }
});


var Index = React.createClass({
    propTypes: {
        title: React.PropTypes.string,
        items: React.PropTypes.array
    },

    render: function () {
        var itemNodes = this.props.items.map(function (item) {
            return <Item key={item.id} title={item.name}/>;
        });

        return (
            <Layout title={this.props.title}>
                <h1>{this.props.title}</h1>

                {itemNodes}
            </Layout>
        );
    }
});

module.exports = Index;
