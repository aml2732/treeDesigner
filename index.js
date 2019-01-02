console.log('got to index.js');
/*
Base tree should have the following specifications:
top:
wrap pairs:
ornament locations:
stump:
*/

//Canvas draw functions --------------------------------------------------------

function drawTree_Base(){
  if(treeType == 'cct'){ base_cct(); }
  if(treeType== 'ht'){ base_ht(); }
}

function drawTree(){
  ctx.clearRect(0, 0, c.width, c.height);
  drawTree_Base();

  tree_options.forEach(function(parentItem){
    parentItem.children.forEach(function(childItem){
      if(childItem.state){
        childItem.draw();
      }
    })
  });
}
//End Canvas draw functions ----------------------------------------------------

//Main events ------------------------------------------------------------------
$("#myTreeType").change(function(a, b){
  treeType = $("#myTreeType").val() || 'cct';
  drawTree();
});

function toggleChildren(id){
  console.log('got to toggle children of: '+ id)
  let isHidden = $(`.actionMenuSubItem_${id}`).hasClass('amc-hidden');
  if(isHidden){
    $(`.actionMenuSubItem_${id}`).removeClass('amc-hidden')
  }
  else{
    $(`.actionMenuSubItem_${id}`).addClass('amc-hidden')
  }
}

function toggleOptionOffOn(parent, child){
  let parentItem = tree_options.find(function(item){return item.id == parent;});
  let childItem = parentItem.children.find(function(item){return item.id == child;})
  let holdState = !childItem.state
  //only one option under parent can be set at a time. Unset.
  parentItem.children.forEach(function(item){
    item.state = false;
    $(".actionMenuChild_"+item.id).removeClass('active')
  })
  childItem.state = holdState;
  drawTree();//redraw the tree

  if(childItem.state){
      $(".actionMenuChild_"+childItem.id).addClass('active');
  }
}

//End main events --------------------------------------------------------------

//Main execution ---------------------------------------------------------------
var treeType = 'cct';//set tree base to corny chrismas tree
var c = document.getElementById("myCanvas"); //setup canvas
var ctx = c.getContext("2d");
drawTree();

$(document).ready(function(){
  console.log("helloworld document is ready ");
  tree_options.forEach(function(item){
    $(".action-menu").append(`<li id="actionMenuItem_${item.id}" onclick="toggleChildren('${item.id}')">${item.name}</li>`);
    item.children.forEach(function(child){
      $(".action-menu").append(`<li class="actionMenuChild amc-hidden actionMenuSubItem_${item.id} actionMenuChild_${child.id}" onclick="toggleOptionOffOn('${item.id}','${child.id}')">${child.name}</li>`);
    });
  });
});
//End Main execution -----------------------------------------------------------
