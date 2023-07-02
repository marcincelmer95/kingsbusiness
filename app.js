let actualPlace = 'introVideo';

// intro 
// const introVideo = document.querySelector('.introVideo');
// const introContainer = document.querySelector('.introContainer');

// function introVideoEnd() {
//     introContainer.classList.toggle('introContainerHide');
//     setTimeout(function() {
//         introContainer.style.display = "none";
//         if (actualPlace == 'introVideo') {
//             openMainMenu();
//         }
//     }, 200)
// }   

const blackBackgroundParagraph = document.querySelector('.blackBackgroundParapgrah');

setTimeout(function(){
    blackBackgroundParagraph.style.opacity = '1';
    setTimeout(function(){
        blackBackgroundParagraph.style.opacity = '0';
        setTimeout(function()   {
            openMainMenu();
        },1000)
    },4000)
},2000)

let story = document.querySelector('.story');
const menuContainer = document.querySelector('.menuContainer');
const menuContainerInner = document.querySelector('.menuContainerInner');

function openMainMenu() {
    menuContainer.style.pointerEvents = 'auto';
    menuContainer.classList.add('menuContainerShow');
    setTimeout(function(){
        menuContainer.style.display = "flex";
        actualPlace = 'mainMenu';
    })
}

// menu 

function showEnemy() {
    blackBackground.style.opacity = '0';
    setTimeout(function(){
        enemyImg.classList.toggle('enemyImgShow');   
        setTimeout(function(){
            showHealthBars();
            // enemySpeechImg.classList.toggle('enemySpeechImgShow');
            // setTimeout(function(){
            //     enemySpeechImg.classList.toggle('enemySpeechImgShow');
            //     setTimeout(function(){
            //         showHealthBars();
            //     }, 2000);            
            // }, 3000);    
        }, 2000);
    }, 1000);  
}

const yourHPbarContainer = document.querySelector('.yourHPbarContainer');
const bossHPcontainer = document.querySelector('.bossHPcontainer');

function showHealthBars() {
    setTimeout(function(){
        playerContainer.classList.add('playerContainerShow');
        bossHPcontainer.classList.add('bossHPcontainerShow');
        consoleLogContainer.classList.add('consoleLogContainerShow');
        setTimeout(function(){
            startTheFight();
        }, 1000)
    }, 2000)
}

function startTheFight() {
    playerContainer.style.pointerEvents = 'auto';
}

let playerName = '';
const playerNameContainer = document.querySelector('.playerName');
const yourHPtitle = document.querySelector('.yourHPtitle');
const toAdventure = document.querySelector('.toAdventure');
// const regExpression = /^[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ0-9]$/;
const regExpression = /^[0-9\s\p{L}]+$/u;
let playerNameLength = '';
let playerNameValue = '';

addEventListener('keypress', function(e){
    storyMainMenuBtn.classList.remove('storyButtonClick');
    if (e.key === 'Enter') {
        if (actualPlace == 'mainMenu') {
            playerNameValue = playerNameContainer.value; 
            playerNameLength = playerNameValue.length;
            if (playerNameLength >= 4 && playerNameLength <= 20) {
                if (playerNameValue.match(regExpression)) {
                    actualPlace = 'adventure';
                    toAdventure.classList.add('toAdventureClick');

                    actualBoss = Bosses[0];
                    actualSword = Swords[0];
                    actualSpell = Spells[0];
                    actualShield = Shields[0];
                    actualSpellUpgrade = Spells[1];
                    actualSwordUpgrade = Swords[1];
                    actualShieldUpgrade = Shields[1];
                
                    actualSpellUpgradeIndex = Spells.indexOf(actualSpellUpgrade);
                    actualSwordUpgradeIndex = Swords.indexOf(actualSwordUpgrade);
                    actualShieldUpgradeIndex = Shields.indexOf(actualShieldUpgrade);
                
                    upgradeItemBtnImg.style.display = 'block';
                    upgradeItemBtnInfoStats.style.display = 'block';
                    upgradeItemBtnInfoCost.style.display = 'block';
                    upgradeSpellBtnInfoStats.style.display = 'block';
                    upgradeSpellBtnInfoCost.style.display = 'block';
                    checkShop();
                    player.LVL = 1;
                    player.gold = 0;
                    player.actualItem = actualSword;
                    player.actualMagic = actualSpell;
                    player.actualShield = actualShield;
                    player.HP = 40000;
                    player.maxHP = 40000;
                    yourHPcounter.innerHTML = player.HP;
                    playerName = playerNameContainer.value;
                    yourHPtitle.innerHTML = playerName;
                    menuContainerInner.style.opacity = "0";
                    blackBackground.style.opacity = '0';
                    setTimeout(function(){
                        menuContainer.classList.remove('menuContainerShow');
                        menuContainer.style.pointerEvents = 'none';
                        menuContainer.classList.add('menuContainerHide');
                        toStory();
                        setTimeout(function(){
                            playerNameContainer.value = '';
                            toAdventure.classList.remove('toAdventureClick');
                        }, 1000)
                    }, 2000)
                } else {
                    errorMsg.innerHTML = 'Użyto niedozwolonych znaków! Tylko litery i cyfry!';
                }
            } else {
                errorMsg.innerHTML = 'Imię bohatera musi mieć od 4 do 20 znaków!';
            }
        }
    }
});

const fightBtn = document.querySelector('.fightBtn');
const nextBtn = document.querySelector('.nextBtn');
const errorMsg = document.querySelector('.errorMsg');

toAdventure.addEventListener('click', function(){
    storyMainMenuBtn.classList.remove('storyButtonClick');
    if (actualPlace == 'mainMenu') {
        playerNameValue = playerNameContainer.value; 
        playerNameLength = playerNameValue.length;
        if (playerNameLength >= 4 && playerNameLength <= 20) {
            if (playerNameValue.match(regExpression)) {
                errorMsg.style.display = 'none';
                actualPlace = 'adventure';
                toAdventure.classList.add('toAdventureClick');

                actualBoss = Bosses[0];
                actualSword = Swords[0];
                actualSpell = Spells[0];
                actualShield = Shields[0];
                actualSpellUpgrade = Spells[1];
                actualSwordUpgrade = Swords[1];
                actualShieldUpgrade = Shields[1];
                
                actualSpellUpgradeIndex = Spells.indexOf(actualSpellUpgrade);
                actualSwordUpgradeIndex = Swords.indexOf(actualSwordUpgrade);
                actualShieldUpgradeIndex = Shields.indexOf(actualShieldUpgrade);
            
                upgradeItemBtnImg.style.display = 'block';
                upgradeItemBtnInfoStats.style.display = 'block';
                upgradeItemBtnInfoCost.style.display = 'block';
                upgradeShieldBtnImg.style.display = 'block';
                upgradeShieldBtnInfoStats.style.display = 'block';
                upgradeShieldBtnInfoCost.style.display = 'block';
                upgradeSpellBtnInfoStats.style.display = 'block';
                upgradeSpellBtnInfoCost.style.display = 'block';
                checkShop();
                
                player.LVL = 1;
                player.gold = 0;
                player.actualItem = actualSword;
                player.actualMagic = actualSpell;
                player.actualShield = actualShield;
                player.gold = 0;
                player.LVL = 1;
                player.HP = 40000;
                player.maxHP = 40000;
                yourHPcounter.innerHTML = player.HP;
                playerName = playerNameContainer.value;
                yourHPtitle.innerHTML = playerName;
                menuContainerInner.style.opacity = "0";
                blackBackground.style.opacity = '0';
                setTimeout(function(){
                    menuContainer.classList.remove('menuContainerShow');
                    menuContainer.style.pointerEvents = 'none';
                    menuContainer.classList.add('menuContainerHide');
                    toStory();
                    setTimeout(function(){
                        playerNameContainer.value = '';
                        toAdventure.classList.remove('toAdventureClick');
                    }, 1000);
                }, 2000);
            } else {
                errorMsg.innerHTML = 'Użyto niedozwolonych znaków! Tylko litery i cyfry!';
                errorMsg.style.display = 'block';
            }
        } else {
            errorMsg.innerHTML = 'Imię bohatera musi mieć od 4 do 20 znaków!';
            errorMsg.style.display = 'block';
        }
    }
})

