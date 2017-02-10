@IndexPost = React.createClass

  render: ->
    React.DOM.tr null,
      React.DOM.h3 null, @props.post.title
      React.DOM.h5 null, @props.post.description
      React.DOM.a
        className: "btn btn-primary btn-mg"
        href: "/posts/" + @props.post.id
        role: "button"
        "Learn more »"
      React.DOM.hr null
