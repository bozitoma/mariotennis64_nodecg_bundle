import { useEffect, useState } from 'react';

export function Startgg() {
  const [datas, setDatas] = useState('');

  useEffect(() => {
    fetch('https://api.sssapi.app/ewKDmNOVfQv9i37LJrJqW')
      .then((res) => res.json())
      .then((datas) => setDatas(datas[8]));
  }, []);
  console.log(datas);

  // const poke = datas;

  return <div>{/* <img src={poke} alt="" /> */}</div>;
}

// 参考 https://qiita.com/sin164/items/2addcf88dda4844d5219
// import { useEffect, useState } from 'react';

// export function Startgg() {
//   const [datas, setDatas] = useState([]);

//   const CsvDic: any = (props: [any, ...any[]]) => {
//     const [header, ...rows] = props;
//     return rows.map((row: any[]) =>
//       row.reduce((acc: any, cell: any, i: string | number) => ({ ...acc, [header[i]]: cell }), {})
//     );
//   };

//   interface pokemon {
//     name: string;
//     type1: string;
//     type2: string;
//     image: string;
//     no: number;
//   }

//   useEffect(() => {
//     fetch(
//       'https://sheets.googleapis.com/v4/spreadsheets/1KVg7K6gH4QKx0tDBt7erYanc3ZjbNwvSkopoFybXDPE/values/pokedex?key=AIzaSyDDds7LWxpwDzKKMzMs54m4pr1xryX6N1s'
//     )
//       .then((res) => res.json())
//       .then((datas) => setDatas(CsvDic(datas.values)));
//   }, []);

//   // interface pokeList{
//   //   name: string
//   // }

//   const Poke = datas[10] as pokemon;

//   console.log(Poke);

//   return (
//     <div style={{ color: 'black' }}>
//       {/* {!datas || datas.length === 0 ? <div>loading</div> : <div>{datas[1000]}</div>} */}
//     </div>
//   );
// }