const blackBackground = document.querySelector('.blackBackground');

function toStory() {
    story.innerHTML = actualBoss.enemyStory;
    setTimeout(function(){
        story.classList.toggle('storyShow');
        setTimeout(function(){
            fightBtn.classList.toggle('fightBtnShow');
        }, 4000)
    }, 2000)
}

const storyMainMenuBtn = document.querySelector('.storyMainMenuBtn');

function toEpilogue() {
    story.innerHTML = epilogue;
    setTimeout(function(){
        story.classList.toggle('storyShow');
        setTimeout(function(){
            storyMainMenuBtn.classList.toggle('storyMainMenuBtnShow');
        }, 4000)
    }, 2000)
}

const epilogue = 'Dziękuje za grę! <br> Mam nadzieję, że zabawa była przednia <br> M.'

fightBtn.addEventListener('click', function() {
    fightBtn.classList.add('fightBtnClick');
    story.classList.toggle('storyShow');
    fightBtn.classList.toggle('fightBtnShow');
    setTimeout(function() {
        fightBtn.classList.remove('fightBtnClick');
        toFight();
    }, 2000)    
})

function toFight() {  
    blackBackground.style.opacity = '1';
    checkBoss();
    checkPlayerAttack();
    fightContainer.classList.add('fightContainerShow');
    checkShop();
    setTimeout(function(){
        menuContainer.style.display = 'none';
        fightContainer.style.display = 'flex';
        fightContainer.style.pointerEvents = 'auto';
        actualPlace = 'fightContainer';
        showEnemy();
    }, 200);
}

const playerLevels = {
    Lvl1 : 100,
    Lvl2 : 200,
    Lvl3 : 400,
    Lvl4 : 800,
    Lvl5 : 1600,
    Lvl6 : 3200,
    Lvl7 : 6400
}

const playerLevelsArray = [playerLevels.Lvl1, playerLevels.Lvl2, playerLevels.Lvl3, playerLevels.Lvl4, playerLevels.Lvl5, playerLevels.Lvl6, playerLevels.Lvl7]

const itemBtnInfoText = document.querySelector('.itemBtnInfoText');
const itemBtnStatsText = document.querySelector('.itemBtnStatsText');
const itemBtnImg = document.querySelector('.itemBtnImg');

const spellBtnInfoText = document.querySelector('.spellBtnInfoText');
const spellBtnInfoStats = document.querySelector('.spellBtnInfoStats');

const shieldBtnInfoText = document.querySelector('.shieldBtnInfoText');
const shieldBtnStatsText = document.querySelector('.shieldBtnStatsText');
const shieldBtnImg = document.querySelector('.shieldBtnImg');

function checkItems() {
    itemBtnInfoText.innerHTML = player.actualItem.name;
    itemBtnStatsText.innerHTML = '( Użycie ) ' + player.actualItem.use + '</br> ( Pasywne ) ' + player.actualItem.passive + '</br>' + player.actualItem.loading;
    itemBtnImg.src = player.actualItem.img;
}

function checkSpells() {
    spellBtnInfoText.innerHTML = player.actualMagic.name;
    spellBtnInfoStats.innerHTML = '( Użycie ) ' + player.actualMagic.use + '</br> ' + player.actualMagic.loading;
}

function checkShields() {
    shieldBtnInfoText.innerHTML = player.actualShield.name;
    shieldBtnStatsText.innerHTML = '( Pasywne ) ' + player.actualShield.passive;
    shieldBtnImg.src = player.actualShield.img;
}

const player = {
    LVL : 0,
    nextLVL : playerLevels.Lvl2,
    XP : playerLevels.Lvl1,
    gold : 0,
    basicAttack : '',
    attack : '',
    itemAttack : '',
    actualItem : '',
    actualMagic : '',
    actualShield : '',
    HP : '',
    maxHP : ''
}

const swordLv1 = {
    name : 'Miecz ( Lv 1 )',
    LVL : 1,
    attack : 500,
    hitCounter : 3,
    use : 'Zadaje potrójne obrażenia', 
    passive : 'Zwiększa obrażenia ataku o 500pkt',
    loading : 'Ładuje się 5 tur',
    loadingCount : 5,
    img : "img/items/swordLv1.png",
    cost : 0
}

const swordLv2 = {
    name : 'Miecz ( Lv 2 )',
    LVL : 2,
    attack : 1000,
    hitCounter : 3,
    use : 'Zadaje potrójne obrażenia',
    passive : 'Zwiększa obrażenia ataku o 1000pkt',
    loading : 'Ładuje się 4 tury',
    loadingCount : 4,
    img : "img/items/swordLv2.png",
    cost : 1000
}

const swordLv3 = {
    name : 'Miecz ( Lv 3 )',
    LVL : 3,
    attack : 1500,
    hitCounter : 4,
    use : 'Zadaje poczwórne obrażenia',
    passive : 'Zwiększa obrażenia ataku o 1500pkt',
    loading : 'Ładuje się 3 tury',
    loadingCount : 3,
    img : "img/items/swordLv3.png",
    cost : 1000
}

const spellLv1 = {
    name : 'Leczenie ( Lv 1 )',
    use : 'Uderzasz, po czym się leczysz o 200% zadanych obrażeń',
    loading : 'Ładuje się 3 tury',
    loadingCount : 3,
    LVL : 1,
    healing : 2,
    cost : 0
}

const spellLv2 = {
    name : 'Leczenie ( Lv 2 )',
    use : 'Uderzasz, po czym się leczysz o 300% zadanych obrażeń',
    loading : 'Ładuje się 2 tury',
    loadingCount : 2,
    LVL : 2,
    healing : 3,
    cost : 1000
}

const spellLv3 = {
    name : 'Leczenie ( Lv 3 )',
    use : 'Uderzasz, po czym się leczysz o 400% zadanych obrażeń',
    loading : 'Ładuje się 1 turę',
    loadingCount : 1,
    LVL : 3,
    healing : 4,
    cost : 1000
}

