import React from 'react';
import PropTypes from 'prop-types';

import {
  Stack,
  colors,
  IconButton,
  ListItemText,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import FaceIcon from '@mui/icons-material/Face';

const style = {
  boxShadow: 1,
  borderRadius: 2,
  border: '1px solid lightgray',
  p: 2,
  minWidth: 350,
  maxWidth: 500,
  alignItems: 'center',
  padding: 0,
};

const ContactList = ({ contacts, onDelete }) => {
  return (
    <Stack direction="column" justifyContent="flex-start" alignItems="center">
      <List sx={style} aria-label="contacts">
        {contacts.map(({ name, number, id }) => {
          return (
            <ListItem
              key={id}
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => onDelete(id)}
                  color="error"
                >
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar size="small" sx={{ bgcolor: colors.green[500] }}>
                  <FaceIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={name} secondary={number} />
            </ListItem>
          );
        })}
      </List>
    </Stack>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
