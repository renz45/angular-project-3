angular.module('NoteWrangler')
  .config(function($routeProvider) {
    $routeProvider
      .when('/', { redirectTo: '/notes' })
      .when('/notes', {
        templateUrl: "assets/templates/notes/index.html",
        controller: "NotesIndexController"
      })
      .when('/notes/new', {
        templateUrl: "assets/templates/notes/new.html",
        controller: "NotesCreateController"
      })
      .when('/notes/:id', {  ///:id is a bit of a wildcard and the route goes through each item.
        templateUrl: "assets/templates/notes/show.html",
        controller: "NotesShowController"
      })
      .when('/notes/:id/edit', {
        templateUrl: "assets/templates/notes/ed.html",
        controller: "NotesEditController"
      })
  });
