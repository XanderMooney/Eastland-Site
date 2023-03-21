let headerTitle = document.getElementById('header-title');
let title = document.getElementById('title');
let Elements = Array.from(document.getElementById('main').children);

collectChildren(Elements)
viewportCheck();
document.addEventListener("scroll", (event) => { viewportCheck(); })
addEventListener("resize", (event) => { viewportCheck(); })

function viewportCheck() {
    if (isInViewport(title)) headerTitle.style.opacity = 0;
    else headerTitle.style.opacity = 1;

    Elements.forEach(function (element) {
        if (isInViewport(element)) {
            element.style.opacity = 1;
            if (element.classList.contains('tran-left')
                || element.classList.contains('tran-right')) element.style.transform = 'translateX(0rem)';
            if (element.classList.contains('tran-up')
                || element.classList.contains('tran-down')) element.style.transform = 'translateY(0rem)';
        }
        else {
            element.style.opacity = 0;
            if (element.classList.contains('tran-left')) element.style.transform = 'translateX(-2.5rem)';
            if (element.classList.contains('tran-right')) element.style.transform = 'translateX(2.5rem)';
            if (element.classList.contains('tran-up')) element.style.transform = 'translateY(2.5rem)';
            if (element.classList.contains('tran-down')) element.style.transform = 'translateY(-2.5rem)';
        }
    })
}

function isInViewport(el) {
    var rect = el.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

// this by far is the least efficient function; it calls again whenever there are more children
// with another element.
function collectChildren(array) {
    var needLoop = false;

    array.forEach(function (element) {
        Array.from(element.children).forEach(function (child) {
            if (!array.includes(child)) {
                array.push(child)
                if (child.children) needLoop = true;
            }
        })
    })
    if (needLoop) collectChildren(array)
}
function delayViewportCheck() {
    setTimeout(viewportCheck, 200)
}