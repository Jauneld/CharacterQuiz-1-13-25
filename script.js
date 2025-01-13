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
        "18-30": {
            blue: {
                pizza: ["Wanda", "You’re a balanced mix of fun and responsibility, with a deep love for family.", "wanda.png"],
                salad: ["Trixie Tang", "You’re stylish, driven, and focused on making a good impression.", "trixie.png"],
                burger: ["Chester McBadbat", "You’re laid-back, fun, and know how to enjoy life’s little things.", "chester.png"]
            },
            red: {
                pizza: ["Cosmo", "You’re spontaneous, fun-loving, and full of surprises!", "cosmo.png"],
                salad: ["Wanda", "You’re dependable, caring, and always keep others grounded.", "wanda.png"],
                burger: ["Timmy Turner", "You’re ambitious, a little rebellious, and always looking for something exciting.", "timmy.png"]
            },
            green: {
                pizza: ["Trixie Tang", "You’re creative, smart, and love making bold choices.", "trixie.png"],
                salad: ["Wanda", "You’re supportive, nurturing, and a natural leader in any group.", "wanda.png"],
                burger: ["Cosmo", "You’ve got a free spirit and a wonderful sense of humor.", "cosmo.png"]
            }
        },
        over30: {
            blue: {
                pizza: ["Wanda", "You’re wise, kind, and have a strong sense of loyalty to your loved ones.", "images/wanda.jpg"],
                salad: ["Cosmo", "You’re young at heart, love to laugh, and don’t take life too seriously.", "images/cosmo.jpg"],
                burger: ["Chester McBadbat", "You’re practical, down-to-earth, and value the simple pleasures in life.", "images/chester.jpg"]
            },
            red: {
                pizza: ["Timmy Turner", "You’re imaginative, daring, and always looking to bring a spark of fun.", "images/timmy.jpg"],
                salad: ["Trixie Tang", "You’re elegant, poised, and know how to command attention in a room.", "images/trixie.jpg"],
                burger: ["Wanda", "You’re nurturing, reliable, and always bring people together.", "images/wanda.jpg"]
            },
            green: {
                pizza: ["Chester McBadbat", "You’re easygoing, loyal, and always make time for friends.", "images/chester.jpg"],
                salad: ["Cosmo", "You’re carefree, optimistic, and bring lightheartedness wherever you go.", "images/cosmo.jpg"],
                burger: ["Vicky", "You’ve got a bold, determined personality that commands respect.", "images/vicky.jpg"]
            }
        }
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

        // Update the result container
        $('#character-name').text(character);
        $('#character-description').text(description);
        $('#character-image').attr('src', image).fadeIn(); // Display the image
        $('#result-container').fadeIn();
    });
});
