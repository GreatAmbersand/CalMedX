var CBMedications = React.createClass({displayName: "CBMedications",

  render: function() {
    return (

      React.createElement("div", {className: "panel panel-primary"}, 

        React.createElement("div", {className: "panel-heading"}, 
          React.createElement("span", {className: "icon-i-pharmacy large"}), " Medication History"
        ), 

        React.createElement("div", {className: "panel-body"}
        ), 

        React.createElement("div", {className: "panel-footer"}, 
          React.createElement("a", {href: "#"}, 
            React.createElement("span", {className: "pull-left"}, "View Details"), 
            React.createElement("span", {className: "pull-right"}, React.createElement("i", {className: "fa fa-arrow-circle-right"})), 
            React.createElement("div", {className: "clearfix"})
          )
        )

      )

    );
  }
});