const shieldLv1 = {
    name : 'Tarcza ( Lv 1 )',
    LVL : 1,
    armor : 0.1,
    hitCounter : 3,
    use : '', 
    passive : 'Blokuje 10% obrażeń zadanych przez przeciwnika',
    loading : '',
    loadingCount : '',
    img : "img/items/shieldLv1.png",
    cost : 0
}

const shieldLv2 = {
    name : 'Tarcza ( Lv 2 )',
    LVL : 1,
    armor : 0.2,
    hitCounter : 3,
    use : '', 
    passive : 'Blokuje 20% obrażeń zadanych przez przeciwnika',
    loading : '',
    loadingCount : '',
    img : "img/items/shieldLv1.png",
    cost : 1000
}

const shieldLv3 = {
    name : 'Tarcza ( Lv 3 )',
    LVL : 1,
    armor : 0.3,
    hitCounter : 3,
    use : '', 
    passive : 'Blokuje 30% obrażeń zadanych przez przeciwnika',
    loading : '',
    loadingCount : '',
    img : "img/items/shieldLv1.png",
    cost : 1000
}

const Spells = [spellLv1, spellLv2, spellLv3];

const Swords = [swordLv1, swordLv2, swordLv3];

const Shields = [shieldLv1, shieldLv2, shieldLv3];

let actualSword = '';
let actualSwordUpgrade = '';
let actualSwordUpgradeIndex = '';

let actualSpell = '';
let actualSpellUpgrade = '';
let actualSpellUpgradeIndex = '';

let actualShield = '';
let actualShieldUpgrade = '';
let actualShieldUpgradeIndex = '';

// let healing = Math.floor(player.attack * 0.20) + 1;

// let burningDamage = Math.floor(swordLv3Fire.attack * player.LVL * 0.50) +1;

function checkPlayerAttack() {
    player.basicAttack = Math.floor(Math.random() * (3000 - 2500 + 1)) + 2500;
    player.attack = player.basicAttack * player.LVL + player.actualItem.attack;
    player.itemAttack = (player.basicAttack * player.LVL + player.actualItem.attack) * player.actualItem.hitCounter;
    healing = Math.floor(player.attack * player.actualMagic.healing);
    checkItems();
    checkSpells();
    checkShields();
    // burningDamage = Math.floor(swordLv3Fire.attack * player.LVL * 0.50) + 1;
    setTimeout(function(){
        attackBtn.classList.remove('attackClick');
        spellBtn.classList.remove('attackClick');
        itemBtn.classList.remove('attackClick');
    }, 300)  
}

const enemy1 = {
    name : 'Guard',
    HP : 40000,
    maxHP : 40000,
    backgroundImg : "url('img/guardBackground.jpg')",
    enemyImg : "url('img/guard1.png')",
    enemyStory : "Dotarłem na miejsce </br> Po zachowaniu strażnika widzę, że nie jestem tu mile widziany </br> Mimo wszystko moja misja jest jasna </br> Nic mnie nie powstrzyma...",
    enemySpeech : "Co tu robisz? </br> Zapłacisz za to </br> Życiem!",
    attack : Math.floor(Math.random() * (6000 - 4000 + 1)) + 4000,
    // reward
    XP : 100,
    reward : 1000,
    // img 
    imgWidth : 628,
    imgHeight : 1463,
    imgBottom : -900
}

const enemy2 = {
    name : 'Knight',
    HP : 40000,
    maxHP : 40000,
    backgroundImg : "url('img/knightBackground.jpg')",
    enemyImg : "url('img/knight1.png')",
    enemyStory : "To była ciężka walka </br> Udało mi się wejść do miasta </br> Cholera... nadchodzą kolejne kłopoty </br> To królewski strażnik...",
    enemySpeech : "url('img/speech.png')",
    attack : Math.floor(Math.random() * (8000 - 6000 + 1)) + 8000,
    // reward
    XP : 100,
    reward : 1000,
    // img 
    imgWidth : 628,
    imgHeight : 1463,
    imgBottom : -800
}

const enemy3 = {
    name : 'Mage',
    HP : 40000,
    maxHP : 40000,
    backgroundImg : "url('img/mageBackground.jpg')",
    enemyImg : "url('img/mage1.png')",
    enemyStory : "Cholera, ciężko było przebić się przez tą zbroję </br> Wszedłem do pałacu, jestem coraz bliżej celu </br> Arghhh! Co to jest? </br> To mag! Muszę być sprytny",
    enemySpeech : "url('img/speech.png')",
    attack : Math.floor(Math.random() * (10000 - 8000 + 1)) + 10000,
    // reward
    XP : 100,
    reward : 1000,
    // img 
    imgWidth : 628,
    imgHeight : 1463,
    imgBottom : -800
}

const enemy4 = {
    name : 'The King James',
    HP : 40000,
    maxHP : 40000,
    backgroundImg : "url('img/kingBackground.jpg')",
    enemyImg : "url('img/king1.png')",
    enemyStory : "... Ledwo uszedłem z życiem </br> Nareszcie... sala tronowa </br> Król James ostatni raz zajebał mi marchewki z pola </br> Teraz już nie ma odwrotu...",
    enemySpeech : "url('img/speech.png')",
    attack : Math.floor(Math.random() * (12000 - 10000 + 1)) + 12000,
    // reward
    XP : 100,
    reward : 1000,
    // img 
    imgWidth : 628,
    imgHeight : 1463,
    imgBottom : -800
}

const Bosses = [enemy1, enemy2, enemy3, enemy4  ];


// fightContainer
const attackBtn = document.querySelector('.AttackBtn');
const spellBtn = document.querySelector('.spellBtn');
const itemBtn = document.querySelector('.itemBtn');
const turnBtn = document.querySelector('.turnBtn');
const yourTurnBtn = document.querySelector('.yourTurnBtn');
const bossTurnBtn = document.querySelector('.bossTurnBtn');
const modalOkBtn = document.querySelector('.modalOkBtn');
const modalTryAgainBtn = document.querySelector('.modalTryAgainBtn');
const modalMainMenuBtn = document.querySelector('.modalMainMenuBtn');
const modalEpilogueBtn = document.querySelector('.modalEpilogueBtn');
const fightContainer = document.querySelector('.fightContainer');

const playerContainer = document.querySelector('.playerContainer');
const yourHP = document.querySelector('.yourHP');
const yourHPactual = document.querySelector('.yourHPactual');
const yourHPcounter = document.querySelector('.yourHPcounter');
const bossHP = document.querySelector('.bossHP');
const bossHPactual = document.querySelector('.bossHPactual');
const bossHPcounter = document.querySelector('.bossHPcounter');
const bossHPtitle = document.querySelector('.bossHPtitle');
const actionsContainer = document.querySelector('.actionsContainer');

const modal = document.querySelector('.modalShade');
const modalText = document.querySelector('.modalText');
const modalStats = document.querySelector('.modalStats');
const modalReward = document.querySelector('.reward');
const modalXP = document.querySelector('.xp');
// const modalLvlUp = document.querySelector('.lvlUp');

let roundLost = false;
let roundWon = false;

