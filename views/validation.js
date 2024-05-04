const form  = document.querySelector("form");
const email = document.querySelector("input[type=email]")
const password = document.querySelector("input[type=password]")
const labels = document.querySelectorAll('.form-control label')

console.log(labels);

labels.forEach(label => {
    label.innerHTML = label.innerText.split('')
    .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}
    </span>`)
    .join('')
})

form.addEventListener("submit", onSubmitFunction)

function onSubmitFunction(event) {
    if (email.value === "" || password.value === "") {
        event.preventDefault()
        alert("Please fill the form")
        return false;
    }
}


