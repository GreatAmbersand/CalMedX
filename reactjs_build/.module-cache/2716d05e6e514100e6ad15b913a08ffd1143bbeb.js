var CBMedications = React.createClass({displayName: "CBMedications",

  render: function() {

    var medicationList = this.props.medications.map(function(medication) {
      return (
        React.createElement("div", {className: "list-group-item"}, 
          React.createElement("h4", null, medication.displayName), 
          React.createElement("h5", null, medication.dosage), 
          React.createElement("h5", null, medication.dateString)
          
        )
      );
    });

    return (

      React.createElement("div", {className: "panel panel-primary"}, 

        React.createElement("div", {className: "panel-heading"}, 
          React.createElement("span", {className: "icon-i-pharmacy"}), 
          "Medication History"
        ), 

        React.createElement("div", {className: "list-group"}, 
          medicationList
        ), 

        React.createElement("a", {href: "#"}, 
        React.createElement("div", {className: "panel-footer"}, 
          React.createElement("div", {className: "text-center"}, 
            "Add ", React.createElement("i", {className: "fa fa-plus"})
          )
        )
        )

      )

    );
  }
});

