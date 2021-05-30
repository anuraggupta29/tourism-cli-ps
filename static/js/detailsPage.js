var place = {name:'Cubbon Park',
    location:'Central Bangalore',
    distance:2.2,
    congestion:3,
    opentime: '9:00 AM',
    closetime: '6:00 PM',
    rating: 4.3,
    safetyScore: 3,
    coordinates: [24.2314, 73.8765],
    description: 'Cubbon Park, officially called Sri Chamarajendra Park is a landmark area of Bengaluru city, located within the heart of the city in the Central Administrative Area.',
};

var congestionMap = [
    {congestionLabel:'closed',iconLink:'static/img/closed.png'},
    {congestionLabel:'low',iconLink:'static/img/free.png'},
    {congestionLabel:'moderate',iconLink:'static/img/moderate.png'},
    {congestionLabel:'high',iconLink:'static/img/crowded.png'},
    {congestionLabel:'very high',iconLink:'static/img/overcrowded.png'}
];

var safetyMap = [
    {iconLink:'static/img/safety1.png'},
    {iconLink:'static/img/safety2.png'},
    {iconLink:'static/img/safety3.png'},
    {iconLink:'static/img/safety4.png'},
    {iconLink:'static/img/safety5.png'}
];

var state = ['CLOSED', 'OPEN NOW']

document.querySelector('.headLabel').innerHTML = place.name
document.querySelector('.addressLabel').innerHTML = place.location
document.querySelector('.openCloseInfo').firstChild.innerHTML = state[1]
document.querySelector('.opentime').innerHTML = place.opentime
document.querySelector('.closetime').innerHTML = place.closetime
document.querySelector('.descriptionText').innerHTML = place.description
document.querySelector('.congestionLabel').innerHTML = congestionMap[place.congestion].congestionLabel
document.querySelector('.starRating').innerHTML = place.rating
document.querySelector('.distanceLabel').innerHTML = place.distance
document.querySelector('.safetyscore').innerHTML = place.safetyScore
document.querySelector('.congestionIcon').src = congestionMap[place.congestion].iconLink
document.querySelector('.congestionIcon').src = congestionMap[place.congestion].iconLink
document.querySelector('.safetyIcon').src = safetyMap[place.safetyScore-1].iconLink


bookTicketBtn = document.querySelector('.bookTicketBtn');
bookTicketBtn.addEventListener('click',function(){
    console.log(bookTicketBtn);
    window.location = 'bookTicket.html'
});
