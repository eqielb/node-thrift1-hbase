var HBase = require('../');

var config = {
  host: 'qihe2081',
  prot: 9090
};

var hbase = HBase.client(config);

/* rows */
hbase.getClient()
  .then(function(err, client) {

  })

// get.add('webdata');
//
// hbaseClient.get('spiderweb', get, gunction(err, data) {
//   if (err) {
//     console.log('error:', err);
//     return;
//   }
//   console.log('spiderweb get success');
//   console.log(err, data);
//   console.log(err,data.columnValues[0].value);
// });