// sound
const hitSound = new Audio ('sound/hitSound.wav');
const sionHitSound = new Audio ('sound/sionHitSound.wav');
const menuMusic = new Audio ('sound/menuMusic.wav');
const burningSound = new Audio ('sound/burningSound.wav');

function playHitSound() {
    hitSound.play();
}   

function playSionHitSound() {
    sionHitSound.play();
}

function playMenuMusic() {
    menuMusic.play();
    menuMusic.loop = true;
    menuMusic.volume = 0.05;
}

function playBurningSound() {
    burningSound.play();
}

// animating objects
const backgroundImg = document.querySelector('.backgroundImg');
const enemyImg = document.querySelector('.enemyImg');
const enemySpeechImg = document.querySelector('.enemySpeechImg');
const enemySpeech = document.querySelector('.enemySpeech');
const bloodScreen = document.querySelector('.bloodScreen');
const burnEffect = document.querySelector('.burnEffect');
const healingEffect = document.querySelector('.healingEffect');

// buttons loading
const spellBtnLoading = document.querySelector('.spellBtnLoading');
const itemBtnLoading = document.querySelector('.itemBtnLoading');

// console
const consoleLogContainer = document.querySelector('.consoleLogContainer');
const consoleLogContainerShow = document.querySelector('.consoleLogContainerShow');
const consoleLog = document.querySelector('.consoleLog');
const consoleLogs = document.querySelector('.consoleLogs');
consoleLogs.innerHTML = "Walka się rozpoczęła </br></br>";

// counters
let round = 1;
let spellCounter = 0;
let enemyIsBurning = 0;
let enemyIsFrozen = 0;
let itemCounter = 0;
let actualBoss = '';

let actualNextLVL = playerLevelsArray[1];
let actualNextLvlIndex = playerLevelsArray.indexOf(actualNextLVL);

function checkBoss() {
    if (actualBoss == Bosses[0]) {
        // playMenuMusic();
        backgroundImg.style.backgroundImage = Bosses[0].backgroundImg;
        enemyImg.style.backgroundImage = Bosses[0].enemyImg;
        enemyImg.style.width = actualBoss.imgWidth + 'px';
        enemyImg.style.height = actualBoss.imgHeight + 'px';
        enemyImg.style.bottom = actualBoss.imgBottom + 'px';
        enemySpeech.innerHTML = actualBoss.enemySpeech;
        bossHPtitle.innerHTML = actualBoss.name;
    } else if (actualBoss == Bosses[1]) {
        backgroundImg.style.backgroundImage = Bosses[1].backgroundImg;
        enemyImg.style.backgroundImage = Bosses[1].enemyImg;
        enemyImg.style.width = actualBoss.imgWidth + 'px';
        enemyImg.style.height = actualBoss.imgHeight + 'px';
        enemyImg.style.bottom = actualBoss.imgBottom + 'px';
        enemySpeech.innerHTML = actualBoss.enemySpeech;
        bossHPtitle.innerHTML = actualBoss.name;
    } else if (actualBoss == Bosses[2]) {
        backgroundImg.style.backgroundImage = Bosses[2].backgroundImg;
        enemyImg.style.backgroundImage = Bosses[2].enemyImg;
        enemyImg.style.width = actualBoss.imgWidth + 'px';
        enemyImg.style.height = actualBoss.imgHeight + 'px';
        enemyImg.style.bottom = actualBoss.imgBottom + 'px';
        enemySpeech.innerHTML = actualBoss.enemySpeech;
        bossHPtitle.innerHTML = actualBoss.name;
    } else if (actualBoss == Bosses[3]) {
        backgroundImg.style.backgroundImage = Bosses[3].backgroundImg;
        enemyImg.style.backgroundImage = Bosses[3].enemyImg;
        enemyImg.style.width = actualBoss.imgWidth + 'px';
        enemyImg.style.height = actualBoss.imgHeight + 'px';
        enemyImg.style.bottom = actualBoss.imgBottom + 'px';
        enemySpeech.innerHTML = actualBoss.enemySpeech;
        bossHPtitle.innerHTML = actualBoss.name;
    } 
    Bosses.forEach(function(e){
        e.HP = e.maxHP;
    })
    bossHPcounter.innerHTML = actualBoss.HP;
}

function BossMathematics() {
    healingAnimationOff();
    bossHitAnimationOff();
    if (actualBoss == Bosses[0]) {
        actualBoss.attack = Math.floor(Math.random() * (6000 - 4000 + 1)) + 4000;
        bossHPcounter.innerHTML = actualBoss.HP;
    } else if (actualBoss == Bosses[1]) {
        actualBoss.attack = Math.floor(Math.random() * (8000 - 6000 + 1)) + 6000;
        bossHPcounter.innerHTML = actualBoss.HP;
    } else if (actualBoss == Bosses[2]) {
        actualBoss.attack = Math.floor(Math.random() * (10000 - 8000 + 1)) + 8000;
        bossHPcounter.innerHTML = actualBoss.HP;
    } else if (actualBoss == Bosses[3]) {
        actualBoss.attack = Math.floor(Math.random() * (12000 - 10000 + 1)) + 10000;
        bossHPcounter.innerHTML = actualBoss.HP;
    } else if (actualBoss == '') {
        menuContainer.style.display = "flex";
        fightContainer.style.display = "none";
    }
    bossHPcounter.innerHTML = actualBoss.HP;
}

// the game
function bossAttack() {
    let shieldBlock = Math.floor(player.actualShield.armor * actualBoss.attack);
    actualBoss.attack = actualBoss.attack - shieldBlock;
    playSionHitSound();
    if (player.HP - actualBoss.attack > 0) {
        player.HP = player.HP - actualBoss.attack;
        yourHPactual.style.width  = (player.HP / player.maxHP) * 100 + '%';
        consoleLogs.innerHTML += "Runda: " + round + ": " + "Boss zadał Ci: " + actualBoss.attack + " obrażeń / Zablokowałeś: " + shieldBlock + " obrażeń</br></br>";
        yourHPcounter.innerHTML = player.HP;
        bloodScreenOn();
        BossMathematics();
    } else {
        yourHPactual.style.width = '0px';   
        yourHPcounter.innerHTML = '0';
        roundLost = true;
        roundWon = false;
        if (roundLost === true && roundWon === false) {
            modalOkBtn.style.display = 'none';
            modalMainMenuBtn.style.display = 'block';
            modalTryAgainBtn.style.display = 'block';
        }
        modal.style.display = "block";
        modalReward.innerHTML = "Nie dostałeś XP za tą walkę!";
        modalXP.innerHTML = "Nie dostałeś złota za tą walkę!";
        modalText.innerHTML = "Przegrana w rundzie " + round;
        BossMathematics();
    }
}

function BurnOn(){
    playBurningSound()
    burnEffect.classList.add('beAnimation');
    actualBoss.HP = actualBoss.HP - burningDamage;
    bossHPactual.style.width = (actualBoss.HP / actualBoss.maxHP) * 100 + '%';
    consoleLogs.innerHTML += "Runda: " + round + ": " + "Zadałeś (podpalenie): " + burningDamage + " obrażeń </br></br>";
    if (actualBoss.HP - burningDamage < 0) {
        bossHPactual.style.width = "0px";
        modal.style.display = "block";
        modalText.innerHTML = "Zwycięstwo w rundzie " + round;
    }
}

