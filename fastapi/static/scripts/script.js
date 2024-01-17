let ratingsPayload = {}

let highlightObj = {}
let ratings = []
let btnId = 1;
let ratingsArea = document.getElementById('ratingsArea')
let ratingsField = document.getElementById('ratings')
let options = document.getElementById('partOptions');
let partSel = document.getElementById('partSel');
let selection = [options, partSel]

// let getBody = () => { return ratingsPayload }

// For dependents
let dependents = {
    disabilityRating : 0,
    childrenUnder18: 0,
    childrenAbove18: 0,
    hasSpouse: false,
    aidAndAttendance: false,
    dependentParents: 0,
}

// For highlight
let getLight = () => {return highlightObj}
let bodyH = (part) => {
    let bodyHighlight = {
        head: false,
        torso: false,
        left_arm: false,
        right_arm: false,
        left_leg: false,
        right_leg: false,
    }
    switch(part.toUpperCase()){
        case "HEAD":
            bodyHighlight.head = true;
            break;
        case "TORSO":
            bodyHighlight.torso = true;
            break;
        case "LEFT ARM":
            bodyHighlight.left_arm = true;
            break;
        case "RIGHT ARM":
            bodyHighlight.right_arm = true;
            break;
        case "LEFT LEG":
            bodyHighlight.left_leg = true;
            break;
        case "RIGHT LEG":
            bodyHighlight.right_leg = true;
            break;
        default:
            break;
    } 
    return bodyHighlight
}

let toPayload = () => {
    let payload = {
        head: [],
        torso: [],
        left_arm: [],
        right_arm: [],
        left_leg: [],
        right_leg: [],
        other: [],
    }
    ratings.forEach((elem) => {
        let thePart = 'others';
        switch(elem.part.toUpperCase()){
            case "HEAD":
                thePart = "head";
                break;
            case "TORSO":
                thePart = "torso";
                break;
            case "LEFT ARM":
                thePart = "left_arm";
                break;
            case "RIGHT ARM":
                thePart = "right_arm";
                break;
            case "LEFT LEG":
                thePart = "left_leg";
                break;
            case "RIGHT LEG":
                thePart = "right_leg";
                break;
            default:
                thePart = "other";
        } 

        payload[thePart].push(elem.rate)
    });
    ratingsPayload.rating = payload;
    ratingsPayload.dependent = dependents;
    return ratingsPayload;
}



function getRatingsData() {
    return {
        data: ratings
    }
}

function removeRating(id) {
    ratings = ratings.filter((val)=> {return val.id != id} )
    document.dispatchEvent(new Event("trigger-rating"));
    document.dispatchEvent(new Event("trigger-recalculate"));
}

function addRatings (percent) {
    let part = document.getElementById('bodyPart').textContent;
    console.log(part)
    ratings.push({rate: percent, part: part, id: btnId});
    console.log(ratings)
    document.dispatchEvent(new Event("trigger-rating"));
    document.dispatchEvent(new Event("trigger-recalculate"));
    btnId++;
}

function partOption(part){
    document.getElementById('bodyPart').textContent = part;
    highlightObj = bodyH(part)
    options.style.opacity = "0";
    options.style.pointerEvents = 'none';
    document.dispatchEvent(new Event("trigger-highlight"));
}

function dependentSelect(categ,val) {
    switch(categ.toUpperCase()){
        case 'CHBEL18':
            dependents.childrenUnder18 = Number(document.getElementById('below18').value)
            break;
        case 'CH1824':
            dependents.childrenAbove18 = Number(document.getElementById('18to24').value)
            break;
        case 'MARITAL':
            dependents.hasSpouse = Boolean(document.getElementById('marital').value)
            break;
        case 'AA':
            dependents.aidAndAttendance = Boolean(document.getElementById('aa').value)
            break;
        case 'PARENTS':
            dependents.dependentParents = Number(document.getElementById('depParents').value)
            break;
    }
    document.dispatchEvent(new Event("trigger-recalculate"));
}

window.onload = () => {
    document.dispatchEvent(new Event("trigger-recalculate"));
}

selection.forEach((elem) => {
    elem.addEventListener('mouseleave', () => {
        options.style.opacity = "0";
        options.style.pointerEvents = 'none';
    })
    elem.addEventListener('mouseenter', () => {
        options.style.opacity = "1";
        options.style.pointerEvents = 'all'
    })
})

let maritalStat = document.getElementById('marital');
let aaa = document.getElementById('AidAndAtt')
aaa.remove()
maritalStat.addEventListener('change', () => {
    console.log(maritalStat.value)
    if(maritalStat.value == 1){
        document.getElementById('maritalStatus').insertAdjacentElement('afterend', aaa)
    }
})