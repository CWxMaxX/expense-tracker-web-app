import React from 'react';
import { styled } from '@mui/system';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const StyledFab = styled(Fab)(({ theme }) => ({
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
}));

const FloatingActionButton: React.FC = () => {
    return (
        <StyledFab onClick={()=>{window.location.assign('/create-edit-tran')}} color="primary" aria-label="add">
            <AddIcon />
        </StyledFab>
    );
};

export default FloatingActionButton;
