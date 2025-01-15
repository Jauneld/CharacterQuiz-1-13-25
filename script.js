$(document).ready(function () {
    const results = {
        under18: {
          red: {
            pizza: ["Vicky", "You have a mischievous streak and like to be in control—but there’s more to you!", "images/vicky.jpg"],
            salad: ["Wanda", "You’re thoughtful, nurturing, and always looking out for others.", "images/wanda.jpg"],
            burger: ["Cosmo", "You’re funny, whimsical, and the life of the party (sometimes without realizing it).", "images/cosmo.jpg"]
        },
          orange: {
            pizza: ["Mark Chang", "You’re adventurous, outgoing, and love exploring new worlds!", "images/mark.jpg"],
            salad: ["Sanjay", "You’re cheerful, kind, and a loyal companion.", "images/sanjay.jpg"],
            burger: ["Elmer", "You’re quirky, unique, and embrace who you are with pride.", "images/elmer.jpg"]
        },
        yellow: {
            pizza: ["Chloe Carmichael", "You’re bright, optimistic, and always bring sunshine to others’ lives.", "images/chloe.jpg"],
            salad: ["Sparky", "You’re energetic, playful, and always ready for a fun time.", "images/sparky.jpg"],
            burger: ["Mr. Crocker", "You’re a bit eccentric, but your passion is unmatched.", "images/crocker.jpg"]
        },
        green: {
            pizza: ["Cosmo", "You’re quirky, playful, and always ready for an adventure.", "images/cosmo.jpg"],
            salad: ["Timmy Turner", "You’re inventive, resourceful, and ready to find solutions to any problem.", "images/timmy.jpg"],
            burger: ["Vicky", "You’ve got a bold personality, and people never forget you!", "images/vicky.jpg"]
        },
        blue: {
            pizza: ["Timmy Turner", "You’re energetic, curious, and always dreaming big—even if it gets you in trouble.", "images/timmy.jpg"],
            salad: ["Trixie Tang", "You’re polished and confident, with a flair for being admired by everyone.", "images/trixie.jpg"],
            burger: ["Chester McBadbat", "You’re loyal, down-to-earth, and always ready to support your friends.", "images/chester.jpg"]
        },
        indigo: {
            pizza: ["Jorgen Von Strangle", "You’re strong, disciplined, and always strive to be your best.", "images/jorgen.jpg"],
            salad: ["Blonda", "You’re glamorous, ambitious, and love being in the spotlight.", "images/blonda.jpg"],
            burger: ["Francis", "You’re tough, determined, and never back down from a challenge.", "images/francis.jpg"]
        },
        violet: {
            pizza: ["Poof", "You’re sweet, imaginative, and bring joy wherever you go.", "images/poof.jpg"],
            salad: ["Wanda", "You’re caring, wise, and always looking out for others.", "images/wanda.jpg"],
            burger: ["Cosmo", "You’re carefree, fun-loving, and never afraid to be yourself.", "images/cosmo.jpg"]
        }
        },
        "18-30": {
            red: {
                pizza: ["Cosmo", "You’re spontaneous, fun-loving, and full of surprises!", "images/cosmo.jpg"],
                salad: ["Wanda", "You’re dependable, caring, and always keep others grounded.", "images/wanda.jpg"],
                burger: ["Timmy Turner", "You’re ambitious, a little rebellious, and always looking for something exciting.", "images/timmy.jpg"]
            },
            orange: {
                pizza: ["Mark Chang", "You’re adventurous and love pushing boundaries in life and career.", "images/mark.jpg"],
                salad: ["Blonda", "You’re confident, driven, and thrive when pursuing your dreams.", "images/blonda.jpg"],
                burger: ["Elmer", "You embrace challenges, and your unique approach always stands out.", "images/elmer.jpg"]
            },
            yellow: {
                pizza: ["Chloe Carmichael", "You’re optimistic, hardworking, and light up any room you walk into.", "images/chloe.jpg"],
                salad: ["Sparky", "You’re active, loyal, and always bring energy to your friends and work.", "images/sparky.jpg"],
                burger: ["Mr. Crocker", "You’re a bit intense, but your passion makes you unforgettable.", "images/crocker.jpg"]
            },
            green: {
                pizza: ["Cosmo", "You’re creative, playful, and bring life to even the dullest situations.", "images/cosmo.jpg"],
                salad: ["Wanda", "You’re thoughtful, wise, and always offer balanced advice.", "images/wanda.jpg"],
                burger: ["Timmy Turner", "You’re innovative, ambitious, and constantly seeking new adventures.", "images/timmy.jpg"]
            },
            blue: {
                pizza: ["Wanda", "You’re a balanced mix of fun and responsibility, with a deep love for family.", "images/wanda.jpg"],
                salad: ["Trixie Tang", "You’re stylish, driven, and focused on making a good impression.", "images/trixie.jpg"],
                burger: ["Chester McBadbat", "You’re laid-back, fun, and know how to enjoy life’s little things.", "images/chester.jpg"]
            },
            indigo: {
                pizza: ["Jorgen Von Strangle", "You’re disciplined, resilient, and inspire those around you.", "images/jorgen.jpg"],
                salad: ["Francis", "You’re bold, determined, and know how to command respect.", "images/francis.jpg"],
                burger: ["Blonda", "You’re a natural leader, charismatic, and thrive in challenging situations.", "images/blonda.jpg"]
            },
            violet: {
                pizza: ["Poof", "You’re kind-hearted, imaginative, and always look for the good in others.", "images/poof.jpg"],
                salad: ["Wanda", "You’re nurturing and bring warmth to every relationship you build.", "images/wanda.jpg"],
                burger: ["Cosmo", "You’re fun-loving, carefree, and bring joy to those around you.", "images/cosmo.jpg"]
            }
        },
        over30: {
            red: {
                pizza: ["Timmy Turner", "You’re imaginative and bring a youthful spirit wherever you go.", "images/timmy.jpg"],
                salad: ["Wanda", "You’re nurturing, reliable, and always bring people together.", "images/wanda.jpg"],
                burger: ["Cosmo", "You’re spontaneous and still know how to enjoy life’s little quirks.", "images/cosmo.jpg"]
            },
            orange: {
                pizza: ["Mark Chang", "You’re a visionary who enjoys breaking the mold and inspiring others.", "images/mark.jpg"],
                salad: ["Blonda", "You’re graceful, poised, and have a way of making others feel valued.", "images/blonda.jpg"],
                burger: ["Elmer", "You’re resilient, witty, and your unique personality shines through.", "images/elmer.jpg"]
            },
            yellow: {
                pizza: ["Chloe Carmichael", "You’re driven, optimistic, and always ready to embrace new opportunities.", "images/chloe.jpg"],
                salad: ["Sparky", "You’re vibrant, enthusiastic, and bring laughter to any group.", "images/sparky.jpg"],
                burger: ["Mr. Crocker", "You’re eccentric and passionate about what you believe in.", "images/crocker.jpg"]
            },
            green: {
                pizza: ["Chester McBadbat", "You’re practical, reliable, and love connecting with people over shared memories.", "images/chester.jpg"],
                salad: ["Wanda", "You’re wise and always make people feel supported and valued.", "images/wanda.jpg"],
                burger: ["Cosmo", "You’re light-hearted and remind everyone that life is meant to be enjoyed.", "images/cosmo.jpg"]
            },
            blue: {
                pizza: ["Wanda", "You’re wise, kind, and have a strong sense of loyalty to your loved ones.", "images/wanda.jpg"],
                salad: ["Cosmo", "You’re young at heart, love to laugh, and don’t take life too seriously.", "images/cosmo.jpg"],
                burger: ["Chester McBadbat", "You’re practical, down-to-earth, and value the simple pleasures in life.", "images/chester.jpg"]
            },
            indigo: {
                pizza: ["Jorgen Von Strangle", "You’re disciplined and strong, a natural protector for your loved ones.", "images/jorgen.jpg"],
                salad: ["Francis", "You’re confident and know how to overcome life’s challenges.", "images/francis.jpg"],
                burger: ["Blonda", "You’re radiant, ambitious, and bring creativity to everything you do.", "images/blonda.jpg"]
            },
            violet: {
                pizza: ["Poof", "You’re sweet, compassionate, and find joy in the little things.", "images/poof.jpg"],
                salad: ["Wanda", "You’re thoughtful, nurturing, and always put others first.", "images/wanda.jpg"],
                burger: ["Cosmo", "You’re quirky, playful, and love bringing laughter to your friends and family.", "images/cosmo.jpg"]
            }
        }
    };

    let quizCounter = 0;

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

        quizCounter++;
    });

    // Add rainbow colors dynamically to the dropdown
    const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    rainbowColors.forEach(color => {
        $('#color-choice').append(new Option(color.charAt(0).toUpperCase() + color.slice(1), color));
    });
});
