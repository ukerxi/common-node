/**
 * Created by ukerxi on 2017/6/19.
 */
var result_text = "test for module function";

module.exports = {
  init: function(app){
    app.get('/first_step', function(req, res){
      res.send(result_text);
    });
  }
}