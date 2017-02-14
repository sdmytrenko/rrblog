var PostsList = React.createClass({

  render: function() {
    return(
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="col-md-3">Тема</th>
            <th className="col-md-2">Date</th>
            <th className="col-md-3">Коментарі</th>
            <th className="col-md-4">Останній комент</th>
          </tr>
        </thead>
        <tbody>
          {/* тут буде компонент поста */}
        </tbody>
      </table>
    )
  }
});
