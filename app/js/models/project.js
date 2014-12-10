'user strict';

var Project = function (id, name, description, site, author, fileSize, creationDate) {
  this.$id = id;
  this.name = name;
  this.description = description;
  this.site = site;
  this.author = author;
  this.fileSize = fileSize;
  this.creationDate = creationDate;
}

var Projects = function () {
  projects = [];
  this.projects = projects;
  this.loaded = 0;

  this.add = function(prj) {
    projects.splice(projects.length,0,prj);
  }

  this.get = function(id) {
    for(var i=0; i<projects.length; i++) {

      var prj = projects[i];
      if(prj.$id == id)
        return prj;
    }
  }

  this.remove = function(id) {
    for(var i=0; i<projects.length; i++) {

      if(projects[i].$id == id) {
        projects.splice(i,1);
        return;
      }

    }
  }

  this.update = function(itemOrId) {
    alert(itemOrId);
  }
}

App.factory('Projects', function() {
  return new Projects();
});