let currentPage = 0;
showPage(currentPage);

function showPage(pageCounter) {
    let page = document.getElementsByClassName("page");
    page[pageCounter].style.display = "block";
    if (pageCounter == 0) {
        document.getElementById("previousBtn").style.display = "none";
    } else {
        document.getElementById("previousBtn").style.display = "inline";
    }
    if (pageCounter == (page.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }
    fixPageIndicator(pageCounter)
}

function nextPrevious(pageNumber) {
    let page = document.getElementsByClassName("page");
    if (pageNumber == 1 && !validateForm()) return false;
    page[currentPage].style.display = "none";
    currentPage = currentPage + pageNumber;
    console.log(currentPage);
    console.log(page.length);
    if (currentPage >= page.length) {
        document.getElementById("profileSetup").submit();
        document.location.replace('/')
        return false;
    }
    showPage(currentPage);
}

function validateForm() {
    let page, formInput, valid = true;
    page = document.getElementsByClassName("page");
    formInput = page[currentPage].getElementsByTagName("input");
    for (i = 0; i < formInput.length; i++) {
        if (formInput[i].value == "") {
            formInput[i].className += " invalid";
            valid = false;
        }
    }
    if (valid) {
        document.getElementsByClassName("pageIndicator")[currentPage].className += " finish";
    }
    return valid;
}

function fixPageIndicator(n) {
    let i, pageIndicator = document.getElementsByClassName("pageIndicator");
    for (i = 0; i < pageIndicator.length; i++) {
        pageIndicator[i].className = pageIndicator[i].className.replace(" active", "");
    }
    pageIndicator[n].className += " active";
}
