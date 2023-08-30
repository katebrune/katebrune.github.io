import { Meta } from '@storybook/react'

import { BlogPost as BlogPostComponent } from './blog-post'

export default {
  component: BlogPostComponent,
  argTypes: {},
} as Meta<typeof BlogPostComponent>

export const BlogPost = {
  args: {
    content: {
      compiledSource:
        '/*@jsxRuntime automatic @jsxImportSource react*/\n' +
        'const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];\n' +
        'const {useMDXComponents: _provideComponents} = arguments[0];\n' +
        'function _createMdxContent(props) {\n' +
        '  const _components = Object.assign({\n' +
        '    h1: "h1",\n' +
        '    h2: "h2",\n' +
        '    p: "p",\n' +
        '    em: "em",\n' +
        '    ol: "ol",\n' +
        '    li: "li",\n' +
        '    a: "a",\n' +
        '    pre: "pre",\n' +
        '    code: "code",\n' +
        '    strong: "strong"\n' +
        '  }, _provideComponents(), props.components);\n' +
        '  return _jsxDEV(_Fragment, {\n' +
        '    children: [_jsxDEV(_components.h1, {\n' +
        '      children: "Mediam narratur vim duroque rear consumpta serviet"\n' +
        // eslint-disable-next-line sonarjs/no-duplicate-string
        '    }, undefined, false, {\n' +
        // eslint-disable-next-line sonarjs/no-duplicate-string
        '      fileName: "<source.js>",\n' +
        '      lineNumber: 2,\n' +
        // eslint-disable-next-line sonarjs/no-duplicate-string
        '      columnNumber: 1\n' +
        '    }, this), "\\n", _jsxDEV(_components.h2, {\n' +
        '      children: "Ambae meos totidem discordia telluris mortalem caelo"\n' +
        '    }, undefined, false, {\n' +
        '      fileName: "<source.js>",\n' +
        '      lineNumber: 4,\n' +
        '      columnNumber: 1\n' +
        // eslint-disable-next-line sonarjs/no-duplicate-string
        '    }, this), "\\n", _jsxDEV(_components.p, {\n' +
        '      children: ["Lorem markdownum ea dedit gravidis ", _jsxDEV(_components.em, {\n' +
        '        children: "etsi"\n' +
        '      }, undefined, false, {\n' +
        '        fileName: "<source.js>",\n' +
        '        lineNumber: 6,\n' +
        '        columnNumber: 36\n' +
        '      }, this), " certare, hac cerva quae flentes\\ncaptato, sunt. Lacrimas ", _jsxDEV(_components.em, {\n' +
        '        children: "cornibus nymphae"\n' +
        '      }, undefined, false, {\n' +
        '        fileName: "<source.js>",\n' +
        '        lineNumber: 7,\n' +
        '        columnNumber: 25\n' +
        '      }, this), " pariter modestos, manu incubat\\naequor, prosunt et virgo supplex, quem modo cuncta hunc? Marem profundum illa\\nsacra!"]\n' +
        // eslint-disable-next-line sonarjs/no-duplicate-string
        '    }, undefined, true, {\n' +
        '      fileName: "<source.js>",\n' +
        '      lineNumber: 6,\n' +
        '      columnNumber: 1\n' +
        '    }, this), "\\n", _jsxDEV(_components.ol, {\n' +
        '      children: ["\\n", _jsxDEV(_components.li, {\n' +
        '        children: "Huius humo dixit dabant saxo"\n' +
        '      }, undefined, false, {\n' +
        '        fileName: "<source.js>",\n' +
        '        lineNumber: 11,\n' +
        '        columnNumber: 1\n' +
        '      }, this), "\\n", _jsxDEV(_components.li, {\n' +
        '        children: "Vagi unda animam inpulit"\n' +
        '      }, undefined, false, {\n' +
        '        fileName: "<source.js>",\n' +
        '        lineNumber: 12,\n' +
        '        columnNumber: 1\n' +
        '      }, this), "\\n", _jsxDEV(_components.li, {\n' +
        '        children: "Eunt quid meis est et subiere seposuit"\n' +
        '      }, undefined, false, {\n' +
        '        fileName: "<source.js>",\n' +
        '        lineNumber: 13,\n' +
        '        columnNumber: 1\n' +
        '      }, this), "\\n"]\n' +
        '    }, undefined, true, {\n' +
        '      fileName: "<source.js>",\n' +
        '      lineNumber: 11,\n' +
        '      columnNumber: 1\n' +
        '    }, this), "\\n", _jsxDEV(_components.p, {\n' +
        '      children: ["Trunco ", _jsxDEV(_components.a, {\n' +
        '        href: "http://avernae.org/incedere",\n' +
        '        children: "et nymphae"\n' +
        '      }, undefined, false, {\n' +
        '        fileName: "<source.js>",\n' +
        '        lineNumber: 15,\n' +
        '        columnNumber: 8\n' +
        '      }, this), " locorum inmitibus Iove oras\\nvisum tactae mea. Nubila non querenti rapior ab cum\\n", _jsxDEV(_components.a, {\n' +
        '        href: "http://www.fine.org/",\n' +
        '        children: "Eurystheus"\n' +
        '      }, undefined, false, {\n' +
        '        fileName: "<source.js>",\n' +
        '        lineNumber: 17,\n' +
        '        columnNumber: 1\n' +
        '      }, this), " color sit, at sic, noli passim curam fateri,\\ntruncos, non. Pars inplet illa Seditioque auras tenebat maerent, dum formae tu\\nnec dum te displicet saucia at factus."]\n' +
        '    }, undefined, true, {\n' +
        '      fileName: "<source.js>",\n' +
        '      lineNumber: 15,\n' +
        '      columnNumber: 1\n' +
        '    }, this), "\\n", _jsxDEV(_components.h2, {\n' +
        '      children: "Ab Pittheam orat"\n' +
        '    }, undefined, false, {\n' +
        '      fileName: "<source.js>",\n' +
        '      lineNumber: 21,\n' +
        '      columnNumber: 1\n' +
        '    }, this), "\\n", _jsxDEV(_components.p, {\n' +
        '      children: "Sensi novi liquores siccaverat tamen praeposito cultique fera Noricus. Ignorat\\nvirgineos mores fassusque vestrae; quorum dixit vertice recurvo, tolluntur\\nurbis, precantia sed via deieci. Dilatus admonitu rota Argosque, neque adest\\ngratamque ventis ita quam regis, Parin si."\n' +
        '    }, undefined, false, {\n' +
        '      fileName: "<source.js>",\n' +
        '      lineNumber: 23,\n' +
        '      columnNumber: 1\n' +
        '    }, this), "\\n", _jsxDEV(_components.p, {\n' +
        '      children: "trojan /= 5;\\nvdslRpc = flash_status(2);\\nclass = -3;"\n' +
        '    }, undefined, false, {\n' +
        '      fileName: "<source.js>",\n' +
        '      lineNumber: 28,\n' +
        '      columnNumber: 5\n' +
        '    }, this), "\\n", _jsxDEV(_components.p, {\n' +
        '      children: ["Inmitem aemula mihi ", _jsxDEV(_components.em, {\n' +
        '        children: "damno"\n' +
        '      }, undefined, false, {\n' +
        '        fileName: "<source.js>",\n' +
        '        lineNumber: 32,\n' +
        '        columnNumber: 21\n' +
        '      }, this), ", bobus fidemque limitibus angulus altera et. Madidis\\nde nec carmine sanguinea dolores vocem; enim quod, audieris, ducitur futura: ibi\\nilli. Praeda reperta, pro fatemur ferunt, sinuaverat: ignes."]\n' +
        '    }, undefined, true, {\n' +
        '      fileName: "<source.js>",\n' +
        '      lineNumber: 32,\n' +
        '      columnNumber: 1\n' +
        '    }, this), "\\n", _jsxDEV(_components.pre, {\n' +
        '      children: _jsxDEV(_components.code, {\n' +
        '        className: "language-tsx",\n' +
        `        children: "import React, { FunctionComponent } from 'react'\\n\\nexport interface MyComponentProps {}\\n\\nexport const MyComponent: FunctionComponent<MyProps> = (props) => {\\n  return <div>Hello, World!</div>\\n}\\n"\n` +
        '      }, undefined, false, {\n' +
        '        fileName: "<source.js>",\n' +
        '        lineNumber: 36,\n' +
        '        columnNumber: 1\n' +
        '      }, this)\n' +
        '    }, undefined, false, {\n' +
        '      fileName: "<source.js>",\n' +
        '      lineNumber: 36,\n' +
        '      columnNumber: 1\n' +
        '    }, this), "\\n", _jsxDEV(_components.p, {\n' +
        '      children: ["Nomine tractu tibi mollit delubraque facta vertitur resque. Sub cauda atque\\npatriae. ", _jsxDEV(_components.strong, {\n' +
        '        children: "Spumam esse"\n' +
        '      }, undefined, false, {\n' +
        '        fileName: "<source.js>",\n' +
        '        lineNumber: 47,\n' +
        '        columnNumber: 10\n' +
        '      }, this), " tremit summo consiliis spiritus super labores semperque\\nfugis aut demum prope, sed."]\n' +
        '    }, undefined, true, {\n' +
        '      fileName: "<source.js>",\n' +
        '      lineNumber: 46,\n' +
        '      columnNumber: 1\n' +
        '    }, this)]\n' +
        '  }, undefined, true, {\n' +
        '    fileName: "<source.js>",\n' +
        '    lineNumber: 1,\n' +
        '    columnNumber: 1\n' +
        '  }, this);\n' +
        '}\n' +
        'function MDXContent(props = {}) {\n' +
        '  const {wrapper: MDXLayout} = Object.assign({}, _provideComponents(), props.components);\n' +
        '  return MDXLayout ? _jsxDEV(MDXLayout, Object.assign({}, props, {\n' +
        '    children: _jsxDEV(_createMdxContent, props, undefined, false, {\n' +
        '      fileName: "<source.js>"\n' +
        '    }, this)\n' +
        '  }), undefined, false, {\n' +
        '    fileName: "<source.js>"\n' +
        '  }, this) : _createMdxContent(props);\n' +
        '}\n' +
        'return {\n' +
        '  default: MDXContent\n' +
        '};\n',
      frontmatter: {},
      scope: {},
    },
  },
  parameters: {},
}
