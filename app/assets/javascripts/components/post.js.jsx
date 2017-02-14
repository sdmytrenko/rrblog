var Post = React.createClass({

  getInitialState() {
    return {
      post: this.props.post
    }
  },

  render() {
    return (
      <tr>
        <td>{this.state.post.title}</td>
        <td>{this.state.post.description}</td>
        <td>{this.state.post.created_at}</td>
      </tr>
    );
  }
});