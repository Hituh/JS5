let colours = ['red', 'green', 'yellow', 'blue', 'brown'];


function format() {
    const lista = document.getElementById("div");
    let listalength = lista.children.length

    for (var i = 0; i < listalength; i++) {
        e = lista.children[i];
        if (!e.style.color)
            e.style.color = colours[Math.floor(Math.random() * colours.length)];
        let length = e.innerHTML.length;
        let title = (`Paragraf nr: ${i + 1} sposrod ${listalength} Długość paragrafu: ${length}`);
        e.title = title
    }

    for (var i = listalength - 1; i >= 0; i--) {
        e = lista.children[i];
        var header = document.createElement("h3");
        header.style.color = "white";
        header.textContent = `Paragraf ${i + 1}`;
        lista.insertBefore(header, e);
    }

    function findId(child) {
        parent = child.parentNode;
        var id = Array.prototype.indexOf.call(parent.children, child);
        return id + 1;
    }

    function itempressed(event) {
        const paragraphs = document.getElementsByTagName('p');
        for (let p of paragraphs) {
            p.style.outline = 'none';
            p.style.backgroundColor = 'initial';
        }
        if (event.target.nodeName == "P") {
            var numberid = findId(event.target)
            event.target.style.outline = "thick solid green";
            if (event.target.nextElementSibling != null) {
                next = event.target.nextElementSibling;
                if (next.nextElementSibling != null)
                    next.nextElementSibling.style.outline = "thick solid blue";
            }
            if (event.target.previousElementSibling != null) {
                previous = event.target.previousElementSibling;
                if (previous.previousElementSibling != null)
                    previous.previousElementSibling.style.outline = "thick solid orange";
            }

            if (numberid % 2 == 0) event.target.style.backgroundColor = "lightgrey";
            else event.target.style.backgroundColor = "darkgrey";
        }
        else {
            var numberid = findId(event.target)
            if (lista.children[numberid].style.visibility === null)
                lista.children[numberid].style.visibility = "hidden"

            if (lista.children[numberid].style.visibility === "hidden")
                lista.children[numberid].style.visibility = "visible"
            else lista.children[numberid].style.visibility = "hidden"
        }
    }

    for (let node of lista.children) {
        node.addEventListener("click", itempressed)
    }
}

function removetitles() {
    const titles = document.getElementById("div");


    for (var i = 0; i < titles.children.length; i++) {
        titles.children[i].remove()
    }
}

format();
document.getElementById('addP').onsubmit = (e) => {
    e.preventDefault();
    if (document.getElementById('add').value)
    {
        
        const lista = document.getElementById("div");
        removetitles()
        const p = document.createElement('p');
        p.innerText = document.getElementById('add').value;
        lista.append(p);

        format();
    }

}
