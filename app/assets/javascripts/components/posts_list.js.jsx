var PostsList = React.createClass({

  render: function() {
    var posts = [];
    this.props.posts.forEach(function(post) {
      posts.push(<Post post={post} key={'post' + post.id}/>);
    }.bind(this));

    return(
      <table className="table table-striped">
        <thead>
          <tr>
            {/* Якщо вийде зробити лінк на сторінку поста з коментарями
            <th className="col-md-3">Тема</th>
            <th className="col-md-2">Date</th>
            <th className="col-md-3">Коментарі</th>
            <th className="col-md-4">Останній комент</th>*/}
          </tr>
        </thead>
        <tbody>
          {posts}
        </tbody>
      </table>
    )
  }
});
