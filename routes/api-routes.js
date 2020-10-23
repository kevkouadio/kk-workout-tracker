const db = require("../models");

module.exports = function(app) {

  app.get("/api/workouts", function(req, res) {
    db.Workout.find({}).then(function(dbWorkouts) {
      res.json(dbWorkouts);
    });
  });

  

  app.put("/api/workouts/:id", function(req, res) {
    db.Workout.findOneAndUpdate({_id:req.params.id}, {$set:  {exercises: req.body}}, { new: true } ).then(function(dbWorkouts) {
      res.json(dbWorkouts);
    });
  });

  app.get("/api/workouts/range", function(req, res) {
    db.Workout.find({}).populate("workouts").then(function(dbWorkouts) {
      res.json(dbWorkouts);
    });
  });
};