
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

function removeRow(input,secondInput) {
    var firstElement = document.getElementById(input);
    var secondElement = document.getElementById(secondInput);
    firstElement.parentElement.removeChild(firstElement);
    secondElement.parentElement.removeChild(secondElement); 
    isShowing = false;
    console.log(document.getElementById('InBigDivision').childNodes.length);
  }
  



var isShowing = false;
/*
This function will check is there is nothing showing and if nothing showing  it display content
*/
 function addContent(){
  if(isShowing == false){
  const div = document.createElement('sidebarDIV');
  div.id = 'sidebarID';
  div.className = 'sidebar';
  const div2 = document.createElement('contentDIV');
  div2.id = 'contentID';
  div2.className = 'content';

  div.innerHTML = `
  <img src="imgs/chamomile.jpg" style="width:100%; opacity:0.9; height:250px">
  <!--- ading the chosen target to sidebar  -->
  </div>
`;
  div2.innerHTML = `
    <h2 class="headContent">Chamomile</h2>
    <p>(Flower)</p>

    <p>Considered by some to be a cure-all, chamomile is commonly used in the U.S.
      as ananxiolytic and sedative for anxiety and relaxation.
      It is used in Europe for wound healing and to reduce inflammation or swelling.
      Few studies have looked at how well it works for any condition. Chamomile is used as a tea or applied as a compress. It is considered safe by the FDA. It may increase drowsiness caused by medicines or other herbs or supplements. Chamomile may interfere with the way the body uses some medicines, causing too high a level of the medicine in some people. As with any medicinal herb, talk with your healthcare provider before taking it.</p>
    
      <input type="button" value="-" onclick="removeRow('sidebarID','contentID')" />
      `
    ;
  document.getElementById('InBigDivision').appendChild(div);
  document.getElementById('InBigDivision').appendChild(div2);
  isShowing = true;
  }
  else{
    removeRow('sidebarID','contentID');
    isShowing = false;
    addContent();
  }

}