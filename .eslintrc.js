module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: ['airbnb', 'airbnb/rules/react', 'airbnb/hooks'],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['import', 'react'],
  settings: {
    // alias
    'import/resolver': { node: { paths: ['src'] } },
  },
  rules: {
    semi: [2, 'never'], // 禁止結尾分號
    quotes: [2, 'single'], // 使用單引號
    'comma-dangle': [2, 'always-multiline'], // 換行物件最後一行結尾逗點
    'no-unused-vars': 1, // 為使用參數警告
    'no-param-reassign': [1, { props: false }], // props 不提示錯誤
    'object-curly-newline': [2, { multiline: true }], // 物件換行
    'object-property-newline': 2, // 物件換行
    'array-bracket-newline': ['error', { multiline: true }], // 物件換行
    'max-len': 0, // 不限制文字最大長度

    'react/require-default-props': 0, // 不用defaultProps給預設值
    'react/jsx-key': [1, { checkFragmentShorthand: true }], // jsx內 array 要有key
    'react/prop-types': [1, { ignore: ['children', 'className', 'match'] }], // ignore children prop
    'react/react-in-jsx-scope': 0, // jsx中必須引入'react'
    'react/jsx-uses-react': 0, // 避免在使用`no-unused-vars`時，會將引入的react標記為未使用
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }], // 規範能夠包含哪些filename extension
    'react/jsx-max-props-per-line': [
      1, {
        maximum: {
          single: 3,
          multi: 1,
        },
      },
    ], // 限制單行最多props數量
    'react/jsx-newline': [1, { prevent: true }], // if ture, 避免與JSX和expression臨接的空行
    'linebreak-style': ['off', 'windows'],
    // 停用a11y設定
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/alt-text': 0, // 限制所有元素都需要替代文字 (`<img>`, `<area>`, `<input type="image">`, `<object>`)

    'import/no-extraneous-dependencies': [1, { devDependencies: ['./*.js'] }], // 讓設定檔引入 dev依賴 不會噴錯
  },
}
