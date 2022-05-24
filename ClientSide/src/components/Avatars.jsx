import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Chip from '@mui/material/Chip';
import AuthContext from "../context/AuthContext";
export default function LetterAvatars() {
    const {auth} = React.useContext(AuthContext);
  return (
    <Stack direction="row" spacing={2}> 
      <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar> <Chip label={auth.email} variant="outlined"  />
    </Stack>
  );
}
