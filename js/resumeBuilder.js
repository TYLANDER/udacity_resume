/*
This is my resume, first stable build!
 */
/*
This is the Data variable i use to route data to and from the helper.js file.
 */
var DATA = "%data%";

/*
These are my resume data objects.
*/
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
    "jobs": [{
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
    "projects": [{
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
    "schools": [{
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
    "onlineCourses": [{
        "school": "Udacity",
        "title": "Front-End Web Developer Nanodegree",
        "dates": "Jan-Sept 2017",
        "url": "https://www.udacity.com/"
    }]
};

/*
These are the display functions. They pull data from the objects above, and render it in the DOM on index.html by referencing the helper.js file.
*/

bio.display = function() {
    var formattedName = HTMLheaderName.replace(DATA, bio.name);
    var formattedRole = HTMLheaderRole.replace(DATA, bio.role);
    var formattedBioPic = HTMLbioPic.replace(DATA, bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace(DATA, bio.welcomeMessage);
    var formattedMobile = HTMLmobile.replace(DATA, bio.contacts.mobile);
    var formattedEmail = HTMLmobile.replace(DATA, bio.contacts.email);
    var formattedGithub = HTMLmobile.replace(DATA, bio.contacts.github);
    var formattedLocation = HTMLmobile.replace(DATA, bio.contacts.location);

    var formattedContactInfo = [];
    formattedContactInfo.push(HTMLmobile.replace(DATA, bio.contacts.mobile));
    formattedContactInfo.push(HTMLemail.replace(DATA, bio.contacts.email));
    formattedContactInfo.push(HTMLgithub.replace(DATA, bio.contacts.github));
    formattedContactInfo.push(HTMLtwitter.replace(DATA, bio.contacts.twitter));
    formattedContactInfo.push(HTMLlocation.replace(DATA, bio.contacts.location));

    $("#header").prepend(formattedRole, formattedName);
    $("#header").append(formattedWelcomeMsg, formattedBioPic, HTMLskillsStart);
    $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
    /*
   For Loop for appending the formatted skills. However, they are not rendering.
    */
    for (var f = 0; f < bio.skills.length; f++) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[f]);
        $("#skills").append(formattedSkills);
    }


};

bio.display();

work.display = function() {
    /*
These display functions use if statements to render data only 'if' there is data to render. More stable than the bio.display funciton.
  */

    if (work.jobs.length > 0) {

        $("#workExperience").append(HTMLworkStart);

        for (var i = 0; i < work.jobs.length; i++) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].dates);
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
    if (projects.projects.length > 0) {
        for (var i = 0; i < projects.projects.length; i++) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);

            for (i = 0; i < projects.projects[i].images.length; i++) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[i]);
                $(".project-entry:last").append(formattedProjectImage);
            }
        }
    }
};

projects.display();


education.display = function() {
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {
        for (var i = 0; i < education.schools.length; i++) {
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

        if (education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            for (var u = 0; u < education.onlineCourses.length; u++) {
                $("#education").append(HTMLschoolStart);
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[u].title).replace("#", education.onlineCourses[u].url);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[u].school);
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[u].completed);
                var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[u].url).replace("#", education.onlineCourses[u].url);

                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                $(".education-entry:last").append(formattedOnlineDates);
                $(".education-entry:last").append(formattedOnlineURL);
            }
        }

    }
};

education.display();

/*
Map call is here.
 */

$("#mapDiv").append(googleMap);

/*
Click tracker I left on from earlier lessons. I like click tracking.
*/

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});
