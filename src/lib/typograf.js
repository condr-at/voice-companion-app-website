import Typograf from 'typograf';

const typograf = new Typograf({ locale: ['ru', 'en-US'] });

const SKIP_TAGS = new Set([
  'SCRIPT',
  'STYLE',
  'NOSCRIPT',
  'TEXTAREA',
  'INPUT',
  'CODE',
  'PRE',
]);

function decodeHtmlEntities(value) {
  const container = document.createElement('span');
  container.innerHTML = value;
  return container.textContent ?? value;
}

function protectContractions(value) {
  return value.replace(/(\b[\\p{L}]+\\u2019[\\p{L}]+)\\s+(?=[\\p{L}])/gu, '$1\u00A0');
}

function protectShortWords(value, maxLength) {
  const pattern = new RegExp(`\\b([\\p{L}]{1,${maxLength}})\\s+(?=[\\p{L}])`, 'gu');
  return value.replace(pattern, '$1\u00A0');
}

function protectAroundOperators(value) {
  return value.replace(
    /\\s*([=+\\-—–*×÷<>≤≥])\\s*/g,
    '\u00A0$1\u00A0',
  );
}

function protectParentheticalGroups(value) {
  return value.replace(/\(([^)\n]+)\)/g, (match, inner) => {
    const compact = inner.replace(/\s+/g, '\u00A0');
    return `(\u2060${compact}\u2060)`;
  });
}

export function applyTypograf(root) {
  if (!root) {
    return;
  }

  const walker = document.createTreeWalker(
    root,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent) {
          return NodeFilter.FILTER_REJECT;
        }

        if (SKIP_TAGS.has(parent.tagName)) {
          return NodeFilter.FILTER_REJECT;
        }

        if (!node.nodeValue || !node.nodeValue.trim()) {
          return NodeFilter.FILTER_REJECT;
        }

        return NodeFilter.FILTER_ACCEPT;
      },
    },
  );

  const nodes = [];
  while (walker.nextNode()) {
    nodes.push(walker.currentNode);
  }

  nodes.forEach((node) => {
    const original = node.nodeValue;
    if (!original) {
      return;
    }

    const processed = protectParentheticalGroups(
      protectAroundOperators(
        protectShortWords(
          protectContractions(typograf.execute(original)),
          3,
        ),
      ),
    );
    if (processed !== original) {
      node.nodeValue = decodeHtmlEntities(processed);
    }
  });
}

export default typograf;
