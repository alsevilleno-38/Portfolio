const admissionBtn = $("#admission-btn");
const admissionDropdown = $("#admission-dropdown")
admissionBtn.on("click", function (e) {
    admissionDropdown.toggleClass("show");
})