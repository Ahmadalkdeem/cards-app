import { Card } from "../features/cards/cardsSlice"
import { v4 } from 'uuid';
export const meals: Card[] = [
  {
    id: v4(),
    src: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    titel: 'mostange',
    descrpion: 'The Ford Mustang is a series of American automobiles manufactured by Ford. In continuous production since 1964, the Mustang is currently the longest-produced Ford car nameplate. Currently in its sixth generation, it is the fifth-best selling Ford car nameplate.',
    kilometer: '10000',
    Enginetype: 'gasoline',
    color: 'gray',
    ownership: '1',
    manufacturing: 'aa',
    state: 'new york',
    phone: '0546107875',
    masegwhtsapp: 'hello i am '
  },
  {
    id: v4(),
    src: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnN8ZW58MHx8MHx8&w=1000&q=80',
    titel: 'mercedes amg gts',
    descrpion: 'The Mercedes-AMG GT (C190 / R190) is a grand tourer produced in coupé and roadster bodystyles by German automobile manufacturer Mercedes-AMG. The car was introduced on 9 September 2014 and was officially unveiled to the public in October 2014 at the Paris Motor Show.',
    kilometer: '00',
    Enginetype: 'gasoline',
    color: 'yallo',
    ownership: '0',
    manufacturing: '',
    state: 'klifronea',
    phone: '0546107875',
    masegwhtsapp: 'hello i am '
  },
  {
    id: v4(),
    src: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    titel: 'mostange',
    descrpion: 'The Ford Mustang is a series of American automobiles manufactured by Ford. In continuous production since 1964, the Mustang is currently the longest-produced Ford car nameplate. Currently in its sixth generation, it is the fifth-best selling Ford car nameplate.',
    kilometer: '40,000',
    Enginetype: 'gasoline',
    color: 'gray',
    ownership: '1',
    manufacturing: 'aa',
    state: 'manhten',
    phone: '0546107875',
    masegwhtsapp: 'hello i am '
  },
  {
    id: v4(),
    src: 'https://mclaren.scene7.com/is/image/mclaren/McLarenArtura-16:crop-16x9?wid=1980&hei=1114',
    titel: 'mclaren',
    descrpion: 'McLaren Racing Limited is a British motor racing team based at the McLaren Technology Centre in Woking, Surrey, England. McLaren is best known as a Formula One constructor, the second oldest active team, and the second most successful Formula One team after Ferrari, having won 183 races, 12 Drivers Championships and 8 Constructors Championships',
    kilometer: '00',
    Enginetype: 'gasoline',
    color: 'oranage',
    ownership: '1',
    manufacturing: '',
    state: 'texsas',
    phone: '0546107875',
    masegwhtsapp: 'hello i am '
  }

]