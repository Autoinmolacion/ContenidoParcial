
const container = document.getElementById('canvas');

const containerHeight = container.clientHeight;


const circleSize = 50; 
const margin = 5; 

const circlesCount = Math.floor(containerHeight / (circleSize + margin * 2));


for (let i = 0; i < circlesCount; i++) {

    const circle = document.createElement('div');

    circle.classList.add('circle');
    
    container.appendChild(circle);
}
