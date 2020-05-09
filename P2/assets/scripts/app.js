const xhr = new XMLHttpRequest();
var state = [];
var count = [];
var color = [];

function rgbColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
  


xhr.open('GET', 'https://api.covid19india.org/data.json');

// set response format
xhr.responseType = 'json';

xhr.send();

xhr.onload = () => {
    // get JSON response
    const data = xhr.response;
 
    // log details
    for(var i = 1 ;i < data.statewise.length;i++ ){
        state.push(data.statewise[i].state); 
        count.push(data.statewise[i].confirmed);
        color.push(rgbColor());

    }
 }

console.log(state,count,color);
    
    var ctx = document.getElementById('chart');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: state,
            datasets: [{
                label: '# of Votes',
                data: count,
                backgroundColor: color,
            }]
        },
    });
    
  