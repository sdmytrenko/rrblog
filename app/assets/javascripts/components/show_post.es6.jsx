class ShowPost extends React.Component {
  render () {

    return (
      <div>
        <h2> Show Post here </h2>
        <h2> {this.props.post.title} </h2>
        <h3> {this.props.post.description}</h3>
        <h5> {this.props.post.created_at}</h5>
      </div>
    )
  }
}