
/*** this is a function that returns the actual date */

function getDate(){
  var date = document.getElementById('dateArea').innerHTML = Date();
}


/*** this functin will take a color parameter and will change the actual color of element ***/
function getNewColor(newColor){
 var coloring = getElementById('seconForm');
 coloring.style.color = newColor;

}

function addRow(){
  const div = document.createElement('div');

  div.className = 'row';


  div.innerHTML = `

  <div class='sidebar'>
  <img src="imgs/chamomile.jpg" style="width:100%; opacity:0.9; height:250px">
  <!--- ading the chosen target to sidebar  -->
  </div>

  <div class='content'>
  <h2 class="headContent">Chamomile</h2>
    <p>(Flower)</p>

    <p>Considered by some to be a cure-all, chamomile is commonly used in the U.S.
      as ananxiolytic and sedative for anxiety and relaxation.
      It is used in Europe for wound healing and to reduce inflammation or swelling.
      Few studies have looked at how well it works for any condition. Chamomile is used as a tea or applied as a compress. It is considered safe by the FDA. It may increase drowsiness caused by medicines or other herbs or supplements. Chamomile may interfere with the way the body uses some medicines, causing too high a level of the medicine in some people. As with any medicinal herb, talk with your healthcare provider before taking it.</p>

  </div> <!--opeging content -->



    <input type="button" value="-" onclick="removeRow(this)" />
  `;

  document.getElementById('InBigDivision').appendChild('div');
}


function removeRow(input) {
  document.getElementById('InBigDivision').removeChild(input.parentNode);

}
