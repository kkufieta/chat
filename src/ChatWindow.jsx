import React from 'react';


class ChatWindow extends React.Component {
    state = {
        message: ''
    }

    isDisabled = () => {
        return false;
    };

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.addMessage(this.state.message);
        this.setState({
            message: ''
        });
    }

    handleOnChange = event => {
        this.setState({
            message: event.target.value
        })
    }

    render() {
        const { username, messages } = this.props;
        return (
            <div className='chat-window'>
                <h2>Super Awesome Chat</h2>
                <div className="name sender">{username}</div>

                <ul className='message-list'>
                    {messages.map((message, index) => (
                        <li
                            key={index}
                            className={
                                message.username === username
                                    ? 'message sender'
                                    : 'message recipient'
                            }
                        >
                            <p>{`${message.username}: ${message.text}`}</p>
                        </li>
                    ))}
                </ul>

                <div>
                    <form className="input-group" onSubmit={this.handleOnSubmit}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your message..."
                            value={this.state.message}
                            onChange={this.handleOnChange} />
                        <div className='input-group-append'>
                            <button
                                className='btn submit-button'
                                disabled={this.isDisabled()}>
                                SEND
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

export default ChatWindow;