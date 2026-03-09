async function loadPublications(){

  const scholarID = "YOUR_GOOGLE_SCHOLAR_ID";
  
  const url = "https://api.allorigins.win/raw?url=https://scholar.googleusercontent.com/citations?user="+scholarID;
  
  const res = await fetch(url);
  const data = await res.text();
  
  document.getElementById("publist").innerHTML=data;
  
  }
  
  loadPublications();