import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class Chatroom extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chats: [{
                username: "Kevin Hsu",
                content: <p>Hello World!</p>,
            }, {
                username: "Alice Chen",
                content: <p>Love it! :heart:</p>,
            }, {
                username: "Kevin Hsu",
                content: <p>Check out my Github at https://github.com/WigoHunter</p>
            }, {
                username: "Alice Chen",
                content: <p>Lorem ipsum dolor sit amet, nibh ipsum. Cum class sem inceptos incidunt sed sed. Tempus wisi enim id, arcu sed lectus aliquam, nulla vitae est bibendum molestie elit risus.</p>
            }, {
                username: "Kevin Hsu",
                content: <p>So</p>,
            }, {
                username: "Kevin Hsu",
                content: <p>Chilltime is going to be an app for you to view videos with friends</p>,
            }, {
                username: "Kevin Hsu",
                content: <p>You can sign-up now to try out our private beta!</p>,
            }, {
                username: "Alice Chen",
                content: <p>Definitely! Sounds great!</p>,
            }]
        };

        this.submitMessage = this.submitMessage.bind(this);
    }

    componentDidMount() {
        this.scrollToBot();
    }

    componentDidUpdate() {
        this.scrollToBot();
    }

    scrollToBot() {
        ReactDOM.findDOMNode(this.refs.chats).scrollTop = ReactDOM.findDOMNode(this.refs.chats).scrollHeight;
    }

    submitMessage(e) {
        e.preventDefault();

        this.setState({
            chats: this.state.chats.concat([{
                username: "Kevin Hsu",
                content: <p>{ReactDOM.findDOMNode(this.refs.msg).value}</p>
            }])
        }, () => {
            ReactDOM.findDOMNode(this.refs.msg).value = "";
        });
    }

    render() {
        const username = "Kevin Hsu";
        const { chats } = this.state;

        return (
            <div className="chatroom">
                <h3>Chilltime</h3>
                <ul className="chats" ref="chats">
                    {console.log(chats)}
                    {
                        chats.map((chat) => 
                            <li className={`chat ${username === chat.username ? "right" : "left"}`}>
                                {chat.content}
                            </li>
                        )
                    }
                </ul>
                <form className="input" onSubmit={(e) => this.submitMessage(e)}>
                    <input type="text" ref="msg" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Chatroom;