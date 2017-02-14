var Post = React.createClass({

  getInitialState() {
    return {
      post: this.props.post,
      editMode: false,
    }
  },

  setEditMode() {
    this.setState({editMode: true});
  },

  handleTitleChange(e) {
    var newPost = this.state.post;
    newPost.title = e.target.value;
    this.setState({post: newPost});
  },

  handleDescriptionChange(e) {
    var newPost = this.state.post;
    newPost.description = e.target.value;
    this.setState({post: newPost});
  },

  handlePostUpdate() {
    var that = this;
    $.ajax({
      method: 'PUT',
      data: {
        post: that.state.post,
      },
      url: '/posts/' + that.state.post.id + '.json',
      success: function(res) {
        that.setState({
          posr: res,
          editMode: false
        });
      },
    });
  },

  handlePostDelete() {
    var that = this;
    $.ajax({
      method: 'DELETE',
      url: '/posts/' + that.state.post.id + '.json',
      success: function(res) {
        that.props.onDellPost(that.state.post);
      }
    })
  },

  render() {
    if ( this.state.editMode ) {
      markup = (
        <tr>
          <td>
            <input
              type="text"
              value={this.state.post.title}
              onChange={this.handleTitleChange} />
          </td> 
          <td>
            <input
              type="text"
              value={this.state.post.description}
              onChange={this.handleDescriptionChange} />
            <br />
          </td>
          <td>
            <button onClick={this.handlePostUpdate}>Save Post</button>
          </td>
        </tr>
      );
    } else {
      markup = (
        <tr>
          <td>{this.state.post.title}</td>
          <td>{this.state.post.description}</td>
          <td>{this.state.post.created_at}</td>
          <td>
            <button onClick={this.setEditMode}>Edit</button>
            <button onClick={this.handlePostDelete} style={{color: 'red'}}>Dell</button>
          </td>
        </tr>
      );
    }
    return markup;
  }
});