@Comment = React.createClass

  # handleDelete: (e) ->
  #   e.preventDefault()
  #   # yeah... jQuery doesn't have a $.delete shortcut method
  #   $.ajax
  #     method: 'DELETE'
  #     url: "/comments/#{ @props.comment.id }"
  #     dataType: 'JSON'
  #     success: () =>
  #       @props.handleDeletePComment @props.comment

  render: ->
    React.DOM.tr null,
      React.DOM.td null, @props.comment.text
      # React.DOM.a
      #   className: 'btn btn-danger'
      #   onClick: @handleDelete
      #   'Delete'