function BurnOff() {
    burnEffect.classList.remove('beAnimation');
}

function turnBtnAnimationOn() {
    yourTurnBtn.style.left = "150%";
    bossTurnBtn.style.right = "0%";
}

function turnBtnAnimationOff() {
    yourTurnBtn.style.left = "50%";
    bossTurnBtn.style.right = "100%";
}

function healingAnimationOn() {
    healingEffect.classList.add('heAnimation');
}

function healingAnimationOff() {
    healingEffect.classList.remove('heAnimation');
}

function bloodScreenOn() {
    bloodScreen.classList.add('bsAnimation'); 
}

function bloodScreenOf() {
    bloodScreen.classList.remove('bsAnimation');
}

function bossHitAnimationOn() {
    enemyImg.classList.add('animation');
}

function bossHitAnimationOff() {
    enemyImg.classList.remove('animation');
}

function pointerEventsOff() {
    attackBtn.style.pointerEvents = "none";
    spellBtn.style.pointerEvents = "none";  
    itemBtn.style.pointerEvents = "none";
}

function pointerEventsOn() {
    if (itemCounter <= 0){
        itemBtn.style.pointerEvents = "auto";
    } 
    if (spellCounter <= 0) {
        spellBtn.style.pointerEvents = "auto";
    }
    attackBtn.style.pointerEvents = "auto";
}

function roundWinLoseReset() {
    roundLost = false;
    roundWon = false;
}

function animationsOff() {
    bossHitAnimationOff();
    bloodScreenOf();
    healingAnimationOff();
    turnBtnAnimationOff();
    BurnOff();
}

function hidePlayerActions() {
    playerContainer.classList.remove('playerContainerShow');  
    consoleLogContainer.classList.remove('consoleLogContainerShow');
}

function hideBossActions() {
    bossHPcontainer.classList.remove('bossHPcontainerShow');
    enemyImg.classList.remove('enemyImgShow');
}

function checkBtnLoadings() {
    checkItemBtnLoading();
    checkSpellBtnLoading();
}

function checkItemBtnLoading() {
    let itemBtnLoadingCounter = document.querySelector('.itemBtnLoadingCounter');
    if (itemCounter > 0) {
        itemBtnLoadingCounter.innerHTML = itemCounter;
        itemBtn.style.backgroundImage = "url('img/buttonLoadingImg.jpg')";
    } else {
        itemBtn.style.backgroundImage = "url('img/buttonImg.jpg')";
        itemBtnLoadingCounter.innerHTML = '';
    }
}

function checkSpellBtnLoading() {
    let spellBtnLoadingCounter = document.querySelector('.spellBtnLoadingCounter');
    if (spellCounter > 0) {
        spellBtnLoadingCounter.innerHTML = spellCounter;
        spellBtn.style.backgroundImage = "url('img/buttonLoadingImg.jpg')";
    } else {
        spellBtn.style.backgroundImage = "url('img/buttonImg.jpg')";
        spellBtnLoadingCounter.innerHTML = '';
    }
}

function refreshCounters() {
    itemCounter = 0;
    spellCounter = 0;
    round = 1;
    enemyIsBurning = 0;
}

// function playerLvlUp() {
//     if (player.XP >= playerLevelsArray[actualNextLvlIndex] && player.XP < playerLevelsArray[actualNextLvlIndex + 1]) {
//         player.LVL += 1;
//         player.nextLVL = playerLevelsArray[actualNextLvlIndex + 1];
//         actualNextLvlIndex++;
//         modalLvlUp.innerHTML = "LVL UP! Osiągnąłęś "+ player.LVL + " poziom! BRAWO </br> Punkty doświadczenia: "+ player.XP +" / "+ player.nextLVL +" do następnego poziomu </br>";
//     } else if (player.XP >= playerLevelsArray[actualNextLvlIndex + 1]) {
//         player.LVL += 2;
//         player.nextLVL = playerLevelsArray[actualNextLvlIndex + 2];
//         actualNextLvlIndex += 2;
//         modalLvlUp.innerHTML = "LVL UP! Osiągnąłęś "+ player.LVL + " poziom! BRAWO </br> Punkty doświadczenia: "+ player.XP +" / "+ player.nextLVL +" do następnego poziomu </br>";
//     }
// }



attackBtn.addEventListener('click', function(){
    attackBtn.classList.add('attackClick');
    playHitSound();
    bloodScreenOf();
    if (actualBoss.HP - player.attack > 0) {
        actualBoss.HP = actualBoss.HP - player.attack;
        bossHPactual.style.width = (actualBoss.HP / actualBoss.maxHP) * 100 + '%';
        if (spellCounter > 0) {
            spellCounter--;
        }
        if (itemCounter > 0) {
            itemCounter--;
        }
        consoleLogs.innerHTML += "Runda: " + round + ": " + "Zadałeś: " + player.attack + " obrażeń </br></br>";
        bossHPcounter.innerHTML = actualBoss.HP;
        bossHitAnimationOn();
        turnBtnAnimationOn();
        pointerEventsOff();

        if (enemyIsBurning > 0) {
            setTimeout(function(){
                BurnOn();
                if (actualBoss.HP > 0) {
                    setTimeout(function() {
                        bossAttack();
                        pointerEventsOn()
                        turnBtnAnimationOff();
                        round++;
                    }, 2500);
                }
            }, 1000);
        } else {
            setTimeout(function() {
                bossAttack();
                pointerEventsOn()
                turnBtnAnimationOff();
                round++;
            }, 1500);
        }
        
        checkBtnLoadings();

        if (enemyIsBurning > 0) {
            enemyIsBurning--;
        }

        BurnOff()
        checkPlayerAttack();

    } else {
        bossHPactual.style.width = '0px';
        bossHPcounter.innerHTML = '0';
        consoleLogs.innerHTML += "Runda: " + round + ": " + "Zadałeś: " + actualBoss.HP + " obrażeń </br></br>";
        roundLost = false;
        roundWon = true;
        if (roundWon === true && roundLost === false) {
            actualBossIndex = Bosses.indexOf(actualBoss);
            if (actualBossIndex == Bosses.length - 1) {
                modalOkBtn.style.display = 'none';
                modalEpilogueBtn.style.display = 'block';
            } else {    
                modalOkBtn.style.display = 'block';
                modalEpilogueBtn.style.display = 'none';
            }
            modalMainMenuBtn.style.display = 'block';
            modalTryAgainBtn.style.display = 'none';
        }
        player.maxHP = player.maxHP + 5000;
        player.XP += actualBoss.XP;
        player.gold += actualBoss.reward;
        modalReward.innerHTML = "Otrzymałeś: "+ actualBoss.XP + " xp";
        modalXP.innerHTML = "Otrzymałeś: "+ actualBoss.reward + " złota </br></br> Posiadasz teraz: " + player.gold + ' złota';
        checkShop();
        modal.style.display = "block";
        modalText.innerHTML = "Zwycięstwo w rundzie " + round;
        // playerLvlUp();
    }
})

