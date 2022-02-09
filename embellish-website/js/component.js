let componentContainer = document.getElementById('component-container');
function fetchComponents() {
    fetch("/embellish-website/js/componentData.json")
        .then(obj => obj.json())
        .then(jsonData => renderComponents(jsonData));
}
function renderComponents(json) {
    json.items.forEach(component => {
        let { category, componentName, preview, componentURL } = component;
        componentContainer.innerHTML += `
        <div class="col-lg-4 mb-5" style="cursor: default;">
                            <div class="card h-100 shadow border-0">
                                <div class="card-body p-4">
                                    <div class="badge bg-primary bg-gradient rounded-pill mb-2">${category}</div>
                                    <div class="text-decoration-none link-dark">
                                        <div class="h5 card-title mb-3">${componentName}</div>
                                    </div>
                                </div>
                                <div class="card-footer p-4 pt-0 bg-transparent border-top-0">
                                    <div class="d-flex align-items-end justify-content-between w-100">
                                        <div class="d-flex align-items-center w-100">
                                            <div class="footer-card">
                                                <a href="${preview}">Preview</a>
                                                <a class="text-black" href="${componentURL}"><i class="bi bi-github fs-3"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        `
    });
}
fetchComponents();