var CBPatientVisitHistories = React.createClass({
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
        <div key={index} className="list-group-item">
          <dt>{patientVisitHistory.dateString} : {patientVisitHistory.physician}</dt>
          <dl>{patientVisitHistory.brief}
         	<span className='linkClass' onClick={this.handleClick.bind(this,index)} id={i}>[+]</span>
		  </dl>
          <div id={divid} className='nodisplay'>
			<br></br>
          	<p>{patientVisitHistory.cc}</p>
          	<p>{patientVisitHistory.vitals}</p>
          </div>
        </div>
      );
    }, this);

    return (

      <div className="panel panel-info">

        <div className="panel-heading">
          Patient Visit History
        </div>

        <div className="list-group">
          {patientVisitHistoryList}
        </div>

      </div>

    );
  }
});