spellBtn.addEventListener('click', function(){
    spellBtn.classList.add('attackClick');
    playHitSound();
    bloodScreenOf();
    if (spellCounter == 0) {
        if (actualBoss.HP - player.attack > 0) {
            actualBoss.HP = actualBoss.HP - player.attack;
            bossHPactual.style.width = (actualBoss.HP / actualBoss.maxHP) * 100 + '%';
            bossHPcounter.innerHTML = actualBoss.HP;
            spellCounter = player.actualMagic.loadingCount;
            if (itemCounter > 0) {
                itemCounter--;
            }
            if (player.HP + healing > player.maxHP) {
                player.HP = player.maxHP;
                yourHPcounter.innerHTML = player.HP;
                yourHPactual.style.width = (player.HP / player.maxHP) * 100 + '%';
                consoleLogs.innerHTML += "Runda: " + round + ": " + "Zadałeś: " + player.attack + " obrażeń / Wyleczyłeś się do maksimum </br></br>";
            } else {
                player.HP = player.HP + healing;
                yourHPcounter.innerHTML = player.HP;
                yourHPactual.style.width = (player.HP / player.maxHP) * 100 + '%';
                consoleLogs.innerHTML += "Runda: " + round + ": " + "Zadałeś: " + player.attack + " obrażeń / Wyleczyłeś: " + healing + " obrażeń </br></br>";
            }
            healingAnimationOn();
            bossHitAnimationOn();
            turnBtnAnimationOn();
            pointerEventsOff()

            if (enemyIsBurning > 0) {
                setTimeout(function(){
                    BurnOn();
                    if (actualBoss.HP > 0) {
                        setTimeout(function() {
                            bossAttack();
                            pointerEventsOn()
                            turnBtnAnimationOff();
                            round++;
                        }, 2500);
                    }
                }, 1000);
            } else {
                setTimeout(function() {
                    bossAttack();
                    pointerEventsOn()
                    turnBtnAnimationOff();
                    round++;
                }, 1500);
            }

            checkBtnLoadings();

            if (enemyIsBurning > 0) {
                enemyIsBurning--;
            }

            BurnOff();
            checkPlayerAttack();
            
        } else {
            bossHPactual.style.width = '0px';
            bossHPcounter.innerHTML = '0';
            if (player.HP + healing > player.maxHP) {
                player.HP = player.maxHP;
                yourHPcounter.innerHTML = player.HP;
                yourHPactual.style.width = (player.HP / player.maxHP) * 100 + '%';
                consoleLogs.innerHTML += "Runda: " + round + ": " + "Zadałeś: " + actualBoss.HP + " obrażeń / Wyleczyłeś się do maksimum </br></br>";
            } else {
                player.HP = player.HP + healing;
                yourHPcounter.innerHTML = player.HP;
                yourHPactual.style.width = (player.HP / player.maxHP) * 100 + '%';
                consoleLogs.innerHTML += "Runda: " + round + ": " + "Zadałeś: " + actualBoss.HP + " obrażeń / Wyleczyłeś: " + healing + " obrażeń </br></br>";
            }
            roundLost = false;
            roundWon = true;
            if (roundWon === true && roundLost === false) {
                actualBossIndex = Bosses.indexOf(actualBoss);
                if (actualBossIndex == Bosses.length -1) {
                    modalOkBtn.style.display = 'none';
                    modalEpilogueBtn.style.display = 'block';
                } else {
                    modalOkBtn.style.display = 'block';
                    modalEpilogueBtn.style.display = 'none';
                }
                modalMainMenuBtn.style.display = 'block';
                modalTryAgainBtn.style.display = 'none';
            }
            player.maxHP = player.maxHP + 5000;
            player.XP += actualBoss.XP;
            player.gold += actualBoss.reward;
            modalReward.innerHTML = "Otrzymałeś: "+ actualBoss.XP + " xp";
            modalXP.innerHTML = "Otrzymałeś: "+ actualBoss.reward + " złota </br></br> Posiadasz teraz: " + player.gold + ' złota';
            checkShop();
            modal.style.display = "block";
            modalText.innerHTML = "Zwycięstwo w rundzie " + round;
            // playerLvlUp();
        }
    } 
})

itemBtn.addEventListener('click', function(){
    itemBtn.classList.add('attackClick');
    playHitSound();
    bloodScreenOf();
    if (itemCounter == 0) {
        if (actualBoss.HP - player.itemAttack > 0) {
            actualBoss.HP = actualBoss.HP - player.itemAttack;
            bossHPactual.style.width = (actualBoss.HP / actualBoss.maxHP) * 100 + '%';
            bossHPcounter.innerHTML = actualBoss.HP;
            itemCounter = player.actualItem.loadingCount;

            if (spellCounter > 0) {
                spellCounter--;
            }

            consoleLogs.innerHTML += "Runda: " + round + ": " + "Zadałeś: " + player.itemAttack + "</br></br>";

            bossHitAnimationOn();
            turnBtnAnimationOn();
            pointerEventsOff()

            if (enemyIsBurning > 0) {
                setTimeout(function(){
                    BurnOn();
                    if (actualBoss.HP > 0) {
                        setTimeout(function() {
                            bossAttack();
                            pointerEventsOn()
                            turnBtnAnimationOff();
                            round++;
                        }, 2500);
                    }
                }, 1000);
            } else {
                setTimeout(function() {
                    bossAttack();
                    pointerEventsOn()
                    turnBtnAnimationOff();
                    round++;
                }, 1500);
            }

            checkBtnLoadings();
            checkPlayerAttack();

        } else {
            bossHPactual.style.width = '0px';
            bossHPcounter.innerHTML = '0';
            consoleLogs.innerHTML += "Runda: " + round + ": " + "Zadałeś: " + actualBoss.HP + "</br></br>";
            roundLost = false;
            roundWon = true;
            if (roundWon === true && roundLost === false) {
                actualBossIndex = Bosses.indexOf(actualBoss);
                if (actualBossIndex == Bosses.length -1) {
                    modalOkBtn.style.display = 'none';
                    modalEpilogueBtn.style.display = 'block';
                } else {
                    modalOkBtn.style.display = 'block';
                    modalEpilogueBtn.style.display = 'none';
                }
                modalMainMenuBtn.style.display = 'block';
                modalTryAgainBtn.style.display = 'none';
            }
            player.maxHP = player.maxHP + 5000;
            player.XP += actualBoss.XP;
            player.gold += actualBoss.reward;
            modalReward.innerHTML = "Otrzymałeś: "+ actualBoss.XP + " xp";
            modalXP.innerHTML = "Otrzymałeś: "+ actualBoss.reward + " złota </br></br> Posiadasz teraz: " + player.gold + ' złota';
            checkShop();
            modal.style.display = "block";
            modalText.innerHTML = "Zwycięstwo w rundzie " + round;
            // playerLvlUp();
        }
    }
})

