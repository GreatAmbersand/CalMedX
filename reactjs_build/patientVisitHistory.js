var CBPatientVisitHistories = React.createClass({displayName: "CBPatientVisitHistories",
  getInitialState: function() {
    return {liked: false};
  },
  handleClick: function(divid) {
  	var newdivid = divid +'div';
	if ($('#'+newdivid).hasClass('nodisplay')){
    	$('#'+newdivid).removeClass('nodisplay');
    	$('#'+divid+'link').html(' [-] ');
    }else{
    	$('#'+newdivid).addClass('nodisplay');
    	$('#'+divid+'link').html(' [+] ');
    }
  },

  render: function() {

    var patientVisitHistoryList = this.props.patientVisitHistories.map(function(patientVisitHistory, index) {
	var i =index+ 'link';
	var divid =index+ 'div';
      return (
        React.createElement("div", {key: index, className: "list-group-item"}, 
          React.createElement("dt", null, patientVisitHistory.dateString, " : ", patientVisitHistory.physician), 
          React.createElement("dl", null, patientVisitHistory.brief, 
         	React.createElement("span", {className: "linkClass", onClick: this.handleClick.bind(this,index), id: i}, "[+]")
		  ), 
          React.createElement("div", {id: divid, className: "nodisplay"}, 
			React.createElement("br", null), 
          	React.createElement("p", null, patientVisitHistory.cc), 
          	React.createElement("p", null, patientVisitHistory.vitals)
          )
        )
      );
    }, this);

    return (

      React.createElement("div", {className: "panel panel-info"}, 

        React.createElement("div", {className: "panel-heading"}, 
          "Patient Visit History"
        ), 

        React.createElement("div", {className: "list-group"}, 
          patientVisitHistoryList
        )

      )

    );
  }
});

