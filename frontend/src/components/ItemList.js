var React = require('react');

var Item = React.createClass({
    propTypes: {
        itemId: React.PropTypes.string,
        title: React.PropTypes.string
    },

    render: function () {
        var link = "/items/" + this.props.itemId;
        return (
            <div>
                <a href={link}>{this.props.title}</a>
            </div>
        );
    }
});


var Index = React.createClass({
    propTypes: {
        title: React.PropTypes.string,
        items: React.PropTypes.array
    },

    render: function () {
        var itemNodes = [];
        if (this.props.items) {
            itemNodes = this.props.items.map(function (item) {
                return <Item key={item.id} itemId={item.id} title={item.name}/>;
            });
        }

        return (
            <div>
                <h1>Items</h1>

                {itemNodes}
            </div>
        );
    }
});

module.exports = Index;
