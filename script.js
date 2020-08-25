let answerSubmitted = false;

//Possible Male Choices

const maleCharacterArray = [{
        id: 0,
        name: 'Haohmaru',
        imgFile: 'img/characterimages/Haohmaru.png',
        moveSet: '',
        description: ''
    },
    {
        id: 1,
        name: 'Genjuro',
        imgFile: 'img/characterimages/Genjuro.png',
        moveSet: '',
        description: ''
    },
    {
        id: 2,
        name: 'Galford',
        imgFile: 'img/characterimages/Galford.png',
        moveSet: 'Hi hi',
        description: ''
    },
    {
        id: 3,
        name: 'Yashamaru',
        imgFile: 'img/characterimages/Yashamaru.png',
        moveSet: '',
        description: ''
    },
    {
        id: 4,
        name: 'Kazuki',
        imgFile: 'img/characterimages/Kazuki.png',
        moveSet: '',
        description: ''
    },
    {
        id: 5,
        name: 'Hanzo',
        imgFile: 'img/characterimages/Hanzo.png',
        moveSet: '',
        description: ''
    },
    {
        id: 6,
        name: 'Ukyo',
        imgFile: 'img/characterimages/Ukyo.png',
        moveSet: '',
        description: ''
    },
    {
        id: 7,
        name: 'Basara',
        imgFile: 'img/characterimages/Basara.png',
        moveSet: '',
        description: ''
    },
    {
        id: 8,
        name: 'Earthquake',
        imgFile: 'img/characterimages/Earthqauke.png',
        moveSet: '',
        description: ''
    },
    {
        id: 9,
        name: 'Jubei',
        imgFile: 'img/characterimages/Jubei.png',
        moveSet: '',
        description: ''
    },
    {
        id: 10,
        name: 'Kyoshiro',
        imgFile: 'img/characterimages/Kyoshiro.png',
        moveSet: '',
        description: ''
    },
    {
        id: 11,
        name: 'Shizumaru',
        imgFile: 'img/characterimages/Shizumaru.png',
        moveSet: '',
        description: ''
    },
    {
        id: 12,
        name: 'Sogestu',
        imgFile: 'img/characterimages/Sogetsu.png',
        moveSet: '',
        description: ''
    },
    {
        id: 13,
        name: 'Tam Tam',
        imgFile: 'img/characterimages/TamTam.png',
        moveSet: '',
        description: ''
    },
    {
        id: 14,
        name: 'Wan-Fu',
        imgFile: 'img/characterimages/WanFu.png',
        moveSet: '',
        description: ''
    },
    {
        id: 15,
        name: 'Warden',
        imgFile: 'img/characterimages/Warden.png',
        moveSet: '',
        description: ''
    },
    {
        id: 16,
        name: 'Yoshitora',
        imgFile: 'img/characterimages/Yoshitora.png',
        moveSet: '',
        description: ''
    },
]


//Possible Female Choices

const femaleCharacterArray = [{
        id: 0,
        name: 'Charlotte',
        imgFile: 'img/characterimages/Charlotte.png',
        moveSet: '',
        description: ''
    },
    {
        id: 1,
        name: 'Darli',
        imgFile: 'img/characterimages/Darli.png',
        moveSet: '',
        description: ''
    },
    {
        id: 2,
        name: 'Gongsun Li',
        imgFile: 'img/characterimages/GongsunLi.png',
        moveSet: '',
        description: ''
    },
    {
        id: 3,
        name: 'Iroha',
        imgFile: 'img/characterimages/Iroha.png',
        moveSet: '',
        description: ''
    },
    {
        id: 4,
        name: 'Mina',
        imgFile: 'img/characterimages/Mina.png',
        moveSet: '',
        description: ''
    },
    {
        id: 5,
        name: 'Nakoruru',
        imgFile: 'img/characterimages/Nakoruru.png',
        moveSet: '',
        description: ''
    },
    {
        id: 6,
        name: 'Rimururu',
        imgFile: 'img/characterimages/Rimururu.png',
        moveSet: '',
        description: ''
    },
    {
        id: 7,
        name: 'Shiki',
        imgFile: 'img/characterimages/Shiki.png',
        moveSet: '',
        description: ''
    },
    {
        id: 8,
        name: 'Wu-Ruixiang',
        imgFile: 'img/characterimages/WuRuiXiang.png',
        moveSet: '',
        description: ''
    }
]

