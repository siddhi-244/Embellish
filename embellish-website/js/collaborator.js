let collaborators = document.getElementById('collaborators');
function renderCollaborators(json) {
    collaborators.innerHTML = "";
    console.log(json)
    json.forEach(user => {
        if (user.login === "siddhi-244") {
            collaborators.innerHTML += `
            <div class="text-center px-5 mb-4">
                <img class="img-fluid rounded-circle mb-4 border-gradient border-custom"
                    src="${user.avatar_url}" alt="..." />
                <h5 class="fw-bolder">${user.login}</h5>
                <div class="fst-italic text-muted">Frontend Developer & Founder</div>
                <div class="d-flex justify-content-center">
                    <a href="${user.html_url}"
                        class=" text-decoration-none rounded-circle rounded-circle "><i
                            class="bi bi-github fs-2"></i>
                    </a>
                </div>
            </div>`
        }
        else {
            collaborators.innerHTML += `<div class="text-center px-5 mb-4">
                <img class="img-fluid rounded-circle mb-4 border-gradient border-custom"
                    src="${user.avatar_url}" alt="..." />
                <h5 class="fw-bolder">${user.login}</h5>
                <div class="fst-italic text-muted">Frontend Developer & Contributor</div>
                <div class="d-flex justify-content-center">
                    <a href="${user.html_url}"
                        class=" text-decoration-none rounded-circle rounded-circle "><i
                            class="bi bi-github fs-2"></i>
                    </a>
                </div>
            </div>`
        }
    });
}
function fetchCollaborators() {
    fetch("https://api.github.com/repos/siddhi-244/Embellish/contributors")
        .then(res => res.json())
        .then(json => renderCollaborators(json));
}
fetchCollaborators()