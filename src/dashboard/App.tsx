import { Buttons } from "../components/button";
import { SwapButtons } from "../components/swapButton";
import { TextBox } from "../components/textBox";
import { CharacterSelects } from "../components/characterSelect";
import { Counter } from "../components/counter";
import { MatchOfNunber } from "../components/setSelect";
import { RoundSelect } from "../components/roundSelect";
import { Stack } from "@mui/material";

// const characterIcon = [
//   { label: 'マリオ', value: 'mario' },
//   { label: 'ルイージ', value: 'luigi' },
//   { label: 'ワリオ', value: 'wario' },
//   { label: 'ワルイージ', value: 'waluigi' },
//   { label: 'ピーチ', value: 'peach' },
//   { label: 'デイジー', value: 'daisy' },
//   { label: 'ベビィマリオ', value: 'babymario' },
//   { label: 'キノピオ', value: 'toad' },
//   { label: 'ヨッシー', value: 'yoshi' },
//   { label: 'キャサリン', value: 'birdo' },
//   { label: 'ドンキーコング', value: 'dk' },
//   { label: 'クッパ', value: 'bowser' },
//   { label: 'パタパタ', value: 'paratroopa' },
//   { label: 'テレサ', value: 'boo' },
//   { label: 'ドンキーコングJr.', value: 'dkjr' },
//   { label: 'ヘイホー', value: 'shyguy' }
// ]

function App() {
  return (
    <>
      <Stack spacing={2}>
        <CharacterSelects id="characterSelect1P" label="1P Character"/>
        <TextBox id="player1P" label="Player1P" />
        <Counter />
      </Stack>
      <MatchOfNunber />
      <RoundSelect />
      <Buttons variant="contained" text="submit" color="primary"/>
      <Buttons variant="outlined" text="reset" color="error"/>
      <SwapButtons />
    </>
  )
}

export default App
