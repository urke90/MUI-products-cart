import { IAuthor } from '../../ts/authors';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/system/Box';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface ISelectCustomProps<T> {
    items: T[];
    onChange: (event: SelectChangeEvent<unknown>) => void;
    selectedAuthor: string;
}

const StyledLabel = styled(InputLabel)(({ theme }) => ({
    color: theme.palette.primary.main,
    fontWeight: 'bold'
}));

const StyledSelect = styled(Select)(({ theme }) => ({
    width: '100%',
    '& .MuiOutlinedInput-notchedOutline': {
        // backgroundColor: 'red',
        border: '2px solid',
        borderColor: theme.palette.primary.main
    },
    // hover over select won't change border color
    '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.primary.main
    },
    '& .MuiSelect-iconOutlined': {
        color: theme.palette.primary.main
    }
}));

// example how to style Menu Item (HOVER, SELECTED)
const StyledManuItem = styled(MenuItem)(({ theme }) => ({
    '&.Mui-selected': {
        backgroundColor: 'red',
        '&:hover': {
            backgroundColor: 'blue',
            color: 'black'
        }
    },
    '&:hover.MuiButtonBase-root': {
        color: 'red',
        backgroundColor: 'yellow'
    }
}));

const SelectCustom = <T extends IAuthor>({
    items,
    onChange,
    selectedAuthor
}: ISelectCustomProps<T>) => {
    if (items.length === 0) return null;

    console.log('items', items);

    return (
        <Box sx={{ width: '100%' }} className="SELECT______WRAPPER">
            <FormControl fullWidth>
                <StyledLabel id="select-label">Authors</StyledLabel>
                <StyledSelect
                    labelId="select-label"
                    value={selectedAuthor}
                    onChange={onChange}
                    label="Authors"
                    fullWidth
                    variant="outlined"
                >
                    <StyledManuItem value="all">All</StyledManuItem>
                    {items.length > 0
                        ? items.map(({ author, id }) => (
                              <StyledManuItem key={id} value={author}>
                                  {author}
                              </StyledManuItem>
                          ))
                        : null}
                </StyledSelect>
            </FormControl>
        </Box>
    );
};
export default SelectCustom;
