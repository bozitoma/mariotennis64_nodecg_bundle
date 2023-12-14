// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Divider from '@mui/material/Divider';
// import Paper from '@mui/material/Paper';
// import ToggleButton from '@mui/material/ToggleButton';
// import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
// import InputLabel from '@mui/material/InputLabel';
// import FormControl from '@mui/material/FormControl';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import ListSubheader from '@mui/material/ListSubheader';
// import Switch from '@mui/material/Switch';
// import Avatar from '@mui/material/Avatar';
// import BluetoothIcon from '@mui/icons-material/Bluetooth';
// import Badge from '@mui/material/Badge';

// const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
//   '& .MuiToggleButtonGroup-grouped': {
//     margin: theme.spacing(0.5),
//     border: 0,
//     '&.Mui-disabled': {
//       border: 0,
//     },
//     '&:not(:first-of-type)': {
//       borderRadius: theme.shape.borderRadius,
//     },
//     '&:first-of-type': {
//       borderRadius: theme.shape.borderRadius,
//     },
//   },
// }));

// export default function CustomizedDividers() {
//   const [alignment, setAlignment] = React.useState('left');
//   const [formats, setFormats] = React.useState(() => ['italic']);

//   const [age, setAge] = React.useState('');

//   const handleChange = (event: SelectChangeEvent) => {
//     setAge(event.target.value);
//   };

//   const [checked, setChecked] = React.useState(['wifi']);

//   const handleToggle = (value: string) => () => {
//     const currentIndex = checked.indexOf(value);
//     const newChecked = [...checked];

//     if (currentIndex === -1) {
//       newChecked.push(value);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }

//     setChecked(newChecked);
//   };

//   const handleFormat = (event: React.MouseEvent<HTMLElement>, newFormats: string[]) => {
//     setFormats(newFormats);
//   };

//   const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
//     if (newAlignment !== null) {
//       setAlignment(newAlignment);
//     }
//   };

//   const SmallAvatar = styled(Avatar)(({ theme }) => ({
//     width: 16,
//     height: 16,
//   }));

