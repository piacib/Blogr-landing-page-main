function myFunction(id) {
	if (id==='product-dropbtn'){
    document.getElementById("productDropdown").classList.toggle("show");
  }
  else if (id==='company-dropbtn'){
    document.getElementById("companyDropdown").classList.toggle("show");
    }
  else if (id==='connect-dropbtn'){
    document.getElementById("connectDropdown").classList.toggle("show");
    }
}

// Close the dropdown if the user clicks outside of dropdown
window.onclick = function(e) {
  if (!e.target.matches('#product-dropbtn')) {
    const productDropdown = document.getElementById("productDropdown");
    
    if (productDropdown.classList.contains('show')) {
      productDropdown.classList.remove('show');
    } 
  }
  if (!e.target.matches('#company-dropbtn')) {
    const companyDropdown = document.getElementById("companyDropdown");
    
    if (companyDropdown.classList.contains('show')) {
      companyDropdown.classList.remove('show');
    }
  }
  if (!e.target.matches('#connect-dropbtn')) {
    const connectDropdown = document.getElementById("connectDropdown");

  if (connectDropdown.classList.contains('show')) {
    connectDropdown.classList.remove('show');
}
  }
  
  
  
}