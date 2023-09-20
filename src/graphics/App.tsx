// import * as React from "react";
import { Autocomplete, TextField } from "@mui/material";

// type Props = {
//   text: string
//   url: string
// }

const characterIcon = [
  { label: 'マリオ', value: 'mario' },
  { label: 'ルイージ', value: 'luigi' },
  { label: 'ワリオ', value: 'wario' },
  { label: 'ワルイージ', value: 'waluigi' },
  { label: 'ピーチ', value: 'peach' },
  { label: 'デイジー', value: 'daisy' },
  { label: 'ベビィマリオ', value: 'babymario' },
  { label: 'キノピオ', value: 'toad' },
  { label: 'ヨッシー', value: 'yoshi' },
  { label: 'キャサリン', value: 'birdo' },
  { label: 'ドンキーコング', value: 'dk' },
  { label: 'クッパ', value: 'bowser' },
  { label: 'パタパタ', value: 'paratroopa' },
  { label: 'テレサ', value: 'boo' },
  { label: 'ドンキーコングJr.', value: 'dkjr' },
  { label: 'ヘイホー', value: 'shyguy' }
]

function App() {
  return (
    <>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={characterIcon}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Character" />}
      />
    </>
  )
}

export default App
