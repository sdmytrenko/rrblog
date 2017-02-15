export class Comments extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {

    return (
      <div>
        {this.props.comments.map ( function(comment) {
          return (
            <p key={comment.id}> {comment.text} </p>
            )
        })}
        {/* <h2> Show Comments here </h2> */}

      </div>
    )
  }
}

{/* export default Comments; */}
