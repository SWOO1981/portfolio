function renderCaseStudy(data) {
    const template = document.getElementById('case-study-template').innerHTML;
    let filledTemplate = template;

    filledTemplate = filledTemplate.replace(/{{title}}/g, data.title);
    filledTemplate = filledTemplate.replace(/{{subtitle}}/g, data.subtitle);
    filledTemplate = filledTemplate.replace(/{{company}}/g, data.company);
    filledTemplate = filledTemplate.replace(/{{role}}/g, data.role);
    filledTemplate = filledTemplate.replace(/{{platforms}}/g, data.platforms);
    filledTemplate = filledTemplate.replace(/{{scope}}/g, data.scope);
    filledTemplate = filledTemplate.replace(/{{timeline}}/g, data.timeline);
    filledTemplate = filledTemplate.replace(/{{achievements}}/g, data.achievements);
    filledTemplate = filledTemplate.replace(/{{bodyContent}}/g, data.bodyContent);

    document.getElementById('case-study-container').innerHTML = filledTemplate;
}

// Render the case study when the page loads
document.addEventListener('DOMContentLoaded', function () {
    renderCaseStudy(caseStudyData);
});