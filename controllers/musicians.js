//exports.findAll = function() {};
var mongoose = require('mongoose');
Musician = mongoose.model('Musician');
exports.findAll = function(req, res){
	Musician.find({}, function(err, results){
		return res.send(results);
	});
};
exports.findById = function(req, res){
  var id = req.params.id;
  Musician.findOne({'_id':id},function(err, result) {
    return res.send(result);
  });
};
exports.add = function(req, res) {
  Musician.create(req.body, function (err, musician) {
    if (err) return console.log(err);
    return res.send(musician);
  });
};
exports.update = function(req, res) {
  var id = req.params.id;
  var updates = req.body;

  Musician.update({"_id":id}, req.body,
    function (err, numberAffected) {
      if (err) return console.log(err);
      console.log('Updated %d musicians', numberAffected);
      return res.send(202);
  });
};
exports.delete = function(req, res){
  var id = req.params.id;
  Musician.remove({'_id':id},function(result) {
    return res.send(result);
  });
};
exports.import = function(req, res){
	Musician.create(
		{"name": "anshu", band: "linkin park", "instrument": "piano"},
		{"name": "anshu1", band: "linkin park1", "instrument": "piano1"},
		{"name": "anshu2", band: "linkin park2", "instrument": "piano2"},
		{"name": "anshu3", band: "linkin park3", "instrument": "piano3"}
		, function(err){
			if (err) {
				return console.log(err);
			}else{
				return res.send(202);
			};
		});
};
/*
exports.findAll = function(req, res){
  res.send([{
    "id": 1,
    "name": "Max",
    "band": "Maximum Pain",
    "instrument": "guitar"
  }]);
};
*/