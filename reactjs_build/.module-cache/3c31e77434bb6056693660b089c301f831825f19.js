var CBMedications = React.createClass({displayName: "CBMedications",

  render: function() {
    return (

      React.createElement("div", {className: "panel panel-primary"}, 

        React.createElement("div", {className: "panel-heading"}, 
          React.createElement("span", {className: "icon-i-pharmacy"}), " Medication History"
        ), 

        React.createElement("div", {className: "panel-body"}
        ), 

        React.createElement("div", {className: "panel-footer"}, 
          React.createElement("a", {href: "#"}, 
            React.createElement("p", {class: "text-center"}, 
              "Add ", React.createElement("i", {className: "fa fa-plus"})
            )
          )
        )

      )

    );
  }
});

