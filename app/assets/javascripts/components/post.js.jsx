var Post = React.createClass({

  propTypes: {
    title: React.PropTypes.string,
    description: React.PropTypes.string,
    created_at: React.PropTypes.string
  },

  render: function() {
    var post = this.props.post;
    return(
      <tr>
        <td>{post.title}</td>
        <td>{post.description}</td>
        <td>{post.created_at}</td>
        <td>{post.description}</td>
      </tr>
    )
  }
});