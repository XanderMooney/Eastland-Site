let holder = document.getElementById("Title-holder")
let words = Array.from(holder.children)
let currentWord = -1;

holder.innerHTML = ''

let newDiv = document.createElement('div')
newDiv.classList.add('holder', 'current')
holder.appendChild(newDiv)
newDiv = document.createElement('div')
newDiv.classList.add('holder', 'next')
holder.appendChild(newDiv)

changeWord()
setInterval(changeWord, 2500)

function changeWord()
{
    currentWord++;

    currentWord %= words.length

    let selectedElement;
    Array.from(holder.children).forEach(function (element) {
        if (element.classList.contains('current'))
        {
            element.classList.remove('current')
            element.classList.add('next')
        }
        else 
        {
            selectedElement = element;
            element.classList.add('current')
            element.classList.remove('next')
        }
    })
    if (!words[currentWord].classList.contains('split'))
    {
        words[currentWord].classList.add('split')
        words[currentWord].dataset.length = words[currentWord].innerHTML.length;
        words[currentWord].innerHTML = split(words[currentWord])
    }
    selectedElement.innerHTML = ""
    selectedElement.appendChild(words[currentWord])

    let letters = Array.from(selectedElement.children[0].children) 
    
    let c = 0;

    letters.forEach(function (element) {
        c++ // finally

        element.style.marginLeft = c + "rem";
        
        element.style.transition = "1s ease"
        
        requestAnimationFrame(() => {
        element.style.marginLeft = "0";
        });
        // element.classList.add('anti-margin')

        // element.removeAttribute('style')
    })

   //holder.style.marginLeft = "calc(" + -100 * currentWord + "% - " + words[currentWord].innerHTML.length * 1.3 + "px)"
}

function split(word) 
{
    let output = "";

    for (let i = 0; i < word.innerHTML.length; i++)
    {
        output += "<span>" + word.innerHTML[i] + "</span>";
    }
    return output;
}