function getSuit(suit) {
    if (suit === 'S') {
        return 'spades';
    }
    else if (suit === 'C') {
        return 'clubs';
    }
    else if (suit === 'D') {
        return 'diamonds';
    }
    else if (suit === 'H') {
        return 'hearts';
    }
    return 'joker';
}

function getRank(value) {
    //joker is 0 but show 1 anyway
    if (value === 0 || value === 14) {
        return 1;
    }
    else if (value > 10) {
        return value + 3;
    }
    return value;
}

function generateCard(card) {
    var item = document.createElement("div");
    var classes = ['card'];
    classes.push(getSuit(card.suit));
    classes.push('rank' + getRank(card.value));
    item.className = classes.join(' ');
    var inner = document.createElement("div");
    inner.className = 'face';
    inner.onclick = function(event) {
        if (inner.className === 'face') {
            inner.className = 'back';
            item.className = 'card';
        } else {
            inner.className = 'face';
            item.className = classes.join(' ');
        }
    };
    item.appendChild(inner);
    return item;
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}


