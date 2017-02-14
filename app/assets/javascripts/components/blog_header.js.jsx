var BlogHeader = React.createClass({

  getInitialState: function() {
    return { posts: [] };
  },

  render: function() {
    return(
      <div className="container">
        <div className="row">
          <div className= "page-header">
            <h1>Simple React-Rails Blog</h1>
            <p>All posts</p>
          </div>
          <ol className="breadcrumb">
            <li><a href="#">Posts</a></li>
          </ol>
        </div>
        <div className="row">
          <div className="col-md-8">
            <PostsList posts={this.state.posts} /> 
          </div>
        </div>
      </div>
    )
  }
});