modalOkBtn.addEventListener('click', function(){
    modalOkBtn.classList.add('buttonClick');
    if (actualBossIndex >= 0 && actualBossIndex < Bosses.length - 1) {

        refreshCounters();
        animationsOff();
        checkBtnLoadings();
        pointerEventsOn();
        roundWinLoseReset();

        yourHPactual.style.width = '100%';
        player.HP = player.maxHP;
        yourHPcounter.innerHTML = player.HP;
        checkPlayerAttack();

        actualBoss = Bosses[actualBossIndex + 1];
        actualBoss.HP = actualBoss.maxHP;
        bossHPactual.style.width = '100%';
        bossHPcounter.innerHTML = actualBoss.HP;
        checkBoss();
        
        modal.style.display = "none";
        modalText.innerHTML = "";
        fightContainer.classList.remove('fightContainerShow');
        fightContainer.style.display = 'none';
        fightContainer.style.pointerEvents = 'none';
        toStory()
        hidePlayerActions();
        hideBossActions();
        consoleLogs.innerHTML = "Walka się rozpoczęła </br></br>";     
    }
})

modalEpilogueBtn.addEventListener('click', function(){
        modalEpilogueBtn.classList.add('buttonClick');
        refreshCounters();
        animationsOff();
        checkBtnLoadings();
        pointerEventsOn();
        roundWinLoseReset();

        yourHPactual.style.width = '100%';
        player.HP = player.maxHP;
        yourHPcounter.innerHTML = player.HP;
        checkPlayerAttack();

        actualBoss = '';
        actualBoss.HP = '';
        bossHPactual.style.width = '100%';
        bossHPcounter.innerHTML = '';
        checkBoss();
        
        modal.style.display = "none";
        modalText.innerHTML = "";
        fightContainer.classList.remove('fightContainerShow');
        fightContainer.style.display = 'none';
        fightContainer.style.pointerEvents = 'none';
        toEpilogue()
        hidePlayerActions();
        hideBossActions();  
    
})

modalMainMenuBtn.addEventListener('click', function(){

    refreshCounters();
    animationsOff();
    checkBtnLoadings();
    pointerEventsOn();
    roundWinLoseReset();

    fightContainer.classList.toggle('fightContainerShow');
    menuContainer.classList.remove('menuContainerHide');
    menuContainer.style.display = 'flex';
    fightContainer.style.display = 'none';
    fightContainer.style.pointerEvents = 'none';

    player.HP = player.maxHP;
    yourHPactual.style.width = '100%';
    yourHPcounter.innerHTML = player.HP;
    hidePlayerActions();

    actualBoss = '';
    actualBoss.HP = actualBoss.maxHP;
    bossHPcounter.innerHTML = actualBoss.HP;
    bossHPactual.style.width = '100%';
    hideBossActions();

    modal.style.display = "none";
    modalText.innerHTML = "";

    consoleLogs.innerHTML = "Walka się rozpoczęła </br></br>";

    setTimeout(function(){
        menuContainerInner.style.opacity = "1";
        actualPlace = 'mainMenu';   
        openMainMenu(); 
    },2000)
})

storyMainMenuBtn.addEventListener('click', function(){
    storyMainMenuBtn.classList.add('storyButtonClick');
    refreshCounters();
    animationsOff();
    checkBtnLoadings();
    pointerEventsOn();
    roundWinLoseReset();

    story.classList.toggle('storyShow');
    storyMainMenuBtn.classList.toggle('storyMainMenuBtnShow');
    fightContainer.classList.toggle('fightContainerShow');
    menuContainer.classList.remove('menuContainerHide');
    menuContainer.style.display = 'flex';
    fightContainer.style.display = 'none';
    fightContainer.style.pointerEvents = 'none';

    player.HP = player.maxHP;
    yourHPactual.style.width = '100%';
    yourHPcounter.innerHTML = player.HP;
    hidePlayerActions();

    actualBoss = '';
    actualBoss.HP = actualBoss.maxHP;
    bossHPcounter.innerHTML = actualBoss.HP;
    bossHPactual.style.width = '100%';
    hideBossActions();

    modal.style.display = "none";
    modalText.innerHTML = "";

    consoleLogs.innerHTML = "Walka się rozpoczęła </br></br>";
    
    setTimeout(function(){
        menuContainerInner.style.opacity = "1";
        actualPlace = 'mainMenu';   
        openMainMenu(); 
    },2000)
})

modalTryAgainBtn.addEventListener('click', function(){
    modalTryAgainBtn.classList.add('buttonClick');
    actualBossIndex = Bosses.indexOf(actualBoss)
    if (actualBossIndex >= 0 && actualBossIndex <= Bosses.length - 1) {
        actualBoss = Bosses[actualBossIndex];
        bossHPactual.style.width = '100%';
        yourHPactual.style.width = '100%';
        actualBoss.HP = actualBoss.maxHP;
        player.HP = player.maxHP;
        yourHPcounter.innerHTML = player.HP;
        bossHPcounter.innerHTML = actualBoss.HP;
        modal.style.display = "none";
        modalText.innerHTML = "";
        consoleLogs.innerHTML = "Walka się rozpoczęła </br></br>";
        refreshCounters();
        animationsOff();
        checkBtnLoadings();
        pointerEventsOn();
        checkBoss();
        checkPlayerAttack();
        roundWinLoseReset();
    }
})
const upgradeSpellBtnInfoCost = document.querySelector('.upgradeSpellBtnInfoCost');
const upgradeSpellBtnInfoStats = document.querySelector('.upgradeSpellBtnInfoStats');
const upgradeSpellBtnInfoText = document.querySelector('.upgradeSpellBtnInfoText');

const upgradeItemBtnInfoText = document.querySelector('.upgradeItemBtnInfoText');
const upgradeItemBtnInfoStats = document.querySelector('.upgradeItemBtnInfoStats');
const upgradeItemBtnImg = document.querySelector('.upgradeItemBtnImg');
const upgradeItemBtnInfoCost = document.querySelector('.upgradeItemBtnInfoCost');

const upgradeShieldBtnInfoText = document.querySelector('.upgradeShieldBtnInfoText');
const upgradeShieldBtnInfoStats = document.querySelector('.upgradeShieldBtnInfoStats');
const upgradeShieldBtnImg = document.querySelector('.upgradeShieldBtnImg');
const upgradeShieldBtnInfoCost = document.querySelector('.upgradeShieldBtnInfoCost');

upgradeItemBtnImg.style.backgroundImage = '';
upgradeItemBtnInfoText.innerHTML = '';
upgradeItemBtnInfoStats.innerHTML = '';
upgradeItemBtnInfoCost.innerHTML = '';

upgradeShieldBtnImg.style.backgroundImage = '';
upgradeShieldBtnInfoText.innerHTML = '';
upgradeShieldBtnInfoStats.innerHTML = '';
upgradeShieldBtnInfoCost.innerHTML = '';

upgradeSpellBtnInfoStats.innerHTML = '';
upgradeSpellBtnInfoText.innerHTML = '';
upgradeSpellBtnInfoCost.innerHTML = '';


