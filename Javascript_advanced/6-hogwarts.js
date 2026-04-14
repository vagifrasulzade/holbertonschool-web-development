'use strict';

let studentHogwarts = function () {
    let privateScore = 0;
    let name = null;

    let changeScoreBy = function (points) {
        privateScore += points;
    };

    return {
        setName: function (newName) {
            name = newName;
        },
        rewardStudent: function () {
            changeScoreBy(1);
        },
        penalizeStudent: function () {
            changeScoreBy(-1);
        },
        getScore: function () {
            return (name + ': ' + privateScore);
        }
    };
};

let harry = studentHogwarts();
harry.setName('Harry');
for (let j = 0; j < 4; j++) {
    harry.rewardStudent();
}
console.log(harry.getScore());

let draco = studentHogwarts();
draco.setName('Draco');
draco.rewardStudent();
for (let j = 0; j < 3; j++) {
    draco.penalizeStudent();
}
console.log(draco.getScore());
