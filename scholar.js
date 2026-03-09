async function loadPublications(){

  const scholarID = "BimZFYAAAAAJ&hl=ko";
  
  const url = "https://api.allorigins.win/raw?url=https://scholar.googleusercontent.com/citations?user="+scholarID;
  
  const res = await fetch(url);
  const data = await res.text();
  
  document.getElementById("publist").innerHTML=data;
  
  }
  
  loadPublications();