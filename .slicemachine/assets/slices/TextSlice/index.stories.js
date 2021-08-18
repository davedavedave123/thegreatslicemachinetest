import MyComponent from '../../../../slices/TextSlice';

export default {
  title: 'slices/TextSlice'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"text_slice","items":[],"primary":{"text":[{"type":"paragraph","text":"Ea qui eiusmod magna nostrud sunt fugiat exercitation.","spans":[]}]},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _TwoColumn = () => <MyComponent slice={{"variation":"twoColumn","name":"Two Column","slice_type":"text_slice","items":[],"primary":{"text":[{"type":"paragraph","text":"Veniam pariatur elit incididunt irure occaecat dolor laboris laborum labore labore Lorem incididunt. Quis ex nostrud commodo enim aliqua amet quis excepteur laborum cillum sint ex et. Fugiat ipsum voluptate duis esse in amet aliquip id occaecat.","spans":[]}]},"id":"_TwoColumn"}} />
_TwoColumn.storyName = 'Two Column'
