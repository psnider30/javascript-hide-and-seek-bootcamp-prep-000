function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  var nodes = document.querySelectorAll('#grand-node div');
  var deepestNode = nodes[nodes.length - 1];
  return deepestNode
  }

function increaseRankBy(n) {
  var nodes= document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < nodes.length; i++) {
    nodes[i].innerHTML = parseInt(nodes[i].innerHTML) + n;
  }
}
