let candidateSelectors = [
  'input',
  'select',
  'textarea',
  'a[href]',
  'button',
  '[tabindex]',
  'audio[controls]',
  'video[controls]',
  '[contenteditable]:not([contenteditable="false"])',
];
let candidateSelector = candidateSelectors.join(',');

let matches =
  typeof Element === 'undefined'
    ? function () {}
    : Element.prototype.matches ||
      Element.prototype.msMatchesSelector ||
      Element.prototype.webkitMatchesSelector;

function tabbable(el) {
  let regularTabbables = [];
  let orderedTabbables = [];
  let candidates = el.querySelectorAll(candidateSelector);
  let candidate;
  let candidateTabindex;
  for (let i = 0; i < candidates.length; i++) {
    candidate = candidates[i];

    if (!isNodeMatchingSelectorTabbable(candidate)) {
      continue;
    }

    candidateTabindex = getTabindex(candidate);
    if (candidateTabindex === 0) {
      regularTabbables.push(candidate);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        node: candidate,
      });
    }
  }

  let tabbableNodes = orderedTabbables
    .sort(sortOrderedTabbables)
    .map((a) => a.node)
    .concat(regularTabbables);

  return tabbableNodes;
}

tabbable.isTabbable = isTabbable;
tabbable.isFocusable = isFocusable;

function isNodeMatchingSelectorTabbable(node) {
  if (!isNodeMatchingSelectorFocusable(node) || getTabindex(node) < 0) {
    return false;
  }
  return true;
}

function isTabbable(node) {
  if (!node) {
    throw new Error('No node provided');
  }
  if (matches.call(node, candidateSelector) === false) {
    return false;
  }
  return isNodeMatchingSelectorTabbable(node);
}

function isNodeMatchingSelectorFocusable(node) {
  if (node.disabled || isHiddenInput(node) || isHidden(node)) {
    return false;
  }
  return true;
}

let focusableCandidateSelector = candidateSelectors.concat('iframe').join(',');
function isFocusable(node) {
  if (!node) {
    throw new Error('No node provided');
  }
  if (matches.call(node, focusableCandidateSelector) === false) {
    return false;
  }
  return isNodeMatchingSelectorFocusable(node);
}

function getTabindex(node) {
  let tabindexAttr = parseInt(node.getAttribute('tabindex'), 10);
  if (!isNaN(tabindexAttr)) {
    return tabindexAttr;
  }
  if (isContentEditable(node)) {
    return 0;
  }
  return node.tabIndex;
}

function sortOrderedTabbables(a, b) {
  return a.tabIndex === b.tabIndex
    ? a.documentOrder - b.documentOrder
    : a.tabIndex - b.tabIndex;
}

function isContentEditable(node) {
  return node.contentEditable === 'true';
}

function isInput(node) {
  return node.tagName === 'INPUT';
}

function isHiddenInput(node) {
  return isInput(node) && node.type === 'hidden';
}

function isHidden(node) {
  return (
    node.offsetParent === null || getComputedStyle(node).visibility === 'hidden'
  );
}

export default tabbable;
