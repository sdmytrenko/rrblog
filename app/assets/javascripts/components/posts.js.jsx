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
          post: {
            title: '',
            description: ''
          },
          errors: {}
        });
      },
      error: function(res) {
        that.setState({errors: res.responseJSON.errors})
      }
    });
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
        <h1>Posts</h1>
        <div id="posts">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {posts}
              <tr>
                <td>
                  <input type="text" onChange={this.handleTitleChange} /><br />
                  <span style={{color: 'red'}}>{this.state.errors.title}</span>
                </td>
                <td>
                  <input type="text" onChange={this.handleDescriptionChange} /><br />
                  <span style={{color: 'red'}}>{this.state.errors.description}</span>
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