//   return (
//     <List
//       sx={{ width: '100%', maxWidth: 800, bgcolor: 'grey.100' }}
//       subheader={<ListSubheader>Settings</ListSubheader>}
//     >
//       <ListItem>
//         <ListItemIcon>
//           <Badge
//             color="success"
//             variant="dot"
//             anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
//           >
//             <Badge
//               overlap="circular"
//               anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
//               badgeContent={
//                 <SmallAvatar
//                   alt="Remy Sharp"
//                   src="https://resource.pokemon-home.com/battledata/img/item/item_0275.png"
//                 />
//               }
//             >
//               <Badge
//                 overlap="circular"
//                 anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
//                 badgeContent={
//                   <SmallAvatar
//                     alt="Remy Sharp"
//                     src="https://resource.pokemon-home.com/battledata/img/terastal/icon_terastal_type_water.png"
//                   />
//                 }
//               >
//                 <Avatar
//                   alt="Travis Howard"
//                   src="https://resource.pokemon-home.com/battledata/img/pokei128/icon0892_f01_s0.png"
//                 />
//               </Badge>
//             </Badge>
//           </Badge>
//         </ListItemIcon>
//         <ListItemText id="switch-list-label-wifi" primary="ウーラオス（れんげきのかた）" />
//         <Paper
//           elevation={0}
//           sx={{
//             display: 'flex',
//             border: (theme) => `1px solid ${theme.palette.divider}`,
//             flexWrap: 'wrap',
//           }}
//         >
//           <StyledToggleButtonGroup
//             size="small"
//             value={alignment}
//             exclusive
//             onChange={handleAlignment}
//             aria-label="text alignment"
//           >
//             <ToggleButton value="left" aria-label="left aligned">
//               <img
//                 className="icon character1p"
//                 width="34"
//                 height="34"
//                 src="https://sg.portal-pokemon.com/play/resources/pokedex/img/icon_ball.png"
//                 alt=""
//               />
//             </ToggleButton>
//             <ToggleButton value="center" aria-label="centered">
//               <img
//                 className="icon character1p"
//                 width="34"
//                 height="34"
//                 src="https://sg.portal-pokemon.com/play/resources/pokedex/img/icon_ball.png"
//                 alt=""
//               />
//             </ToggleButton>
//             <ToggleButton value="right" aria-label="right aligned">
//               <img
//                 className="icon character1p"
//                 width="34"
//                 height="34"
//                 src="https://sg.portal-pokemon.com/play/resources/pokedex/img/icon_ball.png"
//                 alt=""
//               />
//             </ToggleButton>
//           </StyledToggleButtonGroup>
//           <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
//           <StyledToggleButtonGroup
//             size="small"
//             value={formats}
//             onChange={handleFormat}
//             aria-label="text formatting"
//             color="primary"
//           >
//             <ToggleButton value="bold" aria-label="bold">
//               <img
//                 className="icon character1p"
//                 width="34"
//                 height="34"
//                 src="https://resource.pokemon-home.com/battledata/img/terastal/icon_terastal_01.png"
//                 alt=""
//               />
//             </ToggleButton>
//           </StyledToggleButtonGroup>
//           <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//             <InputLabel id="demo-simple-select-standard-label">状態異常</InputLabel>
//             <Select
//               labelId="demo-simple-select-standard-label"
//               id="demo-simple-select-standard"
//               value={age}
//               onChange={handleChange}
//               label="状態異常"
//             >
//               <MenuItem value="">
//                 <em>なし</em>
//               </MenuItem>
//               <MenuItem value={20}>どく</MenuItem>
//               <MenuItem value={30}>ねむり</MenuItem>
//               <MenuItem value={40}>やけど</MenuItem>
//               <MenuItem value={50}>まひ</MenuItem>
//               <MenuItem value={60}>こおり</MenuItem>
//             </Select>
//           </FormControl>
//         </Paper>
//       </ListItem>
//       <Divider />
//       <ListItem>
//         <ListItemIcon>
//           <Badge
//             color="success"
//             variant="dot"
//             anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
//           >
//             <Badge
//               overlap="circular"
//               anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
//               badgeContent={
//                 <SmallAvatar
//                   alt="Remy Sharp"
//                   src="https://resource.pokemon-home.com/battledata/img/item/item_0275.png"
//                 />
//               }
//             >
//               <Badge
//                 overlap="circular"
//                 anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
//                 badgeContent={
//                   <SmallAvatar
//                     alt="Remy Sharp"
//                     src="https://resource.pokemon-home.com/battledata/img/terastal/icon_terastal_type_water.png"
//                   />
//                 }
//               >
//                 <Avatar
//                   alt="Travis Howard"
//                   src="https://resource.pokemon-home.com/battledata/img/pokei128/icon0892_f01_s0.png"
//                 />
//               </Badge>
//             </Badge>
//           </Badge>
//         </ListItemIcon>
//         <ListItemText id="switch-list-label-wifi" primary="ウーラオス（れんげきのかた）" />
//         <Paper
//           elevation={0}
//           sx={{
//             display: 'flex',
//             border: (theme) => `1px solid ${theme.palette.divider}`,
//             flexWrap: 'wrap',
//           }}
//         >
//           <StyledToggleButtonGroup
//             size="small"
//             value={alignment}
//             exclusive
//             onChange={handleAlignment}
//             aria-label="text alignment"
//           >
//             <ToggleButton value="left" aria-label="left aligned">
//               <img
//                 className="icon character1p"
//                 width="34"
//                 height="34"
//                 src="https://sg.portal-pokemon.com/play/resources/pokedex/img/icon_ball.png"
//                 alt=""
//               />
//             </ToggleButton>
//             <ToggleButton value="center" aria-label="centered">
//               <img
//                 className="icon character1p"
//                 width="34"
//                 height="34"
//                 src="https://sg.portal-pokemon.com/play/resources/pokedex/img/icon_ball.png"
//                 alt=""
//               />
//             </ToggleButton>
//             <ToggleButton value="right" aria-label="right aligned">
//               <img
//                 className="icon character1p"
//                 width="34"
//                 height="34"
//                 src="https://sg.portal-pokemon.com/play/resources/pokedex/img/icon_ball.png"
//                 alt=""
//               />
//             </ToggleButton>
//           </StyledToggleButtonGroup>
//           <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
//           <StyledToggleButtonGroup
//             size="small"
//             value={formats}
//             onChange={handleFormat}
//             aria-label="text formatting"
//             color="primary"
//           >
//             <ToggleButton value="bold" aria-label="bold">
//               <img
//                 className="icon character1p"
//                 width="34"
//                 height="34"
//                 src="https://resource.pokemon-home.com/battledata/img/terastal/icon_terastal_01.png"
//                 alt=""
//               />
//             </ToggleButton>
//           </StyledToggleButtonGroup>
//           <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//             <InputLabel id="demo-simple-select-standard-label">状態異常</InputLabel>
//             <Select
//               labelId="demo-simple-select-standard-label"
//               id="demo-simple-select-standard"
//               value={age}
//               onChange={handleChange}
//               label="状態異常"
//             >
//               <MenuItem value="">
//                 <em>なし</em>
//               </MenuItem>
//               <MenuItem value={20}>どく</MenuItem>
//               <MenuItem value={30}>ねむり</MenuItem>
//               <MenuItem value={40}>やけど</MenuItem>
//               <MenuItem value={50}>まひ</MenuItem>
//               <MenuItem value={60}>こおり</MenuItem>
//             </Select>
//           </FormControl>
//         </Paper>
//       </ListItem>
//       <Divider />
//       <ListItem>
//         <ListItemIcon>
//           <Badge
//             color="success"
//             variant="dot"
//             anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
//           >
//             <Badge
//               overlap="circular"
//               anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
//               badgeContent={
//                 <SmallAvatar
//                   alt="Remy Sharp"
//                   src="https://resource.pokemon-home.com/battledata/img/item/item_0275.png"
//                 />
//               }
//             >
//               <Badge
//                 overlap="circular"
//                 anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
//                 badgeContent={
//                   <SmallAvatar
//                     alt="Remy Sharp"
//                     src="https://resource.pokemon-home.com/battledata/img/terastal/icon_terastal_type_water.png"
//                   />
//                 }
//               >
//                 <Avatar
//                   alt="Travis Howard"
//                   src="https://resource.pokemon-home.com/battledata/img/pokei128/icon0892_f01_s0.png"
//                 />
//               </Badge>
//             </Badge>
//           </Badge>
//         </ListItemIcon>
//         <ListItemText id="switch-list-label-wifi" primary="ウーラオス（れんげきのかた）" />
//         <Paper
//           elevation={0}
//           sx={{
//             display: 'flex',
//             border: (theme) => `1px solid ${theme.palette.divider}`,
//             flexWrap: 'wrap',
//           }}
//         >
//           <StyledToggleButtonGroup
//             size="small"
//             value={alignment}
//             exclusive
//             onChange={handleAlignment}
//             aria-label="text alignment"
//           >
//             <ToggleButton value="left" aria-label="left aligned">
//               <img
//                 className="icon character1p"
//                 width="34"
//                 height="34"
//                 src="https://sg.portal-pokemon.com/play/resources/pokedex/img/icon_ball.png"
//                 alt=""
//               />
//             </ToggleButton>
//             <ToggleButton value="center" aria-label="centered">
//               <img
//                 className="icon character1p"
//                 width="34"
//                 height="34"
//                 src="https://sg.portal-pokemon.com/play/resources/pokedex/img/icon_ball.png"
//                 alt=""
//               />
//             </ToggleButton>
//             <ToggleButton value="right" aria-label="right aligned">
//               <img
//                 className="icon character1p"
//                 width="34"
//                 height="34"
//                 src="https://sg.portal-pokemon.com/play/resources/pokedex/img/icon_ball.png"
//                 alt=""
//               />
//             </ToggleButton>
//           </StyledToggleButtonGroup>
//           <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
//           <StyledToggleButtonGroup
//             size="small"
//             value={formats}
//             onChange={handleFormat}
//             aria-label="text formatting"
//             color="primary"
//           >
//             <ToggleButton value="bold" aria-label="bold">
//               <img
//                 className="icon character1p"
//                 width="34"
//                 height="34"
//                 src="https://resource.pokemon-home.com/battledata/img/terastal/icon_terastal_01.png"
//                 alt=""
//               />
//             </ToggleButton>
//           </StyledToggleButtonGroup>
//           <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//             <InputLabel id="demo-simple-select-standard-label">状態異常</InputLabel>
//             <Select
//               labelId="demo-simple-select-standard-label"
//               id="demo-simple-select-standard"
//               value={age}
//               onChange={handleChange}
//               label="状態異常"
//             >
//               <MenuItem value="">
//                 <em>なし</em>
//               </MenuItem>
//               <MenuItem value={20}>どく</MenuItem>
//               <MenuItem value={30}>ねむり</MenuItem>
//               <MenuItem value={40}>やけど</MenuItem>
//               <MenuItem value={50}>まひ</MenuItem>
//               <MenuItem value={60}>こおり</MenuItem>
//             </Select>
//           </FormControl>
//         </Paper>
//       </ListItem>
//       <Divider />
//       <ListItem>
//         <ListItemIcon>
//           <Badge
//             color="success"
//             variant="dot"
//             anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
//           >
//             <Badge
//               overlap="circular"
//               anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
//               badgeContent={
//                 <SmallAvatar
//                   alt="Remy Sharp"
//                   src="https://resource.pokemon-home.com/battledata/img/item/item_0275.png"
//                 />
//               }
//             >
//               <Badge
//                 overlap="circular"
//                 anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
//                 badgeContent={
//                   <SmallAvatar
//                     alt="Remy Sharp"
//                     src="https://resource.pokemon-home.com/battledata/img/terastal/icon_terastal_type_water.png"
//                   />
//                 }
//               >
//                 <Avatar
//                   alt="Travis Howard"
//                   src="https://resource.pokemon-home.com/battledata/img/pokei128/icon0892_f01_s0.png"
//                 />
//               </Badge>
//             </Badge>
//           </Badge>
//         </ListItemIcon>
//         <ListItemText id="switch-list-label-wifi" primary="ウーラオス（れんげきのかた）" />
//         <Paper
//           elevation={0}
//           sx={{
//             display: 'flex',
//             border: (theme) => `1px solid ${theme.palette.divider}`,
//             flexWrap: 'wrap',
//           }}
//         >
//           <StyledToggleButtonGroup
//             size="small"
//             value={alignment}
//             exclusive
//             onChange={handleAlignment}
//             aria-label="text alignment"
//           >
//             <ToggleButton value="left" aria-label="left aligned">
//               <img
//                 className="icon character1p"
//                 width="34"
//                 height="34"
//                 src="https://sg.portal-pokemon.com/play/resources/pokedex/img/icon_ball.png"
//                 alt=""
//               />
//             </ToggleButton>
//             <ToggleButton value="center" aria-label="centered">
//               <img
//                 className="icon character1p"
//                 width="34"
//                 height="34"
//                 src="https://sg.portal-pokemon.com/play/resources/pokedex/img/icon_ball.png"
//                 alt=""
//               />
//             </ToggleButton>
//             <ToggleButton value="right" aria-label="right aligned">
//               <img
//                 className="icon character1p"
//                 width="34"
//                 height="34"
//                 src="https://sg.portal-pokemon.com/play/resources/pokedex/img/icon_ball.png"
//                 alt=""
//               />
//             </ToggleButton>
//           </StyledToggleButtonGroup>
//           <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
//           <StyledToggleButtonGroup
//             size="small"
//             value={formats}
//             onChange={handleFormat}
//             aria-label="text formatting"
//             color="primary"
//           >
//             <ToggleButton value="bold" aria-label="bold">
//               <img
//                 className="icon character1p"
//                 width="34"
//                 height="34"
//                 src="https://resource.pokemon-home.com/battledata/img/terastal/icon_terastal_01.png"
//                 alt=""
//               />
//             </ToggleButton>
//           </StyledToggleButtonGroup>
//           <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//             <InputLabel id="demo-simple-select-standard-label">状態異常</InputLabel>
//             <Select
//               labelId="demo-simple-select-standard-label"
//               id="demo-simple-select-standard"
//               value={age}
//               onChange={handleChange}
//               label="状態異常"
//             >
//               <MenuItem value="">
//                 <em>なし</em>
//               </MenuItem>
//               <MenuItem value={20}>どく</MenuItem>
//               <MenuItem value={30}>ねむり</MenuItem>
//               <MenuItem value={40}>やけど</MenuItem>
//               <MenuItem value={50}>まひ</MenuItem>
//               <MenuItem value={60}>こおり</MenuItem>
//             </Select>
//           </FormControl>
//         </Paper>
//       </ListItem>
//       <Divider />
//       <ListItem>
//         <ListItemIcon>
//           <Badge
//             color="success"
//             variant="dot"
//             anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
//           >
//             <Badge
//               overlap="circular"
//               anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
//               badgeContent={
//                 <SmallAvatar
//                   alt="Remy Sharp"
//                   src="https://resource.pokemon-home.com/battledata/img/item/item_0275.png"
//                 />
//               }
//             >
//               <Badge
//                 overlap="circular"
//                 anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
//                 badgeContent={
//                   <SmallAvatar
//                     alt="Remy Sharp"
//                     src="https://resource.pokemon-home.com/battledata/img/terastal/icon_terastal_type_water.png"
//                   />
//                 }
//               >
//                 <Avatar
//                   alt="Travis Howard"
//                   src="https://resource.pokemon-home.com/battledata/img/pokei128/icon0892_f01_s0.png"
//                 />
//               </Badge>
//             </Badge>
//           </Badge>
//         </ListItemIcon>
//         <ListItemText id="switch-list-label-wifi" primary="ウーラオス（れんげきのかた）" />
//         <Paper
//           elevation={0}
//           sx={{
//             display: 'flex',
//             border: (theme) => `1px solid ${theme.palette.divider}`,
//             flexWrap: 'wrap',
//           }}
//         >
//           <StyledToggleButtonGroup
//             size="small"
//             value={alignment}
//             exclusive
//             onChange={handleAlignment}
//             aria-label="text alignment"
//           >
//             <ToggleButton value="left" aria-label="left aligned">
//               <img
//                 className="icon character1p"
//                 width="34"
//                 height="34"
//                 src="https://sg.portal-pokemon.com/play/resources/pokedex/img/icon_ball.png"
//                 alt=""
//               />
//             </ToggleButton>
//             <ToggleButton value="center" aria-label="centered">
//               <img
//                 className="icon character1p"
//                 width="34"
//                 height="34"
//                 src="https://sg.portal-pokemon.com/play/resources/pokedex/img/icon_ball.png"
//                 alt=""
//               />
//             </ToggleButton>
//             <ToggleButton value="right" aria-label="right aligned">
//               <img
//                 className="icon character1p"
//                 width="34"
//                 height="34"
//                 src="https://sg.portal-pokemon.com/play/resources/pokedex/img/icon_ball.png"
//                 alt=""
//               />
//             </ToggleButton>
//           </StyledToggleButtonGroup>
//           <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
//           <StyledToggleButtonGroup
//             size="small"
//             value={formats}
//             onChange={handleFormat}
//             aria-label="text formatting"
//             color="primary"
//           >
//             <ToggleButton value="bold" aria-label="bold">
//               <img
//                 className="icon character1p"
//                 width="34"
//                 height="34"
//                 src="https://resource.pokemon-home.com/battledata/img/terastal/icon_terastal_01.png"
//                 alt=""
//               />
//             </ToggleButton>
//           </StyledToggleButtonGroup>
//           <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//             <InputLabel id="demo-simple-select-standard-label">状態異常</InputLabel>
//             <Select
//               labelId="demo-simple-select-standard-label"
//               id="demo-simple-select-standard"
//               value={age}
//               onChange={handleChange}
//               label="状態異常"
//             >
//               <MenuItem value="">
//                 <em>なし</em>
//               </MenuItem>
//               <MenuItem value={20}>どく</MenuItem>
//               <MenuItem value={30}>ねむり</MenuItem>
//               <MenuItem value={40}>やけど</MenuItem>
//               <MenuItem value={50}>まひ</MenuItem>
//               <MenuItem value={60}>こおり</MenuItem>
//             </Select>
//           </FormControl>
//         </Paper>
//       </ListItem>
//       <Divider />
//       <ListItem>
//         <ListItemIcon>
//           <Badge
//             color="success"
//             variant="dot"
//             anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
//           >
//             <Badge
//               overlap="circular"
//               anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
//               badgeContent={
//                 <SmallAvatar
//                   alt="Remy Sharp"
//                   src="https://resource.pokemon-home.com/battledata/img/item/item_0275.png"
//                 />
//               }
//             >
//               <Badge
//                 overlap="circular"
//                 anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
//                 badgeContent={
//                   <SmallAvatar
//                     alt="Remy Sharp"
//                     src="https://resource.pokemon-home.com/battledata/img/terastal/icon_terastal_type_water.png"
//                   />
//                 }
//               >
//                 <Avatar
//                   alt="Travis Howard"
//                   src="https://resource.pokemon-home.com/battledata/img/pokei128/icon0892_f01_s0.png"
//                 />
//               </Badge>
//             </Badge>
//           </Badge>
//         </ListItemIcon>
//         <ListItemText id="switch-list-label-wifi" primary="ウーラオス（れんげきのかた）" />
//         <Paper
//           elevation={0}
//           sx={{
//             display: 'flex',
//             border: (theme) => `1px solid ${theme.palette.divider}`,
//             flexWrap: 'wrap',
//           }}
//         >
//           <StyledToggleButtonGroup
//             size="small"
//             value={alignment}
//             exclusive
//             onChange={handleAlignment}
//             aria-label="text alignment"
//           >
//             <ToggleButton value="left" aria-label="left aligned">
//               <img
//                 className="icon character1p"
//                 width="34"
//                 height="34"
//                 src="https://sg.portal-pokemon.com/play/resources/pokedex/img/icon_ball.png"
//                 alt=""
//               />
//             </ToggleButton>
//             <ToggleButton value="center" aria-label="centered">
//               <img
//                 className="icon character1p"
//                 width="34"
//                 height="34"
//                 src="https://sg.portal-pokemon.com/play/resources/pokedex/img/icon_ball.png"
//                 alt=""
//               />
//             </ToggleButton>
//             <ToggleButton value="right" aria-label="right aligned">
//               <img
//                 className="icon character1p"
//                 width="34"
//                 height="34"
//                 src="https://sg.portal-pokemon.com/play/resources/pokedex/img/icon_ball.png"
//                 alt=""
//               />
//             </ToggleButton>
//           </StyledToggleButtonGroup>
//           <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
//           <StyledToggleButtonGroup
//             size="small"
//             value={formats}
//             onChange={handleFormat}
//             aria-label="text formatting"
//             color="primary"
//           >
//             <ToggleButton value="bold" aria-label="bold">
//               <img
//                 className="icon character1p"
//                 width="34"
//                 height="34"
//                 src="https://resource.pokemon-home.com/battledata/img/terastal/icon_terastal_01.png"
//                 alt=""
//               />
//             </ToggleButton>
//           </StyledToggleButtonGroup>
//           <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//             <InputLabel id="demo-simple-select-standard-label">状態異常</InputLabel>
//             <Select
//               labelId="demo-simple-select-standard-label"
//               id="demo-simple-select-standard"
//               value={age}
//               onChange={handleChange}
//               label="状態異常"
//             >
//               <MenuItem value="">
//                 <em>なし</em>
//               </MenuItem>
//               <MenuItem value={20}>どく</MenuItem>
//               <MenuItem value={30}>ねむり</MenuItem>
//               <MenuItem value={40}>やけど</MenuItem>
//               <MenuItem value={50}>まひ</MenuItem>
//               <MenuItem value={60}>こおり</MenuItem>
//             </Select>
//           </FormControl>
//         </Paper>
//       </ListItem>
//     </List>
//   );
// }
