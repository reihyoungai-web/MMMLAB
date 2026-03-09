async function loadPublications(){

  const scholarID = "BimZFYAAAAAJ&hl";
  
  const url = "https://api.allorigins.win/raw?url=https://scholar.google.com/citations?user=" + scholarID;
  
  const res = await fetch(url);
  const data = await res.text();
  
  document.getElementById("publist").innerHTML=data;
  
  }
  
  loadPublications();