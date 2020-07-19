var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");
var User = require("./models/user");

var data = [
  {
    name: "Cloud's Rest",
    image:
      "https://images.pexels.com/photos/6757/feet-morning-adventure-camping.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et mi eu risus venenatis bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus faucibus ipsum in urna lacinia euismod. Aliquam a accumsan metus. Donec imperdiet accumsan eleifend. Pellentesque volutpat cursus ultrices. Morbi molestie massa id velit venenatis mollis. Sed eros erat, semper sit amet diam non, pretium commodo velit. Nulla at varius massa. Curabitur venenatis lorem a luctus eleifend. Nulla interdum, magna in hendrerit congue, turpis tellus maximus justo, in semper lorem nulla et enim. Nullam eros libero, aliquet a nisi eget, ultrices ullamcorper turpis. Nullam commodo faucibus accumsan. Ut posuere a elit id eleifend.",
  },
  {
    name: "Desert Mesa",
    image:
      "https://images.pexels.com/photos/45241/tent-camp-night-star-45241.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et mi eu risus venenatis bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus faucibus ipsum in urna lacinia euismod. Aliquam a accumsan metus. Donec imperdiet accumsan eleifend. Pellentesque volutpat cursus ultrices. Morbi molestie massa id velit venenatis mollis. Sed eros erat, semper sit amet diam non, pretium commodo velit. Nulla at varius massa. Curabitur venenatis lorem a luctus eleifend. Nulla interdum, magna in hendrerit congue, turpis tellus maximus justo, in semper lorem nulla et enim. Nullam eros libero, aliquet a nisi eget, ultrices ullamcorper turpis. Nullam commodo faucibus accumsan. Ut posuere a elit id eleifend.",
  },
  {
    name: "Canyon Floor",
    image:
      "https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et mi eu risus venenatis bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus faucibus ipsum in urna lacinia euismod. Aliquam a accumsan metus. Donec imperdiet accumsan eleifend. Pellentesque volutpat cursus ultrices. Morbi molestie massa id velit venenatis mollis. Sed eros erat, semper sit amet diam non, pretium commodo velit. Nulla at varius massa. Curabitur venenatis lorem a luctus eleifend. Nulla interdum, magna in hendrerit congue, turpis tellus maximus justo, in semper lorem nulla et enim. Nullam eros libero, aliquet a nisi eget, ultrices ullamcorper turpis. Nullam commodo faucibus accumsan. Ut posuere a elit id eleifend.",
  },
];

function seedDB() {
  //Remove all campgrounds
  Campground.deleteMany({}, function (err) {
    if (err) {
      console.log(err);
    }
    console.log("removed campgrounds!");
    Comment.deleteMany({}, function (err) {
      if (err) {
        console.log(err);
      }
      console.log("removed comments!");
    });

    //Add a few campgrounds
    data.forEach(function (seed) {
      Campground.create(seed, function (err, campground) {
        if (err) {
          console.log(err);
        } else {
          console.log("added a campground");
          //create a comment
          Comment.create(
            {
              text: "This place is great, but I wish there was internet",
              author: "Homer",
            },
            function (err, comment) {
              if (err) {
                console.log(err);
              } else {
                campground.comments.push(comment);
                campground.save();
                console.log("Created new comment");
              }
            }
          );
        }
      });
    });
  });

  //Add a few comments
}

module.exports = seedDB;