function printWelcome() {
let name = prompt('Enter your name');
let welcomeMessage = document.createElement('p');
welcomeMessage.textContent = 'Welcome, ' + name + '!';
document.body.appendChild(welcomeMessage);
}
const button = document.getElementById('helloButton');
button.addEventListener('click', printWelcome);
