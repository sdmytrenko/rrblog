class Comments extends React.Component {



  render () {

    return (
      <div>
        {this.props.comments.map ( function(comment) {
          return (
            <p key={comment.id}> {comment.text} </p>
            )
        })}
      </div>
    )
  }
}

 {/* export default Comments; */}

{/*  constructor(props) {
    super(props);
  },
*/}