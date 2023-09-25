var forward = 0;
var left = 1000;
function firstCharacter() {
    console.log(event.keyCode)
    var charcter1 = document.getElementById('character1');
    if (event.keyCode === 68 && forward < 1000) {
        forward = forward + 10
        charcter1.style.left = forward + 'px'
        charcter1.src = 'images/captain-gems-walk.gif'
        setTimeout(function () {
            charcter1.src = 'images/captainamerica-full.gif';
            charcter1.style.width = '250px';
            charcter1.style.height = '250px';

        }, 1000)
    }
    if (event.keyCode === 65 && forward > 10) {
        forward = forward - 10
        charcter1.style.left = forward + 'px'
        charcter1.src = 'images/captain-gems-walk.gif'
        setTimeout(function () {
            charcter1.src = 'images/captainamerica-full.gif';
            charcter1.style.width = '250px';
            charcter1.style.height = '250px';

        }, 1000)

    }
    if (event.keyCode === 32) {
        charcter1.style.width = '500px';
        charcter1.style.height = '500px';
        charcter1.src = 'images/captainamerica-chargingstar.gif'
        setTimeout(function () {
            charcter1.src = 'images/captainamerica-full.gif';
            charcter1.style.width = '250px';
            charcter1.style.height = '250px';

        }, 2000)
    }
    if (event.keyCode === 87) {
        charcter1.src = 'images/captainamerica-catch.gif'
        charcter1.style.width = '450px';
        charcter1.style.height = '450px';
        setTimeout(function () {
            charcter1.src = 'images/captainamerica-full.gif';
            charcter1.style.width = '250px';
            charcter1.style.height = '250px';

        }, 2000)
    }
    if (event.keyCode === 83) {
        charcter1.src = 'images/captainamerica-crouch.gif';
        charcter1.style.transform = 'scaleX(-1)';
        charcter1.style.width = '150px';
        charcter1.style.height = '150px';
        setTimeout(function () {
            charcter1.src = 'images/captainamerica-full.gif';
            charcter1.style.transform = 'scaleX(1)';
            charcter1.style.width = '250px';
            charcter1.style.height = '250px';

        }, 500)
    }

    // character 2
    var charcter2 = document.getElementById('character2');
    if (event.keyCode === 37 && left > 10) {
        left = left - 10
        charcter2.style.left = left + 'px'
        charcter2.src = 'images/wolvie-walk.gif'
        setTimeout(function () {
            charcter2.src = 'images/wolverine-stance.gif';
            charcter2.style.width = '250px';
            charcter2.style.height = '250px';

        }, 1000)
    }

    if (event.keyCode === 39 && left < 1000) {
        left = left + 10
        charcter2.style.left = left + 'px'
        charcter2.src = 'images/wolvie-walk.gif'
        setTimeout(function () {
            charcter2.src = 'images/wolverine-stance.gif';
            charcter2.style.width = '250px';
            charcter2.style.height = '250px';

        }, 1000)

    }
    if (event.keyCode === 38) {
        charcter2.src = 'images/wolvie-int.gif'
        charcter2.style.width = '350px';
        charcter2.style.height = '350px';
        setTimeout(function () {
            charcter2.src = 'images/wolverine-stance.gif';
            charcter2.style.width = '250px';
            charcter2.style.height = '250px';

        }, 2000)
    }
    if (event.keyCode === 40) {
        charcter2.src = 'images/wolvie-crouchblock.gif';
        charcter2.style.transform = 'scaleX(-1)';
        charcter2.style.width = '200px';
        charcter2.style.height = '200px';
        setTimeout(function () {
            charcter2.src = 'images/wolverine-stance.gif';
            charcter2.style.transform = 'scaleX(-1)';
            charcter2.style.width = '250px';
            charcter2.style.height = '250px';

        }, 500)
    }
    if (event.keyCode === 17) {
        charcter2.style.width = '350px';
        charcter2.style.height = '350px';
        charcter2.src = 'images/wolvie-wins.gif'
        setTimeout(function () {
            charcter2.src = 'images/wolverine-stance.gif';
            charcter2.style.width = '250px';
            charcter2.style.height = '250px';

        }, 1500)
    }


}
window.onkeydown = firstCharacter


