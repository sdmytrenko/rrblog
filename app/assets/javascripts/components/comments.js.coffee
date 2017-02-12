@Comments = React.createClass

  getInitialState: ->
    comments: @props.data
  getDefaultProps: ->
    comments: []

  render: ->
    React.DOM.div
      className: 'comments'
      React.DOM.h2
        className: 'title'
        'Comments test'

      React.DOM.table
        className: 'table table-bordered'
        React.DOM.thead null,
          React.DOM.tr null,
        React.DOM.tbody null,
          for comment in @state.comments
            React.createElement Comment, key: comment.id, comment: comment