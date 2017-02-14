{/*import BlogHeader from './blog_header.js.jsx';*/}

var Posts = React.createClass({

  render: function() {
    var posts = [];
    posts = this.props.posts.map( function(post) {
      return (
        <Post post={post} key={post.id} />
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
            </tbody>
          </table>
        </div>
      </div>
    );
  }
});