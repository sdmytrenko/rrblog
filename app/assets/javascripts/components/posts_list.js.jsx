var PostsList = React.createClass({
  render: function() {
    return(
      <div className="container">
        <div className="row">
          <div className= "page-header">
            <h1>Hello, World!</h1>
            <p>All Posts</p>
          </div>
          <ol className="breadcrumb">
            <li><a href="#">Posts</a></li>
          </ol>
        </div>
        <div className="row">
          <div className="col-md-8">
              <p>POST</p>
          </div>
        </div>
      </div>
    )
  }
});