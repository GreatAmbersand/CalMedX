var CMAppointmentsNavi = React.createClass({displayName: "CMAppointmentsNavi",
  render: function() {
    
    var topBarStyle = {
      "marginBottom": 0
    };

    return (
      React.createElement("nav", {className: "navbar navbar-default navbar-static-top", role: "navigation", style: topBarStyle}, 

        React.createElement("div", {className: "navbar-header"}, 
          React.createElement("a", {className: "navbar-brand", href: "index.html"}, "eCalMedX")
        ), 
		React.createElement("div", {className: "text-center"}, React.createElement("div", {className: "panel-heading"}, "Primary Care Clinic")), 

        React.createElement("ul", {className: "nav navbar-top-links navbar-right"}, 
          React.createElement("li", {className: "dropdown"}, 
              React.createElement("a", {className: "dropdown-toggle", "data-toggle": "dropdown", href: "#"}, 
                  React.createElement("i", {className: "fa fa-user fa-fw"}), "  ", React.createElement("i", {className: "fa fa-caret-down"})
              ), 
              React.createElement("ul", {className: "dropdown-menu dropdown-user"}, 
                  React.createElement("li", null, React.createElement("a", {href: "#"}, React.createElement("i", {className: "fa fa-user fa-fw"}), " User Profile")
                  ), 
                  React.createElement("li", null, React.createElement("a", {href: "#"}, React.createElement("i", {className: "fa fa-gear fa-fw"}), " Settings")
                  ), 
                  React.createElement("li", {className: "divider"}), 
                  React.createElement("li", null, React.createElement("a", {href: "#"}, React.createElement("i", {className: "fa fa-sign-out fa-fw"}), " Logout")
                  )
              )
          )
        )
    )
    );
  }
});

