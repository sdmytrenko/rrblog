var Posts = React.createClass({

  getInitialState() {
    return {
      posts: this.props.posts,
      post: {
        title: '',
        description: ''
      },
      errors: {}
    }
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

  handleAddNewPost() {
    var that = this;
    $.ajax({
      method: 'POST',
      data: {
        post: that.state.post,
      },
      url: '/posts.json',
      success: function(res) {
        var newPostList = that.state.posts;
        newPostList.push(res);
        that.setState({
          posts: newPostList,
          errors: {}
        });
      },
      error: function(res) {
        that.setState({errors: res.responseJSON.errors})
      }
    });
  },

  handleDeletePost(post) {
    var postList = this.state.posts.filter(function(item) {
      return post.id !== item.id;
    });
    this.setState({posts: postList});
  },

  render: function() {
    var posts = [];
    var that = this;
    posts = this.state.posts.map( function(post) {
      return (
        <Post post={post} key={post.id} onDellPost={that.handleDeletePost} />
      );
    });

    return (
      <div>
        <h1>All Posts</h1>
        <div id="posts">
          <table className="table table-striped">
            <thead>
              <tr></tr>
            </thead>
            <tbody>
              {posts}
              <tr>
                <td>
                  <input type="text" onChange={this.handleTitleChange} /><br />
                </td>
                <td>
                  <input type="text" onChange={this.handleDescriptionChange} /><br />
                </td>
                <td></td>
                <td><button onClick={this.handleAddNewPost}>New Post</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
});