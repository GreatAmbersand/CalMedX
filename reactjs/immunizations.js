var CBImmunizations = React.createClass({

  render: function() {

    var immunizationList = this.props.immunizations.map(function(immunization, index) {
      return (
        <div key={index} className="list-group-item">
          <dt>{immunization.displayName}</dt>
		  <dl>{immunization.date}</dl>
		  <dl>CVX: {immunization.cvx}</dl>
        </div>
      );
    });

    return (

      <div className="panel panel-danger">

        <div className="panel-heading">
          <small>Immunization</small>
        </div>

        <div className="list-group">
          {immunizationList}
        </div>

        <a href="#">
        <div className="panel-footer">
          <div className="text-center">
            Add <i className="fa fa-plus"></i>
          </div>
        </div>
        </a>

      </div>

    );
  }
});

