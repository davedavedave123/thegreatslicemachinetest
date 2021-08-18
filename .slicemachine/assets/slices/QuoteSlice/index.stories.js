import MyComponent from '../../../../slices/QuoteSlice';

export default {
  title: 'slices/QuoteSlice'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"quote_slice","items":[],"primary":{"quotetext":[{"type":"paragraph","text":"Commodo adipisicing do officia est eiusmod voluptate dolor et sint proident velit dolor.","spans":[]}]},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _QuoteReference = () => <MyComponent slice={{"variation":"quoteReference","name":"Quote Reference","slice_type":"quote_slice","items":[],"primary":{"quotetext":[{"type":"paragraph","text":"Do enim sunt enim ea sit. Nisi esse commodo sint. Voluptate cupidatat irure deserunt consequat nostrud nisi tempor officia sunt laborum eu veniam consectetur fugiat.","spans":[]}],"reference":[{"type":"paragraph","text":"Id eu ut voluptate amet officia sint proident est do consectetur sit. Qui reprehenderit Lorem irure laboris veniam non dolore nisi cillum tempor tempor anim minim duis. Fugiat do ea minim pariatur qui eu.","spans":[]}]},"id":"_QuoteReference"}} />
_QuoteReference.storyName = 'Quote Reference'
