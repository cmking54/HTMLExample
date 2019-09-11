


 
  
    
/*** this is a function that returns the actual date */

function getDate(){
  var date = document.getElementById('dateArea').innerHTML = Date();
}


/*** this functin will take a color parameter and will change the actual color of element ***/
function getNewColor(newColor){
 var coloring = getElementById('seconForm');
 coloring.style.color = newColor;

}
/************************** */

/*
This function will remove the rows and will set the isShowing Boolean to false;
*/

function removeRow() {
   document.getElementById('InBigDivision').style.display="none";
    
    console.log(document.getElementById('InBigDivision').childNodes.length);
  }
  




/*
This function will check is there is nothing showing and if nothing showing  it display content
*/
 function addContent(id){
  
    document.getElementById('InBigDivision').style.display="block";
   
/**** This method will call the data from JSON file */
    $.getJSON('JS/plantsData.json',data  =>{
      $(document).ready(function(){
      
      let info = document.getElementById('contentInfoID');
      let name = document.getElementById('headContent');
      let type = document.getElementById('contentTypeID');
      let i = 0
    
    while(i<data.plants.length){
      if(id == i){
      console.log(data.plants[i].name + "id number:" + id);
      info.innerHTML = data.plants[i].information + `<input type="button" value="Hide" name='Hide' onclick="removeRow()" />`;
      name.innerHTML = data.plants[i].name;
      type.innerHTML = data.plants[i].type;
      document.getElementById('imgID').setAttribute("src",data.plants[i].image);
      
      }
      
      i++;
      
    }
      
      }); 
  
    });


  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // for google chrome


}