//Create Result Nodes
let img = document.createElement('img');
//Disable Move List Button
document.getElementById('move-list').style.display = 'none';
//Submit Character

document.getElementById('character-form').addEventListener('submit', function (e) {
    document.getElementById('loading').style.display = 'block';
    setTimeout(characterResults, 2000);
    e.preventDefault();
});

//Get Move List
document.getElementById('move-list').addEventListener('click', moveList); 



function characterResults() {


    //Grab User Choices
    selectedGender = document.getElementById('character-gender').value;
    selectedPlaystyle = document.getElementById('playstyle-preference').value;
    selectedFightingStyle = document.getElementById('fighting-style').value;

    //Loading
    document.getElementById('loading').style.display = 'none';


    //Assign Character (MALE)

    if (selectedGender === 'Male' && selectedPlaystyle === 'Keep Away' && selectedFightingStyle === 'Balance') {
        document.getElementById('character-name').innerHTML = femaleCharacterArray[7].name;
        document.getElementById('character-description').innerHTML = femaleCharacterArray[7].description;
        img.src = maleCharacterArray[7].imgFile;
        document.getElementById('character-image').appendChild(img);
    } else if (selectedGender === 'Male' && selectedPlaystyle === 'Trickster' && selectedFightingStyle === 'Strength') {
        document.getElementById('character-name').innerHTML = maleCharacterArray[8].name;
        document.getElementById('character-description').innerHTML = maleCharacterArray[8].description;
        img.src = maleCharacterArray[8].imgFile;
        document.getElementById('character-image').appendChild(img);
    } else if (selectedGender === 'Male' && selectedPlaystyle === 'Rushdown' && selectedFightingStyle === 'Speed') {
        document.getElementById('character-name').innerHTML = maleCharacterArray[2].name;
        document.getElementById('character-description').innerHTML = maleCharacterArray[2].description;
        img.src = maleCharacterArray[2].imgFile;
        document.getElementById('character-image').appendChild(img);
    } else if (selectedGender === 'Male' && selectedPlaystyle === 'Field Control' && selectedFightingStyle === 'Style') {
        document.getElementById('character-name').innerHTML = maleCharacterArray[2].name;
        document.getElementById('character-description').innerHTML = maleCharacterArray[2].description;
        img.src = maleCharacterArray[2].imgFile;
        document.getElementById('character-image').appendChild(img);
    } else if (selectedGender === 'Male' && selectedPlaystyle === 'Rushdown' && selectedFightingStyle === 'Balance') {
        document.getElementById('character-name').innerHTML = maleCharacterArray[1].name;
        document.getElementById('character-description').innerHTML = maleCharacterArray[1].description;
        img.src = maleCharacterArray[1].imgFile;
        document.getElementById('character-image').appendChild(img);
    } else if (selectedGender === 'Male' && selectedPlaystyle === 'Trickster' && selectedFightingStyle === 'Speed') {
        document.getElementById('character-name').innerHTML = maleCharacterArray[5].name;
        document.getElementById('character-description').innerHTML = maleCharacterArray[5].description;
        img.src = maleCharacterArray[5].imgFile;
        document.getElementById('character-image').appendChild(img);
    } else if (selectedGender === 'Male' && selectedPlaystyle === 'Patience' && selectedFightingStyle === 'Balance') {
        document.getElementById('character-name').innerHTML = maleCharacterArray[0].name;
        document.getElementById('character-description').innerHTML = maleCharacterArray[0].description;
        img.src = maleCharacterArray[0].imgFile;
        document.getElementById('character-image').appendChild(img);
    } else if (selectedGender === 'Male' && selectedPlaystyle === 'Patience' && selectedFightingStyle === 'Strength') {
        document.getElementById('character-name').innerHTML = maleCharacterArray[9].name;
        document.getElementById('character-description').innerHTML = maleCharacterArray[9].description;
        img.src = maleCharacterArray[9].imgFile;
        document.getElementById('character-image').appendChild(img);
    } else if (selectedGender === 'Male' && selectedPlaystyle === 'Keep Away' && selectedFightingStyle === 'Speed') {
        document.getElementById('character-name').innerHTML = maleCharacterArray[4].name;
        document.getElementById('character-description').innerHTML = maleCharacterArray[4].description;
        img.src = maleCharacterArray[4].imgFile;
        document.getElementById('character-image').appendChild(img);
    } else if (selectedGender === 'Male' && selectedPlaystyle === 'Rushdown' && selectedFightingStyle === 'Strength') {
        document.getElementById('character-name').innerHTML = maleCharacterArray[4].name;
        document.getElementById('character-description').innerHTML = maleCharacterArray[4].description;
        img.src = maleCharacterArray[4].imgFile;
        document.getElementById('character-image').appendChild(img);
    } else if (selectedGender === 'Male' && selectedPlaystyle === 'Field Control' && selectedFightingStyle === 'Balance') {
        document.getElementById('character-name').innerHTML = maleCharacterArray[10].name;
        document.getElementById('character-description').innerHTML = maleCharacterArray[10].description;
        img.src = maleCharacterArray[10].imgFile;
        document.getElementById('character-image').appendChild(img);
    } else if (selectedGender === 'Male' && selectedPlaystyle === 'Rushdown' && selectedFightingStyle === 'Style') {
        document.getElementById('character-name').innerHTML = maleCharacterArray[11].name;
        document.getElementById('character-description').innerHTML = maleCharacterArray[11].description;
        img.src = maleCharacterArray[11].imgFile;
        document.getElementById('character-image').appendChild(img);
    } else if (selectedGender === 'Male' && selectedPlaystyle === 'Keep Away' && selectedFightingStyle === 'Style') {
        document.getElementById('character-name').innerHTML = maleCharacterArray[12].name;
        document.getElementById('character-description').innerHTML = maleCharacterArray[12].description;
        img.src = maleCharacterArray[12].imgFile;
        document.getElementById('character-image').appendChild(img);
    } else if (selectedGender === 'Male' && selectedPlaystyle === 'Trickster' && selectedFightingStyle === 'Balance') {
        document.getElementById('character-name').innerHTML = maleCharacterArray[12].name;
        document.getElementById('character-description').innerHTML = maleCharacterArray[12].description;
        img.src = maleCharacterArray[12].imgFile;
        document.getElementById('character-image').appendChild(img);
    } else if (selectedGender === 'Male' && selectedPlaystyle === 'Keep Away' && selectedFightingStyle === 'Strength') {
        document.getElementById('character-name').innerHTML = maleCharacterArray[13].name;
        document.getElementById('character-description').innerHTML = maleCharacterArray[13].description;
        img.src = maleCharacterArray[13].imgFile;
        document.getElementById('character-image').appendChild(img);
    } else if (selectedGender === 'Male' && selectedPlaystyle === 'Patience' && selectedFightingStyle === 'Speed') {
        document.getElementById('character-name').innerHTML = maleCharacterArray[6].name;
        document.getElementById('character-description').innerHTML = maleCharacterArray[6].description;
        img.src = maleCharacterArray[6].imgFile;
        document.getElementById('character-image').appendChild(img);
    } else if (selectedGender === 'Male' && selectedPlaystyle === 'Field Control' && selectedFightingStyle === 'Strength') {
        document.getElementById('character-name').innerHTML = maleCharacterArray[14].name;
        document.getElementById('character-description').innerHTML = maleCharacterArray[14].description;
        img.src = maleCharacterArray[14].imgFile;
        document.getElementById('character-image').appendChild(img);
    } else if (selectedGender === 'Male' && selectedPlaystyle === 'Patience' && selectedFightingStyle === 'Style') {
        document.getElementById('character-name').innerHTML = maleCharacterArray[15].name;
        document.getElementById('character-description').innerHTML = maleCharacterArray[15].description;
        img.src = maleCharacterArray[15].imgFile;
        document.getElementById('character-image').appendChild(img);
    } else if (selectedGender === 'Male' && selectedPlaystyle === 'Field Control' && selectedFightingStyle === 'Speed') {
        document.getElementById('character-name').innerHTML = maleCharacterArray[3].name;
        document.getElementById('character-description').innerHTML = maleCharacterArray[3].description;
        img.src = maleCharacterArray[3].imgFile;
        document.getElementById('character-image').appendChild(img);
    } else if (selectedGender === 'Male' && selectedPlaystyle === 'Trickster' && selectedFightingStyle === 'Style') {
        document.getElementById('character-name').innerHTML = maleCharacterArray[16].name;
        document.getElementById('character-description').innerHTML = maleCharacterArray[16].description;
        img.src = maleCharacterArray[16].imgFile;
        document.getElementById('character-image').appendChild(img);
    }

    //ASSIGN CHARACTER (FEMALE)
    if (selectedGender === 'Female' && selectedPlaystyle === 'Keep Away' && selectedFightingStyle === 'Balance') {
        document.getElementById('character-name').innerHTML = femaleCharacterArray[1].name;
        document.getElementById('character-description').innerHTML = femaleCharacterArray[1].description;
        img.src = femaleCharacterArray[1].imgFile;
        document.getElementById('character-image').appendChild(img);
    } else if (selectedGender === 'Female' && selectedPlaystyle === 'Trickster' && selectedFightingStyle === 'Strength') {
        document.getElementById('character-name').innerHTML = femaleCharacterArray[8].name;
        document.getElementById('character-description').innerHTML = femaleCharacterArray[8].description;
        img.src = femaleCharacterArray[8].imgFile;
        document.getElementById('character-image').appendChild(img);
    } else if (selectedGender === 'Female' && selectedPlaystyle === 'Rushdown' && selectedFightingStyle === 'Speed') {
        document.getElementById('character-name').innerHTML = femaleCharacterArray[7].name;
        document.getElementById('character-description').innerHTML = femaleCharacterArray[7].description;
        img.src = femaleCharacterArray[7].imgFile;
        document.getElementById('character-image').appendChild(img);
    } else if (selectedGender === 'Female' && selectedPlaystyle === 'Field Control' && selectedFightingStyle === 'Style') {
        document.getElementById('character-name').innerHTML = femaleCharacterArray[4].name;
        document.getElementById('character-description').innerHTML = femaleCharacterArray[4].description;
        img.src = femaleCharacterArray[4].imgFile;
        document.getElementById('character-image').appendChild(img);
    } else if (selectedGender === 'Female' && selectedPlaystyle === 'Rushdown' && selectedFightingStyle === 'Balance') {
        document.getElementById('character-name').innerHTML = femaleCharacterArray[6].name;
        document.getElementById('character-description').innerHTML = femaleCharacterArray[6].description;
        img.src = femaleCharacterArray[6].imgFile;
        document.getElementById('character-image').appendChild(img);
    } else if (selectedGender === 'Female' && selectedPlaystyle === 'Trickster' && selectedFightingStyle === 'Speed') {
        document.getElementById('character-name').innerHTML = femaleCharacterArray[4].name;
        document.getElementById('character-description').innerHTML = femaleCharacterArray[4].description;
        img.src = femaleCharacterArray[4].imgFile;
        document.getElementById('character-image').appendChild(img);
    } else if (selectedGender === 'Female' && selectedPlaystyle === 'Patience' && selectedFightingStyle === 'Balance') {
        document.getElementById('character-name').innerHTML = femaleCharacterArray[0].name;
        document.getElementById('character-description').innerHTML = femaleCharacterArray[0].description;
        img.src = femaleCharacterArray[0].imgFile;
        document.getElementById('character-image').appendChild(img);
    } else if (selectedGender === 'Female' && selectedPlaystyle === 'Patience' && selectedFightingStyle === 'Strength') {
        document.getElementById('character-name').innerHTML = femaleCharacterArray[1].name;
        document.getElementById('character-description').innerHTML = femaleCharacterArray[1].description;
        img.src = femaleCharacterArray[1].imgFile;
        document.getElementById('character-image').appendChild(img);
    } else if (selectedGender === 'Female' && selectedPlaystyle === 'Keep Away' && selectedFightingStyle === 'Speed') {
        document.getElementById('character-name').innerHTML = femaleCharacterArray[4].name;
        document.getElementById('character-description').innerHTML = femaleCharacterArray[4].description;
        img.src = femaleCharacterArray[4].imgFile;
        document.getElementById('character-image').appendChild(img);
    } else if (selectedGender === 'Female' && selectedPlaystyle === 'Rushdown' && selectedFightingStyle === 'Strength') {
        document.getElementById('character-name').innerHTML = femaleCharacterArray[3].name;
        document.getElementById('character-description').innerHTML = femaleCharacterArray[3].description;
        img.src = femaleCharacterArray[3].imgFile;
        document.getElementById('character-image').appendChild(img);
    } else if (selectedGender === 'Female' && selectedPlaystyle === 'Field Control' && selectedFightingStyle === 'Balance') {
        document.getElementById('character-name').innerHTML = femaleCharacterArray[5].name;
        document.getElementById('character-description').innerHTML = femaleCharacterArray[5].description;
        img.src = femaleCharacterArray[5].imgFile;
        document.getElementById('character-image').appendChild(img);
    } else if (selectedGender === 'Female' && selectedPlaystyle === 'Rushdown' && selectedFightingStyle === 'Style') {
        document.getElementById('character-name').innerHTML = femaleCharacterArray[7].name;
        document.getElementById('character-description').innerHTML = femaleCharacterArray[7].description;
        img.src = femaleCharacterArray[7].imgFile;
        document.getElementById('character-image').appendChild(img);
    } else if (selectedGender === 'Female' && selectedPlaystyle === 'Keep Away' && selectedFightingStyle === 'Style') {
        document.getElementById('character-name').innerHTML = femaleCharacterArray[1].name;
        document.getElementById('character-description').innerHTML = femaleCharacterArray[1].description;
        img.src = femaleCharacterArray[1].imgFile;
        document.getElementById('character-image').appendChild(img);
    } else if (selectedGender === 'Female' && selectedPlaystyle === 'Trickster' && selectedFightingStyle === 'Balance') {
        document.getElementById('character-name').innerHTML = femaleCharacterArray[2].name;
        document.getElementById('character-description').innerHTML = femaleCharacterArray[2].description;
        img.src = femaleCharacterArray[2].imgFile;
        document.getElementById('character-image').appendChild(img);
    } else if (selectedGender === 'Female' && selectedPlaystyle === 'Keep Away' && selectedFightingStyle === 'Strength') {
        document.getElementById('character-name').innerHTML = femaleCharacterArray[0].name;
        document.getElementById('character-description').innerHTML = femaleCharacterArray[0].description;
        img.src = femaleCharacterArray[0].imgFile;
        document.getElementById('character-image').appendChild(img);
    } else if (selectedGender === 'Female' && selectedPlaystyle === 'Patience' && selectedFightingStyle === 'Speed') {
        document.getElementById('character-name').innerHTML = femaleCharacterArray[6].name;
        document.getElementById('character-description').innerHTML = femaleCharacterArray[6].description;
        img.src = femaleCharacterArray[6].imgFile;
        document.getElementById('character-image').appendChild(img);
    } else if (selectedGender === 'Female' && selectedPlaystyle === 'Field Control' && selectedFightingStyle === 'Strength') {
        document.getElementById('character-name').innerHTML = femaleCharacterArray[5].name;
        document.getElementById('character-description').innerHTML = femaleCharacterArray[5].description;
        img.src = femaleCharacterArray[5].imgFile;
        document.getElementById('character-image').appendChild(img);
    } else if (selectedGender === 'Female' && selectedPlaystyle === 'Patience' && selectedFightingStyle === 'Style') {
        document.getElementById('character-name').innerHTML = femaleCharacterArray[4].name;
        document.getElementById('character-description').innerHTML = femaleCharacterArray[4].description;
        img.src = femaleCharacterArray[4].imgFile;
        document.getElementById('character-image').appendChild(img);
    } else if (selectedGender === 'Female' && selectedPlaystyle === 'Field Control' && selectedFightingStyle === 'Speed') {
        document.getElementById('character-name').innerHTML = femaleCharacterArray[6].name;
        document.getElementById('character-description').innerHTML = femaleCharacterArray[6].description;
        img.src = femaleCharacterArray[6].imgFile;
        document.getElementById('character-image').appendChild(img);
    } else if (selectedGender === 'Female' && selectedPlaystyle === 'Trickster' && selectedFightingStyle === 'Style') {
        document.getElementById('character-name').innerHTML = femaleCharacterArray[2].name;
        document.getElementById('character-description').innerHTML = femaleCharacterArray[2].description;
        img.src = femaleCharacterArray[2].imgFile;
        document.getElementById('character-image').appendChild(img);
    }
    document.getElementById('submit-button').value = "Reset Form";
    document.getElementById('move-list').style.display = 'block';
    disableChoices();
}

function disableChoices() {
    document.getElementById('character-gender').disabled = 'disabled';
    document.getElementById('fighting-style').disabled = 'disabled';
    document.getElementById('playstyle-preference').disabled = 'disabled';
}




