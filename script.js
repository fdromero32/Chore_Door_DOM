//Global Variables
let doorImage1 = document.getElementById('door1')
let doorImage2 = document.getElementById('door2')
let doorImage3 = document.getElementById('door3')

let botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg'
let beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg'
let spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg'

let numClosedDoors = 3

// open door variables
let openDoor1 = ''
let openDoor2 = ''
let openDoor3 = ''

//closed Door URL
let closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg'

//start button variable
let startButton = document.getElementById('start')

//no cheating function
const isClicked = (door) => {
  if(door.src === closedDoorPath){
    return false;
  } else {
    return true;
  }
}

// winning functionality
const playDoor = () => {
  numClosedDoors--
  if(numClosedDoors === 0){
    gameOver('win')
  }
}

// random door # selector function
const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * 3);
  if(choreDoor === 0){
    openDoor1 = botDoorPath
    openDoor2 = beachDoorPath
    openDoor3 = spaceDoorPath
  } else if (choreDoor === 1){
    openDoor1 = beachDoorPath
    openDoor2 = spaceDoorPath
    openDoor3 = botDoorPath
  } else {
    openDoor1 = spaceDoorPath
    openDoor2 = botDoorPath
    openDoor3 = beachDoorPath
  }
}

//door onclick functions
doorImage1.onclick = () => {
  if(!isClicked(doorImage1)){
    doorImage1.src = openDoor3
    playDoor()
  }
}
doorImage2.onclick = () => {
  if(!isClicked(doorImage2)){
    doorImage2.src = openDoor1
    playDoor()
  }
}
doorImage3.onclick = () => {
  if(!isClicked(doorImage3)){
    doorImage3.src = openDoor2
    playDoor()
  }
}

const gameOver = (status) => {
  if(status === 'win'){
    startButton.innerHTML = 'You win! Play gain?'
  }
}
