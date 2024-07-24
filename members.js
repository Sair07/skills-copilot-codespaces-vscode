function
function skillsMember() {
    var skills = {
        'HTML': '90%',
        'CSS': '90%',
        'JavaScript': '80%',
        'PHP': '70%',
        'SQL': '60%',
        'Python': '50%',
        'Ruby': '40%',
        'Java': '30%',
        'C++': '20%',
        'C': '10%'
    };

    // Get the members list
    var members = document.querySelectorAll('.member');

    // Loop through each member
    for (var i = 0; i < members.length; i++) {
        // Get the member's skills
        var memberSkills = members[i].querySelector('.skills');

        // Get the member's skills list
        var skillsList = memberSkills.querySelectorAll('li');

        // Loop through each skill in the skills list
        for (var j = 0; j < skillsList.length; j++) {
            // Get the skill name
            var skillName = skillsList[j].getAttribute('data-skill');

            // Set the skill percentage
            skillsList[j].style.width = skills[skillName];
        }
    }
}