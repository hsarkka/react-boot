var React = require('react');

var Index = React.createClass({
    propTypes: {
        item: React.PropTypes.object
    },

    render: function () {
        let name = "";
        if (this.props.item) {
            name = this.props.item.name;
        }

        return (
            <div>
                <h1>{name}</h1>
            </div>
        );
    }
});

module.exports = Index;
