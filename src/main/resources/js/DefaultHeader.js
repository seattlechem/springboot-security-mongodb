'use strict';

const e = React.createElement;

class DefaultHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: true };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#react-root');
ReactDOM.render(e(DefaultHeader), domContainer);
