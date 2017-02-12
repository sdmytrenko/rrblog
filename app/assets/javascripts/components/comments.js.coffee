@Comments = React.createClass

  getInitialState: ->
    comments: @props.data
  getDefaultProps: ->
    comments: []

  addComment: (comment) ->
    comments = @state.comments.slice()
    comments.push comment
    @setState comments: comments

  # deleteComment: (comment) ->
  #   index = @state.comments.indexOf comment
  #   comments = React.addons.update(@state.comments, { $splice: [[index, 1]] })
  #   @replaceState comments: comments

  render: ->
    React.DOM.div
      className: 'comments'

      React.DOM.h3
        className: 'title'
        'Your comment :'
      React.createElement CommentForm, handleNewComment: @addComment
      React.DOM.hr null

      React.DOM.table
        className: 'table table-bordered'
        React.DOM.thead null,
          React.DOM.tr null,
        React.DOM.tbody null,
          for comment in @state.comments
            React.createElement Comment, key: comment.id, comment: comment #, handleDeleteComment: @deleteComment