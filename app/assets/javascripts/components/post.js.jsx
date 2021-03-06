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
          <td>
            <h3> {this.state.post.title} </h3>
            <h6>{this.state.post.created_at}</h6>
            <h4>{this.state.post.description}</h4>
            <a href={'/posts/' + this.state.post.id}>Read more</a>
          </td>
          <td></td>
          <td></td>
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