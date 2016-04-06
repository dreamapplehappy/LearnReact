var Hello = React.createClass({
    render: function() {
        return <div>Hello {this.props.name}</div>;
    }
});

ReactDOM.render(
    <Hello name="world"/>,
    document.getElementById('container')
);

var Example1 = React.createClass({
    render: function() {
        return (
            <p>
                Hello, <input type="text" placeholder="Your name here" />!
                It is {this.props.date.toTimeString()}
            </p>
        );
    }
});

setInterval(function() {
    ReactDOM.render(
        <Example1 date={new Date()} />,
        document.getElementById('example1')
    );
}, 500);

// example2
var Example2 = React.createClass({
    getInitialState: function() {
        return {liked: false}
    },
    handleClick: function(event) {
        this.setState({
            liked: !this.state.liked
        });
    },
    render: function() {
        var text = this.state.liked ? 'I like it' : 'I do not like it';
        return (
            <p onClick={this.handleClick}>
                your {text} , click to toggle
            </p>
        )
    }
});

var Avatar = React.createClass({
    render: function() {
        return (
            <div>
                <ProfilePic username={this.props.username} />
                <ProfileLink username={this.props.username} />
            </div>
        );
    }
});

var ProfilePic = React.createClass({
    render: function() {
        return (
            <img src={'http://graph.facebook.com/' + this.props.username + '/picture'} alt=""/>
        );
    }
});

var ProfileLink = React.createClass({
    render: function() {
        return (
            <a href={'http://www.facebook.com/' + this.props.username}>
                {this.props.username}
            </a>
        );
    }
});

ReactDOM.render(
    <Avatar username="pwh"/>,
    document.getElementById('avatar')
);
ReactDOM.render(<Example2 />, document.getElementById('example2'));

var ItemLists = [
    {name: 'hello1', value: 1, id: 1},
    {name: 'hello2', value: 2, id: 2},
    {name: 'hello3', value: 3, id: 3},
    {name: 'hello4', value: 4, id: 4}
];

var ListsContainer = React.createClass({
    render: function() {
        return (
            <ul className="list-container">
                { this.props.items.map(function(item){
                    return <List key={item.id} item={item}/>
                 })}
            </ul>
        )
    }
});

var List = React.createClass({
    render: function() {
        return (<li>
            {this.props.item.name}
        </li>)
    }
});
ReactDOM.render(
    <ListsContainer items={ItemLists}/>,
    document.getElementById('list1')
);

var ListItemWrapper = React.createClass({
    render: function() {
        return <li>{this.props.data.text}</li>;
    }
});
var MyComponent = React.createClass({
    render: function() {
        return (
            <ul>
                {this.props.results.map(function(result) {
                    return <ListItemWrapper key={result.id} data={result}/>;
                })}
            </ul>
        );
    }
});

var results = [
    {text: 123}
];

//ReactDOM.render(
//    <MyComponent results={results}/>,
//    document.getElementById('list1')
//);









