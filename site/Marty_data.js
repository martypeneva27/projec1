/**
 * Create Marty object containing the CV information + some methods
 */


// Prepare the constructor
function Person(objectProperties){
	this.firstName = objectProperties.firstName;
	this.lastName = objectProperties.lastName;
	this.address = objectProperties.address;
	this.email = objectProperties.email;
	this.dateOfBirth = objectProperties.dateOfBirth;
	this.phoneNumber = objectProperties.phoneNumber;
	this.education = objectProperties.education; // array with objects
	this.career = objectProperties.career; // array with objects;
	this.profileImage = objectProperties.profileImage;
	this.bgpicture = objectProperties.bgpicture;
	this.navTabs = objectProperties.navTabs;
	this.asideTabs = objectProperties.asideTabs; // should be per one navTab - example tabs for Information navTab {navTab1: []}
		
	this.getEducation = function() {return this.education;};
	this.getCareer = function() {return this.career;};
	this.addCareer = function() {return this.career;};
	this.addEducation = function() {return this.career;};
	this.editCareerId = function() {return this.career;};
	this.editEducationId = function() {return this.career;};
	this.editPersonalInfo = function() {return this.career;};
	this.deleteHideCareerId = function() {return this.career;};
	this.deleteHideEducationId = function() {return this.career;};
	this.deleteHidePersonalInfo = function() {return this.career;};
	this.addPersonalInfo = function() {};
	this.addProfileImage = function() {};
	this.addLogoPicture = function() {};
	this.addBackgroundPicture = function() {};
	this.addNewNavTabs = function() {};
	this.addNewAsideTabs = function() {};
	this.getCurrentNavTabs = function() {return this.navTabs;};
	this.getCurrentAsideTabs = function() {return this.asideTabs;};
	this.moveEducationCreerId = function() {};
	this.orderEducationCareer = function(ascDesc) {};
};



// Create first person object
var staticData = {
		firstName : "Martina",
		lastName : "Peneva",
		address : "Sofia",
		email : "martypeneva@gmail.com",
		dateOfBirth : "15.12.2000",
		phoneNumber : "123456789",
		profileImage: "SRC",
		bgpicture: "BG_SRC",
		education : [{
			place: "IT TALENTS TRAINING CAMP",
			period: "03.2015 – 06.2015",
			disciplines: "JavaScript, HTML, CSS and jQuery",
			studyIn: "",
			finalProject: "https://bitbucket.org/DailyOrganizer"
			
		}, 
		{
			place: "UNIVERSITY FOR LIBRARY STUDIES AND INFORMATION TECHNOLOGIES",
			period: "Since 2015",
			disciplines: "",
			studyIn: "Bachelor’s in Computer Science",
			finalProject: ""
		}, 
		{
			place: "UNIVERSITY OF SOFIA “ST. KLIMENT OHRIDSKI”",
			period: "2010 – 2016",
			disciplines: "",
			studyIn: "Bachelor’s in History and Geography",
			finalProject: ""
		},
		{
			place: "NATIONAL HIGH SCHOOL OF SCIENCE AND MATEMATHICS “ACAD. L.CHAKALOV”",
			period: "2005 – 2010",
			disciplines: "",
			studyIn: "",
			finalProject: ""
		}],
		career : [{
			place: "VERINT SYSTEMS BULGARIA",
			period: "08.2015 – 09.2016",
			position: "Programmer",
			activities: ["Write programs using JavaScript"],
			url: "something",
			image: "URL"
		}, 
		{
			place: "BPS LTD.",
			period: "07.2009 – 03.2015",
			position: "Graphic Designer IT",
			activities: ["Prepress"],
		}, 
		{
			place: "NATIONAL MUSEUM OF NATURAL HISTORY",
			period: "2013 – 2014",
			position: "Guide",
			activities: ["Presenting the exhibits in the museum to the visitors"],
		}],
		navTabs: ["Information"],
		asideTabs: {information: ["About", "Education", "Career"]}, // should be per one navTab - example tabs for Information navTab
};

var marty = new Person(staticData);
console.log(JSON.stringify(staticData));
console.log(JSON.stringify(marty));
