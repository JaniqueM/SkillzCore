document.getElementById("quizForm").addEventListener("submit", function(e) {
    e.preventDefault(); // prevent page reload

    const totalQuestions = 8;
    const categories = ["communication", "critical thinking", "time management", "leadership"];
    const scores = { communication: 0, critical: 0, time: 0, leadership: 0 };

    // Count answers
    for (let i = 1; i <= totalQuestions; i++) {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (!selected) {
            alert("Please answer all questions.");
            return;
        }
        scores[selected.value]++;
    }

    // Determine top skill
    let topSkill = categories[0];
    categories.forEach(cat => {
        if (scores[cat] > scores[topSkill]) topSkill = cat;
    });

    // Suggested careers
    const careerSuggestions = {
        communication: ["Marketing", "Public Relations", "Customer Success", "Teaching"],
        critical: ["Data Analysis", "Research", "Software Development", "Consulting"],
        time: ["Project Management", "Event Planning", "Operations", "Logistics"],
        leadership: ["Management", "Entrepreneurship", "Team Lead Roles", "Coaching"]
    };

    // Why it fits
    const whyFit = {
        communication: "You naturally express ideas clearly and connect with people.",
        critical: "You analyze problems carefully and think strategically.",
        time: "You are organized and manage tasks efficiently.",
        leadership: "You inspire and guide others effectively."
    };

    // Next steps
    const nextSteps = {
        communication: "Practice public speaking, join clubs, or write regularly to strengthen your communication skills.",
        critical: "Solve puzzles, analyze case studies, or take on challenging projects to enhance critical thinking.",
        time: "Use planners, prioritize tasks, and set deadlines to further sharpen your time management.",
        leadership: "Take initiative, lead small teams, or mentor peers to grow your leadership abilities."
    };

    // Motivational quote for result
    const resultQuote = "“Your strengths shape your future — embrace them and grow!”";

    // Display result with layout and quote
    const resultDiv = document.getElementById("result");
    resultDiv.classList.remove("hidden");
    resultDiv.innerHTML = `
        <div class="result-layout">
            <h2>🌟 Your strongest skill is: ${topSkill.toUpperCase()}</h2>
            <p class="quote">${resultQuote}</p>
            <div class="result-details">
                <p><strong>Why it fits:</strong> ${whyFit[topSkill]}</p>
                <p><strong>Suggested career fields:</strong> ${careerSuggestions[topSkill].join(", ")}</p>
                <p><strong>Next steps:</strong> ${nextSteps[topSkill]}</p>
            </div>
        </div>
    `;
});
