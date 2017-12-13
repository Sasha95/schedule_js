import SelectorGroup from '../component/select/SelectGroup'

export default [
  { id: 1, parent: 0, name: 'фмф', type: 'faculty' },
  { id: 2, parent: 1, name: 'препод', type: 'teach' },
  { id: 3, parent: 2, name: 'ПМиИ', type: 'kafed' },
  { id: 46, parent: 3, name: 'Коровай А.В.', type: 'teacher' },
  { id: 47, parent: 3, name: 'Калинкова Е.В.', type: 'teacher' },

  { id: 4, parent: 0, name: 'фмф', type: 'faculty' },
  { id: 5, parent: 1, name: 'препод', type: 'teach' },
  { id: 6, parent: 5, name: 'ИСиСС', type: 'kafed' },
  { id: 7, parent: 45, name: 'Ткаченко Д.В.', type: 'teacher' },
  { id: 8, parent: 44, name: 'Марков Д.А.', type: 'teacher' }
]
