var CBPatientAppointments = React.createClass({displayName: "CBPatientAppointments",

  render: function() {
	var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];
	var date = new Date();
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
	
    var today=monthNames[monthIndex]+' '+day+', '+ year;

    var patientAppointmentList = this.props.patients.map(function(patient, index) {

      var url = "patient.html?patient_id=" + patient.pid;

      return (
		  React.createElement("tr", {className: "success"}, 	
          React.createElement("td", null, React.createElement("a", {href: url}, patient.displayName)), 
		  React.createElement("td", null, patient.appointmentType), 
		  React.createElement("td", null, patient.appointmentReason), 
		  React.createElement("td", null, patient.status), 
		  React.createElement("td", null, patient.time)
		  )
      );
    });

    return (
	 React.createElement("div", {className: "panel panel-default"}, 
     	React.createElement("div", {className: "panel-heading"}, 
			"Dr Morris's Appointments for ", today
        ), 
		React.createElement("div", {className: "panel-body"}, 
			React.createElement("div", {className: "table-responsive"}, 
				React.createElement("table", {className: "table"}, 
					React.createElement("thead", null, 
						React.createElement("tr", null, 
							React.createElement("th", null, "Patient Name"), 
							React.createElement("th", null, "Appointment Type"), 
							React.createElement("th", null, "Appointment Reason"), 
							React.createElement("th", null, "Status"), 
							React.createElement("th", null, "Time")
						)
					), 
					React.createElement("tbody", null, 
						patientAppointmentList
					)
				)
			)
		)
	 )	
    );
  }
});

