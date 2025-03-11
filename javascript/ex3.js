'hello'
// Output: 'hello'
'some'+'text'
// Output: 'sometext'
'some'+ 'more'+ 'text'
// Output: 'somemoretext'
typeof(2)
// Output: 'number'
typeof('hello')
// Output: 'string'
'hello' + 3
// Output: 'hello3'// type coercion
'$' +(20.95 + 7.99)
// Output: '$28.94'
'$' + (2095 + 799) / 100
// Output: '$28.94'

'Items('+(1+1)+'): $' +(2095 + 799) / 100
// Output: 'Items(2): $28.94'
alert('Items('+(1+1)+'): $' +(2095 + 799) / 100);
// Output: alert box with 'Items(2): $28.94'
'I\'m a JavaScript programmer'
// Output: 'I'm a JavaScript programmer' "escape character (\' , \" , \n)"
`hello` // (template STRINGS)
// Output: 'hello'
`items (${1+1}): $${(2095 + 799) / 100}`
// Output: 'items (2): $28.94'

