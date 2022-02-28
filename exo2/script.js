// function allowDrop(ev) {
//     ev.preventDefault();  // default is not to allow drop
//   }
//   function dragStart(ev) {
//     // The 'text/plain' is referring the Data Type (DOMString) 
//     // of the Object being dragged.
//     // ev.target.id is the id of the Object being dragged
//     ev.dataTransfer.setData("text/plain", ev.target.id);
//   }
//   function dropIt(ev) {
//     ev.preventDefault();  // default is not to allow drop
//     console.log(document.getElementById(ev.target.id));
//     let sourceId = ev.dataTransfer.getData("text/plain");
//     let sourceIdEl=document.getElementById(sourceId);
//     let sourceIdParentEl=sourceIdEl.parentElement;
//     // ev.target.id here is the id of target Object of the drop
//     let targetEl=document.getElementById(ev.target.id)
//     let targetParentEl=targetEl.parentElement;

//     // Compare List names to see if we are going between lists
//     // or within the same list
//     if (targetParentEl.id!==sourceIdParentEl.id){
// // If the source and destination have the same 
//         // className (card), then we risk dropping a Card in to a Card
//         // That may be a cool feature, but not for us!
//         if (targetEl.className === sourceIdEl.className ){
//           // Append to parent Object (list), not to a 
//           // Card in the list
//           // This is in case you drag and drop a Card on top 
//           // of a Card in a different list
//            targetParentEl.appendChild(sourceIdEl);

//         }else{
//             // Append to the list
//              targetEl.appendChild(sourceIdEl);

//         }

//     }else{
//         // Same list. Swap the text of the two cards
//         // Just like swapping the values in two variables

//         // Temporary holder of the destination Object
//         let holder=targetEl;
//         // The text of the destination Object. 
//         // We are really just moving the text, not the Card
//         let holderText=holder.textContent;
//         // Replace the destination Objects text with the sources text
//         targetEl.textContent=sourceIdEl.textContent;
//         // Replace the sources text with the original destinations
//         sourceIdEl.textContent=holderText;
//         holderText='';
// }

//   }


//DOM
const liste = document.getElementById('list1')
const liste2 = document.getElementById('list3')
const save = document.getElementById('save')
const btn1 = document.getElementById('btnRight')
const btn2 = document.getElementById('btnLeft')

var tab = [{
        'libelle': "ALGO",
        "position": "g"
    },
    {
        'libelle': "JAVA",
        "position": "g"
    },
    {
        'libelle': "PHP",
        "position": "g"
    },
    {
        'libelle': "JAVASCRIPT",
        "position": "g"
    },

];


tab.forEach((element, i) => {
    if (element.position == "g") {

        createElement(element.libelle, i);
    }
});





btn1.addEventListener('click', () => {

    const left = liste.querySelectorAll('p')

    left.forEach(element => {
        if (element.className === "card active") {
            console.log(element);
            element.className = "card"
            tab[element.id].position = 'd'
            liste2.appendChild(element)

        }
    });

})



btn2.addEventListener('click', () => {

    const right = liste2.querySelectorAll('p')

    right.forEach(element => {
        if (element.className === "card active") {
            console.log(element);
            element.className = "card"
            tab[element.id].position = 'g'

            liste.appendChild(element)

        }
    });

})



// // ADD ELEMENT DOM

function createElement(element, i) {
    const p = document.createElement('p')
    p.setAttribute('class', 'card')
    p.id = i
    p.setAttribute('ondragstart', `drag(event,${i})`)
    p.setAttribute('ondblclick', `update(${i})`)
    p.setAttribute('draggable', 'true')
    p.innerText = element

    p.addEventListener('dblclick', () => {
        p.style.backgroundColor = 'red';
        let tempVal = p;
        const updateInput = document.createp('textarea');
        updateInput.setAttribute('cols', '20')
        console.log(tempVal);
        updateInput.value = tempVal.innerText;

        tempVal.innerHTML = ''
        tempVal.appendChild(updateInput)

        updateInput.addEventListener('blur', function() {
            tempVal.innerHTML = updateInput.value;
            p.style.backgroundColor = 'White';
            p.libelle = updateInput.value.toUpperCase();
        })
        updateInput.focus()
        showElement()
    })


    liste.appendChild(p)
}


// function onClickCard(id){

//         targetP = document.getElementById(id)

//         targetP.classList.toggle('active')  

//         var allActive = document.querySelectorAll('.active');

//         btn1.addEventListener('click',function () {

//             allActive.forEach(element => {

//                 moveTo(element.innerText,liste2)
//                 removeElement(element)
//             });

//         })
//         targetP.addEventListener('dblclick',()=>{
//             moveTo(targetP.innerText,liste)
//             removeElement(targetP)

//         })

// }



function showElement() {
    liste.innerHTML = ""

    tab.forEach((element, i) => {

        if (element.position == "g") {

            createElement(element.libelle, i)
        }

    });
}

// const p = document.querySelectorAll('p')

// p.forEach(element => {
//     p.addEventListener('click',()=>{})
// });


// function moveTo(p, liste) {
//     createElement(p,liste)

// }

// function removeElement(p) {
//     p.remove();
// }



//NEW ITEM
save.addEventListener('blur', () => {

    if (save.value !== '') {

        tab.push({ libelle: save.value.toUpperCase(), position: 'g' })
            // createElement(save.value)
    }
    save.value = '';

    showElement();
    const allP = document.querySelectorAll('p')

    for (let index = 0; index < allP.length; index++) {
        allP[index].addEventListener('click', () => {
            allP[index].classList.toggle('active');
        })
    }
})


function update(id) {
    let par = document.getElementById(id)
    par.style.backgroundColor = 'red';
    let tempVal = par;
    const updateInput = document.createElement('textarea');
    updateInput.setAttribute('cols', '20')
    console.log(tempVal);
    updateInput.value = tempVal.innerText;

    tempVal.innerHTML = ''
    tempVal.appendChild(updateInput)

    updateInput.addEventListener('blur', function() {
        tempVal.innerHTML = updateInput.value.toUpperCase();
        par.style.backgroundColor = '';
        par.className = 'card';
        par.libelle = updateInput.value;
    })
    updateInput.focus()

}


function drag(event, i) {
    event.preventDefault()
    let conf = confirm('Voulez-vous supprimer cet item')
    console.log(conf);
    if (conf == true) {
        let removeRow = document.getElementById(i)
        tab.splice(i, 1)

        removeRow.remove()
    }


}