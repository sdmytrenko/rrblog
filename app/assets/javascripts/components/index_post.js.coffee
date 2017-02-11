@IndexPost = React.createClass

  handleDelete: (e) ->
    e.preventDefault()
    # yeah... jQuery doesn't have a $.delete shortcut method
    $.ajax
      method: 'DELETE'
      url: "/posts/#{ @props.post.id }"
      dataType: 'JSON'
      success: () =>
        @props.handleDeletePost @props.post

  render: ->
    React.DOM.tr null,
      React.DOM.h3 null, @props.post.title
      React.DOM.h5 null, @props.post.description
      React.DOM.h5 null, @props.post.user_id
      React.DOM.a
        className: "btn btn-primary btn-mg"
        href: "/posts/" + @props.post.id
        role: "button"
        "Learn more »"
      React.DOM.a
        className: 'btn btn-danger'
        onClick: @handleDelete
        'Delete'
      React.DOM.hr null
