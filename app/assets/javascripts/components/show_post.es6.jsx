{/* import Comments from './comments' Webpack???  */}
class ShowPost extends React.Component {

  render () {

    return (
      <div>
        <h2> Show Post here </h2>
        <h2> {this.props.post.title} </h2>
        <h3> {this.props.post.description}</h3>
        <h5> {this.props.post.created_at}</h5>
        <h5> {this.props.post.comments}</h5>

        <a href={'/posts'}>Back to list</a>
        <p><a href={'/posts/' + this.props.post.id + '/comments'}>Show comments (temporary)</a></p>
         {/*<Comments/>   Webpack??? */}
      </div>
    )
  }
}