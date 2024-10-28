function calculateResult() {
    const form = document.getElementById('surveyForm');
    const formData = new FormData(form);

    const totalQuestions = 15; 
    let answeredQuestions = new Set();

    for (let [key, value] of formData.entries()) {
        if (value) {
            answeredQuestions.add(key);
        }
    }

    // Alert the user if not all questions are answered
    if (answeredQuestions.size < totalQuestions) {
        alert("Please answer all questions before submitting.");
        return;
    }

    const responses = {};
    
    for (let [key, value] of formData.entries()) {
        const categories = value.split(',');
        categories.forEach(category => {
            if (!responses[category]) {
                responses[category] = 0;
            }
            responses[category]++;
        });
    }

    let maxCategory = null;
    let maxScore = 0;
    for (let category in responses) {
        if (responses[category] > maxScore) {
            maxScore = responses[category];
            maxCategory = category;
        }
    }

    const resultTitle = document.getElementById('resultTitle');
    const resultDescription = document.getElementById('resultDescription');

    resultTitle.style.display = 'block';

    switch(maxCategory) {
        case 'ai':
            resultDescription.innerText = "You are best suited for AI or Machine Learning.";
            break;
        case 'ds':
            resultDescription.innerText = "You are best suited for Data Science.";
            break;
        case 'ux':
            resultDescription.innerText = "You are best suited for Computer-human interface.";
            break;
        case 'security':
            resultDescription.innerText = "You are best suited for Cybersecurity.";
            break;
        case 'networks':
            resultDescription.innerText = "You are best suited for Networks.";
            break;
        case 'game_design':
            resultDescription.innerText = "You are best suited for Game Design.";
            break;
        case 'graphics':
            resultDescription.innerText = "You are best suited for Computer Graphics.";
            break;
        case 'software':
            resultDescription.innerText = "You are best suited for Software Development.";
            break;
        case 'systems':
            resultDescription.innerText = "You are best suited for Systems.";
            break;
        case 'theory':
            resultDescription.innerText = "You are best suited for Theoretical Computer Science.";
            break;
        default:
            resultDescription.innerText = "We could not determine your specialization based on the answers.";
            break;

            }
        }
        