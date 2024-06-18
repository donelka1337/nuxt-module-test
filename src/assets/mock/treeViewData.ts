interface Tree {
  id: number
  name: string
  children?: Tree[]
  code?: string,
}

export default [
  {
    id: 1,
    name: 'Прицепы и полуприцепы',
    code: '310.29.10.50',
    children: [
      {
        id: 4,
        name: 'Прицепы к легковым и грузовым автомобилям',
        code: '310.29.10.51',
        children: [
          {
            id: 9,
            name: 'Фургоны',
            code: '310.29.10.52',
          },
          {
            id: 10,
            name: 'Исток',
            code: '310.29.10.53',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Прицепы массой 3,5 т - 10 т',
    code: '310.29.10.54',
    children: [
      {
        id: 5,
        name: 'Прицепы и полуприцепы тракторные',
        code: '310.29.10.55',
      },
      {
        id: 6,
        name: 'Прицепы и полуприцепы прочие',
        code: '310.29.10.56',
      },
    ],
  },
  {
    id: 3,
    name: 'Автокраны',
    code: '310.29.10.57',
    children: [
      {
        id: 7,
        name: 'Эвакуаторы',
        code: '310.29.10.58',
      },
      {
        id: 8,
        name: 'Бортовые',
        code: '310.29.10.59',
      },
    ],
  },
] as Tree[];
