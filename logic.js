document.addEventListener('click', function(event) {
    let clName = event.target.className;
    
    if(clName == "xsvg"){
        let buttonId = event.target.id;
        let btn = document.getElementById(buttonId).style 
        let description = document.getElementById('des'+buttonId);
        let name = document.getElementById('name'+buttonId).style;
        description.hidden
            ?btn.transform = "rotate(0deg)" 
            :btn.transform = "rotate(-135deg)"
        description.hidden
            ?name.color = "#02818A"
            :name.color = "#012B34"
        description.hidden = !description.hidden;
        
    }else{
        return
    }


  });