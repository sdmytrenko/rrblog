@Post = React.createClass

  getInitialState: ->
    post: @props.data

  getDefaultProps: ->
    post: []

  render: ->
    React.DOM.div
      className: 'post'
      React.DOM.h2
        className: 'title'
        @state.post.title
      React.DOM.h4
        className: 'test'
        @state.post.description
      React.DOM.h5, @state.post.created_at
      React.DOM.hr null
      # React.DOM.a
      #   className: 'btn btn-danger'
      #   'Delete'
      # React.DOM.hr null