function checkShop() {
    if (actualSwordUpgradeIndex < Swords.length && actualSwordUpgradeIndex >= 0) {
        upgradeItemBtnImg.src = actualSwordUpgrade.img;
        upgradeItemBtnInfoText.innerHTML = actualSwordUpgrade.name;
        upgradeItemBtnInfoStats.innerHTML = '( Użycie ) ' + actualSwordUpgrade.use + '</br> ( Pasywne ) ' + actualSwordUpgrade.passive + '</br>' + actualSwordUpgrade.loading;
        upgradeItemBtnInfoCost.innerHTML = 'Cena: ' + actualSwordUpgrade.cost + ' złota';
        if (player.gold < actualSwordUpgrade.cost) {
            upgradeItemBtn.style.backgroundImage = "url('img/buttonNotEnoughGoldImg.jpg')";
            upgradeItemBtn.style.pointerEvents = 'none';
        } else {
            upgradeItemBtn.style.backgroundImage = "url('img/buttonImg.jpg')";
            upgradeItemBtn.style.pointerEvents = 'auto';
        }
    } else {
        upgradeItemBtn.style.backgroundImage = "url('img/buttonLoadingImg.jpg')";
        upgradeItemBtn.style.pointerEvents = 'none';
        upgradeItemBtnImg.src = '';
        upgradeItemBtnInfoText.innerHTML = 'Przedmiot ulepszony maksymalnie';
        upgradeItemBtnInfoStats.innerHTML = '';
        upgradeItemBtnInfoCost.innerHTML = '';
        upgradeItemBtnImg.style.display = 'none';
        upgradeItemBtnInfoStats.style.display = 'none';
        upgradeItemBtnInfoCost.style.display = 'none';
    }
    if (actualSpellUpgradeIndex < Spells.length && actualSpellUpgradeIndex >= 0) {
        upgradeSpellBtnInfoText.innerHTML = actualSpellUpgrade.name;
        upgradeSpellBtnInfoStats.innerHTML = '( Użycie ) ' + actualSpellUpgrade.use + '</br>' + actualSpellUpgrade.loading;
        upgradeSpellBtnInfoCost.innerHTML = 'Cena: ' + actualSpellUpgrade.cost + ' złota';
        if (player.gold < actualSpellUpgrade.cost) {
            upgradeSpellBtn.style.backgroundImage = "url('img/buttonNotEnoughGoldImg.jpg')";
            upgradeSpellBtn.style.pointerEvents = 'none';
        } else {
            upgradeSpellBtn.style.backgroundImage = "url('img/buttonImg.jpg')";
            upgradeSpellBtn.style.pointerEvents = 'auto';
        }
    } else {
        upgradeSpellBtn.style.backgroundImage = "url('img/buttonLoadingImg.jpg')";
        upgradeSpellBtn.style.pointerEvents = 'none';
        upgradeSpellBtnInfoText.innerHTML = 'Zaklęcie ulepszone maksymalnie';
        upgradeSpellBtnInfoStats.innerHTML = '';
        upgradeSpellBtnInfoCost.innerHTML = '';
        upgradeSpellBtnInfoStats.style.display = 'none';
        upgradeSpellBtnInfoCost.style.display = 'none';
    }
    if (actualShieldUpgradeIndex < Shields.length && actualShieldUpgradeIndex >= 0) {
        upgradeShieldBtnImg.src = actualShieldUpgrade.img;
        upgradeShieldBtnInfoText.innerHTML = actualShieldUpgrade.name;
        upgradeShieldBtnInfoStats.innerHTML = '( Pasywne ) ' + actualShieldUpgrade.passive;
        upgradeShieldBtnInfoCost.innerHTML = 'Cena: ' + actualShieldUpgrade.cost + ' złota';
        if (player.gold < actualShieldUpgrade.cost) {
            upgradeShieldBtn.style.backgroundImage = "url('img/buttonNotEnoughGoldImg.jpg')";
            upgradeShieldBtn.style.pointerEvents = 'none';
        } else {
            upgradeShieldBtn.style.backgroundImage = "url('img/buttonImg.jpg')";
            upgradeShieldBtn.style.pointerEvents = 'auto';
        }
    } else {
        upgradeShieldBtn.style.backgroundImage = "url('img/buttonLoadingImg.jpg')";
        upgradeShieldBtn.style.pointerEvents = 'none';
        upgradeShieldBtnInfoText.innerHTML = 'Tarcza ulepszona maksymalnie';
        upgradeShieldBtnInfoStats.innerHTML = '';
        upgradeShieldBtnInfoCost.innerHTML = '';
        upgradeShieldBtnImg.src = '';
        upgradeShieldBtnImg.style.display = 'none';
        upgradeShieldBtnInfoStats.style.display = 'none';
        upgradeShieldBtnInfoCost.style.display = 'none';
    }
}

const upgradeSpellBtn = document.querySelector('.upgradeSpellBtn');
const upgradeItemBtn = document.querySelector('.upgradeItemBtn');
const upgradeShieldBtn = document.querySelector('.upgradeShieldBtn');

upgradeItemBtn.addEventListener('click', function(){
    upgradeItemBtn.classList.add('buttonClick');
    actualSword = Swords[actualSwordUpgradeIndex];
    player.gold -= actualSwordUpgrade.cost;
    actualSwordUpgrade = Swords[actualSwordUpgradeIndex + 1];
    actualSwordUpgradeIndex = Swords.indexOf(actualSwordUpgrade);
    player.actualItem = actualSword;

    modalXP.innerHTML = "Otrzymałeś: "+ actualBoss.reward + " złota </br></br> Posiadasz teraz: " + player.gold + ' złota';
    setTimeout(function(){
        upgradeItemBtn.classList.remove('buttonClick');
        checkShop()
    },100)
})

upgradeSpellBtn.addEventListener('click', function(){
    upgradeSpellBtn.classList.add('buttonClick');
    actualSpell = Spells[actualSpellUpgradeIndex];
    player.gold -= actualSpellUpgrade.cost;
    actualSpellUpgrade = Spells[actualSpellUpgradeIndex + 1];
    actualSpellUpgradeIndex = Spells.indexOf(actualSpellUpgrade);
    player.actualMagic = actualSpell;

    modalXP.innerHTML = "Otrzymałeś: "+ actualBoss.reward + " złota </br></br> Posiadasz teraz: " + player.gold + ' złota';
    setTimeout(function(){
        upgradeSpellBtn.classList.remove('buttonClick');
        checkShop()
    },100)
})

upgradeShieldBtn.addEventListener('click', function(){
    upgradeShieldBtn.classList.add('buttonClick');
    actualShield = Shields[actualShieldUpgradeIndex];
    player.gold -= actualShieldUpgrade.cost;
    actualShieldUpgrade = Shields[actualShieldUpgradeIndex + 1];
    actualShieldUpgradeIndex = Shields.indexOf(actualShieldUpgrade);
    player.actualShield = actualShield;

    modalXP.innerHTML = "Otrzymałeś: "+ actualBoss.reward + " złota </br></br> Posiadasz teraz: " + player.gold + ' złota';
    setTimeout(function(){
        upgradeShieldBtn.classList.remove('buttonClick');
        checkShop()
    },100)
})


checkBoss();