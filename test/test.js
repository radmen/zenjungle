var fixture = qwery('#qunit-fixture').pop();
    
module('non-zen');
test('check basic append', function() {
  var element;
  
  fixture.appendChild(zenjungle([
    ['span', 'Lorem ipsum']
  ]));
  
  element = qwery('span', fixture).pop();
  
  equal('SPAN', element.tagName, 'element is span')
  equal('Lorem ipsum', element.innerHTML, 'element inner HTML equals "Lorem ipsum"');
});

test('check append with properties', function() {
  var element;
  
  fixture.appendChild(zenjungle([
    ['div', {
      'class': 'test-class',
      'id': 'test-id'
    }]
  ]))
  
  element = qwery('div', fixture).pop();
  
  equal('test-class', element.className, 'element class equals "test-class"');
  equal('test-id', element.id, 'element id equals "test-id"');
});

test('check nested elements', function() {
  
  fixture.appendChild(zenjungle([
    ['div', [
      ['ul', [
        ['li', 'test #1'],
        ['li', 'test #2'],
        ['li', {'class': 'test'}, 'test #3'],
        ['li', 'test #4'],
      ]],
      ['span']
    ]]
  ]));

  equal(true, qwery('div > ul', fixture).length, 'UL is DIVs direct child');
  equal(true, qwery('div > span', fixture).length, 'SPAN is DIVs direct child');
  equal(false, qwery('div > li').length, 'LIs are not direct childs of DIV')
  equal(4, qwery('div > ul > li', fixture).length, 'list has 4 elements');
  equal('test', qwery('li', fixture)[2].className, 'third LI has class');
});

test('DOM elements mixin', function() {
  
  fixture.appendChild(zenjungle([
    ['div', [
      document.createElement('span')
    ]]
  ]));
  
  equal(1, qwery('div > span', fixture).length);
});

test('zenjungle mixins', function() {
  
  fixture.appendChild(zenjungle([
    ['div', [
      zenjungle([
        ['span']
      ])
    ]]
  ]));
  
  equal(1, qwery('div > span', fixture).length);
});

module('zen');
test('check element class', function() {
  
  fixture.appendChild(zenjungle([
    ['div.test']
  ]));
  
  equal('test', qwery('div', fixture)[0].className);
});

test('check element id', function() {
  
  fixture.appendChild(zenjungle([
    ['div#test']
  ]));
  
  equal('test', qwery('div', fixture)[0].id);
});

test('check attributes', function() {
  
  fixture.appendChild(zenjungle([
    ['a[href=#fragment][class=test]']
  ]));
  
  equal('fragment', qwery('a', fixture)[0].href.split('#')[1]);
  equal('test', qwery('a', fixture)[0].className);
});

test('mixed properties #1', function() {
  var element;
  
  fixture.appendChild(zenjungle([
    ['input#id.classA.classB[type=text][value=some-text]']
  ]));
  
  element = qwery('input', fixture)[0];
  
  equal('classA classB', element.className, 'class name equals "classA classB"');
  equal('id', element.id, 'id equals "id"');
  equal('text', element.type, 'element type is "text"');
  equal('some-text', element.value, 'element value is "some-text"');
})

test('mixed properties #2', function() {
  var element;
  
  fixture.appendChild(zenjungle([
    ['input.class[type=text]#id[value=some-text]']
  ]));
  
  element = qwery('input', fixture)[0];
  
  equal('class', element.className, 'class name equals "class"');
  equal('id', element.id, 'id equals "id"');
  equal('text', element.type, 'element type is "text"');
  equal('some-text', element.value, 'element value is "some-text"');
})