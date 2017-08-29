/*
This is empty on purpose! Your code to build the resume will go here.
 */
var DATA = "%data%";

 var bio = {
  "name": "Tyler Schmidt",
  "role": "User Experience Designer",
  "contacts": {
    "mobile": "804-519-7677",
    "email": "schmidt197@gmail.com",
    "github": "TYLANDER",
    "twitter": "@tylerschmidt",
    "location": "San Francisco"
    },
    "biopic": "images/Tyler_Profile_1_thailand.jpg",
    "welcomeMessage": "Hi, welcome to my personal space.",
    "skills": ["design", "code", "fully functional brain", "good advice"]
};

var work = {
  "jobs": [
    {
    "employer": "Pylon",
    "title": "Design Founder",
    "location": "San Francisco, California",
    "dates": "July 2015 - Present",
    "description": "Founder of Pylon Design Consultancy - a distributed studio model"
  },
    {
    "employer": "AKQA",
    "title": "Sr. User Experience Designer",
    "location": "San Francisco, California",
    "dates": "August 2013 - July 2015",
    "description": "Worked on omnichannel experiences for AAA Brands like Activision and Levis."
    }
  ]
};

var projects = {
  "projects": [
    {
      "title": "Destiny Website",
      "dates": "January 2015",
      "description": "Design the marketing website for the Destiny video game launch",
      "images": ["images/DESTINY_0002.jpg", "images/DESTINY_0003.jpg"]
    },
    {
      "title": "Muscle Butter",
      "dates": "May 2017",
      "description": "Design a brand website for the best client, my wife!",
      "images": ["images/Musclebutter_macbook_07May17.png"],
      "url": "https://www.themusclebutter.com/"
    }
  ]
};

var education = {
  "schools": [
    {
      "name": "Johns Hopkins",
      "location": "Baltimore, MD",
      "degree": "BA",
      "dates": "2005-2009",
      "majors": ["Philosophy", "Economics"]
    },
    {
      "name": "VCU Brandcenter",
      "location": "Richmond, VA",
      "degree": "Masters of Science",
      "majors": ["User Experience Design"],
      "dates": "2009-2011"
    }
  ],
  "onlineCourses": [
    {
    "school": "Udacity",
    "title": "Front-End Web Developer Nanodegree",
    "dates": "Jan-Sept 2017",
    "url": "https://www.udacity.com/"
    }
  ]
};

bio.display = function() {
var formattedName = HTMLheaderName.replace(DATA, bio.name);
var formattedRole = HTMLheaderRole.replace(DATA, bio.role);
var formattedBioPic = HTMLbioPic.replace(DATA, bio.picture);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace(DATA, bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace(DATA, bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace(DATA, bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace(DATA, bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace(DATA, bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);
$('#header').append(HTMLskillsStart);

  for (var i = 0; i < bio.skills.length;  i++) {
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkills);
  }

  for(var u = 0; u < formattedContactInfo.length; u++) {
    $("#topContacts").append(formattedContactInfo[u]);
  	$("#footerContacts").append(formattedContactInfo[u]);
  }
};

bio.display();

work.display = function() {

	if(work.jobs.length > 0) {

		$("#workExperience").append(HTMLworkStart);

		for(var i = 0; i < work.jobs.length; i++){
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDatesWorked);
			$(".work-entry:last").append(formattedWorkDescription);
    }
}
};

work.display();

projects.display = function() {
	if(projects.projects.length > 0) {
		for(var i = 0; i < projects.projects.length; i++ ) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			for(i = 0; i < projects.projects[i].images.length; i++) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img] );
				$(".project-entry:last").append(formattedProjectImage);
			}
		}
	}
};

projects.display();


education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(var i = 0; i < education.schools.length; i++) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
		}

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(var u = 0; u < education.onlineCourses.length; u++) {
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}

	}
};

education.display();

/**
 * Skills Chart
 */

$("#mapDiv").append(googleMap);


$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});
