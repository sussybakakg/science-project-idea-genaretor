// Project ideas categorized by topics
const projectIdeas = {
    environment: [
        "Investigate the impact of pollution on local plant growth.",
        "Design an efficient water filtration system using household materials.",
        "Analyze the effects of recycling on energy consumption."
    ],
    technology: [
        "Build a simple robot that can perform a task.",
        "Create a game using Scratch or Python.",
        "Explore the science of renewable energy by designing a small solar-powered car."
    ],
    biology: [
        "Study how different types of light affect plant growth.",
        "Investigate the impact of music on animal behavior.",
        "Grow bacteria in a petri dish to test the effectiveness of natural antibacterial substances."
    ],
    chemistry: [
        "Create a chemical reaction volcano using baking soda and vinegar.",
        "Investigate how temperature affects the rate of a chemical reaction.",
        "Explore how different substances affect the rate of rust formation on metal."
    ],
    physics: [
        "Build a simple electric motor and explain how it works.",
        "Explore the relationship between the angle of a ramp and the speed of a rolling object.",
        "Design and test different paper airplane designs for distance and speed."
    ]
};

// Function to generate and display a project idea
function generateIdea() {
    const category = document.getElementById('category').value;
    const ideas = projectIdeas[category];
    const randomIndex = Math.floor(Math.random() * ideas.length);
    const selectedIdea = ideas[randomIndex];
    
    document.getElementById('idea').textContent = selectedIdea;
}
