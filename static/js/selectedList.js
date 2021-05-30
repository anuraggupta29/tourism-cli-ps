//CATEGORY LIST WILL BE OBTAINED FROM A TABLE IN DATABASE OR OBTAINED THROUGH API
var categoryList = [
    {name:'Cubbon Park',location:'Central Bangalore',distance:1.9,congestion:1},
    {name:'Lalbagh Gardens',location:'Lalbagh',distance:2.2,congestion:3},
    {name:'Lumbini Gardens',location:'Nagavara, North Bangalore',distance:3.6,congestion:0},
    {name:'Bannerghatta Park',location:'South Bangalore',distance:5.6,congestion:4},
    {name:'Big Banyan Tree',location:'Ketholi Village',distance:10.3,congestion:2},
    {name:'Cariappa Memorial Park',location:'Shivaji Nagar, Bangalore',distance:18.2,congestion:1},
    {name:'JP Park',location:'Mathikere, Bangalore',distance:21.2,congestion:1},
    {name:'Freedom Park',location:'Gandhi Nagar, Bangalore',distance:3.6,congestion:0},
    {name:'Bugle Rock Park',location:'Bull Temple Road',distance:18.2,congestion:1},
    {name:'Incture Park',location:'Central Bangalore',distance:1.9,congestion:1},
    {name:'Incture Park 2',location:'Lalbagh',distance:2.2,congestion:3},
    {name:'Incture Park 3',location:'Nagavara, North Bangalore',distance:3.6,congestion:0},
    {name:'Incture Park 4',location:'South Bangalore',distance:5.6,congestion:4},
    {name:'Incture Park 5',location:'Ketholi Village',distance:10.3,congestion:2},
    {name:'Incture Park 6',location:'Shivaji Nagar, Bangalore',distance:18.2,congestion:1},
    {name:'Incture Park 7',location:'Mathikere, Bangalore',distance:21.2,congestion:1},
    {name:'Incture Park 8',location:'Gandhi Nagar, Bangalore',distance:3.6,congestion:0},
    {name:'Incture Park 9',location:'Bull Temple Road',distance:18.2,congestion:1},
    {name:'Incture Park 10',location:'Central Bangalore',distance:1.9,congestion:1},
    {name:'Incture Park 11',location:'Lalbagh',distance:2.2,congestion:3},
    {name:'Incture Park 12',location:'Nagavara, North Bangalore',distance:3.6,congestion:0},
    {name:'Incture Park 13',location:'South Bangalore',distance:5.6,congestion:4},
    {name:'Incture Park 14',location:'Ketholi Village',distance:10.3,congestion:2},
    {name:'Incture Park 15',location:'Shivaji Nagar, Bangalore',distance:18.2,congestion:1},
];

//CONGESTIONMAP CAN BE A TABLE IN DATABASE (ALTHOUGH NOT NECESSARY)
var congestionMap = [
    {congestionLabel:'closed',iconLink:'static/img/closed.png'},
    {congestionLabel:'low',iconLink:'static/img/free.png'},
    {congestionLabel:'moderate',iconLink:'static/img/moderate.png'},
    {congestionLabel:'high',iconLink:'static/img/crowded.png'},
    {congestionLabel:'very high',iconLink:'static/img/overcrowded.png'}
];

var pageNo = 0;
var pageSize = 8;

prevPage = document.querySelector('.prevPageBtn');
nextPage = document.querySelector('.nextPageBtn');

loadNextPage(loadNewEventListener);
prevPage.disabled = true;

function loadNextPage(callbackFunction){
    var low = pageSize*pageNo;
    var high = low+pageSize;
    document.querySelector('.pageBox').innerHTML = '';
    
    for (var j = low; j < high ; j++){
        var htmlcontent = '<div class = "categoryElement"><div class="labelsLeft"><p class="nameLabel">'+categoryList[j].name+'</p><p class="secondaryLabel">'+categoryList[j].location+'</p></div><div class="rightBlock"><div class="distanceBlock"><p class="distanceLabel">'+categoryList[j].distance+'</p><p class="distanceLowerLabel">km away</p></div><div class="borderline"></div><div class="congestionBlock"><img class="congestionIcon" src="'+congestionMap[categoryList[j].congestion].iconLink+'"><p class="congestionLabel">'+congestionMap[categoryList[j].congestion].congestionLabel+'</p></div></div></div>';
        document.querySelector('.pageBox').insertAdjacentHTML('beforeend',htmlcontent);
    };
    pageNo += 1;
    document.querySelector('.pageNo').innerHTML = pageNo;
    prevPage.disabled = false;
    nextPage.disabled = false;
    if (pageNo == categoryList.length/pageSize){
        nextPage.disabled = true;
    };
    callbackFunction();
}

function loadPrevPage(callbackFunction){
    var low = pageSize*(pageNo-2);
    var high = low+pageSize;
    document.querySelector('.pageBox').innerHTML = '';
    
    for (var j = low; j < high ; j++){
        var htmlcontent = '<div class = "categoryElement"><div class="labelsLeft"><p class="nameLabel">'+categoryList[j].name+'</p><p class="secondaryLabel">'+categoryList[j].location+'</p></div><div class="rightBlock"><div class="distanceBlock"><p class="distanceLabel">'+categoryList[j].distance+'</p><p class="distanceLowerLabel">km away</p></div><div class="borderline"></div><div class="congestionBlock"><img class="congestionIcon" src="'+congestionMap[categoryList[j].congestion].iconLink+'"><p class="congestionLabel">'+congestionMap[categoryList[j].congestion].congestionLabel+'</p></div></div></div>';
        document.querySelector('.pageBox').insertAdjacentHTML('beforeend',htmlcontent);
    };
    pageNo -= 1;
    document.querySelector('.pageNo').innerHTML = pageNo;
    prevPage.disabled = false;
    nextPage.disabled = false;
    if (pageNo == 1){
        prevPage.disabled = true;
    };
    callbackFunction();
}

nextPage.addEventListener('click', function(){loadNextPage(loadNewEventListener)});
prevPage.addEventListener('click', function(){loadPrevPage(loadNewEventListener)});


function loadNewEventListener() {
    document.querySelectorAll('.categoryElement').forEach(function (current, index) {
        current.addEventListener('click', function () {
            var selectedElement = current.children[0].children[0].innerHTML;
            console.log(selectedElement);

            //GO TO VIEW DETAILS PAGE
            window.location = 'detailsPage.html'

        });
    });
};