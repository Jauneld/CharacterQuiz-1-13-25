$(document).ready(function () {
    const results = {
        under18: {
            blue: {
                pizza: ["Timmy Turner", "You’re energetic, curious, and always dreaming big—even if it gets you in trouble.", "timmy.png"],
                salad: ["Trixie Tang", "You’re polished and confident, with a flair for being admired by everyone.", "trixie.png"],
                burger: ["Chester McBadbat", "You’re loyal, down-to-earth, and always ready to support your friends.", "chester.png"]
            },
            red: {
                pizza: ["Vicky", "You have a mischievous streak and like to be in control—but there’s more to you!", "vicky.png"],
                salad: ["Wanda", "You’re thoughtful, nurturing, and always looking out for others.", "wanda.png"],
                burger: ["Cosmo", "You’re funny, whimsical, and the life of the party (sometimes without realizing it).", "cosmo.png"]
            },
            green: {
                pizza: ["Cosmo", "You’re quirky, playful, and always ready for an adventure.", "cosmo.png"],
                salad: ["Timmy Turner", "You’re inventive, resourceful, and ready to find solutions to any problem.", "timmy.png"],
                burger: ["Vicky", "You’ve got a bold personality, and people never forget you!", "vicky.png"]
            }
        },
        // Repeat similar structure for 18-30 and over30...
    };

    $('#submit-quiz').on('click', function () {
        const ageGroup = $('#age-group').val();
        const colorChoice = $('#color-choice').val();
        const mealChoice = $('#meal-choice').val();

        // Validate dropdown selections
        if (ageGroup === "none" || colorChoice === "none" || mealChoice === "none") {
            alert("Please select a valid option from all dropdown menus!");
            return;
        }

        // Get the character, description, and image file
        const [character, description, image] = results[ageGroup][colorChoice][mealChoice];

        // Update result container
        $('#character-name').text(character);
        $('#character-description').text(description);
        $('#character-image').attr('src', image).fadeIn(); // Show image dynamically
        $('#result-container').fadeIn();
    });
});
