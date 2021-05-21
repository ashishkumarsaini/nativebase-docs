const { parse } = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;

const getImportSpecifier = (name) => {
  return {
    type: 'ImportSpecifier',
    imported: {
      type: 'Identifier',
      loc: {
        identifierName: name,
      },
      name: name,
    },
    local: {
      type: 'Identifier',
      loc: {
        identifierName: name,
      },
      name: name,
    },
  };
};

const transform = (ast) => {
  traverse(ast, {
    ImportDeclaration({ node }) {
      let isCenterImported = false;
      let isProviderImported = false;
      if (node.source.value === 'native-base') {
        node.specifiers.forEach((s) => {
          if (s.imported.name === 'Center') {
            isCenterImported = true;
          } else if (s.imported.name === 'NativeBaseProvider') {
            isProviderImported = true;
          }
        });

        if (!isCenterImported) {
          node.specifiers.push(getImportSpecifier('Center'));
        }
        if (!isProviderImported) {
          node.specifiers.push(getImportSpecifier('NativeBaseProvider'));
        }
      }
    },
  });
};

const endingTemplate = `
export default () => {
    return (
      <NativeBaseProvider>
        <Center flex={1}>
            <Example />
        </Center>
      </NativeBaseProvider>
    );
};
`;

function transformStorybookToDocExample(code) {
  const ast = parse(code, {
    sourceType: 'module',
    plugins: ['jsx'],
  });
  transform(ast);
  const output = generate(ast);
  const finalTemplate = output.code + '\n' + endingTemplate;
  return finalTemplate;
}

module.exports = {
  transformStorybookToDocExample,
};