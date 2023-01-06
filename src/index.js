var render = function (template, node) {
    node.innerHTML = template;
};

var template = '';
render(template, document.querySelector('#main'));