
//CATEGORIES CAN BE A TABLE IN DATABASE (ALTHOUGH NOT NECESSARY)
var categories = [
    {label:'Park',iconLink:'static/img/park256.png'},
    {label:'Museum',iconLink:'static/img/museum256.png'},
    {label:'Monument',iconLink:'static/img/monument256.png'},
    {label:'Temple',iconLink:'static/img/worship256.png'},
    {label:'Lake',iconLink:'static/img/lake256.png'},
    {label:'Library',iconLink:'static/img/library256.png'},
    {label:'Amusement Park',iconLink:'static/img/amusement256.png'},
    {label:'Hotel',iconLink:'static/img/hotel256.png'},
    {label:'Zoo',iconLink:'static/img/zoo256.png'},
];

//ITERATIVELY LOAD THE TABLE ROWS AND CREATE HTML CONTENT FOR EACH CATEGORY
var htmlcontent;
for (var j = 0; j < categories.length ; j++){
    var htmlcontent = '<div class = "categoryBox"><img class = "categoryIcon" src="'+categories[j].iconLink+'"><p class = "categoryLabel">'+categories[j].label+'</p></div>';
	document.querySelector('.containerBox').insertAdjacentHTML('beforeend',htmlcontent);
}

var categoryBoxes = Array.from(document.querySelectorAll('.categoryBox'));
var selectedLabel;

// GET THE SELECTED CATEGORY
categoryBoxes.forEach(function(current,index){
	current.addEventListener('click',function(){
        selectedLabel = current.children[1].innerHTML;
        console.log(selectedLabel);

        //SEND THE SELECTED CATEGORY TO NEXT PAGE (LINK THE NEXT PAGE USING DJANGO!!!)
        window.location = 'selectedList.html'

	}); 
});