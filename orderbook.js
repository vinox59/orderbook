const ReactDataGrid = require('react-data-grid');
const React = require('react');

const Example = React.createClass({
  getInitialState() {
    this.createRows();
    this._columns = [
      { key: 'tradeid', name: 'Trade ID' },
      { key: 'instrument', name: 'Instrument' },
      { key: 'count', name: 'Count' } ];

    return null;
  },

  createRows() {
    let rows = [];
    for (let i = 1; i < 1000; i++) {
      rows.push({
        tradeid: i,
        instrument: 'Instrument ' + i,
        count: i * 1000
      });
    }

    this._rows = rows;
  },

  rowGetter(i) {
    return this._rows[i];
  },

  render() {
    return  (
      <ReactDataGrid
        columns={this._columns}
        rowGetter={this.rowGetter}
        rowsCount={this._rows.length}
        minHeight={500} />);
  }
});

export default Example;