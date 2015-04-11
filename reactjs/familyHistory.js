var CBFamilyHistories = React.createClass({

  render: function() {

    var familyHistoryList = this.props.familyHistories.map(function(familyHistory, index) {
      return (
        <div key={index} className="list-group-item">
          <dt>{familyHistory.displayName}</dt>
        </div>
      );
    });

    return (

      <div className="panel panel-success">

        <div className="panel-heading">
          <small>Family History</small>
        </div>

        <div className="list-group">
          {familyHistoryList}
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

