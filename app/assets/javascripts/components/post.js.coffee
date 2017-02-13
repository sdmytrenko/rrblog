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
        className: 'description'
        @state.post.description
      React.DOM.h5, @state.post.created_at
      React.DOM.hr null

      React.DOM.h3
        className: 'title'
        'Comments form post'