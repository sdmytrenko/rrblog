@CommentForm = React.createClass

  getInitialState: ->
    text: ''

  valid: ->
    @state.text

  handleChange: (e) ->
    name = e.target.name
    @setState "#{ name }": e.target.value

  handleSubmit: (e) ->
    e.preventDefault()
    $.comment '', { comment: @state }, (data) =>
      @props.handleNewComment data
      @setState @getInitialState()
    , 'JSON'

  render: ->
    React.DOM.form
      className: 'form-inline'
      React.DOM.div
        className: 'form-group'
        React.DOM.input
          type: 'text'
          className: 'form-control'
          placeholder: 'Text'
          name: 'text'
          value: @state.text
          onChange: @handleChange

      React.DOM.button
        type: 'submit'
        className: 'btn btn-primary'
        disabled: !@valid()
        'Create comment'