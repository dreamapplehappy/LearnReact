var HelloWorld = React.createClass({
    render: function() {
        return (
            <h1>Hello, {this.props.name}</h1>
        )
    }
});

ReactDOM.render(
    <HelloWorld />,
    document.getElementById('container')
);