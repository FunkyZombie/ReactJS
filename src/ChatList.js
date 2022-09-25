import { useRef, useState, useEffect} from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


export const ChatList = () => {
  const [chatList, setChatList] = useState([
    {
      id: 2656,
      name: 'Victoria',
    },
    {
      id: 27896,
      name: 'Alex',
    },
    {
      id: 74566,
      name: 'Chris',
    },
    {
      id: 45456,
      name: 'Santa',
    }
  ]);

  return (
    <div className="chat__list">
      <List
      sx={{ width: '100%' }}
      aria-label="contacts"
      > { chatList.map((el, i) => 
          <ListItem disablePadding sx={{ bgcolor: '#a2b8b4', marginBottom: '10px' }} data-id={el.id}>
            <ListItemButton>
              <ListItemText>{el.name}</ListItemText>
              <ListItemIcon>
                <svg width={'20px'} height={'20px'}>
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"></path>
                </svg>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </div>
  );
}
