document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("resume-form");
    const resumeContent = document.getElementById("resume-content");
    const generatedResumeSection = document.getElementById("generated-resume");
    const resumeBuilderSection = document.getElementById("resume-builder");
    const editBtn = document.getElementById("edit-btn");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Capture form data
        const profilePicture = document.getElementById("profile-picture").files[0];
        const name = document.getElementById("name").value;
        const designation = document.getElementById("designation").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const education = document.getElementById("education").value;
        const startYear = document.getElementById("start-year").value;
        const endYear = document.getElementById("end-year").value;
        const skills = Array.from(form.querySelectorAll('input[name^="skill"]')).map(input => input.value);
        const languages = Array.from(form.querySelectorAll('input[name^="language"]')).map(input => input.value);
        const achievements = document.getElementById("achievements").value;
        const experience = document.getElementById("experience").value;
        const experienceStartDate = document.getElementById("experience-start-date").value;
        const experienceEndDate = document.getElementById("experience-end-date").value;

        // Generate Resume HTML
        let resumeHTML = `
            <div class="resume-header">
                <div class="resume-profile-picture">
                    <img src="${URL.createObjectURL(profilePicture)}" alt="Profile Picture">
                </div>
                <h2>${name}</h2>
                <h3>(${designation})</h3>
            </div>
            <div class="resume-section">
                <h3>Contact Details</h3>
                <p>Email: ${email}</p>
                <p>Phone: ${phone}</p>
            </div>
            <div class="resume-section">
                <h3>Education</h3>
                <p>${startYear} - ${endYear}</p>
                <p>${education}</p>
            </div>
            <div class="resume-section">
                <h3>Skills</h3>
                <ul>${skills.map(skill => `<li>${skill}</li>`).join('')}</ul>
            </div>
            <div class="resume-section">
                <h3>Languages</h3>
                <ul>${languages.map(language => `<li>${language}</li>`).join('')}</ul>
            </div>
            <div class="resume-section">
                <h3>Achievements</h3>
                <p>${achievements}</p>
            </div>
            <div class="resume-section">
                <h3>Experience</h3>
                <p>${experienceStartDate} - ${experienceEndDate}</p>
                <p>${experience}</p>
            </div>
        `;

        // Display resume
        resumeContent.innerHTML = resumeHTML;
        resumeBuilderSection.style.display = "none";
        generatedResumeSection.style.display = "block";
    });

    // Handle Edit Button
    editBtn.addEventListener("click", function() {
        generatedResumeSection.style.display = "none";
        resumeBuilderSection.style.display = "block";
    });
});
