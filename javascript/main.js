


// execute the code when document is fully loaded
$(document).ready(function () {
    revealStory();

});


function revealStory(){    
    acn_btn_1 = document.getElementById("action_btn_1");
    acn_btn_1.addEventListener("click", () => {

        riddle = document.getElementById("riddle");
        story = document.getElementById("story");
        filter = document.getElementById("filter");
        code_input = document.getElementById("code_input");
        acn_btn_1 = document.getElementById("action_btn_1");
        acn_btn_2 = document.getElementById("action_btn_2");
        
        riddle.classList.add('d-none')
        filter.classList.add('d-none')
        code_input.classList.add('d-none')
        acn_btn_1.classList.add('d-none')
        acn_btn_2.classList.remove('d-none')
        story.classList.remove('d-none')
        
    });
}