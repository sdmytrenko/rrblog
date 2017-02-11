@IndexPosts = React.createClass

  getInitialState: ->
    posts: @props.data

  getDefaultProps: ->
    posts: []

  addPost: (post) ->
    posts = @state.posts.slice()
    posts.push post
    @setState posts: posts

  render: ->
    React.DOM.div
      className: 'posts'
      React.DOM.h2
        className: 'title'
        'All Posts'

      React.DOM.hr null
      React.createElement PostForm, handleNewPost: @addPost
      React.DOM.hr null

      React.DOM.table
        className: 'table'
        React.DOM.thead null,
          React.DOM.tr null,
        React.DOM.tbody null,
          for post in @state.posts
            React.createElement IndexPost, key: post.id, post: post